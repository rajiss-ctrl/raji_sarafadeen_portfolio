import { Metadata } from 'next';
import React from 'react'
import RecentProjects from '../components/RecentProjects';
export const metadata: Metadata = {
  title: "Portfolio"
};
const page = () => {
  return (
    <div className='py-32 lg:pl-[19%]'>
      <h1 className="lg:pl-[19%] text-6xl lg:text-7xl font-bold absolute top-40 left-0 opacity-5 text-gray-400">PORTFOLIO</h1>
          <div className="pl-4 lg:pl-0 lg:w-[320px]">
            <h1 className="font-manrope relative leading-tight text-3xl lg:text-5xl font-semibold">
              PORTFOLIO
            </h1>
            <div className="
                      w-[50%] h-[0.4rem] 
                      bg-[#0c3360] 
                      rounded-[10px] 
                      mt-4
                      relative before:absolute before:top before:left-0 before:w-1/2 before:h-[0.4rem] before:rounded-[10px] before:bg-[#037fff] before:content-['']
                      ">
              </div>
          </div>
    <RecentProjects/>
    </div>
  )
}

export default page