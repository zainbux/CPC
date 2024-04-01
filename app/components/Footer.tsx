'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaMailBulk } from 'react-icons/fa';

type Props = {};

const Footer = (props: Props) => {

  const router = useRouter()

  return (
    <div className=' bg-indigo-700 h-[20vh] justify-center flex flex-col items-center gap-3 md:flex-row md:gap-20 py-3 px-5'>
        <div className='flex gap-5'>
          <FaMailBulk className='text-5xl text-white'/>
        
          <h1 className='md:text-2xl lg:text-4xl font-bold text-white mb-5 md:mb-0'>Interested in working with us? Contact us now</h1>
        </div>
        
        <button className='bg-slate-200 text-indigo-700 font-bold py-2 px-5 rounded-full hover:opacity-75 transition hover:cursor-pointer w-40 ' type="button" onClick={() => router.push('mailto:buxincorporated@gmail.com')}>
          CONTACT US
        </button>

    </div>
  )
}

export default Footer;
