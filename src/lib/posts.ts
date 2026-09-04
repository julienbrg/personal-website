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

export async function getPost(slug: string): Promise<Post | null> {
  if (!isValidSlug(slug)) return null

  const rows = (await sql`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1`) as PostRow[]
  if (rows.length === 0) return null

  return rowToPost(rows[0])
}

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
  date?: string
  createdAt: string
}

/** Every post, newest first — the sitemap is the only index the site has. */
export async function getPostSummaries(): Promise<PostSummary[]> {
  const rows = (await sql`
    SELECT slug, date, created_at FROM posts ORDER BY created_at DESC
  `) as { slug: string; date: string | null; created_at: string }[]

  return rows.map(row => ({
    slug: row.slug,
    date: row.date ?? undefined,
    createdAt: row.created_at,
  }))
}
