'use client'

import { useEffect, useState } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { LuCheck, LuCopy } from 'react-icons/lu'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import rust from 'react-syntax-highlighter/dist/esm/languages/prism/rust'
import solidity from 'react-syntax-highlighter/dist/esm/languages/prism/solidity'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'

// Only the grammars posts actually use are registered, so the bundle stays small.
const grammars = {
  bash,
  go,
  javascript,
  jsx,
  markdown,
  python,
  rust,
  solidity,
  tsx,
  typescript,
}

for (const [name, grammar] of Object.entries(grammars)) {
  SyntaxHighlighter.registerLanguage(name, grammar)
}

// `sh`, `shell`, `py`, `md`, `sol`, `js` and `ts` ship with the grammars above;
// these are the fence tags we write that Prism doesn't already know about.
SyntaxHighlighter.alias({
  bash: ['zsh', 'console'],
  go: ['golang'],
  rust: ['rs'],
})

interface PostCodeBlockProps {
  /** Fence tag, e.g. `ts`. Unknown or missing tags render as plain text. */
  language?: string
  code: string
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      // Clipboard access can be denied (insecure context, permissions); nothing to do.
    }
  }

  return (
    <IconButton
      aria-label={copied ? 'Copied' : 'Copy code'}
      onClick={copy}
      position="absolute"
      top={2}
      right={2}
      size="xs"
      variant="ghost"
      color="whiteAlpha.800"
      opacity={{ base: 0.8, md: 0.5 }}
      _hover={{ opacity: 1, bg: 'whiteAlpha.200' }}
      _focusVisible={{ opacity: 1 }}
    >
      {copied ? <LuCheck /> : <LuCopy />}
    </IconButton>
  )
}

export default function PostCodeBlock({ language, code }: PostCodeBlockProps) {
  return (
    <Box
      position="relative"
      my={8}
      borderWidth="1px"
      borderColor="border"
      borderRadius="lg"
      overflow="hidden"
    >
      <CopyButton code={code} />
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: '1.25rem',
          borderRadius: 0,
          fontSize: '0.875rem',
          lineHeight: 1.7,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  )
}
