'use client'

import { type ReactNode, memo } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeProvider } from '@/components/ui/color-mode'
import { system } from '@/theme/system'
import { W3pkProvider } from './W3PK'

// W3pkProvider used to be loaded with `ssr: false`, which meant the server
// rendered a spinner in place of the entire app: crawlers, link previews and
// AI assistants fetching a post URL got no content at all, only the JS bundle.
// The w3pk SDK imports and instantiates fine under Node (its browser APIs are
// only touched from effects and handlers), so the provider is rendered on the
// server like any other, and pages ship real HTML.
const ContextProvider = memo(function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <ColorModeProvider defaultTheme="dark">
      <ChakraProvider value={system}>
        <W3pkProvider>{children}</W3pkProvider>
      </ChakraProvider>
    </ColorModeProvider>
  )
})

export default ContextProvider
