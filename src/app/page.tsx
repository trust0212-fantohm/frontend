'use client'

import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import Header from '@/components/header'
import NFT from '@/components/nft'
import NFTLoadingSkeleton from '@/components/nft-loading-skeleton'
import { TNft } from '@/types/asset'

const query = gql`
  query {
    nfts {
      tokenId
      owner {
        id
      }
    }
  }
`

export default function Home() {
  const { data, loading } = useQuery(query)
  const nfts = useMemo(() => (data?.nfts ? data.nfts : []), [data])

  return (
    <>
      <Header />
      <main className='py-10'>
        <div className='container'>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {loading ? (
              [...Array(4)].map((_, i) => <NFTLoadingSkeleton key={`loading-nft-${i}`} />)
            ) : nfts && nfts.length > 0 ? (
              nfts.map((nft: TNft, i: number) => <NFT nft={nft} key={`nft-${i}`} />)
            ) : (
              <p className='col-span-4 text-center'>No assets found</p>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
