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
      {/* Desktop sidebar - floating with purple gradient border */}
      <div className="hidden md:block fixed top-3 left-3 z-30 h-[calc(100vh-24px)] w-[220px] rounded-3xl shadow-2xl shadow-black/40">
        <div 
          className="w-full h-full rounded-3xl p-[3px]"
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #7C3AED 25%, transparent 65%, transparent 100%)'
          }}
        >
          <aside className="w-full h-full bg-[#0d1520] rounded-3xl text-white flex flex-col justify-between items-center py-8">
            <SidebarContent />
          </aside>
        </div>
      </div>

      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className={`${isOpen ? "hidden" : "flex"}
          justify-center items-center border border-[#2d2d44]
          md:hidden fixed z-50 top-4 left-4 p-2 text-white bg-[#0d1520] rounded-lg
          hover:border-[#7C3AED] transition-colors duration-300`}
      >
        <IoMdMenu size={28} className="text-[#A8B2D1]" />
      </button>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
            className="fixed top-3 left-3 z-40 w-[230px] rounded-3xl shadow-2xl shadow-black/40 md:hidden"
          >
            <div
              className="w-full rounded-3xl p-[3px]"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #7C3AED 25%, transparent 65%, transparent 100%)'
              }}
            >
              <aside className="w-full bg-[#0d1520] rounded-3xl text-white flex flex-col items-center py-3 relative">
                <SidebarContent />

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 -right-[50px] w-12 h-12 flex items-center justify-center text-[#A8B2D1] border border-[#2d2d44] bg-[#0d1520] rounded-lg hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors"
                >
                  <IoMdClose size={32} />
                </button>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

function SidebarContent() {
  const { setIsOpen } = useSidebar();

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
        className="flex flex-col items-center justify-center"
      >
        <div className="w-[140px] h-[140px] rounded-full border-4 border-[#2d2d44] overflow-hidden hover:border-[#7C3AED] transition-all duration-300">
          <Image
            src="/RajisSaraF-profile-image.png"
            alt="Raji Sarafadeen, Website Developer"
            width={140}
            height={140}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </Link>
      <div className="text-[#64748B] text-sm mt-2 md:mt-0">Raji Sarafdeen</div>

      <div className="w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#2d2d44] to-transparent mt-2"></div>

      <nav className="w-full flex flex-col px-3 mt-3 md:mt-4">
        <NavLink href="/" onClick={handleNavClick}>HOME</NavLink>
        <NavLink href="/about" onClick={handleNavClick}>ABOUT</NavLink>
        <NavLink href="/resume" onClick={handleNavClick}>RESUME</NavLink>
        <NavLink href="/portfolio" onClick={handleNavClick}>PORTFOLIO</NavLink>
        <NavLink href="/blogs" onClick={handleNavClick}>BLOGS</NavLink>
        <NavLink href="/contacts" onClick={handleNavClick}>CONTACTS</NavLink>
      </nav>

      <div className="w-full mt-4 md:mt-0">
        <div className="w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#2d2d44] to-transparent mx-auto mb-4"></div>
        <p className="text-center text-[#64748B] text-xs font-light tracking-wider">
          © 2025 RajisSaraF.Dev
        </p>
        <p className="text-center text-[#4a4a6a] text-[10px] mt-1 font-light">
          Built with passion
        </p>
      </div>
    </>
  );
}