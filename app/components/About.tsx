'use client'
import React from 'react'
import { useSidebar } from '../context/SidebarContext';
import { BiCodeAlt, BiServer } from 'react-icons/bi';
import { MdPhoneIphone } from 'react-icons/md';
import Image from 'next/image';
import TestimonialCarousel from './TestimonialCarousel';

const About = () => {
      const { setIsOpen } = useSidebar();
       const handleNavClick = () => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
          setIsOpen(false);
        }
      };
  return (
    <div onClick={handleNavClick} className='relative w-full lg:pt- p-4 lg:pl-[19%] text-white overflow-hidden'>
          
          
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
                
                  <Image src='/raji sarafadeen.png' width={500} height={500} alt="Raji Sarafadeen, Web Dev" className='rounded-md'/>
                
                <div className="">
                  <h2 className='font-manrope text-semibold leading-tight text-5xl font-semibold'>
                    I am <span className='text-[#037fff] '>Raji Sarafadeen</span>
                  </h2>
                    <p className='mt-8 text-lg text-[#6b9acc] font-light'>I&apos;m a Software Developer based in Nigeria, developing modern solutions with a customer-first approach. My passion lies in delivering seamless user experiences, ensuring web accessibility for all and building scalable optimized APIs.</p>
                      <ul className="mt-4 text-lg text-[#6b9acc] font-light w-full space-y-2">
                        <li className="flex items-start">
                          <h3 className="text-lg text-white font-semibold w-1/4">Full Name</h3>
                          <span className="w-4 text-center">:</span>
                          <span className="flex-1">Raji Sarafadeen Sanjo</span>
                        </li>
                        <li className="flex items-start">
                          <h3 className="text-lg text-white font-semibold w-1/4">Languages</h3>
                          <span className="w-4 text-center">:</span>
                          <span className="flex-1">English, Yoruba</span>
                        </li>
                        <li className="flex items-start">
                          <h3 className="text-lg text-white font-semibold w-1/4">Email</h3>
                          <span className="w-4 text-center">:</span>
                           <a 
                            href="mailto:omosanjos77@gmail.com" 
                            className="flex-1"
                          >
                          omosanjos77@gmail.com
                          </a>
                        </li>
                        <li className="flex items-start">
                          <h3 className="text-lg text-white font-semibold w-1/4">Phone</h3>
                          <span className="w-4 text-center">:</span>
                          <span className="flex-1 text-[0.975rem] leading-[1.4286]">+2347038699659</span>
                        </li>
                        <li className="flex items-start">
                          <h3 className="text-lg text-white font-semibold w-1/4">Freelance</h3>
                          <span className="w-4 text-center">:</span>
                          <span className="flex-1">Available</span>
                        </li>
                      </ul>
    
                    <button className="group relative bg-[#037fff] py-3 px-6 mt-8 cursor-pointer overflow-hidden">
                      <span className="relative z-10 text-white font-medium">DOWNLOAD CV</span>
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
            <div className="w-[243px] mt-10 lg:mt-16 mb-20">
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
                <BiCodeAlt className="text-4xl text-[#1356f0] mb-2" size={60} />
                <h3 className='relative font-light text-2xl text-white mb-8 before:content-[""] before:absolute before:-bottom-4 before:left-0 before:w-[20%] before:h-[0.20rem] before:bg-[#3b4058]'>Web Development</h3>
                <p className='mt-8 text-[#6b9acc]'>Builds dynamic, scalable web applications with the React ecosystem and Next.js framework.</p>
              </div>
              <div className="bg-[#191d2b] border-x-1 border-b-1 border-t-4 hover:border-t-[#037fff] border-gray-700 p-4 lg:p-8">
                <MdPhoneIphone className="text-4xl text-[#1356f0] mb-2" size={60} />
                <h3 className='relative font-light text-2xl text-white mb-8 before:content-[""] before:absolute before:-bottom-4 before:left-0 before:w-[20%] before:h-[0.20rem] before:bg-[#3b4058]'>Mobile Application</h3>
                <p className='mt-8 text-[#6b9acc]'>I build clean, native mobile apps for iOS and Android that feel intuitive and perform flawlessly.</p>
              </div>
              <div className="bg-[#191d2b] border-x-1 border-b-1 border-t-4 hover:border-t-[#037fff] border-gray-700 p-4 lg:p-8">
                <BiServer className="text-4xl text-[#1356f0] mb-2" size={60} />
                <h3 className='relative font-light text-2xl text-white mb-8 before:content-[""] before:absolute before:-bottom-4 before:left-0 before:w-[20%] before:h-[0.20rem] before:bg-[#3b4058]'>Virtual Private Server</h3>
                <p className='mt-8 text-[#6b9acc]'>A rock-solid virtual server. Complete control, better performance than shared hosting, and easy scalability.</p>
              </div>
            </div>
          </div>
    
          <div className="relative overflow-hidden w-full">
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
               </div>
               <TestimonialCarousel/>
              </div>
  )
}

export default About