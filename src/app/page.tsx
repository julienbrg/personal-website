'use client'

import { Text, VStack, Box, Heading, SimpleGrid, Link as ChakraLink, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Button } from '@/components/ui/button'
import { useW3PK } from '@/context/W3PK'
import { useTranslation } from '@/hooks/useTranslation'
import { useState, useEffect } from 'react'
import { toaster } from '@/components/ui/toaster'
import { FiExternalLink } from 'react-icons/fi'
import { brandColors } from '@/theme'
import StylishIntro from '@/components/StylishIntro'
import ScrollingBanner from '@/components/ScrollingBanner'
import Partners from '@/components/Partners'

type ProjectKey =
  | 'w3pk'
  | 'avventura'
  | 'shebam'
  | 'affix'
  | 'gov'
  | 'rukh'
  | 'zkApi'
  | 'nftRegistry'
  | 'gameOfGo'
  | 'zhankai'
  | 'eip7702'
  | 'erc5560'
  | 'genji'
  | 'hardhatTemplate'
  | 'strat'
  | 'w3hc'

interface Project {
  key: ProjectKey
  title: string
  webUrl?: string
  githubUrl?: string
  labels: readonly string[]
}

// Project data
const projects: Project[] = [
  {
    key: 'w3pk',
    title: 'w3pk',
    webUrl: 'https://w3pk.w3hc.org',
    githubUrl: 'https://github.com/w3hc/w3pk',
    labels: ['Web3'],
  },
  {
    key: 'avventura',
    title: 'Avventura',
    webUrl: 'https://avventura.fun/',
    githubUrl: 'https://github.com/w3hc/avventura-v3',
    labels: ['AI', 'Web3'],
  },
  {
    key: 'shebam',
    title: 'Shebam',
    webUrl: 'https://shebam.w3hc.org/',
    githubUrl: 'https://github.com/w3hc/shebam',
    labels: ['Web3'],
  },
  {
    key: 'affix',
    title: 'Affix',
    webUrl: 'https://affix.w3hc.org/',
    githubUrl: 'https://github.com/julienbrg/affix-ui',
    labels: ['Web3'],
  },
  {
    key: 'gov',
    title: 'Gov',
    webUrl: 'https://w3hc.github.io/gov-docs/',
    githubUrl: 'https://github.com/w3hc/gov-crosschain',
    labels: ['Web3'],
  },
  {
    key: 'rukh',
    title: 'Rukh',
    webUrl: 'https://rukh.w3hc.org/',
    githubUrl: 'https://github.com/w3hc/rukh',
    labels: ['AI', 'Web3'],
  },
  {
    key: 'zkApi',
    title: 'ZK API',
    githubUrl: 'https://github.com/w3hc/zk-api',
    labels: ['AI', 'Web3'],
  },
  {
    key: 'nftRegistry',
    title: 'The NFT Registry',
    githubUrl: 'https://github.com/strat-web3/nft-registry-contracts',
    labels: ['Web3'],
  },
  {
    key: 'gameOfGo',
    title: 'Game of Go',
    githubUrl: 'https://github.com/julienbrg/game-of-go',
    labels: ['Web3'],
  },
  {
    key: 'zhankai',
    title: 'Zhankai',
    githubUrl: 'https://github.com/w3hc/zhankai',
    labels: ['AI', 'Web3'],
  },
  {
    key: 'eip7702',
    title: 'EIP-7702 Playground',
    githubUrl: 'https://github.com/w3hc/eip7702-playground',
    labels: ['Web3'],
  },
  {
    key: 'erc5560',
    title: 'ERC-5560',
    webUrl: 'https://eips.ethereum.org/EIPS/eip-5560',
    labels: ['Web3'],
  },
  {
    key: 'genji',
    title: 'Genji',
    githubUrl: 'https://github.com/w3hc/genji-passkey',
    labels: ['Web3'],
  },
  {
    key: 'hardhatTemplate',
    title: 'W3HC Hardhat Template',
    githubUrl: 'https://github.com/w3hc/w3hc-hardhat-template',
    labels: ['Web3'],
  },
  {
    key: 'strat',
    title: 'Strat',
    webUrl: 'https://julienberanger.com/strat',
    labels: ['Web3'],
  },
  {
    key: 'w3hc',
    title: 'W3HC',
    webUrl: 'https://github.com/w3hc',
    labels: ['Web3'],
  },
]

