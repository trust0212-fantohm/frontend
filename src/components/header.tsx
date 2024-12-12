'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { useAppKitAccount } from '@reown/appkit/react'

const WalletButton = dynamic(() => import('./wallet-button'), { ssr: false })
const MintButton = dynamic(() => import('./mint-button'), { ssr: false })

const Header: React.FC = () => {
  const { isConnected } = useAppKitAccount()
  return (
    <header className='border-b border-[#8A8AA0]/40'>
      <div className='container flex h-20 items-center justify-end gap-4'>
        {isConnected && <MintButton />}
        <WalletButton />
      </div>
    </header>
  )
}

export default Header
