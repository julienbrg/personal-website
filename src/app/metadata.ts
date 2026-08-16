import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://w3pk.w3hc.org'),

  title: 'Julien Beranger',
  description: "Julien's projects, partners, bio and blog posts",

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
