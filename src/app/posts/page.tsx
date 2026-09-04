import type { Metadata } from 'next'
import NextLink from 'next/link'
import { Box, VStack, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'
import { getPostSummaries, formatPostDate } from '@/lib/posts'
import { postUrl } from '@/lib/postMarkdown'
import { siteUrl } from '@/lib/site'
import { brandColors } from '@/theme'

// Cached for a minute like the post pages: a new post shows up here within
// 60s without the page costing a database round-trip per crawl.
export const revalidate = 60

const TITLE = 'All posts'
const DESCRIPTION = 'Every post on julienberanger.com, newest first.'

/**
 * /posts — the archive.
 *
 * Deliberately unlinked from the header: nothing in the site chrome points
 * here, so a visitor only lands on it by typing the URL or following a search
 * result. It is otherwise a completely ordinary public page — indexable, in
 * the sitemap, listed in llms.txt. That is the whole trick, and the only
 * honest one: hiding the list from crawlers-but-not-humans (or the reverse,
 * by sniffing user agents) is cloaking and gets the site demoted.
 *
 * It exists because sitemap.xml alone is a weak discovery signal. Crawlers
 * weigh real HTML links, and no other page on the site links to every post.
 */
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteUrl}/posts`,
    types: {
      'text/plain': `${siteUrl}/llms.txt`,
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
  // Spelled out rather than inherited: this page's only job is to be indexed,
  // so a future change to the root defaults should not silently unpublish it.
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
  },
}

export default async function PostsIndexPage() {
  const posts = await getPostSummaries()

  // Blog + ItemList: tells a search engine and an assistant that this page is
  // the blog's index and gives them the ordered list of entries directly.
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Julien Beranger',
    url: `${siteUrl}/posts`,
    author: { '@type': 'Person', name: 'Julien Béranger' },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: postUrl(post.slug),
      datePublished: post.date ?? post.createdAt,
      description: post.description,
      inLanguage: post.locale?.replace('_', '-'),
      author: { '@type': 'Person', name: post.author ?? 'Julien Béranger' },
    })),
  }

  return (
    <Box py={10}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VStack gap={8} align="stretch">
        <Box>
          <Heading as="h1" size={{ base: '2xl', md: '3xl' }} mb={2} color={brandColors.accent}>
            {TITLE}
          </Heading>
          <Text fontSize="sm" color="fg.muted">
            {posts.length} posts. Also available as{' '}
            <ChakraLink href="/feed.xml" color={brandColors.accent}>
              RSS
            </ChakraLink>
            ,{' '}
            <ChakraLink href="/llms.txt" color={brandColors.accent}>
              llms.txt
            </ChakraLink>{' '}
            and{' '}
            <ChakraLink href="/llms-full.txt" color={brandColors.accent}>
              llms-full.txt
            </ChakraLink>
            .
          </Text>
        </Box>

        <VStack as="ul" gap={6} align="stretch" listStyleType="none">
          {posts.map(post => {
            const lang = post.locale?.replace('_', '-')

            return (
              <Box as="li" key={post.slug}>
                <ChakraLink
                  asChild
                  fontSize="lg"
                  fontWeight="medium"
                  color={brandColors.accent}
                >
                  <NextLink href={`/${post.slug}`} hrefLang={lang}>
                    <Text as="span" lang={lang}>
                      {post.title}
                    </Text>
                  </NextLink>
                </ChakraLink>
                {post.date && (
                  <Text fontSize="xs" color="fg.muted" mt={1}>
                    <time dateTime={post.date}>{formatPostDate(post.date, post.locale)}</time>
                  </Text>
                )}
                {post.description && (
                  <Text fontSize="sm" color="fg.muted" mt={1} lang={lang}>
                    {post.description}
                  </Text>
                )}
              </Box>
            )
          })}
        </VStack>
      </VStack>
    </Box>
  )
}
