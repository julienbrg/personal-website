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
          variant="outline"
          boxShadow="md"
          width={{ base: '100%', md: 'auto' }}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            bg: 'rgba(69, 162, 248, 0.1)',
          }}
          transition="all 0.3s ease"
          borderColor="#45a2f8"
          color="#45a2f8"
        >
          {t.home.chatButton}
        </Button>

        <Button
          as={NextLink}
          href="/contact"
          size="md"
          variant="outline"
          boxShadow="md"
          width={{ base: '100%', md: 'auto' }}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            bg: 'rgba(140, 28, 132, 0.1)',
          }}
          transition="all 0.3s ease"
          borderColor="#8c1c84"
          color="#8c1c84"
        >
          {t.home.contactButton}
        </Button>
      </Flex>
    </Center>
  )
}
