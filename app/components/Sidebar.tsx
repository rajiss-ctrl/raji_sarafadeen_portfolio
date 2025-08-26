"use client";

import NavLink from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useSidebar } from "../context/SidebarContext";
import Link from "next/link";
import Image from "next/image";


const Sidebar = () => {
  const { isOpen, toggleSidebar, setIsOpen } = useSidebar();

  return (
    <>
      {/* Desktop sidebar: always visible */}
      <aside className="hidden border-r-[1.8px] border-gray-700 md:flex fixed top-0 left-0 w-[18%] z-30 h-screen bg-[#191d2b] text-white py-8 flex-col justify-between items-center">
        <SidebarContent />
      </aside>

      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className={`${isOpen ? "hidden" : "flex"}
          justify-between items-center border border-gray-700
          md:hidden fixed z-50 top-4 left-0 p-2 text-white bg-[#191d2b] rounded`}
      >
        <IoMdMenu size={30} />
      </button>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
            className="fixed top-0 left-0 z-40 w-3/4 h-screen bg-[#191d2b] text-white py-8 flex flex-col justify-between items-center md:hidden"
          >
            <SidebarContent />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 -right-[47px] text-center p-1 text-[#879bb1] border border-gray-700 font-light bg-[#191d2b] rounded"
            >
              <IoMdClose size={40} />
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;





function SidebarContent() {
  const { setIsOpen } = useSidebar();

  // Helper: close sidebar only on mobile
  const handleNavClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Link
        href="/"
        onClick={handleNavClick}
        className="mt-10 flex flex-col items-center justify-center bg-white w-[178px] h-[178px] rounded-[50%]"
      >
        <Image
          src="/raji-sarafadeen.png"
          alt="Raji Sarafadeen, Web Dev"
          width={170}
          height={170}
          className="rounded-[50%]"
          style={{ width: "170px", height: "170px" }}
        />
      </Link>

      <div className="w-full h-[0.8px] bg-gray-700 mt-5"></div>

      <div className="w-full flex flex-col text-center text-[#86a4c4] lg:px-1">
        <NavLink href="/" onClick={handleNavClick}>HOME</NavLink>
        <NavLink href="/about" onClick={handleNavClick}>ABOUT</NavLink>
        <NavLink href="/resume" onClick={handleNavClick}>RESUME</NavLink>
        <NavLink href="/portfolio" onClick={handleNavClick}>PORTFOLIO</NavLink>
        <NavLink href="/blogs" onClick={handleNavClick}>BLOGS</NavLink>
        <NavLink href="/contacts" onClick={handleNavClick}>CONTACTS</NavLink>
      </div>

      <div className="w-full">
        <div className="w-full h-[0.8px] bg-gray-700 my-4"></div>
        <p className="text-center px-10 text-gray-400 text-sm">
          © 2025 Raji Sarafadeen
        </p>
      </div>
    </>
  );
}
