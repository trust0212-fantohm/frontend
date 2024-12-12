'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'
import { useAppKitAccount } from '@reown/appkit/react'
import AssetImage from '@/assets/images/asset.png'
import AvatarImage from '@/assets/images/avatar.png'
import { shortenAddress } from '@/helpers/shorten-address'
import { TNft } from '@/types/asset'

const NFT: React.FC<{ nft: TNft }> = ({ nft }) => {
  const { address } = useAppKitAccount()
  const isMine = useMemo(
    () => nft.owner.id.toLowerCase() === address?.toLowerCase(),
    [nft.owner.id, address],
  )

  return (
    <div className='relative rounded-[20px] bg-[#343444] p-5'>
      {isMine && (
        <div className='absolute left-8 top-[34px] z-10 rounded-lg bg-white px-4 py-[3px] text-sm/[22px] font-bold text-[#343444] shadow'>
          My NFT
        </div>
      )}
      <Image src={AssetImage} alt='' className='aspect-square rounded-[20px] object-cover' />
      <div className='mt-5 space-y-4'>
        <h3 className='truncate text-lg/[26px] font-bold'>Token ID: {nft.tokenId}</h3>
        <div className='flex items-center gap-3'>
          <div className='size-11 overflow-hidden rounded-[15px] bg-[#7a798a]'>
            <Image src={AvatarImage} alt='' className='h-full w-full object-cover' />
          </div>
          <div className='space-y-0.5'>
            <p className='text-[13px]/5 text-[#8a8aa0]'>Creator</p>
            <p className='text-[15px]/[22px] font-bold text-[#ebebeb]'>
              {shortenAddress(nft.owner.id)}
            </p>
          </div>
          <div className='ml-auto rounded-lg bg-primary px-3 py-0.5 text-xs/5 font-bold'>
            Sepolia
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFT
