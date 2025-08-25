import { Metadata } from 'next';
import React from 'react'
import Portfolio from '../components/Portfolio';
export const metadata: Metadata = {
  title: "Portfolio"
};
const page = () => {
  return (
    <div className='py-32 lg:pl-[19%]'>
      <Portfolio/>
    </div >
    
  )
}

export default page