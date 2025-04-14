'use client'

import {
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  useToast,
  Center,
  Spinner,
} from '@chakra-ui/react'
import { useTranslation } from '@/hooks/useTranslation'
import { useState, useEffect } from 'react'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

export default function ResumePage() {
  const t = useTranslation()
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(true)

  // You'll need to add this PDF to your public folder
  const resumePdfPath = '/resume-julien-beranger.pdf'

  useEffect(() => {
    // Simulate PDF loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleDownload = () => {
    try {
      // Create a link element to trigger download
      const link = document.createElement('a')
      link.href = resumePdfPath
      link.download = 'resume-julien-beranger.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast({
        title: 'Download started',
        description: 'Your download should begin shortly.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      console.error('Download error:', error)
      toast({
        title: 'Download failed',
        description: 'There was a problem downloading the resume.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <main>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" mb={6}>
            {t.resume?.title || 'Professional Resume'}
          </Heading>

          <Flex justifyContent="center" gap={4} mb={6}>
            <Button
              leftIcon={<FaDownload />}
              onClick={handleDownload}
              bg="#45a2f8"
              color="white"
              _hover={{ bg: '#2589e6' }}
            >
              {t.resume?.download || 'Download PDF'}
            </Button>
            <Button
              as="a"
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaExternalLinkAlt />}
              variant="outline"
              _hover={{ bg: 'rgba(69, 162, 248, 0.1)' }}
            >
              {t.resume?.openInNewTab || 'Open in New Tab'}
            </Button>
          </Flex>

          <Box width="100%" height="80vh" borderRadius="md" overflow="hidden" boxShadow="lg">
            {isLoading ? (
              <Center height="100%" bg="gray.800">
                <Spinner size="xl" color="#45a2f8" thickness="4px" />
              </Center>
            ) : (
              <iframe
                src={`${resumePdfPath}#view=FitH`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Julien Béranger Resume"
              />
            )}
          </Box>
        </VStack>
      </Container>
    </main>
  )
}
