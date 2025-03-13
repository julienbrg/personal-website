'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { useEffect, useState } from 'react'
// NOTE: You need to install these packages:
// pnpm add react-markdown rehype-raw rehype-sanitize remark-gfm
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

export default function AwesomePage() {
  const t = useTranslation()
  const [markdown, setMarkdown] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const blockquoteBg = useColorModeValue('gray.50', 'gray.800')

  // Custom renderer components for markdown elements
  const MarkdownComponents = {
    h1: (props: any) => <Heading as="h1" size="xl" mt={6} mb={4} {...props} />,
    h2: (props: any) => <Heading as="h2" size="lg" mt={6} mb={4} {...props} />,
    h3: (props: any) => <Heading as="h3" size="md" mt={5} mb={3} {...props} />,
    h4: (props: any) => <Heading as="h4" size="sm" mt={4} mb={2} {...props} />,
    p: (props: any) => <Text mb={4} {...props} />,
    a: (props: any) => <ChakraLink color="blue.400" isExternal {...props} />,
    ul: (props: any) => <Box as="ul" ml={8} mb={4} {...props} />,
    ol: (props: any) => <Box as="ol" ml={8} mb={4} {...props} />,
    li: (props: any) => <Box as="li" mb={1} {...props} />,
    img: (props: any) => (
      <Image {...props} alt={props.alt || ''} my={4} display="block" maxH="300px" />
    ),
    blockquote: (props: any) => (
      <Box
        as="blockquote"
        borderLeftWidth="4px"
        borderLeftColor="blue.400"
        pl={4}
        py={2}
        my={4}
        bg={blockquoteBg}
        {...props}
      />
    ),
    code: (props: any) => {
      // Check if this is an inline code or a code block
      const isInline = !props.className
      return isInline ? (
        <Box as="code" bg="gray.700" px={1} borderRadius="sm" fontFamily="mono" {...props} />
      ) : (
        <Box
          as="pre"
          bg="gray.800"
          p={4}
          borderRadius="md"
          overflowX="auto"
          fontFamily="mono"
          fontSize="sm"
          my={4}
          {...props}
        />
      )
    },
  }

  useEffect(() => {
    const fetchMarkdown = async () => {
      setIsLoading(true)
      try {
        // Fetch the raw content from GitHub
        const response = await fetch(
          'https://raw.githubusercontent.com/w3hc/awesome-ethereum/main/README.md'
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`)
        }

        const text = await response.text()
        setMarkdown(text)
        setError(null)
      } catch (err) {
        console.error('Error fetching markdown:', err)
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMarkdown()
  }, [])

  return (
    <main>
      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="stretch">
          {isLoading ? (
            <Flex justifyContent="center" py={10}>
              <Spinner size="xl" color="blue.400" thickness="4px" />
            </Flex>
          ) : error ? (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              <Box>
                <AlertTitle>Error loading content</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Box>
            </Alert>
          ) : (
            <Box className="markdown-content">
              <ReactMarkdown
                components={MarkdownComponents}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
              >
                {markdown}
              </ReactMarkdown>
            </Box>
          )}
        </VStack>
      </Container>
    </main>
  )
}
