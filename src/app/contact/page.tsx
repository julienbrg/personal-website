'use client'

import {
  Container,
  VStack,
  Heading,
  Link,
  Icon,
  Flex,
  Text,
  Box,
  useDisclosure,
  CloseButton,
} from '@chakra-ui/react'
import { Dialog, Portal } from '@/components/ui/dialog'
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
  FaWeixin,
} from 'react-icons/fa'
import { SiElement, SiFarcaster, SiSignal } from 'react-icons/si'
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { useTranslation } from '@/hooks/useTranslation'
import { brandColors } from '@/theme'
import Image from 'next/image'

const ContactPage = () => {
  const t = useTranslation()
  const { open: isOpen, onOpen, onClose } = useDisclosure()

  const contactLinks = [
    {
      name: t.contact.linkedin,
      url: 'https://www.linkedin.com/in/julienberanger/',
      icon: FaLinkedin,
      username: 'julienberanger',
    },
    {
      name: t.contact.signal,
      url: 'https://signal.me/#eu/EDRSqKH2CGosoqANDz4epZDnhWtT9zN7D23gBryx8ZA1pL5rLRBF4779m2SvZxkY',
      icon: SiSignal,
      username: 'julienbrg.88',
    },
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
      name: 'WhatsApp',
      url: 'https://wa.me/33630905448',
      icon: FaWhatsapp,
      username: 'Julien Béranger',
    },
    {
      name: 'WeChat',
      url: null as string | null, // Special case for modal
      icon: FaWeixin,
      username: 'julienbrg',
      isWeChat: true,
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
      name: 'Instagram',
      url: 'https://www.instagram.com/julienberanger',
      icon: FaInstagram,
      username: '@julienberanger',
    },
    {
      name: 'Email',
      url: 'mailto:julien@strat.cc',
      icon: FaEnvelope,
      username: 'julien@strat.cc',
    },
    {
      name: t.contact.schedule,
      url: 'https://calendly.com/julien_/30min',
      icon: FaCalendar,
      username: t.contact.meetingDuration,
      primary: true,
    },
    {
      name: 'Cal.com',
      url: 'https://cal.com/julien-beranger/30min',
      icon: FaCalendar,
      username: t.contact.meetingDuration,
      primary: true,
    },
  ]

  const handleContactClick = (contact: (typeof contactLinks)[number]) => {
    if (contact.isWeChat) {
      onOpen()
    }
  }

  return (
    <Container maxW="container.md" py={20}>
      <VStack gap={12} align="stretch">
        <Heading as="h3" size="xl" mb={8} textAlign="center">
          {t.contact.title}
        </Heading>

        <VStack gap={6} align="stretch">
          {contactLinks
            .filter(contact => !contact.isWeChat)
            .map(contact => (
              <Link
                key={contact.name}
                href={contact.url!}
                target="_blank"
                rel="noopener noreferrer"
                display="block"
                width="full"
                _hover={{ textDecoration: 'none' }}
              >
                <Flex
                  align="center"
                  p={4}
                  bg={contact.primary ? brandColors.primary : 'gray.800'}
                  borderRadius="lg"
                  transition="all 0.2s"
                  _hover={{
                    bg: contact.primary ? brandColors.secondary : 'gray.700',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Icon
                    as={contact.icon}
                    boxSize={6}
                    color={contact.primary ? 'white' : brandColors.accent}
                    mr={4}
                  />
                  <VStack align="flex-start" gap={0}>
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

          {/* WeChat Card - Special handling */}
          {contactLinks
            .filter(contact => contact.isWeChat)
            .map(contact => (
              <Box
                key={contact.name}
                onClick={() => handleContactClick(contact)}
                cursor="pointer"
                _hover={{ textDecoration: 'none' }}
              >
                <Flex
                  align="center"
                  p={4}
                  bg="gray.800"
                  borderRadius="lg"
                  transition="all 0.2s"
                  _hover={{
                    bg: 'gray.700',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Icon as={contact.icon} boxSize={6} color={brandColors.accent} mr={4} />
                  <VStack align="flex-start" gap={0}>
                    <Text fontWeight="bold" color="white">
                      {contact.name}
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      {contact.username}
                    </Text>
                  </VStack>
                </Flex>
              </Box>
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
              fill
              style={{ objectFit: 'cover' }}
              alt="qr-code"
              src="/julienberanger-com-qr-code-image.png"
            />
          </Box>
          <Link href="https://julienberanger.com" target="_blank" rel="noopener noreferrer">
            https://julienberanger.com
          </Link>
        </VStack>

        {/* WeChat QR Code Modal */}
        <Dialog.Root
          open={isOpen}
          onOpenChange={(e: { open: boolean }) => (e.open ? null : onClose())}
          size="md"
        >
          <Portal>
            <Dialog.Backdrop bg="blackAlpha.800" />
            <Dialog.Positioner>
              <Dialog.Content bg="gray.800" borderRadius="xl">
                <Dialog.Header color="white" textAlign="center">
                  <Icon as={FaWeixin} mr={2} color={brandColors.accent} />
                  Julien on WeChat
                </Dialog.Header>
                <Dialog.Body pb={6}>
                  <VStack gap={4}>
                    <Box
                      position="relative"
                      width="300px"
                      height="300px"
                      overflow="hidden"
                      borderRadius="lg"
                      bg="white"
                      p={2}
                    >
                      <Image
                        src="/julien-wechat-qr-code.png"
                        alt="Julien WeChat QR Code"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                    <Text color="gray.300" textAlign="center" fontSize="sm">
                      Scan this QR code with WeChat
                    </Text>
                    <Text color={brandColors.accent} textAlign="center" fontWeight="bold">
                      julienbrg
                    </Text>
                  </VStack>
                </Dialog.Body>
                <Dialog.CloseTrigger asChild>
                  <CloseButton color="white" />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </VStack>
    </Container>
  )
}

export default ContactPage
