'use client'
import React from 'react'
import { useSidebar } from '../context/SidebarContext';
import RecentProjects from './RecentProjects';
import Link from 'next/link';
import { BiMessage } from 'react-icons/bi';

const Portfolio = () => {
  const { setIsOpen } = useSidebar();
  const handleNavClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <div onClick={handleNavClick} className="relative w-full min-h-screen p-3 md:p-4 text-white overflow-y-auto">
      {/* Contact Me Button */}
      <Link 
        href="/contacts" 
        className="absolute z-50 right-3 md:right-4 lg:right-6 top-3 md:top-4 lg:top-6 flex items-center gap-1.5 text-white bg-[#1a1a2e] px-2.5 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 rounded-full text-xs md:text-sm font-medium border border-[#2d2d44] hover:border-[#7C3AED] transition-all duration-300 group"
      >
        <BiMessage size={16} className="text-[#7C3AED] group-hover:text-[#8B5CF6] transition-colors md:size-[18]" />
        <span className="text-[#A8B2D1] group-hover:text-white transition-colors">Contact Me</span>
      </Link>

      {/* Background heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold absolute top-16 md:top-20 lg:top-24 left-3 md:left-4 lg:left-6 opacity-[0.04] text-white select-none">
        Portfolio
      </h1>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-10 md:pt-8 lg:pt-12">
        {/* Header */}
        <div className="md:w-[280px] lg:w-[320px]">
          <h1 className="font-jakarta relative leading-tight text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
            PORTFOLIO
          </h1>
          <div className="w-[50%] h-[2px] md:h-[3px] bg-[#2d2d44] rounded-[10px] mt-2 md:mt-3 relative">
            <div className="absolute top-0 left-0 w-1/2 h-full rounded-[10px] bg-[#7C3AED]"></div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-10 md:mt-6 lg:mt-8">
          <RecentProjects />
        </div>
      </div>
    </div>
  )
}

export default Portfolio