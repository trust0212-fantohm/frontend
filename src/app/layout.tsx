import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { headers } from 'next/headers'
import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import 'react-loading-skeleton/dist/skeleton.css'
import Web3ModalProvider from '@/providers/web3-modal-provider'
import './globals.css'

const urbanist = Urbanist({
  weight: ['400', '500', '600', '700'],
  variable: '--font-urbanist',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }: Readonly<PropsWithChildren>) {
  const cookies = (await headers()).get('cookie')
  return (
    <html lang='en'>
      <body className={`${urbanist.variable} antialiased`}>
        <Web3ModalProvider cookies={cookies}>{children}</Web3ModalProvider>
        <Toaster />
      </body>
    </html>
  )
}