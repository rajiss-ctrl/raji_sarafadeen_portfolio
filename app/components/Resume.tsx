'use client'
import React from 'react'
import { useSidebar } from '../context/SidebarContext';
import { education, techStack } from '../data/resume';
import { BiBook } from 'react-icons/bi';
import { workExperience } from '../data';
import { BsBriefcase, BsPhoneVibrate, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import PrintButton from './PrintButton';

const Resume = () => {
  const { setIsOpen } = useSidebar();
  const handleNavClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <div onClick={handleNavClick} className="relative w-full min-h-screen p-4 md:p-6 lg:p-8 text-white overflow-y-auto">
      {/* SECTION TO PRINT */}
      <div id="print-section" className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            RAJI SARAFADEEN
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-3">
            <Link 
              onClick={handleNavClick} 
              href="mailto:omosanjos77@gmail.com" 
              className="flex items-center gap-1.5 text-[#A8B2D1] hover:text-[#7C3AED] transition-colors duration-300 text-sm md:text-base"
            >
              <FaEnvelope className="text-[#7C3AED]" size={16} />
              <span>omosanjos77@gmail.com</span>
            </Link>
            <Link 
              onClick={handleNavClick} 
              href="tel:+2347038699659" 
              className="flex items-center gap-1.5 text-[#A8B2D1] hover:text-[#7C3AED] transition-colors duration-300 text-sm md:text-base"
            >
              <BsPhoneVibrate className="text-[#7C3AED]" size={16} />
              <span>+234 7038699659</span>
            </Link>
            <Link
              onClick={handleNavClick}
              href="https://wa.me/2347038699659"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#34D399] transition-colors duration-300 text-sm md:text-base"
            >
              <BsWhatsapp size={16} />
              <span>Chat on WhatsApp</span>
            </Link>
          </div>

          <p className="text-[#94A3B8] mt-4 text-sm md:text-base font-light leading-relaxed">
            Frontend Web Developer specializing in ReactJS and Next.js — I build fast, scalable, and user-friendly web apps that help businesses grow.
          </p>
        </div>

        {/* SKILLS */}
        <div className="relative overflow-hidden w-full my-8 md:my-12 lg:my-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold absolute top-0 left-0 opacity-[0.04] text-white select-none">
            My Skills
          </h1>
          
          <div className="relative z-10">
            <div className="md:w-[260px]">
              <h1 className="font-jakarta relative leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                MY SKILLS
              </h1>
              <div className="w-[50%] h-[3px] bg-[#2d2d44] rounded-[10px] mt-3 relative">
                <div className="absolute top-0 left-0 w-1/2 h-full rounded-[10px] bg-[#7C3AED]"></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-8 mt-8 md:mt-10 lg:mt-12">
            <div>
              <h2 className="text-[#A8B2D1] font-light text-sm md:text-base">I constantly try to improve</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">My tech stack</h3>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 w-full lg:w-auto">
              {techStack.map((skill) => (
                <div 
                  key={skill.id} 
                  className="bg-[#1a1a2e] px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-[#A8B2D1] font-light text-xs md:text-sm border border-[#2d2d44] hover:border-[#7C3AED] hover:text-white transition-all duration-300 text-center"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div className="relative overflow-hidden w-full my-8 md:my-12 lg:my-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold absolute top-0 left-0 opacity-[0.04] text-white select-none">
            My Resume
          </h1>
          
          <div className="relative z-10">
            <div className="md:w-[300px]">
              <h1 className="font-jakarta relative leading-tight text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                MY RESUME
              </h1>
              <div className="w-[50%] h-[3px] bg-[#2d2d44] rounded-[10px] mt-3 relative">
                <div className="absolute top-0 left-0 w-1/2 h-full rounded-[10px] bg-[#7C3AED]"></div>
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-8 lg:pt-10 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 text-white">
              <BsBriefcase size={24} className="text-[#7C3AED]" />
              <span>Work Experience</span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-[2px] bg-[#2d2d44]"></div>
              
              <div className="space-y-6 md:space-y-8">
                {workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-6 md:pl-8 flex flex-col lg:flex-row gap-1 lg:gap-4">
                    {/* Timeline dot */}
                    <div className="absolute z-10 left-0 top-1.5 w-4 h-4 rounded-full bg-[#0a121f] border-2 border-[#7C3AED] shadow-lg shadow-[#7C3AED]/20"></div>
                    
                    <h3 className="text-sm md:text-base text-[#A8B2D1] font-light lg:w-1/4 flex-shrink-0">
                      {exp.period}
                    </h3>
                    
                    <div className="lg:w-3/4">
                      <h4 className="text-base md:text-lg font-semibold text-[#7C3AED] mb-0.5">
                        {exp.title}
                      </h4>
                      <Link 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm md:text-base font-medium text-white hover:text-[#7C3AED] transition-colors duration-300 inline-block"
                      >
                        {exp.company}
                      </Link>
                      <p className="text-[#94A3B8] text-sm md:text-base font-light mt-1 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="relative overflow-hidden w-full mt-6 md:mt-8 lg:mt-10 pb-8 md:pb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3 text-white">
            <BiBook size={24} className="text-[#7C3AED]" />
            <span>Educational Qualifications</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-[2px] bg-[#2d2d44]"></div>
            
            <div className="space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 md:pl-8 flex flex-col lg:flex-row gap-1 lg:gap-4">
                  {/* Timeline dot */}
                  <div className="absolute z-10 left-0 top-1.5 w-4 h-4 rounded-full bg-[#0a121f] border-2 border-[#7C3AED] shadow-lg shadow-[#7C3AED]/20"></div>
                  
                  <h3 className="text-sm md:text-base text-[#A8B2D1] font-light lg:w-1/4 flex-shrink-0">
                    {edu.period}
                  </h3>
                  
                  <div className="lg:w-3/4">
                    <h4 className="text-base md:text-lg font-semibold text-[#7C3AED] mb-0.5">
                      {edu.title}
                    </h4>
                    <h5 className="text-sm md:text-base font-medium text-white">
                      {edu.school}
                    </h5>
                    <p className="text-[#94A3B8] text-sm md:text-base font-light mt-1 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Print Button */}
      <div className="mt-4 md:mt-6">
        <PrintButton targetId="print-section" documentTitle="Raji_Sarafadeen_Resume" />
      </div>
    </div>
  )
}

export default Resume