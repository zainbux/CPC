'use client'
import { redirect, useRouter } from 'next/navigation';



const ContactButton = () => {
  const router = useRouter()

  return (
    <button className='bg-indigo-500 text-white py-3 px-5 rounded-full hover:opacity-75 transition hover:cursor-pointer w-36' type="button" onClick={() => router.push('mailto:buxincorporated@gmail.com')}>
      CONTACT US
    </button>
  );
};

export default ContactButton;
