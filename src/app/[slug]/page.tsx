import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Box, VStack, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'
import PostContent from '@/components/PostContent'
import { getPost, formatPostDate } from '@/lib/posts'
import { brandColors } from '@/theme'

// Posts live in Neon and can be edited directly there, so the page is
// rendered dynamically per-request rather than statically prerendered —
// content changes show up immediately without a redeploy.
export const dynamic = 'force-dynamic'

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

  return (
    <Box as="article" py={10}>
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
