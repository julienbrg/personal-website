import type { Post, PostSummary } from '@/lib/posts'
import { siteUrl } from '@/lib/site'

/**
 * Markdown is the lingua franca every model and agent reads without a parser,
 * so each post is served as its own source next to the HTML page, and the
 * whole blog is bundled the same way in /llms.txt and /llms-full.txt.
 */

/** Canonical HTML URL of a post. */
export function postUrl(slug: string): string {
  return `${siteUrl}/${slug}`
}

/**
 * Markdown URL of a post. The `.md` suffix is the convention agents and
 * documentation crawlers try first; /<slug>/raw serves the same bytes.
 */
export function postMarkdownUrl(slug: string): string {
  return `${siteUrl}/${slug}.md`
}

/**
 * A post as a standalone markdown document: YAML frontmatter mirroring what
 * the HTML page shows in its header, then the title and body.
 */
export function postToMarkdown(post: Post): string {
  const frontmatter = [
    ['title', post.title],
    ['description', post.description],
    ['date', post.date],
    ['lang', post.locale?.replace('_', '-')],
    ['author', post.author],
    ['model', post.model],
    ['conversation', post.conversation],
    ['source', postUrl(post.slug)],
  ].flatMap(([key, value]) => (value ? [`${key}: ${value}`] : []))

  return ['---', ...frontmatter, '---', '', `# ${post.title}`, '', post.content.trim(), ''].join(
    '\n'
  )
}

/** One line per post for an index: title, markdown link, description. */
export function postIndexEntry(post: PostSummary): string {
  const suffix = [post.date, post.description].filter(Boolean).join(' — ')

  return `- [${post.title}](${postMarkdownUrl(post.slug)})${suffix ? `: ${suffix}` : ''}`
}
