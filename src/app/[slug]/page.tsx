import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Box, VStack, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'
import PostContent from '@/components/PostContent'
import { getPost, formatPostDate } from '@/lib/posts'
import { brandColors } from '@/theme'
import { siteUrl } from '@/lib/site'

// Posts live in Neon and can be edited directly there, so pages are never
// baked at build time. They are cached for a minute rather than rebuilt on
// every request: an edit in the database shows up within 60s, and crawlers
// (which hit these URLs repeatedly) get a static-speed response instead of a
// database round-trip each time.
export const revalidate = 60

/** Frontmatter images may be site-relative or already absolute. */
function toAbsoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${siteUrl}${path}`
}

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) return {}

  const description = post.description

  const imageUrl = post.image ?? '/huangshan.png'
  const images = [{ url: imageUrl, width: 1200, height: 630, alt: post.imageAlt ?? post.title }]

  return {
    title: post.title,
    description,
    // The markdown alternate lets anything that would rather read the source
    // than the rendered page find it without guessing the URL.
    alternates: {
      canonical: `${siteUrl}/${slug}`,
      types: { 'text/markdown': `${siteUrl}/${slug}/raw` },
    },
    openGraph: {
      title: post.title,
      description,
      siteName: 'Julien Beranger',
      images,
      locale: post.locale ?? 'fr_FR',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  // Search engines read the page in whatever language the root <html> claims,
  // and that is hardcoded to "en" for the app chrome. Most posts are French,
  // so the article carries its own language tag.
  const lang = post.locale?.replace('_', '-')

  // BlogPosting markup: what turns a result into a dated, attributed article
  // in search rather than an anonymous page.
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: lang,
    author: { '@type': 'Person', name: post.author ?? 'Julien Béranger' },
    publisher: { '@type': 'Person', name: 'Julien Béranger' },
    image: toAbsoluteUrl(post.image ?? '/huangshan.png'),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/${slug}` },
  }

  return (
    <Box as="article" lang={lang} py={10}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VStack gap={8} align="stretch">
        <Box textAlign="center" mb={4}>
          <Heading
            as="h1"
            size={{ base: '2xl', md: '3xl' }}
            mb={4}
            color={brandColors.accent}
            lineHeight="1.25"
          >
            {post.title}
          </Heading>
          {post.date && (
            <Text fontSize="sm" color="fg.muted">
              <time dateTime={post.date}>{formatPostDate(post.date, post.locale)}</time>
            </Text>
          )}
          {post.author && (
            <Text fontSize="md" color={brandColors.white} mt={2}>
              {post.author}
            </Text>
          )}
          {post.model && (
            <Text fontSize="xs" fontStyle="italic" color={brandColors.white} mt={1}>
              {post.conversation ? (
                <>
                  +{' '}
                  <ChakraLink
                    href={post.conversation}
                    target="_blank"
                    rel="noopener noreferrer"
                    color={brandColors.white}
                    className="shimmer-text"
                  >
                    {post.model}
                  </ChakraLink>
                </>
              ) : (
                <>
                  +{' '}
                  <Text as="span" className="shimmer-text">
                    {post.model}
                  </Text>
                </>
              )}
            </Text>
          )}
        </Box>

        <Box>
          <PostContent content={post.content} />
        </Box>
      </VStack>
    </Box>
  )
}
