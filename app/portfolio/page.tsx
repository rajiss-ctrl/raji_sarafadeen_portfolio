import { Metadata } from 'next';
import React from 'react'
import Portfolio from '../components/Portfolio';
export const metadata: Metadata = {
  title: "Portfolio"
};
const page = () => {
  return (
    <div className='py-10 px-4 lg:pb-10  lg:px-12'>
      <Portfolio/>
    </div >
    
  )
}

export default page