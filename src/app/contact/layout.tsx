import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Get in touch with Julien' },
  description: 'Get in touch with Julien for any questions or inquiries',

  openGraph: {
    title: 'Get in touch with Julien',
    description: 'Get in touch with Julien for any questions or inquiries',
    siteName: 'Julien Beranger',
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
    title: 'Get in touch with Julien',
    description: 'Get in touch with Julien for any questions or inquiries',
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
