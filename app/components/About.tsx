'use client'
import React from 'react'
import { useSidebar } from '../context/SidebarContext';
import { BiCodeAlt, BiMessage, BiServer } from 'react-icons/bi';
import { MdPhoneIphone } from 'react-icons/md';
import Image from 'next/image';
import TestimonialCarousel from './TestimonialCarousel';
import Link from 'next/link';

const About = () => {
  const { setIsOpen } = useSidebar();
  const handleNavClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };
  
  return (
    <div onClick={handleNavClick} className="relative w-full min-h-screen p-3 md:p-4 lg:p-5 text-white overflow-y-auto">
      {/* Contact Me Button */}
      <Link 
        href="/contacts" 
        className="absolute z-50 right-2 md:right-3 top-2 md:top-3 flex items-center gap-1 text-white bg-[#1a1a2e] px-2 py-1 md:px-2.5 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium border border-[#2d2d44] hover:border-[#7C3AED] transition-all duration-300 group"
      >
        <BiMessage size={12} className="text-[#7C3AED] group-hover:text-[#8B5CF6] transition-colors md:size-[14]" />
        <span className="text-[#A8B2D1] group-hover:text-white transition-colors">Contact Me</span>
      </Link>
      
      {/* About Section */}
      <div className="relative overflow-hidden w-full mt-2 md:mt-3 lg:mt-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold absolute top-0 left-0 opacity-[0.04] text-white select-none">
          About Me
        </h1>
        
        <div className="relative z-10">
          <div className="md:w-[240px] lg:w-[280px]">
            <h1 className="font-jakarta relative leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              ABOUT ME
            </h1>
            <div className="w-[50%] h-[2px] md:h-[3px] bg-[#2d2d44] rounded-[10px] mt-1.5 md:mt-2 relative">
              <div className="absolute top-0 left-0 w-1/2 h-full rounded-[10px] bg-[#7C3AED]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 mt-4 md:mt-5 lg:mt-6">
          {/* Profile Image */}
          <div className="lg:w-[45%] xl:w-[40%]">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-[#2d2d44] hover:border-[#7C3AED] transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image 
                src='/raji-sarafadeen.png' 
                width={600} 
                height={600} 
                alt="Raji Sarafadeen || Website Developer" 
                className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700'
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-[55%] xl:w-[60%]">
            <h2 className='font-jakarta leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold'>
              I am <span className='text-[#7C3AED]'>Raji Sarafadeen</span>
            </h2>
            
            <p className='mt-3 md:mt-4 text-sm md:text-base text-[#A8B2D1] font-light leading-relaxed'>
              Software Engineer with a relentless focus on user-centric architecture and high-performance API ecosystems. I transform complex business requirements into accessible, scalable web solutions that prioritize speed and inclusivity. Proven track record of reducing technical debt and optimizing backend response times to deliver measurable improvements in user retention and system reliability.
            </p>
            
            <ul className="mt-3 md:mt-4 text-sm md:text-base text-[#A8B2D1] font-light w-full space-y-2 md:space-y-2.5">
              <li className="flex items-start gap-2">
                <h3 className="text-xs md:text-sm text-white font-semibold w-[80px] md:w-[100px] flex-shrink-0">Full Name</h3>
                <span className="text-[#64748B]">:</span>
                <span className="flex-1 text-[#A8B2D1]">Raji Sarafadeen Sanjo</span>
              </li>
              <li className="flex items-start gap-2">
                <h3 className="text-xs md:text-sm text-white font-semibold w-[80px] md:w-[100px] flex-shrink-0">Languages</h3>
                <span className="text-[#64748B]">:</span>
                <span className="flex-1 text-[#A8B2D1]">English, Yoruba</span>
              </li>
              <li className="flex items-start gap-2">
                <h3 className="text-xs md:text-sm text-white font-semibold w-[80px] md:w-[100px] flex-shrink-0">Email</h3>
                <span className="text-[#64748B]">:</span>
                <a 
                  href="mailto:omosanjos77@gmail.com" 
                  className="flex-1 text-[#7C3AED] hover:text-[#8B5CF6] transition-colors hover:underline text-sm"
                >
                  omosanjos77@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <h3 className="text-xs md:text-sm text-white font-semibold w-[80px] md:w-[100px] flex-shrink-0">Phone</h3>
                <span className="text-[#64748B]">:</span>
                <span className="flex-1 text-[#A8B2D1] text-xs md:text-sm">+2347038699659</span>
              </li>
              <li className="flex items-start gap-2">
                <h3 className="text-xs md:text-sm text-white font-semibold w-[80px] md:w-[100px] flex-shrink-0">Freelance</h3>
                <span className="text-[#64748B]">:</span>
                <span className="flex-1 text-[#10B981] font-medium text-xs md:text-sm">Available</span>
              </li>
            </ul>

            <button className="group relative bg-[#7C3AED] hover:bg-[#6D28D9] py-2 px-5 md:py-2.5 md:px-7 mt-4 md:mt-5 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/30">
              <span className="relative z-10 text-white font-medium text-xs md:text-sm">DOWNLOAD CV</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white origin-right scale-x-0 transition-transform duration-500 ease-in-out group-hover:origin-left group-hover:scale-x-100"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative overflow-hidden w-full mt-6 md:mt-8 lg:mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold absolute top-4 md:top-6 lg:top-8 left-0 opacity-[0.04] text-white select-none">
          SERVICES
        </h1>
        
        <div className="relative z-10">
          <div className="md:w-[240px] lg:w-[280px]">
            <h1 className="relative leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              SERVICES
            </h1>
            <div className="w-[50%] h-[2px] md:h-[3px] bg-[#2d2d44] rounded-[10px] mt-1.5 md:mt-2 relative">
              <div className="absolute top-0 left-0 w-1/2 h-full rounded-[10px] bg-[#7C3AED]"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 mt-3 md:mt-4 lg:mt-5">
          {/* Service Card 1 */}
          <div className="group bg-[#1a1a2e] border border-[#2d2d44] hover:border-[#7C3AED] rounded-xl p-4 md:p-5 lg:p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#7C3AED]/10 hover:-translate-y-1">
            <BiCodeAlt className="text-3xl md:text-4xl text-[#7C3AED] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className='relative font-light text-lg md:text-xl text-white mb-4 md:mb-5 before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-[30%] before:h-[2px] before:bg-[#7C3AED] before:rounded-full'>
              Web Development
            </h3>
            <p className='text-[#94A3B8] text-xs md:text-sm leading-relaxed'>
              Builds dynamic, scalable web applications with the React ecosystem and Next.js framework.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="group bg-[#1a1a2e] border border-[#2d2d44] hover:border-[#7C3AED] rounded-xl p-4 md:p-5 lg:p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#7C3AED]/10 hover:-translate-y-1">
            <MdPhoneIphone className="text-3xl md:text-4xl text-[#7C3AED] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className='relative font-light text-lg md:text-xl text-white mb-4 md:mb-5 before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-[30%] before:h-[2px] before:bg-[#7C3AED] before:rounded-full'>
              Mobile Application
            </h3>
            <p className='text-[#94A3B8] text-xs md:text-sm leading-relaxed'>
              I build clean, native mobile apps for iOS and Android that feel intuitive and perform flawlessly.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="group bg-[#1a1a2e] border border-[#2d2d44] hover:border-[#7C3AED] rounded-xl p-4 md:p-5 lg:p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#7C3AED]/10 hover:-translate-y-1">
            <BiServer className="text-3xl md:text-4xl text-[#7C3AED] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className='relative font-light text-lg md:text-xl text-white mb-4 md:mb-5 before:content-[""] before:absolute before:-bottom-2 before:left-0 before:w-[30%] before:h-[2px] before:bg-[#7C3AED] before:rounded-full'>
              Virtual Private Server
            </h3>
            <p className='text-[#94A3B8] text-xs md:text-sm leading-relaxed'>
              A rock-solid virtual server. Complete control, better performance than shared hosting, and easy scalability.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="relative overflow-hidden w-full mt-6 md:mt-8 lg:mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold absolute top-3 md:top-4 lg:top-5 left-0 opacity-[0.04] text-white select-none">
          REVIEWS
        </h1>
        
        <div className="relative z-10">
          <div className="md:w-[240px] lg:w-[280px]">
            <h1 className="relative leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              REVIEWS
            </h1>
            <div className="w-[50%] h-[2px] md:h-[3px] bg-[#2d2d44] rounded-[10px] mt-1.5 md:mt-2 relative">
              <div className="absolute top-0 left-0 w-1/2 h-full rounded-[10px] bg-[#7C3AED]"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-3 md:mt-4 lg:mt-5">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  )
}

export default About