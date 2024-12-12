'use client'

import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { shortenAddress } from '@/helpers/shorten-address'

const WalletButton: React.FC = () => {
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()

  return (
    <button
      className='flex h-12 w-[200px] items-center justify-center gap-2 rounded-full border border-primary'
      onClick={() => open()}
    >
      <Icon icon='solar:wallet-bold' className='text-xl' />
      <span className='text-[15px] font-bold'>
        {isConnected ? shortenAddress(address) : 'Connect Wallet'}
      </span>
    </button>
  )
}

export default WalletButton
