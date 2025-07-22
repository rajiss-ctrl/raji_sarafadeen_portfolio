'use client'

import { useState } from 'react'
// import { BsPersonBadgeFill } from "react-icons/bs"
import NavLink from "./NavLink"
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* ✅ Desktop sidebar: always visible */}
      <aside className="hidden border-r-[1.8px] border-gray-700 md:flex fixed top-0 left-0 w-[18%] z-30 h-screen bg-[#191d2b] text-white py-8 flex-col justify-between items-center">
        <SidebarContent />
      </aside>

      {/* ✅ Mobile toggle button: only visible on mobile */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={`${isOpen ? 'hidden' : 'flex'}
          justify-between items-center border border-gray-700
          md:hidden fixed z-50 top-4 left-0 p-2 text-white bg-[#191d2b] rounded`}
      >
        {/* {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />} */}
            <IoMdMenu size={30} />
      </button>

      {/* ✅ Mobile sidebar overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
            className="fixed top-0 left-0 z-40 w-3/4 h-screen bg-[#191d2b] text-white py-8 flex flex-col justify-between items-center md:hidden"
          >
            <SidebarContent />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 -right-[47px] text-center p-1 text-[#879bb1] font-light bg-[#191d2b] rounded"
            >
              <IoMdClose size={40}  />
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar

function SidebarContent() {
  return (
    <>
      <Link href={'/'} className="mt-10 flex flex-col items-center bg-[#565b70] w-[160px] h-[160px] rounded-[50%]">
        {/* <BsPersonBadgeFill className="text-3xl mb-2" /> */}
        <Image src='/raji_sarafadeen.png' width={200} height={200} alt="Raji Sarafadeen, Web Dev" className='rounded-[50%]'/> 
      </Link>

      <div className="w-full h-[0.8px] bg-gray-700  mt-5"></div>
      <div className="w-full flex flex-col text-center text-[#86a4c4] lg:px-1">
        <NavLink href='/'>HOME</NavLink>
        <NavLink href='/about'>ABOUT</NavLink>
        <NavLink href='/resume'>RESUME</NavLink>
        <NavLink href='/portfolio'>PORTFOLIO</NavLink>
        <NavLink href='/blogs'>BLOGS</NavLink>
        <NavLink href='/contacts'>CONTACTS</NavLink>
      </div>

      <div className="w-full">
        <div className="w-full h-[0.8px] bg-gray-700  my-4"></div>
        <p className="text-center px-10 text-gray-400 text-sm">
          © 2025 Raji Sarafadeen
        </p>
      </div>
    </>
  )
}
