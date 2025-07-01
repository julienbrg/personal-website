import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Move 78 | Julien Béranger',
  description: "Un article sur l'intelligence artificielle - Bientôt disponible",

  openGraph: {
    title: 'Move 78 | Julien Béranger',
    description: "Un article sur l'intelligence artificielle - Bientôt disponible",
    url: 'https://julienberanger.com/move-78',
    siteName: 'Julien Béranger',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Move 78 - Article IA',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Move 78 | Julien Béranger',
    description: "Un article sur l'intelligence artificielle - Bientôt disponible",
    images: ['/huangshan.png'],
  },
}

export default function Move78Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
