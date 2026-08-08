import { Metadata } from 'next';
import React from 'react'
import Contact from '../components/Contact';
export const metadata: Metadata = {
  title: "Contact Me"
};
const page = () => {
  return (
    <div className='px-2 py-10 lg:pl-14'>
      <Contact/> 
    </div>
  )
}

export default page