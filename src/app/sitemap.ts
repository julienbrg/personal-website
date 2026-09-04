import type { MetadataRoute } from 'next'
import { getPostSummaries } from '@/lib/posts'
import { siteUrl } from '@/lib/site'

// Posts live in Neon, so the sitemap is generated per-request rather than
// baked at build time.
export const dynamic = 'force-dynamic'

const staticPaths = ['', '/posts', '/contact', '/strat', '/meditation-souriante']

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostSummaries()

  return [
    ...staticPaths.map(path => ({
      url: `${siteUrl}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.5,
    })),
    ...posts.map(post => ({
      url: `${siteUrl}/${post.slug}`,
      lastModified: new Date(post.date ?? post.createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
