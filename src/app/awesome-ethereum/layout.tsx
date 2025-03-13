import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | Julien Béranger',
  description: 'A curated list of awesome Ethereum resources, libraries, tools and more',

  openGraph: {
    title: 'Resources | Julien Béranger',
    description: 'A curated list of awesome Ethereum resources, libraries, tools and more',
    url: 'https://julienberanger.com/awesome',
    siteName: 'Julien Béranger',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Huangshan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Awesome Ethereum | Julien Béranger',
    description: 'A curated list of awesome Ethereum resources, libraries, tools and more',
    images: ['/huangshan.png'],
  },
}

export default function AwesomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
