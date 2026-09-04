import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

// Without this route, /robots.txt fell through to the [slug] page and answered
// 200 with a full HTML document — which crawlers parse as an empty ruleset at
// best. Everything here is public and meant to be read, assistants included.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/settings',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
