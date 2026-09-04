import { getPost } from '@/lib/posts'
import { postToMarkdown } from '@/lib/postMarkdown'

// Reached both as /<slug>/raw and, through the rewrite in next.config.ts, as
// /<slug>.md. The database read is cached (see getPost), but the response
// itself is built per-request because it depends on the Accept header.
export const dynamic = 'force-dynamic'

interface RawPostProps {
  params: Promise<{ slug: string }>
}

/**
 * The post as plain markdown, for readers that don't run JavaScript —
 * crawlers, any model or agent fetching a link, `curl`, feed tooling.
 *
 * Clients that ask for markdown (or anything but HTML) get an accurate
 * `text/markdown`; browsers, which would download that as a file, get
 * `text/plain` so the source stays readable in a tab.
 */
export async function GET(request: Request, { params }: RawPostProps) {
  const { slug } = await params
  const post = await getPost(slug)

  const accept = request.headers.get('accept') ?? ''
  const prefersHtml = accept.includes('text/html') && !accept.includes('text/markdown')
  const contentType = prefersHtml ? 'text/plain; charset=utf-8' : 'text/markdown; charset=utf-8'

  const headers = {
    'Content-Type': contentType,
    // Same freshness as the HTML page, and the type varies by request.
    'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
    Vary: 'Accept',
  }

  if (!post) {
    return new Response(`No post at /${slug}\n`, {
      status: 404,
      headers: { ...headers, 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  return new Response(postToMarkdown(post), { headers })
}
