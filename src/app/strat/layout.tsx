import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strat | personal-website',
  description: 'Strat - Building Web3 since 2013. A Web3 development studio.',

  openGraph: {
    title: 'Strat | personal-website',
    description: 'Strat - Building Web3 since 2013. A Web3 development studio.',
    siteName: 'personal-website',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Strat - Building Web3 since 2013',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Strat | personal-website',
    description: 'Strat - Building Web3 since 2013. A Web3 development studio.',
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },
}

export default function StratLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
