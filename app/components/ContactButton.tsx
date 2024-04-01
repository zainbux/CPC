'use client'
import { redirect, useRouter } from 'next/navigation';



const ContactButton = () => {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('mailto:zainbux99@gmail.com')}>
      Dashboard
    </button>
  );
};

export default ContactButton;


// className='bg-indigo-500 text-white py-3 px-5 rounded-full hover:opacity-75 transition hover:cursor-pointer w-36 '
