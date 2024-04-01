import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className=''>
        <Link href={'/'}>
        <div className='flex gap-3 items-center justify-center font-bold text-3xl'>
         <h1>BEST</h1><span className='text-indigo-700'>CPC</span>
        </div>
        <p className='font-bold'>TRAFFIC ARBITRAGE</p>
        </Link>
    </div>
  )
}

export default Logo