'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Link as ChakraLink,
  Image,
  Flex,
  Center,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import { useTranslation } from '@/hooks/useTranslation'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

export default function BioPage() {
  const t = useTranslation()
  const [imageIndex, setImageIndex] = useState(0)
  const profileImages = ['/huangshan.png'] // Add more profile images if needed

  // Simulate the image switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % profileImages.length)
    }, 10000) // Switch every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="stretch">
          {/* <Box textAlign="center">
            <Image
              src={profileImages[imageIndex]}
              alt="Julien Béranger"
              borderRadius="full"
              boxSize="200px"
              objectFit="cover"
              mx="auto"
              mb={6}
            />
            <Heading as="h1" size="xl" mb={2}>
              Julien Béranger
            </Heading>
            <Text fontSize="lg" color="gray.400">
              Web3 Developer & Entrepreneur
            </Text>
          </Box> */}

          <Box>
            <Text mb={4}>
              I was born and raised in Paris, France. In 2007, I completed a degree in Chinese
              Studies (Philosophy, Literature, and Arts) at{' '}
              <ChakraLink href="http://www.inalco.fr/" isExternal color="blue.400">
                INALCO
              </ChakraLink>{' '}
              (National Institute for Oriental Languages and Civilizations). For the next five
              years, I worked as a Chinese teacher in several high schools, including a particularly
              interesting stint at the{' '}
              <ChakraLink
                href="http://www.aefe.fr/reseau-scolaire-mondial/rechercher-un-etablissement/viet-nam-ho-chi-minh-ville-lycee-francais"
                isExternal
                color="blue.400"
              >
                Saigon French International High School in Vietnam
              </ChakraLink>
              .
            </Text>

            <Text mb={4}>
              My journey into the Web3 space began in 2011 when I first heard about Bitcoin. By
              April 2013, I was experimenting with and designing decentralized apps. Later that
              year, while working on an iOS payment app, I came across Vitalik Buterin&apos;s
              Ethereum white paper.
            </Text>

            <Text mb={4}>
              In 2014, I joined{' '}
              <ChakraLink href="https://openclassrooms.com/" isExternal color="blue.400">
                OpenClassrooms
              </ChakraLink>
              , one of Europe&apos;s leading e-learning companies. There, I set up the customer
              service department from scratch, managing over 1,000 requests weekly.
            </Text>

            <Text mb={4}>
              2017 marked a significant shift in my career when I became involved with{' '}
              <ChakraLink href="https://iex.ec/" isExternal color="blue.400">
                iExec
              </ChakraLink>
              . I led their crowdsale campaign, raising 10,000 BTC in three hours on{' '}
              <ChakraLink
                href="https://cointelegraph.com/news/iexec-closes-worlds-5th-largest-ico-with-12-mln-in-6-hours"
                isExternal
                color="blue.400"
              >
                April 19, 2017
              </ChakraLink>
              . I then served as Head of Communications for about three years, helping to grow the
              project&apos;s community and visibility.
            </Text>

            <Text mb={4}>
              In 2020, I started{' '}
              <ChakraLink href="https://strat.cc" isExternal color="blue.400">
                Strat
              </ChakraLink>
              , aiming to help build Web3 as a tech stack. During this time, I had the opportunity
              to teach Marketing Strategy at{' '}
              <ChakraLink href="https://www.em-lyon.com/en" isExternal color="blue.400">
                EM Lyon
              </ChakraLink>{' '}
              and contribute to various Web3 projects, including{' '}
              <ChakraLink href="https://kleros.io/" isExternal color="blue.400">
                Kleros
              </ChakraLink>
              .
            </Text>

            <Text mb={4}>
              That same year, I co-founded{' '}
              <ChakraLink href="https://ato.works/" isExternal color="blue.400">
                Āto
              </ChakraLink>
              , a company focused on providing IP licenses for NFTs and simplifying legal processes
              for the Web3 community. We developed several NFT-related applications used by artists,
              auction houses, and fine art galleries.
            </Text>

            <Text mb={4}>
              My experience in Web3 led me to roles as a Developer Relations Engineer for{' '}
              <ChakraLink href="https://aurora.dev/" isExternal color="blue.400">
                Aurora
              </ChakraLink>{' '}
              and{' '}
              <ChakraLink href="https://arthera.net/" isExternal color="blue.400">
                Arthera
              </ChakraLink>
              , where I worked on technical documentation, developer support, and hackathon
              organization.
            </Text>

            <Text mb={4}>
              In 2023, along with some colleagues and friends, I started the{' '}
              <ChakraLink href="https://w3hc.org/" isExternal color="blue.400">
                W3HC
              </ChakraLink>{' '}
              (Web3 Hackers Collective), a DAO focusing on Web3 integrations, mentoring, and
              learning. Currently, I&apos;m working on{' '}
              <ChakraLink href="https://github.com/w3hc/gov" isExternal color="blue.400">
                Gov
              </ChakraLink>
              , a DAO framework for regular users.
            </Text>

            <Text mb={4}>
              Throughout my career, I&apos;ve had the chance to be involved in various interesting
              projects. One highlight was winning first prize at the{' '}
              <ChakraLink href="https://hackforfreedom.org/#winners" isExternal color="blue.400">
                DAO Global Hackathon
              </ChakraLink>{' '}
              for the{' '}
              <ChakraLink
                href="https://github.com/allforclimate/concord"
                isExternal
                color="blue.400"
              >
                Concord
              </ChakraLink>{' '}
              project. More recently, I was a recipient of the{' '}
              <ChakraLink
                href="https://vote.optimism.io/retropgf/3/application/0x8ea2ef9ab0d04fe8fdb9edd5208abf0504eafb530378f52b6a401f2b26a9e233"
                isExternal
                color="blue.400"
              >
                RetroPGF Round 3
              </ChakraLink>{' '}
              for{' '}
              <ChakraLink href="https://github.com/w3hc/gov" isExternal color="blue.400">
                Gov
              </ChakraLink>
              .
            </Text>

            <Text mb={4}>
              My technical toolkit currently includes{' '}
              <ChakraLink href="https://soliditylang.org/" isExternal color="blue.400">
                Solidity
              </ChakraLink>
              ,{' '}
              <ChakraLink href="https://nodejs.org/" isExternal color="blue.400">
                Node.js
              </ChakraLink>
              ,{' '}
              <ChakraLink href="https://www.typescriptlang.org/" isExternal color="blue.400">
                TypeScript
              </ChakraLink>
              , and frameworks like{' '}
              <ChakraLink href="https://react.dev/" isExternal color="blue.400">
                React.js
              </ChakraLink>
              ,{' '}
              <ChakraLink href="https://nextjs.org/" isExternal color="blue.400">
                Next.js
              </ChakraLink>
              , and{' '}
              <ChakraLink href="https://nestjs.com/" isExternal color="blue.400">
                Nest.js
              </ChakraLink>
              . I recently implemented{' '}
              <ChakraLink
                href="https://github.com/julienbrg/game-of-go"
                isExternal
                color="blue.400"
              >
                the game of Go
              </ChakraLink>{' '}
              in Solidity. You can check out this and my other projects on my{' '}
              <ChakraLink href="https://github.com/julienbrg" isExternal color="blue.400">
                GitHub profile page
              </ChakraLink>
              .
            </Text>
          </Box>
        </VStack>
      </Container>
    </main>
  )
}
