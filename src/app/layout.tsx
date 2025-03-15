import { Inter } from 'next/font/google'
import './globals.css'
import ContextProvider from '@/context'
import Header from '@/components/Header'
import { Box } from '@chakra-ui/react'
import { metadata } from './metadata'
import { LanguageProvider } from '@/context/LanguageContext'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZE4YHJFL28"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZE4YHJFL28');
            `,
          }}
        />
        <ContextProvider>
          <LanguageProvider>
            <Header />
            <Box pt="72px">{children}</Box>
          </LanguageProvider>
        </ContextProvider>
      </body>
    </html>
  )
}
