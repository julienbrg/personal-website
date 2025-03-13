import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Genji',
  description: 'Get in touch with the Genji team for any questions or inquiries',

  openGraph: {
    title: 'Contact Us | Genji',
    description: 'Get in touch with the Genji team for any questions or inquiries',
    url: 'https://genji-app.netlify.app/contact',
    siteName: 'Genji',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Genji Web3 Application - Contact Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Genji',
    description: 'Get in touch with the Genji team for any questions or inquiries',
    images: ['/huangshan.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
