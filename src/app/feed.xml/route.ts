import { getPosts } from '@/lib/posts'
import { postMarkdownUrl, postToMarkdown, postUrl } from '@/lib/postMarkdown'
import { siteUrl } from '@/lib/site'

// Per-request for the same reason as /llms.txt; the queries are cached.
export const dynamic = 'force-dynamic'

/** XML text nodes and attributes: the five predefined entities. */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/** CDATA can hold anything except its own terminator. */
function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, ']]&gt;')}]]>`
}

function toRfc822(date: string): string {
  return new Date(date).toUTCString()
}

/**
 * /feed.xml — RSS 2.0, the format every reader, aggregator and agent toolkit
 * already speaks. Items carry the full post as markdown in `content:encoded`,
 * so subscribing to the feed is enough to read the blog without fetching a
 * single HTML page.
 */
export async function GET() {
  const posts = await getPosts()
  // Posts come back newest first.
  const updated = posts[0]?.date ?? new Date().toISOString()

  const items = posts.map(post => {
    const url = postUrl(post.slug)

    return [
      '    <item>',
      `      <title>${escapeXml(post.title)}</title>`,
      `      <link>${escapeXml(url)}</link>`,
      `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
      post.date ? `      <pubDate>${toRfc822(post.date)}</pubDate>` : '',
      post.author ? `      <dc:creator>${escapeXml(post.author)}</dc:creator>` : '',
      post.locale
        ? `      <dc:language>${escapeXml(post.locale.replace('_', '-'))}</dc:language>`
        : '',
      post.description ? `      <description>${cdata(post.description)}</description>` : '',
      `      <content:encoded>${cdata(postToMarkdown(post))}</content:encoded>`,
      `      <atom:link rel="alternate" type="text/markdown" href="${escapeXml(postMarkdownUrl(post.slug))}" />`,
      '    </item>',
    ]
      .filter(Boolean)
      .join('\n')
  })

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    '  <channel>',
    '    <title>Julien Beranger</title>',
    `    <link>${siteUrl}</link>`,
    "    <description>Julien's projects, partners, bio and blog posts</description>",
    '    <language>fr</language>',
    `    <lastBuildDate>${toRfc822(updated)}</lastBuildDate>`,
    `    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
    },
  })
}
