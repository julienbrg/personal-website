import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 | Julien Béranger',
  description: 'Un ensemble de techniques qui visent à rendre le web plus vérifiable et plus sûr.',

  openGraph: {
    title: 'Web3 | Julien Béranger',
    description:
      'Un ensemble de techniques qui visent à rendre le web plus vérifiable et plus sûr.',
    url: 'https://julienberanger.com/web3',
    siteName: 'Julien Béranger',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Huangshan',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Web3 | Julien Béranger',
    description:
      'Un ensemble de techniques qui visent à rendre le web plus vérifiable et plus sûr.',
    images: ['/huangshan.png'],
  },
}

export default function Web3Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
