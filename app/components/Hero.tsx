'use client'
import Link from 'next/link';
import React from 'react';
import { BsGithub, BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  // Animation variants with proper TypeScript typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeUpVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        src="/bg_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-[-1]"
      />
      
      <div className="relative z-20 flex h-full">
        <motion.div 
          className="flex-1 px-4 lg:pl-[24%] lg:pr-20 text-white flex flex-col justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ perspective: '1000px' }}
        >
          {/* Name with flip animation */}
          <motion.h1 
            className="text-center text-3xl lg:text-5xl font-bold leading-tight"
            variants={flipVariants}
          >
            <span>Hi, I am </span>  <br className='lg:hidden'/>
            <span className="text-[#0365c7] lg:text-[#037fff] font-bold leading-tight">Raji Sarafadeen</span>
          </motion.h1>

          {/* Description with flip animation */}
          <motion.p 
            className="mt-4 text-center leading-relaxed text-lg font-light text-[#86a4c4] lg:px-1"
            variants={flipVariants}
          >
            I&apos;m a <span className='text-[#037fff] font-bold'>Website</span> <span className='text-white font-bold'>Developer</span> specializing in ReactJS & NextJS. I design and build scalable web and mobile applications that help businesses grow, stand out, and solve complex challenges with smart, reliable solutions.
          </motion.p>

          {/* Social links with fade up animation */}
          <motion.div 
            className="flex gap-6 mt-6"
            variants={fadeUpVariants}
          >
            <Link href='/' className="w-[45px] h-[45px] p-3 flex justify-center items-center rounded-[50%] text-gray-400 border-2 border-gray-600 hover:border-[#037fff] hover:text-[#037fff]">
              <BsGithub className="text-2xl" />
            </Link>
            <Link href='/' className="w-[45px] h-[45px] p-3 flex justify-center items-center rounded-[50%] text-gray-400 border-2 border-gray-600 hover:border-[#037fff] hover:text-[#037fff]">
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link href='https://twitter.com/rajisanjo' className="w-[45px] h-[45px] p-3 flex justify-center items-center rounded-[50%] text-gray-400 border-2 border-gray-600 hover:border-[#037fff] hover:text-[#037fff]">
              <BsTwitterX className="text-2xl" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;