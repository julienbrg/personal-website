'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { useAppKit } from '@reown/appkit/react'
import { useAppKitAccount, useDisconnect } from '@reown/appkit/react'
import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import LanguageSelector from './LanguageSelector'
import { useTranslation } from '@/hooks/useTranslation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const { open } = useAppKit()
  const { isConnected, address } = useAppKitAccount()
  const { disconnect } = useDisconnect()
  const t = useTranslation()

  const [scrollPosition, setScrollPosition] = useState(0)

  // Make the slide effect more reactive by increasing the multiplier
  const leftSlideValue = Math.min(scrollPosition * 1.0, 100)
  const rightSlideValue = Math.min(scrollPosition * 1.0, 100)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleConnect = () => {
    try {
      open({ view: 'Connect' })
    } catch (error) {
      console.error('Connection error:', error)
    }
  }

  const handleDisconnect = () => {
    try {
      disconnect()
    } catch (error) {
      console.error('Disconnect error:', error)
    }
  }

  return (
    <Box as="header" py={4} position="fixed" w="100%" top={0} zIndex={10}>
      <Flex justify="space-between" align="center" px={4}>
        <Box
          transform={`translateX(-${leftSlideValue}px)`}
          opacity={Math.max(1 - leftSlideValue / 100, 0)}
          transition="all 0.2s ease-out"
        >
          <Link href="/">
            <Box
              width="40px"
              height="40px"
              borderRadius="full"
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/zyzkov-150-150.png"
                alt="Julien"
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
              />
            </Box>
          </Link>
        </Box>

        <Flex
          gap={2}
          align="center"
          transform={`translateX(${rightSlideValue}px)`}
          opacity={Math.max(1 - rightSlideValue / 100, 0)}
          transition="all 0.2s ease-out"
        >
          {!isConnected ? (
            <Button
              bg="#8c1c84"
              color="white"
              _hover={{
                bg: '#6d1566',
              }}
              onClick={handleConnect}
              size="sm"
            >
              {t.common.login}
            </Button>
          ) : (
            <>
              <Box transform="scale(0.85)" transformOrigin="right center">
                {/* <appkit-network-button /> */}
              </Box>
              <Button
                bg="#8c1c84"
                color="white"
                _hover={{
                  bg: '#6d1566',
                }}
                onClick={handleDisconnect}
                size="sm"
                ml={4}
              >
                {t.common.logout}
              </Button>
            </>
          )}
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="ghost"
              size="sm"
            />
            <MenuList minWidth="auto">
              <Link href="/contact" color="white">
                <MenuItem fontSize="md">{t.navigation.contactUs}</MenuItem>
              </Link>
              <Link href="/strat" color="white">
                <MenuItem fontSize="md">Services</MenuItem>
              </Link>
              {/* <Link href="/ia" color="white">
                <MenuItem fontSize="md">AI</MenuItem>
              </Link> */}
              <Link href="/bio" color="white">
                <MenuItem fontSize="md">{t.navigation.bio}</MenuItem>
              </Link>
              <Link href="/chat" color="white">
                <MenuItem fontSize="md">{t.navigation.chat}</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <LanguageSelector />
        </Flex>
      </Flex>
    </Box>
  )
}
