import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'
import { BiCodeAlt, BiServer } from 'react-icons/bi';
import { MdPhoneIphone } from 'react-icons/md';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { Spotlight } from '../components/ui/Spotlight';
// import { cn } from '../lib/utils/cn';

export const metadata: Metadata = {
  title: "About"
};
const page = () => {
  return (
    <div className='relative w-full lg:pt-32 p-4 lg:pl-[19%] lg:py-0 text-white overflow-hidden'>
        {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      /> */}
    <Spotlight
      className="-top-40 left-0 md:-top-[70%] md:left-60 opacity-35"
      fill="blue"
    />
    <Spotlight
      className="-top-40 right-0 md:-top-[60%] md:right-60 opacity-35"
      fill="green"
    />
    <Spotlight
      className="-top-40 left-0 md:-top-[20%] md:left-40 opacity-35"
      fill="blue"
    />
    <Spotlight
      className="-top-40 left-0 md:-top-0 md:left-40 opacity-35"
      fill="blue"
    />
      
      <div className="relative overflow-hidden w-full my-12 lg:my-20">
            <h1 className="text-6xl lg:text-7xl font-bold absolute top-10 left-0 opacity-5 text-gray-400">About Me</h1>
          <div className=" lg:w-[260px]">
            <h1 className="font-manrope relative leading-tight text-4xl lg:text-5xl font-semibold">
              ABOUT ME
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

          <div className="flex flex-col lg:flex-row gap-4 mt-24">
            <div className="">
              <Image src='/raji sarafadeen.png' width={800} height={100} alt="Raji Sarafadeen, Web Dev" className=''/>
            </div>
            <div className="">
              <h2 className='font-manrope text-semibold leading-tight text-4xl font-semibold'>
                I am <span className='text-[#037fff] '>Raji Sarafadeen</span>
              </h2>
                <p className='mt-8 text-lg text-[#86a4c4] font-light'>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                  <ul className="mt-4 text-lg text-[#86a4c4] font-light w-full space-y-2">
                    <li className="flex items-start">
                      <h3 className="text-lg font-semibold w-1/4">Full Name</h3>
                      <span className="w-4 text-center">:</span>
                      <span className="flex-1">Raji Sarafadeen Sanjo</span>
                    </li>
                    <li className="flex items-start">
                      <h3 className="text-lg font-semibold w-1/4">Languages</h3>
                      <span className="w-4 text-center">:</span>
                      <span className="flex-1">English, Yoruba</span>
                    </li>
                    <li className="flex items-start">
                      <h3 className="text-lg font-semibold w-1/4">Email</h3>
                      <span className="w-4 text-center">:</span>
                       <a 
                        href="mailto:omosanjos77@gmail.com" 
                        className="flex-1"
                      >
                      omosanjos77@gmail.com
                      </a>
                    </li>
                    <li className="flex items-start">
                      <h3 className="text-lg font-semibold w-1/4">Phone</h3>
                      <span className="w-4 text-center">:</span>
                      <span className="flex-1 text-[0.975rem] leading-[1.4286]">+2347038699659</span>
                    </li>
                    <li className="flex items-start">
                      <h3 className="text-lg font-semibold w-1/4">Freelance</h3>
                      <span className="w-4 text-center">:</span>
                      <span className="flex-1">Available</span>
                    </li>
                  </ul>

                <button className="group relative bg-[#037fff] py-3 px-6 mt-8 cursor-pointer overflow-hidden">
                  <span className="relative z-10 text-white">DOWNLOAD CV</span>
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-full
                      bg-white
                      origin-right
                      scale-x-0
                      transition-transform
                      duration-500
                      ease-in-out
                      group-hover:origin-left
                      group-hover:scale-x-100
                    "
                  ></span>
                </button>


            </div>
          </div>
      </div>

      <div className="relative overflow-hidden w-full">
        <h1 className="text-6xl lg:text-7xl font-bold absolute top-20 lg:top-40 left-0 opacity-5 text-gray-400">SERVICES</h1>
        <div className="w-[243px] mt-10 lg:mt-28 mb-20">
          <h1 className="relative leading-tight text-4xl  lg:text-5xl font-semibold">
            SERVICES
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
        <div className="flex flex-col md:flex-row gap-6 lg:gap-2">
          <div className="bg-[#191d2b] border-x-1 border-b-1 border-t-4 hover:border-t-[#037fff] border-gray-700 p-4 lg:p-8">
            <MdPhoneIphone className="text-4xl text-[#1356f0] mb-2" size={60} />
            <h3 className='relative font-light text-2xl text-white mb-8 before:content-[""] before:absolute before:-bottom-4 before:left-0 before:w-[20%] before:h-[0.20rem] before:bg-[#3b4058]'>Mobile Application</h3>
            <p className='mt-8 text-[#86a4c4]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
          </div>
          <div className="bg-[#191d2b] border-x-1 border-b-1 border-t-4 hover:border-t-[#037fff] border-gray-700 p-4 lg:p-8">
            <BiCodeAlt className="text-4xl text-[#1356f0] mb-2" size={60} />
            <h3 className='relative font-light text-2xl text-white mb-8 before:content-[""] before:absolute before:-bottom-4 before:left-0 before:w-[20%] before:h-[0.20rem] before:bg-[#3b4058]'>Web Development</h3>
            <p className='mt-8 text-[#86a4c4]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
          </div>
          <div className="bg-[#191d2b] border-x-1 border-b-1 border-t-4 hover:border-t-[#037fff] border-gray-700 p-4 lg:p-8">
            <BiServer className="text-4xl text-[#1356f0] mb-2" size={60} />
            <h3 className='relative font-light text-2xl text-white mb-8 before:content-[""] before:absolute before:-bottom-4 before:left-0 before:w-[20%] before:h-[0.20rem] before:bg-[#3b4058]'>Virtual Private Server</h3>
            <p className='mt-8 text-[#86a4c4]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden w-full mb-20">
        <h1 className="text-6xl lg:text-7xl font-bold absolute top-20 lg:top-40 left-0 opacity-5 text-gray-400">REVIEWS</h1>
          <div className="w-[243px] mt-10 lg:mt-28 mb-20">
           <h1 className="relative leading-tight text-4xl lg:text-5xl font-semibold">
            REVIEWS
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
        <TestimonialCarousel/>

      </div>
    </div>
  )
}

export default page