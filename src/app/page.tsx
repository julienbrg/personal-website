'use client'

import {
  Container,
  Text,
  useToast,
  Button,
  Tooltip,
  VStack,
  Heading,
  Box,
  SimpleGrid,
  Link,
  Flex,
  HStack,
  Tag,
  Divider,
  Center,
  ButtonGroup,
} from '@chakra-ui/react'
import { useAppKitAccount, useAppKitNetwork, useAppKitProvider } from '@reown/appkit/react'
import { BrowserProvider, parseEther, formatEther } from 'ethers'
import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import StylishIntro from '@/components/StylishIntro'

// Project data
const projects = [
  {
    title: 'Strat',
    url: 'https://strat.cc',
    desc: 'Building Web3 since 2013',
    labels: ['Web3'],
  },
  {
    title: 'W3HC',
    url: 'https://w3hc.org/',
    desc: 'The Web3 Hackers Collective',
    labels: ['Web3'],
  },
  {
    title: 'Gov',
    url: 'https://w3hc.github.io/gov-docs/',
    desc: 'DAOs for regular users',
    labels: ['Web3'],
  },
  {
    title: 'The NFT Registry',
    url: 'https://github.com/strat-web3/nft-registry-contracts',
    desc: 'An NFT Registry API for an institutional partner',
    labels: ['Web3'],
  },
  {
    title: 'Game of Go',
    url: 'https://github.com/julienbrg/game-of-go',
    desc: 'Solidity implementation of the game of Go',
    labels: ['Web3'],
  },
  {
    title: 'Zhankai',
    url: 'https://github.com/w3hc/zhankai',
    desc: 'CLI tool for exporting repository content for LLM processing',
    labels: ['AI'],
  },
  {
    title: 'Rukh',
    url: 'https://rukh.w3hc.org/',
    desc: 'Nest.js-based AI agent toolkit',
    labels: ['AI'],
  },
  {
    title: 'EIP-7702 Playground',
    url: 'https://github.com/w3hc/eip7702-playground',
    desc: 'Demonstrates EIP-7702',
    labels: ['Web3'],
  },
  {
    title: 'ERC-5560',
    url: 'https://eips.ethereum.org/EIPS/eip-5560',
    desc: 'ERC-5560: Redeemable NFTs',
    labels: ['Web3'],
  },
  {
    title: 'Avventura',
    url: 'https://github.com/strat-web3/avventura',
    desc: 'Web3 social RPG',
    labels: ['Web3'],
  },
  {
    title: 'Myst',
    url: 'https://github.com/w3hc/myst-api',
    desc: 'NFT-gated content',
    labels: ['Web3'],
  },
  {
    title: 'Genji',
    url: 'https://github.com/w3hc/genji',
    desc: 'A Next.js Web3 app template',
    labels: ['Web3'],
  },
  {
    title: 'W3HC Hardhat Template',
    url: 'https://github.com/w3hc/w3hc-hardhat-template',
    desc: 'A comprehensive Solidity contract development environment using Hardhat.',
    labels: ['Web3'],
  },
  // {
  //   title: 'Pattini',
  //   url: 'https://github.com/marketplace/actions/pattini-app',
  //   desc: 'Automatic rewards for the contributors of a GitHub project',
  //   labels: ['Web3'],
  // },
  // {
  //   title: 'Ouf',
  //   url: 'https://ethglobal.com/showcase/ouf-ya5wi',
  //   desc: "Create and personalize an AI assistant tailored to your organization's needs.",
  //   labels: ['AI'],
  // },
  // {
  //   title: 'Legislatives.fun',
  //   url: 'https://legislatives.fun/',
  //   desc: 'An experiment in AI governance in the context of the 2024 legislative election',
  //   labels: ['AI', 'Web3'],
  // },
]

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [txLink, setTxLink] = useState<string>()
  const [txHash, setTxHash] = useState<string>()
  const [balance, setBalance] = useState<string>('0')

  const { address, isConnected } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('eip155')
  const toast = useToast()
  const t = useTranslation()

  useEffect(() => {
    const checkBalance = async () => {
      if (address && walletProvider) {
        try {
          const provider = new BrowserProvider(walletProvider as any)
          const balance = await provider.getBalance(address)
          setBalance(formatEther(balance))
        } catch (error) {
          console.error('Error fetching balance:', error)
        }
      }
    }

    checkBalance()
  }, [address, walletProvider])

  const handleSend = async () => {
    setTxHash('')
    setTxLink('')
    if (!address || !walletProvider) {
      toast({
        title: t.common.error,
        description: t.home.notConnected,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }

    setIsLoading(true)
    try {
      const provider = new BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()

      const tx = await signer.sendTransaction({
        to: address,
        value: parseEther('0.0001'),
      })

      const receipt = await tx.wait(1)

      setTxHash(receipt?.hash)
      setTxLink('https://sepolia.etherscan.io/tx/' + receipt?.hash)

      toast({
        title: t.common.success,
        description: `${t.home.transactionSuccess}: 0.0001 ETH to ${address}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      console.error('Transaction failed:', error)
      toast({
        title: t.home.transactionFailed,
        description: error instanceof Error ? error.message : 'Unknown error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const hasEnoughBalance = Number(balance) >= 0.0001

  return (
    <Container maxW="container.lg" py={16}>
      {/* Bio Section */}
      <VStack spacing={16} mb={16} align="stretch">
        <Box>
          {/* <Heading as="h1" size="xl" mb={10} textAlign="center">
            Julien Béranger
          </Heading> */}

          {/* Enhanced Intro Component */}
          <StylishIntro />

          {/* Action Buttons */}
          <Center mt={10}>
            <ButtonGroup spacing={6}>
              <Button
                as={NextLink}
                href="/chat"
                size="md"
                colorScheme="blue"
                variant="outline"
                boxShadow="md"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.3s ease"
              >
                Chat with my assistant
              </Button>
              <Button
                as={NextLink}
                href="/contact"
                size="md"
                colorScheme="purple"
                variant="outline"
                boxShadow="md"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                  bg: 'rgba(159, 122, 234, 0.1)',
                }}
                transition="all 0.3s ease"
              >
                Let&apos;s talk directly!
              </Button>
            </ButtonGroup>
          </Center>
        </Box>

        {/* Projects Section */}
        <Box pt={6}>
          <Heading as="h3" size="lg" mb={10} textAlign="center">
            {/* A selection of personal projects */}
            Projects
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {projects.map((project, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: 'lg',
                  borderColor: 'blue.400',
                }}
                transition="all 0.3s ease"
              >
                <Heading as="h3" size="md" mb={2}>
                  <Link href={project.url} isExternal color="blue.400">
                    {project.title} <ExternalLinkIcon mx="2px" />
                  </Link>
                </Heading>
                <Text color="gray.400" mb={3}>
                  {project.desc}
                </Text>
                <HStack spacing={2}>
                  {project.labels.map((label, idx) => (
                    <Tag
                      key={idx}
                      size="sm"
                      variant="solid"
                      colorScheme={label === 'Web3' ? 'purple' : 'teal'}
                      borderRadius="full"
                    >
                      {label}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>

      {/* Original Send Transaction Section */}
      <Box mt={16} pt={8}>
        <VStack spacing={4} align="center">
          {/* <Text mb={4}>{t.home.title}</Text> */}
          {isConnected && (
            <Tooltip
              label={!hasEnoughBalance ? t.home.insufficientBalance : ''}
              isDisabled={hasEnoughBalance}
              hasArrow
              bg="black"
              color="white"
              borderWidth="1px"
              borderColor="red.500"
              borderRadius="md"
              p={2}
            >
              <Button
                onClick={handleSend}
                isLoading={isLoading}
                loadingText={t.common.loading}
                bg="#45a2f8"
                color="white"
                _hover={{
                  bg: '#3182ce',
                }}
                isDisabled={!hasEnoughBalance}
              >
                {t.home.sendEth}
              </Button>
            </Tooltip>
          )}
          {txHash && isConnected && (
            <Text py={4} fontSize="14px" color="#45a2f8">
              <Link href={txLink ? txLink : ''} isExternal>
                {txHash}
              </Link>
            </Text>
          )}
        </VStack>
      </Box>
    </Container>
  )
}
