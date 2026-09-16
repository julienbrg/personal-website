// Terminal control for blog posts stored in Postgres. Usage:
//   pnpm posts init                 create the posts table
//   pnpm posts add <file.md>        insert or update a post from a markdown file
//   pnpm posts delete <slug>        remove a post
//   pnpm posts list                 list all posts
//   pnpm posts unlist <slug>        hide a post from listings, sitemap, feeds and search
//   pnpm posts relist <slug>        undo unlist

import fs from 'fs'
import path from 'path'
import { parseFrontmatter, extractLeadingHeading, isValidSlug } from '../src/lib/markdown'

let sql: typeof import('../src/lib/db').sql

async function init() {
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      slug TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      date TEXT,
      locale TEXT,
      image TEXT,
      image_alt TEXT,
      author TEXT,
      model TEXT,
      conversation TEXT,
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS author TEXT`
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS model TEXT`
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS conversation TEXT`
  await sql`ALTER TABLE posts ADD COLUMN IF NOT EXISTS unlisted BOOLEAN NOT NULL DEFAULT false`
  console.log('posts table ready')
}

async function add(filePath: string) {
  const slug = path.basename(filePath).replace(/\.md$/, '')

  if (!isValidSlug(slug)) {
    throw new Error(`Invalid slug "${slug}": use lowercase letters, numbers and hyphens only`)
  }

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content: withHeading } = parseFrontmatter(raw)
  const { heading, body: content } = extractLeadingHeading(withHeading)

  const title = data.title || heading || slug
  const unlisted = data.unlisted === 'true'

  await sql`
    INSERT INTO posts (slug, title, description, date, locale, image, image_alt, author, model, conversation, unlisted, content)
    VALUES (${slug}, ${title}, ${data.description ?? null}, ${data.date ?? null}, ${data.locale ?? null}, ${data.image ?? null}, ${data.imageAlt ?? null}, ${data.author ?? null}, ${data.model ?? null}, ${data.conversation ?? null}, ${unlisted}, ${content})
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      date = EXCLUDED.date,
      locale = EXCLUDED.locale,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      author = EXCLUDED.author,
      model = EXCLUDED.model,
      conversation = EXCLUDED.conversation,
      unlisted = EXCLUDED.unlisted,
      content = EXCLUDED.content
  `
  console.log(`saved "${slug}"`)
}

async function setUnlisted(slug: string, unlisted: boolean) {
  const rows = (await sql`
    UPDATE posts SET unlisted = ${unlisted} WHERE slug = ${slug} RETURNING slug
  `) as { slug: string }[]

  if (rows.length === 0) {
    console.log(`no post found with slug "${slug}"`)
    return
  }

  console.log(`${unlisted ? 'unlisted' : 'relisted'} "${slug}"`)
}

async function del(slug: string) {
  const rows = (await sql`DELETE FROM posts WHERE slug = ${slug} RETURNING slug`) as {
    slug: string
  }[]

  if (rows.length === 0) {
    console.log(`no post found with slug "${slug}"`)
    return
  }

  console.log(`deleted "${slug}"`)
}

async function list() {
  const rows = (await sql`
    SELECT slug, title, date, unlisted FROM posts ORDER BY date DESC NULLS LAST
  `) as { slug: string; title: string; date: string | null; unlisted: boolean }[]

  if (rows.length === 0) {
    console.log('no posts yet')
    return
  }

  for (const row of rows) {
    const flag = row.unlisted ? '  [unlisted]' : ''
    console.log(`${row.date ?? '(no date)'}  ${row.slug}  ${row.title}${flag}`)
  }
}

async function main() {
  try {
    process.loadEnvFile('.env')
  } catch {
    // fine if DATABASE_URL is already set in the environment
  }
  ;({ sql } = await import('../src/lib/db'))

  const [command, arg] = process.argv.slice(2)

  switch (command) {
    case 'init':
      return init()
    case 'add':
      if (!arg) throw new Error('usage: pnpm posts add <file.md>')
      return add(arg)
    case 'delete':
      if (!arg) throw new Error('usage: pnpm posts delete <slug>')
      return del(arg)
    case 'list':
      return list()
    case 'unlist':
      if (!arg) throw new Error('usage: pnpm posts unlist <slug>')
      return setUnlisted(arg, true)
    case 'relist':
      if (!arg) throw new Error('usage: pnpm posts relist <slug>')
      return setUnlisted(arg, false)
    default:
      throw new Error('usage: pnpm posts <init|add|delete|list|unlist|relist> [arg]')
  }
}

main().catch(err => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
