import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bio | Julien Béranger',
  description: 'About Julien Béranger - Building Web3 since 2013.',

  openGraph: {
    title: 'Bio | Julien Béranger',
    description: 'About Julien Béranger - Building Web3 since 2013.',
    url: 'https://julienberanger.com/bio',
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
    title: 'Bio | Julien Béranger',
    description: 'Julien Béranger - Building Web3 since 2013.',
    images: ['/huangshan.png'],
  },
}

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
