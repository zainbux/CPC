import React from 'react'
import ContactButton from './ContactButton'
import Logo from './Logo'

type Props = {}

export const NavBar = (props: Props) => {
  return (
    <div className='flex justify-center md:justify-between h-[100px] drop-shadow-xl shadow-lg md:px-32 items-center'>
        <div>
            <Logo/>
        </div>
        <div className='hidden md:block'>
            <ContactButton/>
        </div>
    </div>
  )
}