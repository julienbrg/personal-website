'use client'

import { useEffect, useId, useState } from 'react'
import { Box } from '@chakra-ui/react'
import PostCodeBlock from '@/components/PostCodeBlock'
import { brandColors } from '@/theme'

// Mermaid is heavy and touches the DOM, so it is only pulled in (and set up
// once) when a post actually contains a diagram.
let mermaidReady: Promise<typeof import('mermaid').default> | null = null

function loadMermaid() {
  mermaidReady ??= import('mermaid').then(({ default: mermaid }) => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: 'base',
      darkMode: true,
      fontFamily: 'inherit',
      themeVariables: {
        background: 'transparent',
        primaryColor: brandColors.primary,
        primaryTextColor: brandColors.white,
        primaryBorderColor: brandColors.accent,
        lineColor: brandColors.accent,
        textColor: brandColors.white,
        clusterBkg: 'rgba(255, 255, 255, 0.04)',
        clusterBorder: brandColors.accent,
        edgeLabelBackground: '#1a1a1a',
      },
    })
    return mermaid
  })
  return mermaidReady
}

export default function MermaidDiagram({ code }: { code: string }) {
  // Mermaid uses the id as a DOM id, so strip the colons React puts in it.
  const id = `mermaid-${useId().replace(/:/g, '')}`
  const [svg, setSvg] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false

    loadMermaid()
      .then(mermaid => mermaid.render(id, code))
      .then(({ svg }) => !cancelled && setSvg(svg))
      .catch(() => !cancelled && setFailed(true))

    return () => {
      cancelled = true
    }
  }, [id, code])

  // A diagram that doesn't parse is still worth reading as source.
  if (failed) return <PostCodeBlock code={code} />

  return (
    <Box
      my={10}
      p={{ base: 4, md: 6 }}
      borderWidth="1px"
      borderColor="border"
      borderRadius="lg"
      overflowX="auto"
      textAlign="center"
      minH={svg ? undefined : '120px'}
      css={{ '& svg': { maxWidth: '100%', height: 'auto', margin: '0 auto' } }}
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  )
}
