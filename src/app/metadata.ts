import { Metadata } from 'next'
import { siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  // Was pointing at w3pk.w3hc.org (a different site), which made every
  // relative OG image resolve to the wrong origin in link previews.
  metadataBase: new URL(siteUrl),

  // Post pages set only their own title; the template appends the site name,
  // so a search result reads "Rukh — Roadmap — Julien Beranger".
  title: {
    default: 'Julien Beranger',
    template: '%s — Julien Beranger',
  },
  description: "Julien's projects, partners, bio and blog posts",

  // Machine-readable entry points, advertised in the <head> of every page so
  // any crawler or agent finds them without knowing the conventions: the RSS
  // feed for updates, and the llms.txt index for a plain-markdown map of the
  // whole site. No canonical here — this metadata is inherited by every page,
  // and a root canonical would mark each sub-page a copy of the home page.
  alternates: {
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
      'text/plain': `${siteUrl}/llms.txt`,
    },
  },

  keywords: ['w3pk', 'WebAuthn', 'Next.js', 'Web3', 'Ethereum'],
  authors: [{ name: 'W3HC', url: 'https://github.com/w3hc' }],

  openGraph: {
    title: 'Julien Beranger',
    description: "Julien's projects, partners, bio and blog posts",
    siteName: 'Julien Beranger',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: "Julien's projects, partners, bio and blog posts",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Julien Beranger',
    description: "Julien's projects, partners, bio and blog posts",
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'your-google-site-verification',
  },
}
