import { unstable_cache } from 'next/cache'
import { sql } from '@/lib/db'
import { isValidSlug } from '@/lib/markdown'

export interface PostFrontmatter {
  title: string
  description?: string
  date?: string
  locale?: string
  image?: string
  imageAlt?: string
  author?: string
  model?: string
  conversation?: string
}

export interface Post extends PostFrontmatter {
  slug: string
  content: string
}

interface PostRow {
  slug: string
  title: string
  description: string | null
  date: string | null
  locale: string | null
  image: string | null
  image_alt: string | null
  author: string | null
  model: string | null
  conversation: string | null
  content: string
}

function rowToPost(row: PostRow): Post {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description ?? undefined,
    date: row.date ?? undefined,
    locale: row.locale ?? undefined,
    image: row.image ?? undefined,
    imageAlt: row.image_alt ?? undefined,
    author: row.author ?? undefined,
    model: row.model ?? undefined,
    conversation: row.conversation ?? undefined,
    content: row.content,
  }
}

async function fetchPost(slug: string): Promise<Post | null> {
  if (!isValidSlug(slug)) return null

  const rows = (await sql`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1`) as PostRow[]
  if (rows.length === 0) return null

  return rowToPost(rows[0])
}

// The Neon driver queries over fetch with `no-store`, which opts every route
// that touches it out of caching entirely. Wrapping the queries is what makes
// the pages' `revalidate` actually bite: one database round-trip per minute
// per post instead of one per request, which matters when a crawler walks the
// whole sitemap.
const CACHE_SECONDS = 60

export const getPost = unstable_cache(fetchPost, ['post'], {
  revalidate: CACHE_SECONDS,
  tags: ['posts'],
})

// Frontmatter locales are OpenGraph-style ("fr_FR", "en_US"); Intl wants BCP 47.
// e.g. "Mardi 25 août 2025" (fr_FR) or "Thursday, September 4, 2026" (en_US)
export function formatPostDate(date: string, locale?: string): string {
  const tag = (locale ?? 'fr_FR').replace('_', '-')

  const formatted = new Intl.DateTimeFormat(tag, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))

  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

export interface PostSummary {
  slug: string
  title: string
  description?: string
  date?: string
  locale?: string
  author?: string
  createdAt: string
}

type PostSummaryRow = Pick<
  PostRow,
  'slug' | 'title' | 'description' | 'date' | 'locale' | 'author'
> & {
  created_at: string
}

/**
 * Every post, newest first. Feeds /posts, the sitemap, the feed and the
 * llms.txt index — nothing in the site chrome links to every post, so these
 * listings are how a crawler finds them all.
 */
async function fetchPostSummaries(): Promise<PostSummary[]> {
  const rows = (await sql`
    SELECT slug, title, description, date, locale, author, created_at
    FROM posts
    ORDER BY COALESCE(date, created_at::text) DESC
  `) as PostSummaryRow[]

  return rows.map(row => ({
    slug: row.slug,
    title: row.title,
    description: row.description ?? undefined,
    date: row.date ?? undefined,
    locale: row.locale ?? undefined,
    author: row.author ?? undefined,
    createdAt: row.created_at,
  }))
}

export const getPostSummaries = unstable_cache(fetchPostSummaries, ['post-summaries'], {
  revalidate: CACHE_SECONDS,
  tags: ['posts'],
})

/** Every post with its body, newest first — for the full-text bundles. */
async function fetchPosts(): Promise<Post[]> {
  const rows = (await sql`
    SELECT * FROM posts ORDER BY COALESCE(date, created_at::text) DESC
  `) as PostRow[]

  return rows.map(rowToPost)
}

export const getPosts = unstable_cache(fetchPosts, ['posts'], {
  revalidate: CACHE_SECONDS,
  tags: ['posts'],
})
