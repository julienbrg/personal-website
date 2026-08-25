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

// e.g. "Mardi 25 août 2025"
export function formatPostDate(date: string): string {
  const formatted = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))

  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}
