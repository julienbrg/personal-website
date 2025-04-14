import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume | Julien Béranger',
  description: 'Professional resume of Julien Béranger - Building Web3 since 2013.',

  openGraph: {
    title: 'Resume | Julien Béranger',
    description: 'Professional resume of Julien Béranger - Building Web3 since 2013.',
    url: 'https://julienberanger.com/resume',
    siteName: 'Julien Béranger',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Julien Béranger Resume',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Resume | Julien Béranger',
    description: 'Professional resume of Julien Béranger - Building Web3 since 2013.',
    images: ['/huangshan.png'],
  },
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
