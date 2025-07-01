import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelligence Artificielle | Julien Béranger',
  description:
    'Services IA pour enseignants et entreprises - Formation, intégration et développement de solutions sur mesure',

  openGraph: {
    title: 'Intelligence Artificielle | Julien Béranger',
    description:
      'Services IA pour enseignants et entreprises - Formation, intégration et développement de solutions sur mesure',
    url: 'https://julienberanger.com/ia',
    siteName: 'Julien Béranger',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Services IA - Julien Béranger',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Intelligence Artificielle | Julien Béranger',
    description:
      'Services IA pour enseignants et entreprises - Formation, intégration et développement de solutions sur mesure',
    images: ['/huangshan.png'],
  },
}

export default function IALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
