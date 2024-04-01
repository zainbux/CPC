import React from 'react'
import ContactButton from './ContactButton'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='pt-36 md:mx-auto justify-center block lg:flex mx-10 md:px-20 gap-x-14 lg:h-[600px] '>
        
        <div className=' mb-20'>
           <h1 className='text-5xl lg:text-7xl font-bold'>WELCOME TO</h1>
           <span className='text-5xl text-indigo-700 font-bold'>BEST CPC</span>  
           <p className='my-5 md:pr-16'>At Prime CPC we are all about driving the highest quality Traffic at scale.</p>
            <ContactButton/>
        </div>

        <div className='mb-20'>
            <h1 className='text-3xl md:text-5xl font-bold text-center mb-10'>Our results in numbers</h1>
                
            <div className='md:flex gap-4 text-6xl font-bold'>
                <div>
                    <div className='flex justify-center'>
                        <p>1.7</p><span className='text-indigo-700 '>M+</span>
                    </div>
                    <p className='text-lg px-5 text-center mt-4'>In Ad spend per year</p>                        
                </div>
                <div>
                    <div className='flex justify-center'>
                        <p>10</p><span className='text-indigo-700'>+</span>
                    </div>
                    <p className='text-lg px-5 text-center mt-4'>Networks we work with</p>                        
                </div>
                <div>
                    <div className='flex justify-center'>
                        <p>3.9</p><span className='text-indigo-700'>M+</span>
                    </div>
                    <p className='text-lg px-5 text-center mt-4'>In revenue per year</p>                        
                </div>

            </div>
        </div>

    </div>
  )
}

export default Hero