'use client'

import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Box, Heading, Text, Image, Table, Link as ChakraLink } from '@chakra-ui/react'
import { ListRoot, ListItem } from '@/components/ui/list'
import { brandColors } from '@/theme'
import NextLink from 'next/link'

// Prose rhythm: generous leading, and space between blocks scaled to match.
const PROSE_LINE_HEIGHT = '1.9'

const components: Components = {
  h1: ({ children }) => (
    <Heading as="h2" size="xl" mt={16} mb={5} color={brandColors.accent} lineHeight="1.3">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading
      as="h2"
      size={{ base: 'xl', md: '2xl' }}
      mt={14}
      mb={7}
      color={brandColors.primary}
      lineHeight="1.35"
      textShadow="0 0 12px rgba(255, 255, 255, 0.45)"
    >
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" size="md" mt={10} mb={4} lineHeight="1.4">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading as="h4" size="sm" mt={8} mb={3} color="fg.muted" lineHeight="1.4">
      {children}
    </Heading>
  ),
  p: ({ children }) => (
    <Text mb={6} lineHeight={PROSE_LINE_HEIGHT}>
      {children}
    </Text>
  ),
  a: ({ href, children }) => {
    const url = href ?? '#'
    const isInternal = url.startsWith('/') || url.startsWith('#')

    if (isInternal) {
      return (
        <ChakraLink as={NextLink} href={url} color={brandColors.accent}>
          {children}
        </ChakraLink>
      )
    }

    return (
      <ChakraLink href={url} target="_blank" rel="noopener noreferrer" color={brandColors.accent}>
        {children}
      </ChakraLink>
    )
  },
  ul: ({ children }) => (
    <ListRoot gap={3} mb={6} ps={7}>
      {children}
    </ListRoot>
  ),
  ol: ({ children }) => (
    <ListRoot as="ol" gap={3} mb={6} ps={7}>
      {children}
    </ListRoot>
  ),
  li: ({ children }) => (
    <ListItem lineHeight={PROSE_LINE_HEIGHT} ps={1} css={{ '&::marker': { color: brandColors.white } }}>
      {children}
    </ListItem>
  ),
  blockquote: ({ children }) => (
    <Box
      as="blockquote"
      borderLeftWidth="3px"
      borderLeftColor={brandColors.primary}
      bg="bg.subtle"
      borderRadius="md"
      px={6}
      py={5}
      my={10}
      color={brandColors.white}
      css={{ '& > p:last-of-type': { marginBottom: 0 } }}
    >
      {children}
    </Box>
  ),
  img: ({ src, alt }) => (
    <Image
      src={typeof src === 'string' ? src : undefined}
      alt={alt ?? ''}
      borderRadius="lg"
      w="100%"
      h="auto"
      my={10}
    />
  ),
  // Thematic breaks read as a pause, not a rule: whitespace instead of a line.
  hr: () => <Box aria-hidden="true" h={{ base: 2, md: 3 }} />,
  code: ({ className, children }) => {
    // Fenced blocks carry a `language-*` class; anything else is inline code.
    const isBlock = typeof className === 'string' && className.startsWith('language-')

    if (!isBlock) {
      return (
        <Box
          as="code"
          bg="bg.muted"
          px={1.5}
          py={0.5}
          borderRadius="sm"
          fontFamily="monospace"
          fontSize="0.875em"
        >
          {children}
        </Box>
      )
    }

    return <Box as="code">{children}</Box>
  },
  pre: ({ children }) => (
    <Box
      as="pre"
      bg="bg.muted"
      borderWidth="1px"
      borderColor="border"
      p={5}
      my={8}
      borderRadius="lg"
      overflowX="auto"
      fontFamily="monospace"
      fontSize="sm"
      lineHeight="tall"
    >
      {children}
    </Box>
  ),
  table: ({ children }) => (
    <Box
      my={10}
      borderWidth="1px"
      borderColor="border"
      borderRadius="lg"
      overflowX="auto"
      maxW="100%"
    >
      <Table.Root size="sm" variant="line" striped interactive minW="640px">
        {children}
      </Table.Root>
    </Box>
  ),
  thead: ({ children }) => <Table.Header>{children}</Table.Header>,
  tbody: ({ children }) => <Table.Body>{children}</Table.Body>,
  tr: ({ children }) => <Table.Row>{children}</Table.Row>,
  th: ({ children }) => (
    <Table.ColumnHeader
      bg="bg.emphasized"
      color="fg"
      fontWeight="semibold"
      fontSize="xs"
      textTransform="uppercase"
      letterSpacing="wider"
      verticalAlign="bottom"
      px={4}
      py={3}
    >
      {children}
    </Table.ColumnHeader>
  ),
  td: ({ children }) => (
    <Table.Cell verticalAlign="top" lineHeight="tall" px={4} py={3}>
      {children}
    </Table.Cell>
  ),
}

export default function PostContent({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  )
}
