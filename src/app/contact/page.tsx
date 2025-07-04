'use client'

import { Container, VStack, Heading, Link, Icon, Flex, Text, Box } from '@chakra-ui/react'
import {
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaGithub,
  FaCalendar,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa'
import { SiElement, SiFarcaster } from 'react-icons/si'
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'

const ContactPage = () => {
  const t = useTranslation()

  const contactLinks = [
    {
      name: t.contact.github,
      url: 'https://github.com/julienbrg',
      icon: FaGithub,
      username: 'julienbrg',
    },
    {
      name: t.contact.element,
      url: 'https://matrix.to/#/@julienbrg:matrix.org',
      icon: SiElement,
      username: 'julienbrg',
    },
    {
      name: t.contact.farcaster,
      url: 'https://warpcast.com/julien-',
      icon: SiFarcaster,
      username: 'julien-',
    },
    {
      name: t.contact.status,
      url: 'https://status.app/u/iwSACggKBkp1bGllbgM=#zQ3shmh1sbvE6qrGotuyNQB22XU5jTrZ2HFC8bA56d5kTS2fy',
      icon: HiOutlineStatusOnline,
      username: 'julien',
    },
    {
      name: t.contact.telegram,
      url: 'https://t.me/julienbrg',
      icon: FaTelegram,
      username: 'julienbrg',
    },
    {
      name: t.contact.discord,
      url: 'https://discordapp.com/users/julienbrg',
      icon: FaDiscord,
      username: 'julienbrg',
    },
    {
      name: t.contact.twitter,
      url: 'https://twitter.com/julienbrg',
      icon: FaTwitter,
      username: '@julienbrg',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/33630905448',
      icon: FaWhatsapp,
      username: 'Julien Béranger',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/julienberanger',
      icon: FaInstagram,
      username: '@julienberanger',
    },
    {
      name: t.contact.linkedin,
      url: 'https://www.linkedin.com/in/julienberanger/',
      icon: FaLinkedin,
      username: 'julienberanger',
    },
    {
      name: 'Email',
      url: 'mailto:julien@strat.cc',
      icon: FaEnvelope,
      username: 'julien@strat.cc',
    },
    {
      name: t.contact.schedule,
      url: 'https://calendly.com/julien_/30min?month=2024-12',
      icon: FaCalendar,
      username: t.contact.meetingDuration,
      primary: true,
    },
  ]

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={12} align="stretch">
        <Heading as="h3" size="xl" mb={8} textAlign="center">
          {t.contact.title}
        </Heading>

        <VStack spacing={6} align="stretch">
          {contactLinks.map(contact => (
            <Link
              key={contact.name}
              href={contact.url}
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              <Flex
                align="center"
                p={4}
                bg={contact.primary ? '#8c1c84' : 'gray.800'}
                borderRadius="lg"
                transition="all 0.2s"
                _hover={{
                  bg: contact.primary ? '#6d1566' : 'gray.700',
                  transform: 'translateY(-2px)',
                }}
              >
                <Icon
                  as={contact.icon}
                  boxSize={6}
                  color={contact.primary ? 'white' : '#45a2f8'}
                  mr={4}
                />
                <VStack align="flex-start" spacing={0}>
                  <Text fontWeight="bold" color="white">
                    {contact.name}
                  </Text>
                  <Text color={contact.primary ? 'whiteAlpha.800' : 'gray.400'} fontSize="sm">
                    {contact.username}
                  </Text>
                </VStack>
              </Flex>
            </Link>
          ))}
        </VStack>
        <VStack>
          <Box
            position="relative"
            width="200px"
            height="200px"
            overflow="hidden"
            borderRadius="lg"
            mt={30}
          >
            <Image
              priority
              layout="fill"
              objectFit="cover"
              alt="qr-code"
              src="/julienberanger-com-qr-code-image.png"
            />
          </Box>
          <Link href="https://julienberanger.com">https://julienberanger.com</Link>
        </VStack>
      </VStack>
    </Container>
  )
}

export default ContactPage
