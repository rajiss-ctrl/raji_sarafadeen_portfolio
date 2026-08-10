// Hero.tsx - Purple theme
'use client'
import Link from 'next/link';
import React from 'react';
import { BsBriefcase, BsGithub, BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { useSidebar } from '../context/SidebarContext';

const Hero = () => {
  const { setIsOpen } = useSidebar();
  const handleNavClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const flipVariants: Variants = {
    hidden: {
      rotateY: 90,
      opacity: 0,
      transformOrigin: 'left center'
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const fadeUpVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      onClick={handleNavClick} 
      className="relative w-full h-full min-h-screen md:min-h-0 overflow-hidden flex items-center justify-center"
    >
      <Link 
        href="/portfolio" 
        className="absolute z-50 right-6 top-6 flex items-center gap-1.5 text-white bg-[#1a1a2e] px-4 py-2.5 rounded-full text-sm font-medium border border-[#2d2d44] hover:border-[#7C3AED] transition-colors duration-300 group"
      >
        <BsBriefcase size={18} className="text-[#7C3AED] group-hover:text-[#8B5CF6] transition-colors" />
        <span className="text-[#A8B2D1] group-hover:text-white transition-colors">Projects</span>
      </Link>

      <video
        src="/bg_video.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-[-1]"
      />
      
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div 
          className="text-white flex flex-col justify-center items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ perspective: '1000px' }}
        >
          <motion.h2 
            className="text-xs text-[#A8B2D1] border border-1 border-[#000000] rounded-4xl p-2"
            variants={flipVariants}
          >
           Your website is your best salesperson. Is it closing deals?
          </motion.h2>

          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
            variants={flipVariants}
          >
            <span className="text-[#A8B2D1]">Hi, I am</span>
            {/* <br className="sm:hidden lg:block" /> */}
            <span className="text-[#7C3AED]"> Raji Sarafadeen</span>
          </motion.h1>

          <motion.p 
            className="mt-5 text-center leading-relaxed text-base sm:text-lg max-w-2xl mx-auto"
            variants={flipVariants}
          >
            <span className="text-[#A8B2D1]">I&apos;m a </span>
            <span className="text-white font-semibold">Website Developer.</span>
            <span className="text-[#A8B2D1]"> I use React and Next.js to turn bloated web apps into lean, lightning-fast revenue engines. </span>
            <span className="text-[#A8B2D1] font-semibold"> From pixel-perfect UI to rock-solid backend integrations, I build the full-stack solutions that founders rely on to scale.</span>
            <span className="text-[#A8B2D1]">. Let's make your digital presence work as hard as you do.</span>
          </motion.p>

          <motion.div 
            className="flex gap-5 mt-8"
            variants={fadeUpVariants}
          >
            <Link 
              href='https://github.com/rajiss-ctrl' 
              target="_blank"
              rel="noopener noreferrer"
              className="w-[52px] h-[52px] flex justify-center items-center rounded-full text-[#94A3B8] border-2 border-[#2d2d44] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-300 hover:scale-110 hover:bg-[#7C3AED]/10"
            >
              <BsGithub className="text-2xl" />
            </Link>
            <Link 
              href='https://www.linkedin.com/in/rajiss-buz-web-dev/' 
              target="_blank"
              rel="noopener noreferrer"
              className="w-[52px] h-[52px] flex justify-center items-center rounded-full text-[#94A3B8] border-2 border-[#2d2d44] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-300 hover:scale-110 hover:bg-[#7C3AED]/10"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link 
              href='https://twitter.com/rajisanjo' 
              target="_blank"
              rel="noopener noreferrer"
              className="w-[52px] h-[52px] flex justify-center items-center rounded-full text-[#94A3B8] border-2 border-[#2d2d44] hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all duration-300 hover:scale-110 hover:bg-[#7C3AED]/10"
            >
              <BsTwitterX className="text-2xl" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;