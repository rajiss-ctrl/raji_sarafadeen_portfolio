import Link from 'next/link'
import React from 'react'
import { BsGithub,  BsTwitterX } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <header className="relative h-screen overflow-hidden ">
      {/* Background video */}
      <video
        src="/bg_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-[-1]"
      />
      <div className="relative z-20 flex h-full ">
        {/* Hero Text */}
        <div className="flex-1 px-4 lg:pl-[24%] lg:pr-20 text-white flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl lg:text-5xl font-bold leading-tight">
            <span>Hi, I am </span>  <br className='lg:hidden'/>
            <span className="text-[#0365c7] lg:text-[#037fff] font-bold leading-tight">Raji Sarafadeen</span>
          </h1>
          <p className="mt-4 text-center leading-relaxed text-lg font-light text-[#86a4c4] lg:px-1">I’m a   <span className='text-[#037fff] font-bold'>Website</span> <span className='text-white font-bold'>Developer</span> specializing in ReactJS & NextJS. I design and build scalable web and mobile applications that help businesses grow, stand out, and solve complex challenges with smart, reliable solutions.</p>
          <div className="flex gap-6 mt-6">
            <Link href='/' className="w-[45px] h-[45px] p-3 flex justify-center items-center rounded-[50%] border-2 border-gray-600 hover:border-[#037fff]">
              <BsGithub className="text-gray-400 text-2xl hover:text-[#037fff]" />
            </Link>
            <Link href='/' className="w-[45px] h-[45px] p-3 flex justify-center items-center rounded-[50%] border-2 border-gray-600 hover:border-[#037fff]">
              <FaLinkedin className="text-gray-400 text-2xl hover:text-[#037fff]" />
            </Link>
            <Link href='https://twitter.com/rajisanjo' className="w-[45px] h-[45px] p-3 flex justify-center items-center rounded-[50%] border-2 border-gray-600 hover:border-[#037fff]">
              <BsTwitterX className="text-gray-400 text-2xl hover:text-[#037fff]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero