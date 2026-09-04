// Canonical origin of the deployed site, used for absolute URLs in metadata,
// robots.txt and the sitemap. Overridable so preview deployments describe
// themselves rather than production.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://julienberanger.com'
