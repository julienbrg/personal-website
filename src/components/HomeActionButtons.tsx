'use client'

import { Center, Flex, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function HomeActionButtons() {
  const t = useTranslation()

  return (
    <Center mt={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 3, md: 4 }}
        width={{ base: '100%', md: 'auto' }}
        px={{ base: 4, md: 0 }}
        align="center"
        justify="center"
      >
        <Button
          as={NextLink}
          href="/chat"
          size="md"
          colorScheme="blue"
          variant="outline"
          boxShadow="md"
          width={{ base: '100%', md: 'auto' }}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          }}
          transition="all 0.3s ease"
        >
          {t.home.chatButton}
        </Button>

        <Button
          as={NextLink}
          href="/contact"
          size="md"
          colorScheme="purple"
          variant="outline"
          boxShadow="md"
          width={{ base: '100%', md: 'auto' }}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            bg: 'rgba(159, 122, 234, 0.1)',
          }}
          transition="all 0.3s ease"
        >
          {t.home.contactButton}
        </Button>

        {/* <Button
          as={NextLink}
          href="/bio"
          size="md"
          colorScheme="green"
          variant="outline"
          boxShadow="md"
          width={{ base: '100%', md: 'auto' }}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            bg: 'rgba(72, 187, 120, 0.1)',
          }}
          transition="all 0.3s ease"
        >
          {t.home.bioButton}
        </Button> */}
      </Flex>
    </Center>
  )
}
