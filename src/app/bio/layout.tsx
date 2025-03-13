import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bio | Genji',
  description: 'About Julien Béranger - Web3 developer, educator, and entrepreneur',

  openGraph: {
    title: 'Bio | Genji',
    description: 'About Julien Béranger - Web3 developer, educator, and entrepreneur',
    url: 'https://genji-app.netlify.app/bio',
    siteName: 'Genji',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Genji Web3 Application - Bio Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bio | Genji',
    description: 'About Julien Béranger - Web3 developer, educator, and entrepreneur',
    images: ['/huangshan.png'],
  },
}

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
