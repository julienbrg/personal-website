'use client'

import { Box, Flex, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import { Fragment, ReactNode, useEffect, useState } from 'react'
import { brandColors } from '@/theme'

const FLASH_INTERVAL_MS = 3500
const FLASH_DURATION_MS = 500

// Animated border: primary, accent and white chase each other around the edge.
// The angle is a registered custom property so browsers can interpolate it;
// where @property is unsupported the gradient simply sits still.
const BORDER_WIDTH = '2px'
const BORDER_GRADIENT = `conic-gradient(from var(--intro-border-angle), ${brandColors.primary}, ${brandColors.accent}, ${brandColors.white}, ${brandColors.primary})`
const BORDER_ANIMATION = 'intro-border-spin 6s linear infinite'

const borderStyles = `
  @property --intro-border-angle {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }

  @keyframes intro-border-spin {
    to {
      --intro-border-angle: 360deg;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [data-intro-border] {
      animation: none !important;
    }
  }
`

interface IntroBubbleProps {
  text: string
}

// Renders `[label](url)` markdown-style links found in translated text as real links.
function renderWithLinks(text: string): ReactNode[] {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>)
    }
    nodes.push(
      <ChakraLink
        key={key++}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        color={brandColors.accent}
        fontWeight="bold"
        _hover={{ textDecoration: 'underline' }}
      >
        {match[1]}
      </ChakraLink>
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>)
  }

  return nodes
}

const IntroBubble = ({ text }: IntroBubbleProps) => {
  const paragraphs = text.split('\n\n')
  const [isFlashing, setIsFlashing] = useState(false)

  useEffect(() => {
    let flashTimeout: ReturnType<typeof setTimeout>

    const interval = setInterval(() => {
      setIsFlashing(true)
      flashTimeout = setTimeout(() => setIsFlashing(false), FLASH_DURATION_MS)
    }, FLASH_INTERVAL_MS)

    return () => {
      clearInterval(interval)
      clearTimeout(flashTimeout)
    }
  }, [])

  return (
    <Flex
      align={{ base: 'center', md: 'flex-start' }}
      justify="center"
      gap={{ base: 6, md: 8 }}
      direction={{ base: 'column', md: 'row' }}
      w="100%"
    >
      <Global styles={borderStyles} />

      <Box
        data-intro-border
        flexShrink={0}
        mt={{ base: 0, md: 6 }}
        width="140px"
        height="140px"
        borderRadius="50%"
        padding={BORDER_WIDTH}
        background={BORDER_GRADIENT}
        animation={BORDER_ANIMATION}
      >
        <Box position="relative" width="100%" height="100%" borderRadius="50%" overflow="hidden">
          <Image
            src="/julien-profile-image-linkedin-pfp-july-2022.jpeg"
            alt="Julien Béranger"
            fill
            style={{ objectFit: 'cover' }}
          />
          <Image
            src="/zyzkov-150-150.png"
            alt=""
            aria-hidden="true"
            fill
            style={{ objectFit: 'cover', opacity: isFlashing ? 1 : 0 }}
          />
        </Box>
      </Box>

      <Box
        data-intro-border
        position="relative"
        borderRadius="26px"
        padding={BORDER_WIDTH}
        background={BORDER_GRADIENT}
        animation={BORDER_ANIMATION}
        maxW="644px"
        boxShadow="0 8px 24px rgba(0, 0, 0, 0.35)"
        _before={{
          content: '""',
          position: 'absolute',
          top: { base: '-13px', md: '28px' },
          left: { base: '50%', md: '-13px' },
          transform: { base: 'translateX(-50%)', md: 'none' },
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: { base: '0 13px 13px 13px', md: '11px 15px 11px 0' },
          borderColor: {
            base: `transparent transparent ${brandColors.accent} transparent`,
            md: `transparent ${brandColors.accent} transparent transparent`,
          },
        }}
        _after={{
          content: '""',
          position: 'absolute',
          top: { base: '-9px', md: '31px' },
          left: { base: '50%', md: '-10px' },
          transform: { base: 'translateX(-50%)', md: 'none' },
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: { base: '0 10px 10px 10px', md: '8px 12px 8px 0' },
          borderColor: {
            base: 'transparent transparent black transparent',
            md: 'transparent black transparent transparent',
          },
        }}
      >
        <Box
          bg="black"
          color="white"
          borderRadius="24px"
          px={{ base: 5, md: 8 }}
          py={{ base: 5, md: 6 }}
        >
          {paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              mb={index < paragraphs.length - 1 ? 3 : 0}
              fontSize={{ base: 'sm', md: 'md' }}
              lineHeight="1.7"
            >
              {renderWithLinks(paragraph)}
            </Text>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default IntroBubble
