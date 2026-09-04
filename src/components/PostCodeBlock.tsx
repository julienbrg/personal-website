'use client'

import { Box } from '@chakra-ui/react'
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

export default function PostCodeBlock({ language, code }: PostCodeBlockProps) {
  return (
    <Box my={8} borderWidth="1px" borderColor="border" borderRadius="lg" overflow="hidden">
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
