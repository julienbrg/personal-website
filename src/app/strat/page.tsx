'use client'

import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import NextLink from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { brandColors } from '@/theme'
import Partners from '@/components/Partners'

type ServiceKey =
  'aiIntegrations' | 'training' | 'securityAudit' | 'web3Design' | 'web3Apis' | 'daoDeployment'

const serviceKeys: ServiceKey[] = [
  'aiIntegrations',
  'training',
  'securityAudit',
  'web3Design',
  'web3Apis',
  'daoDeployment',
]

export default function StratPage() {
  const t = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <VStack gap={16} align="stretch" py={20}>
      <VStack gap={8}>
        <Box
          width="100%"
          maxW="900px"
          mx="auto"
          opacity={isVisible ? 1 : 0}
          transition="opacity 1.5s ease-in"
        >
          <Image
            src="/stratLogoWhitepng.png"
            alt="Strat"
            width={900}
            height={430}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </Box>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={brandColors.accent}
          textAlign="center"
          opacity={isVisible ? 1 : 0}
          transition="opacity 1.5s ease-in"
          transitionDelay="0.5s"
        >
          Building Web3 since 2013.
        </Text>
      </VStack>

      <Box>
        <Heading as="h2" size="lg" mb={20} textAlign="center">
          {t.strat.servicesHeading}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} maxW="1200px" mx="auto">
          {serviceKeys.map(key => (
            <NextLink key={key} href="/contact" style={{ display: 'block' }}>
              <Box
                bg="gray.900"
                border="1px solid"
                borderColor="gray.700"
                borderRadius="lg"
                p={6}
                height="100%"
                cursor="pointer"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'lg',
                  borderColor: brandColors.accent,
                }}
                transition="all 0.3s ease"
              >
                <Heading as="h3" size="md" mb={3} color={brandColors.accent}>
                  {t.strat.services[key].title}
                </Heading>
                <Text color="gray.400">{t.strat.services[key].description}</Text>
              </Box>
            </NextLink>
          ))}
        </SimpleGrid>
      </Box>

      <Partners />

      <Box display="flex" justifyContent="center">
        <Button
          asChild
          size="md"
          variant="outline"
          boxShadow="md"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            bg: 'rgba(140, 28, 132, 0.1)',
          }}
          transition="all 0.3s ease"
          borderColor={brandColors.primary}
        >
          <NextLink href="/contact">{t.home.contactButton}</NextLink>
        </Button>
      </Box>
    </VStack>
  )
}
