'use client'

import React, { ReactNode } from 'react'
import { sepolia } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type Config, WagmiProvider, cookieToInitialState } from 'wagmi'
import { PROJECT_ID } from '@/config/env'
import { wagmiAdapter } from '@/config/wagmi'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

if (!PROJECT_ID) throw new Error('Project ID is not defined')

const metadata = {
  name: 'appkit-example',
  description: 'AppKit Example',
  url: 'https://appkitexampleapp.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

createAppKit({
  adapters: [wagmiAdapter],
  projectId: PROJECT_ID,
  networks: [sepolia],
  defaultNetwork: sepolia,
  metadata,
  features: {
    analytics: true,
    email: false,
    socials: [],
    swaps: false,
  },
})

export default function Web3ModalProvider({
  children,
  cookies,
}: {
  children: ReactNode
  cookies?: string | null
}) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
