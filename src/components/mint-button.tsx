'use client'

import { useTransition } from 'react'
import toast from 'react-hot-toast'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useAppKitAccount } from '@reown/appkit/react'
import { API_URL } from '@/config/env'
import confirmMint from './confirm-mint-modal'

const MintButton: React.FC = () => {
  const { address } = useAppKitAccount()
  const [isMinting, startTransition] = useTransition()

  const handleMint = async () => {
    if (!(await confirmMint({}))) return

    startTransition(async () => {
      try {
        const response = await fetch(`${API_URL}/minting`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ address }),
        })

        if (response.ok) {
          const data = await response.json()

          if (data.success) {
            toast.success('Successfully minted an NFT')
          } else {
            toast.error(data.reason || data.message || 'Error minting an NFT')
          }
        } else {
          const error = await response.json()
          console.log('Error minting NFT: ', error)
        }
      } catch (error) {
        console.log(`Error minting NFT: `, error)
      }
    })
  }

  return (
    <button
      className='flex h-10 w-[120px] items-center justify-center gap-2 rounded-full bg-primary disabled:opacity-50'
      disabled={isMinting}
      onClick={handleMint}
    >
      {isMinting && <Icon icon='mingcute:loading-3-fill' className='animate-spin text-xl' />}
      <span className='text-[15px] font-bold'>{isMinting ? 'Minting' : 'Mint'}</span>
    </button>
  )
}

export default MintButton
