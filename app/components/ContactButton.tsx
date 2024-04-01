'use client'
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';



const ContactButton = () => {
  const router = useRouter()

  return (
    <Link className='bg-indigo-500 text-white py-3 px-5 rounded-full hover:opacity-75 transition hover:cursor-pointer w-36' href='mailto:buxincorporated@gmail.com'>
      CONTACT US
    </Link>
  );
};

export default ContactButton;
