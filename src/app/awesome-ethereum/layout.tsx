import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Awesome Ethereum | Genji',
  description: 'A curated list of awesome Ethereum resources, libraries, tools and more',

  openGraph: {
    title: 'Awesome Ethereum | Genji',
    description: 'A curated list of awesome Ethereum resources, libraries, tools and more',
    url: 'https://genji-app.netlify.app/awesome',
    siteName: 'Genji',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Genji Web3 Application - Awesome Ethereum Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Awesome Ethereum | Genji',
    description: 'A curated list of awesome Ethereum resources, libraries, tools and more',
    images: ['/huangshan.png'],
  },
}

export default function AwesomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
