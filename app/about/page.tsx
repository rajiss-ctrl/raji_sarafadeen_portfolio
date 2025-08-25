import { Metadata } from 'next';
import React from 'react'
import About from '../components/About';


export const metadata: Metadata = {
  title: "About"
};
const page = () => {
  return (
    <>
      <About/>
    </>
  )
}

export default page