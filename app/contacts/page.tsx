import { Metadata } from 'next';
import React from 'react'
import Contact from '../components/Contact';
export const metadata: Metadata = {
  title: "Contact Me"
};
const page = () => {
  return (
    <div className='py-32 lg:pl-[19%]'>
      <Contact/> 
    </div>
  )
}

export default page