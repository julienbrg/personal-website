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

export default function Header() {
  const { open } = useAppKit()
  const { isConnected, address } = useAppKitAccount()
  const { disconnect } = useDisconnect()
  const t = useTranslation()

  const [scrollPosition, setScrollPosition] = useState(0)

  const slideThreshold = 50
  const leftSlideValue =
    scrollPosition <= slideThreshold ? 0 : Math.min((scrollPosition - slideThreshold) * 0.5, 100)

  const rightSlideValue =
    scrollPosition <= slideThreshold ? 0 : Math.min((scrollPosition - slideThreshold) * 0.5, 100)

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
          transition="all 0.5s ease-in-out"
        >
          <Link href="/">
            <Heading as="h3" size="md" textAlign="center">
              Julien
            </Heading>
          </Link>
        </Box>

        <Flex
          gap={2}
          align="center"
          transform={`translateX(${rightSlideValue}px)`}
          opacity={Math.max(1 - rightSlideValue / 100, 0)}
          transition="all 0.5s ease-in-out"
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
            <MenuList>
              <Link href="/contact" color="white">
                <MenuItem fontSize="md">{t.navigation.contactUs}</MenuItem>
              </Link>
              <Link href="/chat" color="white">
                <MenuItem fontSize="md">Chat</MenuItem>
              </Link>
              <Link href="/bio" color="white">
                <MenuItem fontSize="md">Bio</MenuItem>
              </Link>
              {/* <Link href="/awesome-ethereum" color="white">
                <MenuItem fontSize="md">Resources</MenuItem>
              </Link> */}
            </MenuList>
          </Menu>
          <LanguageSelector />
        </Flex>
      </Flex>
    </Box>
  )
}
