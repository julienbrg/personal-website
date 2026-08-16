'use client'

import { Box, Heading, SimpleGrid, Link as ChakraLink, Text, Icon } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { brandColors } from '@/theme'
import { useTranslation } from '@/hooks/useTranslation'

const partners = [
  { key: 'optimism', name: 'Optimism', url: 'https://optimism.io/' },
  { key: 'unesco', name: 'UNESCO', url: 'https://www.unesco.org/' },
  { key: 'afnic', name: 'AFNIC', url: 'https://www.afnic.fr/' },
  { key: 'systemlog', name: 'Systemlog', url: 'https://www.systemlog.fr/' },
  { key: 'emLyon', name: 'EM Lyon business School', url: 'https://em-lyon.com/en' },
  { key: 'paris8', name: 'Paris 8 University', url: 'https://www.univ-paris8.fr/' },
  { key: 'studi', name: 'STUDI', url: 'https://www.studi.com/' },
  { key: 'galleriaContinua', name: 'Galleria Continua', url: 'https://www.galleriacontinua.com/' },
  { key: 'boischaut', name: 'Boischaut', url: 'https://boischaut.fr/' },
  { key: 'legalBrain', name: 'Legal Brain', url: 'https://legalbrain-avocats.fr/' },
  { key: 'kleros', name: 'Kleros', url: 'https://kleros.io/' },
  { key: 'bpi', name: 'BPI', url: 'https://www.bpi.fr/en/home/' },
  { key: 'epitech', name: 'Epitech Digital School', url: 'https://www.epitech.digital/' },
  { key: 'pulseIncubateur', name: 'Pulse Incubateur HES', url: 'https://pulse-hesge.ch/' },
  { key: 'w3hc', name: 'W3HC', url: 'https://w3hc.org/' },
] as const

export default function Partners() {
  const t = useTranslation()

  return (
    <Box pt={6} mb={16}>
      <Heading as="h2" size="lg" mb={20} textAlign="center">
        {t.partners.heading}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        {partners.map((partner, index) => (
          <ChakraLink
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ textDecoration: 'none' }}
            display="block"
          >
            <Box
              bg="gray.900"
              border="1px solid"
              borderColor="gray.700"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              height="100%"
              cursor="pointer"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'lg',
                borderColor: brandColors.primary,
              }}
              transition="all 0.3s ease"
            >
              <Heading as="h3" size="md" mb={2} color={brandColors.primary}>
                {partner.name} <Icon as={FiExternalLink} boxSize={3.5} verticalAlign="middle" />
              </Heading>
              <Text color="gray.400" mb={3}>
                {t.partners.items[partner.key]}
              </Text>
            </Box>
          </ChakraLink>
        ))}
      </SimpleGrid>
    </Box>
  )
}
