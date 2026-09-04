import { getPost } from '@/lib/posts'
import { siteUrl } from '@/lib/site'

// Same reasoning as the post page: content is edited straight in Neon.
export const dynamic = 'force-dynamic'

const TEXT_HEADERS = { 'Content-Type': 'text/plain; charset=utf-8' }

interface RawPostProps {
  params: Promise<{ slug: string }>
}

/**
 * The post as plain markdown, for readers that don't run JavaScript —
 * crawlers, AI assistants fetching a link, `curl`, feed tooling. The
 * frontmatter block mirrors what the HTML page shows in its header.
 */
export async function GET(_request: Request, { params }: RawPostProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return new Response(`No post at /${slug}\n`, { status: 404, headers: TEXT_HEADERS })
  }

  const frontmatter = [
    ['title', post.title],
    ['description', post.description],
    ['date', post.date],
    ['author', post.author],
    ['model', post.model],
    ['source', `${siteUrl}/${post.slug}`],
  ].flatMap(([key, value]) => (value ? [`${key}: ${value}`] : []))

  const body = ['---', ...frontmatter, '---', '', `# ${post.title}`, '', post.content, ''].join(
    '\n'
  )

  return new Response(body, { headers: TEXT_HEADERS })
}