const shimmerStyles = `
  @keyframes colorWave {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .shimmer-text {
    background: linear-gradient(120deg, #3182ce 0%, #ffffff 25%, #805ad5 50%, #ffffff 75%, #3182ce 100%);
    background-size: 400% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: colorWave 10s ease-in-out infinite;
  }
`

export default function Home() {
  const { isAuthenticated, user, login, signMessage, deriveWallet, getAddress } = useW3PK()
  const t = useTranslation()
  const [primaryAddress, setPrimaryAddress] = useState<string>('')
  const [mainAddress, setMainAddress] = useState<string>('')
  const [openbarAddress, setOpenbarAddress] = useState<string>('')
  const [isLoadingMain, setIsLoadingMain] = useState(false)

  useEffect(() => {
    let cancelled = false

    const loadAddresses = async () => {
      if (!isAuthenticated || !user) {
        return
      }

      try {
        // Load MAIN address
        if (!mainAddress) {
          setIsLoadingMain(true)
          const mainWallet = await deriveWallet('STANDARD', 'MAIN')
          if (cancelled) return
          setMainAddress(mainWallet.address)
          setIsLoadingMain(false)
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Failed to load addresses:', error)
        }
      } finally {
        if (!cancelled) {
          setIsLoadingMain(false)
        }
      }
    }

    loadAddresses()

    return () => {
      cancelled = true
    }
  }, [isAuthenticated, user, mainAddress, openbarAddress, primaryAddress, deriveWallet, getAddress])

  const handleSignMessage = async (addressType: string, address: string) => {
    const message = `Sign this message from ${addressType} address: ${address}`

    try {
      const signature = await signMessage(message)
      if (signature) {
        toaster.create({
          title: 'Message Signed',
          description: `Signature: ${signature.substring(0, 20)}...`,
          type: 'success',
          duration: 5000,
        })
      }
    } catch (error) {
      console.error('Failed to sign message:', error)
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerStyles }} />
      <VStack gap={8} align="stretch" py={20}>
        <Box>
          <StylishIntro />
          <Box mt={10}>
            <ScrollingBanner text={t.home.bannerText} />
          </Box>

          <Box display="flex" justifyContent="center" mt={10} mb={20}>
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
              <NextLink href="/contact" className="shimmer-text">
                {t.home.contactButton}
              </NextLink>
            </Button>
          </Box>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="lg" mb={20} textAlign="center">
            {t.projects.heading}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {projects.map((project, index) => (
              <Box
                key={index}
                bg="gray.900"
                border="1px solid"
                borderColor="gray.700"
                borderRadius="lg"
                overflow="hidden"
                p={5}
                height="100%"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'lg',
                  borderColor: brandColors.accent,
                }}
                transition="all 0.3s ease"
              >
                <Heading as="h3" size="md" mb={2} color={brandColors.accent}>
                  {project.title}
                </Heading>
                <Text color="gray.400" mb={3}>
                  {t.projects.items[project.key]}
                </Text>
                <Box display="flex" gap={3} mb={3}>
                  {project.webUrl && (
                    <ChakraLink
                      href={project.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize="sm"
                      color={brandColors.accent}
                      display="flex"
                      alignItems="center"
                      gap={1}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {t.projects.webLabel} <Icon as={FiExternalLink} boxSize={3} />
                    </ChakraLink>
                  )}
                  {project.githubUrl && (
                    <ChakraLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontSize="sm"
                      color={brandColors.accent}
                      display="flex"
                      alignItems="center"
                      gap={1}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {t.projects.githubLabel} <Icon as={FiExternalLink} boxSize={3} />
                    </ChakraLink>
                  )}
                </Box>
                <Box display="flex" gap={2}>
                  {project.labels.map((label, idx) => (
                    <Box
                      key={idx}
                      as="span"
                      fontSize="xs"
                      fontWeight="bold"
                      px={2}
                      py={1}
                      borderRadius="full"
                      bg={label === 'Web3' ? brandColors.primary : brandColors.accent}
                      color="white"
                    >
                      {label}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Partners Section */}
        <Partners />

        <Box display="flex" justifyContent="center" mt={10}>
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
            <NextLink href="/contact" className="shimmer-text">
              {t.home.contactButton}
            </NextLink>
          </Button>
        </Box>
      </VStack>
    </>
  )
}
