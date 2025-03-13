import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Julien Béranger',
  description: 'Get in touch with Julien Béranger for any questions or inquiries',

  openGraph: {
    title: 'Contact | Julien Béranger',
    description: 'Get in touch with Julien Béranger for any questions or inquiries',
    url: 'https://julienberanger.com/contact',
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
    title: 'Contact | Julien Béranger',
    description: 'Get in touch with Julien Béranger for any questions or inquiries',
    images: ['/huangshan.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
