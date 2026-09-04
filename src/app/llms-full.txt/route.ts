import { getPosts } from '@/lib/posts'
import { postToMarkdown, postUrl } from '@/lib/postMarkdown'
import { siteUrl } from '@/lib/site'

// Per-request for the same reason as /llms.txt; the queries are cached.
export const dynamic = 'force-dynamic'

const TEXT_HEADERS = {
  'Content-Type': 'text/plain; charset=utf-8',
  'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
}

/**
 * /llms-full.txt — every post, in full, in one markdown document. One fetch
 * is enough for an agent to answer questions about the whole blog, with no
 * crawling and no JavaScript. Companion to /llms.txt, which is the index.
 */
export async function GET() {
  const posts = await getPosts()

  const header = [
    '# Julien Béranger — complete blog',
    '',
    `Source: ${siteUrl}`,
    `Posts: ${posts.length}`,
    `Generated: ${new Date().toISOString()}`,
    '',
    'Each post below is preceded by its canonical URL and its frontmatter.',
    '',
  ].join('\n')

  const documents = posts.map(post =>
    ['<!-- ' + postUrl(post.slug) + ' -->', '', postToMarkdown(post)].join('\n')
  )

  // Joined with blank lines rather than a `---` rule: each document opens
  // with its own frontmatter fence, and a stray rule would blur the boundary.
  return new Response([header, ...documents].join('\n\n'), { headers: TEXT_HEADERS })
}
