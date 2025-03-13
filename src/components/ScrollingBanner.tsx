'use client'

import { Box, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useEffect, useState } from 'react'

interface ScrollingBannerProps {
  text: string
  speed?: number // in seconds
}

const ScrollingBanner = ({ text, speed = 42 }: ScrollingBannerProps) => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [textWidth, setTextWidth] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const updateWidths = () => {
      setContainerWidth(window.innerWidth)
      // Approximate the text width (this is a rough calculation)
      setTextWidth(text.length * 12) // Assuming average character width
    }

    updateWidths()
    window.addEventListener('resize', updateWidths)

    return () => window.removeEventListener('resize', updateWidths)
  }, [text])

  // Create the scrolling animation keyframes dynamically based on the widths
  const scrollAnimation = keyframes`
    from { transform: translateX(${containerWidth}px); }
    to { transform: translateX(-${textWidth}px); }
  `

  if (!isClient) return null

  return (
    <Box overflow="hidden" width="100%" py={4} position="relative" mb={10} mt={10}>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight="medium"
        color="white"
        whiteSpace="nowrap"
        animation={`${scrollAnimation} ${speed}s linear infinite`}
        letterSpacing="0.05em"
      >
        {text}
      </Text>
    </Box>
  )
}

export default ScrollingBanner
