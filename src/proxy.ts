import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// App routes that share the `/<slug>` shape with posts. They have no markdown
// copy, so they stay HTML whatever the client asks for.
const pages = new Set(['contact', 'meditation-souriante', 'posts', 'settings', 'strat'])

/**
 * Markdown content negotiation: a client whose `Accept` asks for
 * `text/markdown` gets the markdown copy of the home page (/llms.txt) or of a
 * post (/<slug>/raw) at the same URL. Browsers never ask for it, so they keep
 * getting HTML.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const slug = pathname.slice(1)
  if (pages.has(slug)) return

  const wantsMarkdown = (request.headers.get('accept') ?? '').includes('text/markdown')
  const response = wantsMarkdown
    ? NextResponse.rewrite(new URL(slug ? `/${slug}/raw` : '/llms.txt', request.url))
    : NextResponse.next()

  // Markdown route handlers append Next's router values to this one. HTML
  // pages replace it, so next.config.ts sets `Vary: Accept` for them too.
  response.headers.set('Vary', 'Accept')
  return response
}

export const config = {
  matcher: ['/', '/:slug([a-z0-9][a-z0-9\\-]*)'],
}
