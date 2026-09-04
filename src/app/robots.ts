import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

// Without this route, /robots.txt fell through to the [slug] page and answered
// 200 with a full HTML document — which crawlers parse as an empty ruleset at
// best. Everything here is public and meant to be read, assistants included.
//
// Several AI crawlers are named explicitly even though `*` already allows
// them: a few default to staying out unless a site opts them in, and some
// operators read a named rule as the only unambiguous permission. The list is
// not exhaustive by design — anything not named falls under `*` and is
// welcome too.
const aiAgents = [
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Google, Apple, Microsoft
  'Google-Extended',
  'Googlebot',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  // Others
  'PerplexityBot',
  'Perplexity-User',
  'meta-externalagent',
  'FacebookBot',
  'Amazonbot',
  'DuckAssistBot',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'Diffbot',
  'MistralAI-User',
  'YouBot',
  'AI2Bot',
  'Timpibot',
  'omgili',
]

export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: '/', disallow: '/settings' }

  return {
    rules: [
      { userAgent: '*', ...allowAll },
      { userAgent: aiAgents, ...allowAll },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
