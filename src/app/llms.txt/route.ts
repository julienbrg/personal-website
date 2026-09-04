import { getPostSummaries } from '@/lib/posts'
import { postIndexEntry } from '@/lib/postMarkdown'
import { siteUrl } from '@/lib/site'

// Built per-request like the sitemap: the post list lives in Neon, so
// prerendering this at build time would make the build depend on the
// database. The queries underneath are cached for a minute (see getPost*),
// and the header below lets a CDN hold the response for just as long.
export const dynamic = 'force-dynamic'

const TEXT_HEADERS = {
  'Content-Type': 'text/plain; charset=utf-8',
  'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
}

/**
 * /llms.txt — the llmstxt.org convention: a single markdown file describing
 * the site and linking every page, in the form a model can read directly.
 * Assistants that support it look here first; everything else can still fetch
 * it as a plain text index of the blog.
 */
export async function GET() {
  const posts = await getPostSummaries()

  const body = [
    '# Julien Béranger',
    '',
    "> Julien's projects, partners, bio and blog posts. Posts are mostly in French, some in English.",
    '',
    'Every page of this site is public and free to read, quote and index.',
    'Each post is available as markdown at `<post-url>.md` (also `<post-url>/raw`).',
    `The whole blog in one file: ${siteUrl}/llms-full.txt`,
    '',
    `The archive as an HTML page: ${siteUrl}/posts`,
    '',
    '## Blog posts',
    '',
    ...posts.map(postIndexEntry),
    '',
    '## Pages',
    '',
    `- [Home](${siteUrl}/): bio, projects and partners`,
    `- [All posts](${siteUrl}/posts): the blog archive, newest first`,
    `- [Contact](${siteUrl}/contact): how to reach Julien`,
    `- [Strat](${siteUrl}/strat): Strat, the company`,
    `- [Méditation souriante](${siteUrl}/meditation-souriante): meditation notes`,
    '',
    '## Optional',
    '',
    `- [RSS feed](${siteUrl}/feed.xml): posts with full content`,
    `- [Sitemap](${siteUrl}/sitemap.xml): every URL, with dates`,
    '',
  ].join('\n')

  return new Response(body, { headers: TEXT_HEADERS })
}
