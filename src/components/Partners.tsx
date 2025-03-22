'use client'

import { Box, Heading, SimpleGrid, Link, Flex, Text, Image } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

type Partner = {
  name: string
  url: string
  description: string
}

const partners: Partner[] = [
  {
    name: 'Optimism',
    url: 'https://optimism.io/',
    description:
      'Optimism is a Collective of companies, communities, and citizens working together to reward public goods and build a sustainable future for Ethereum.',
  },
  {
    name: 'UNESCO',
    url: 'https://www.unesco.org/',
    description: 'United Nations Educational, Scientific and Cultural Organization.',
  },
  {
    name: 'AFNIC',
    url: 'https://www.afnic.fr/',
    description: 'Handles the 4 million .fr domains on behalf of the French State.',
  },
  {
    name: 'EM Lyon business School',
    url: 'https://em-lyon.com/en',
    description: 'A unique and deeply rooted business school.',
  },
  {
    name: 'Paris 8 University',
    url: 'https://www.univ-paris8.fr/',
    description:
      'Leading centre for the study of humanities education and research in Île-de-France.',
  },
  {
    name: 'Boischaut',
    url: 'https://boischaut.fr/',
    description: 'The auction house specializing in intangible assets.',
  },
  {
    name: 'Legal Brain',
    url: 'https://legalbrain-avocats.fr/',
    description:
      'Supporting, adapting, and anticipating the law in light of contemporary challenges',
  },
  {
    name: 'Kleros',
    url: 'https://kleros.io/',
    description:
      'The Justice Protocol - Kleros is a decentralized arbitration service for the disputes of the new economy.',
  },
  {
    name: 'BPI',
    url: 'https://www.bpi.fr/en/home/',
    description: 'Bibliothèque publique d’information - Centre Pompidou.',
  },
  {
    name: 'Epitech Digital School',
    url: 'https://www.epitech.digital/',
    description: 'Tech school training digital business leaders in France.',
  },
  {
    name: 'Pulse Incubateur HES',
    url: 'https://pulse-hesge.ch/',
    description: 'Geneva innovation incubator supporting high-potential university projects.',
  },
  {
    name: 'W3HC',
    url: 'https://w3hc.org/',
    description:
      'The Web3 Hackers Collective - Building integrations through mentoring and learning.',
  },
]

export default function Partners() {
  return (
    <Box pt={6} mb={16}>
      <Heading as="h2" size="lg" mb={20} textAlign="center">
        Partners
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {partners.map((partner, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: 'lg',
              borderColor: '#8c1c84',
            }}
            transition="all 0.3s ease"
          >
            <Heading as="h3" size="md" mb={2}>
              <Link href={partner.url} isExternal color="#8c1c84">
                {partner.name} <ExternalLinkIcon mx="2px" />
              </Link>
            </Heading>
            <Text color="gray.400" mb={3}>
              {partner.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
