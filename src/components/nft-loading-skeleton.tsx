import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const NFTLoadingSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor='#5a5a6b' highlightColor='#7c7c8d' inline duration={2}>
      <div className='space-y-5 rounded-[20px] bg-[#343444] p-5'>
        <Skeleton borderRadius={20} className='block aspect-square' />
        <div className='space-y-4'>
          <Skeleton height={26} className='block' />
          <div className='flex items-center gap-3'>
            <Skeleton height={44} width={44} borderRadius={15} className='block' />
            <div className='space-y-0.5'>
              <Skeleton height={18} width={50} className='block' />
              <Skeleton height={20} width={100} className='block' containerClassName='block' />
            </div>
            <Skeleton
              height={20}
              width={80}
              borderRadius={8}
              containerClassName='ml-auto'
              className='block'
            />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default NFTLoadingSkeleton
