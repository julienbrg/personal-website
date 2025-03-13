import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat | Julien Béranger',
  description: "Chat with Julien Béranger's assistant",

  openGraph: {
    title: 'Chat | Julien Béranger',
    description: "Chat with Julien Béranger's assistant",
    url: 'https://julienberanger.com/chat',
    siteName: 'Julien Béranger',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: "Chat with Julien's assistant",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chat | Julien Béranger',
    description: "Chat with Julien Béranger's assistant",
    images: ['/huangshan.png'],
  },
}

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
