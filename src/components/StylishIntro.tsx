'use client'

import { Box, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const StylishIntro = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay before showing the animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Box
      position="relative"
      py={10}
      px={8}
      maxW="800px"
      mx="auto"
      borderRadius="xl"
      bg="rgba(30, 30, 30, 0.4)"
      backdropFilter="blur(10px)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(10px)'}
      transition="opacity 1s ease-out, transform 1s ease-out"
      border="1px solid"
      borderColor="rgba(100, 100, 255, 0.2)"
    >
      <Icon
        as={FaQuoteLeft}
        position="absolute"
        top={4}
        left={4}
        fontSize="2xl"
        color="blue.400"
        opacity={0.6}
      />

      <Text
        fontSize="lg"
        lineHeight="1.8"
        textAlign="center"
        fontWeight="medium"
        color="whiteAlpha.900"
        letterSpacing="0.02em"
        fontStyle="italic"
        px={10}
      >
        “Empty your mind, be formless, shapeless, like water. If you put water into a cup, it
        becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a
        teapot it becomes the teapot. Now, water can flow or it can crash. Be water my friend.” –
        Bruce Lee
      </Text>

      <Icon
        as={FaQuoteRight}
        position="absolute"
        bottom={4}
        right={4}
        fontSize="2xl"
        color="blue.400"
        opacity={0.6}
      />
    </Box>
  )
}

export default StylishIntro
