import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Méditation souriante',
  description:
    "La méditation permet de réduire le stress, qui lui-même cause toutes sortes de maladies et de problèmes. Comment s'y prendre ?",

  openGraph: {
    title: 'Méditation souriante',
    description:
      "La méditation permet de réduire le stress, qui lui-même cause toutes sortes de maladies et de problèmes. Comment s'y prendre ?",
    url: 'https://julienberanger.com/meditation-souriante',
    siteName: 'Julien Béranger',
    images: [
      {
        url: '/huiyan-dashi.png',
        width: 1200,
        height: 630,
        alt: 'Méditation souriante',
      },
    ],
    locale: 'fr_FR',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Méditation souriante',
    description:
      "La méditation permet de réduire le stress, qui lui-même cause toutes sortes de maladies et de problèmes. Comment s'y prendre ?",
    images: ['/huiyan-dashi.png'],
  },
}

export default function MeditationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
