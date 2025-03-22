'use client'

import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Button } from '@chakra-ui/react'
import { useTranslation } from '@/hooks/useTranslation'
import { useEffect, useState } from 'react'
import Partners from '@/components/Partners'
import NextLink from 'next/link'

// Define services data
const services = [
  {
    title: 'Solidity Contracts Security Audit',
    description: 'Comprehensive security assessments for smart contracts',
  },
  {
    title: 'Web3 Project Design and Implementation',
    description: 'End-to-end Web3 project development and deployment',
  },
  {
    title: 'Custom DAO Deployment',
    description: 'Tailored DAO solutions for your organization',
  },
  {
    title: 'On-measure Web3 APIs',
    description: 'Custom Web3 APIs built with Nest.js',
  },
]

export default function StratPage() {
  const t = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  // Handle visibility for animations
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleServiceClick = () => {
    // Handle service click, e.g., redirect to contact page
    window.location.href = '/contact'
  }

  return (
    <main>
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="center">
          {/* Logo and Tagline Section */}
          <VStack spacing={12}>
            <Box width="100%" maxW="900px" textAlign="center">
              <Image
                src="/stratLogoWhitepng.png"
                alt="Strat Logo"
                width="100%"
                height="auto"
                maxW="900px"
                opacity={0}
                animation="fadeIn 3s ease-in forwards"
                sx={{
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                  },
                }}
              />
            </Box>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="#45a2f8"
              opacity={0}
              animation="fadeInText 3s ease-in forwards"
              style={{ animationDelay: '3s' }}
              sx={{
                '@keyframes fadeInText': {
                  '0%': { opacity: 0 },
                  '100%': { opacity: 1 },
                },
              }}
              textAlign="center"
            >
              Building Web3 since 2013.
            </Text>
          </VStack>

          {/* Services Section */}
          <VStack
            w="100%"
            spacing={8}
            opacity={isVisible ? 1 : 0}
            transition="opacity 2s ease-in"
            transitionDelay="5s"
          >
            <Heading as="h2" size="lg" color="white" mb={20} mt={20}>
              Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%" maxW="1200px" mb={20}>
              {services.map(service => (
                <Box
                  key={service.title}
                  bg="gray.800"
                  p={6}
                  borderRadius="lg"
                  cursor="pointer"
                  onClick={handleServiceClick}
                  transition="all 0.2s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    bg: 'gray.700',
                  }}
                >
                  <Text fontSize="xl" fontWeight="bold" mb={3}>
                    {service.title}
                  </Text>
                  <Text color="gray.400">{service.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          <Partners />
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
            borderColor="#45a2f8"
            color="#45a2f8"
          >
            {t.home.contactButton}
          </Button>
        </VStack>
      </Container>
    </main>
  )
}
