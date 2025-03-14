'use client'

import { Box, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const quotes = [
  {
    text: 'Empty your mind, be formless, shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water my friend.',
    author: 'Bruce Lee',
  },
  {
    text: '知彼知己百戰不殆不知彼而知己一勝一負不知彼不知己每戰必殆',
    author: 'Sunzi III-18',
  },
  {
    text: 'Prepare for the worst; expect the best; and take what comes.',
    author: 'Hannah Arendt',
  },
  {
    text: 'As time goes on, it will probably be very difficult to beat AI. But winning this one time, it felt like it was enough. One time was enough.',
    author: 'Lee Sedol',
  },
]

const StylishIntro = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  // Handle initial visibility
  useEffect(() => {
    // Small delay before showing the animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Handle quote rotation
  useEffect(() => {
    // Set up quote rotation interval
    const rotationInterval = setInterval(() => {
      // Start fade out
      setIsFading(true)

      // After fade out is complete, change the quote and start fade in
      setTimeout(() => {
        // Move to the next quote in sequence
        setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length)
        setIsFading(false)
      }, 2000) // 2 seconds for fade out
    }, 10000) // 10 seconds between quote changes

    return () => clearInterval(rotationInterval)
  }, [])

  // Get the current quote based on the index
  const currentQuote = quotes[currentQuoteIndex]

  return (
    <Box
      width="100%"
      height={{ base: '400px', md: '230px' }} // Taller on mobile, shorter on desktop
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        position="relative"
        py={10}
        px={8}
        width="100%"
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
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon
          as={FaQuoteLeft}
          position="absolute"
          top={4}
          left={4}
          fontSize="2xl"
          color="#45a2f8"
          opacity={0.6}
        />

        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight="1.8"
          textAlign="center"
          fontWeight="medium"
          color="whiteAlpha.900"
          letterSpacing="0.02em"
          fontStyle="italic"
          px={{ base: 4, md: 10 }}
          maxH={{ base: '400px', md: '180px' }}
          overflowY="auto"
          opacity={isFading ? 0 : 1}
          transition="opacity 1s ease-in-out"
        >
          &quot;{currentQuote.text}&quot;
          <br />– {currentQuote.author}
        </Text>

        <Icon
          as={FaQuoteRight}
          position="absolute"
          bottom={4}
          right={4}
          fontSize="2xl"
          color="#45a2f8"
          opacity={0.6}
        />
      </Box>
    </Box>
  )
}

export default StylishIntro
