// Hero.tsx - Purple theme
'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsBriefcase, BsGithub, BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { useSidebar } from '../context/SidebarContext';

// ── Typewriter component ──────────────────────────────────────────────
const PHRASES = [
  "Your website is your best salesperson. Is it closing deals?",
  "Fast. Scalable. Built to convert.",
  "React & Next.js — engineered for performance.",
  "Turning ideas into revenue-generating products.",
  "Pixel-perfect UI. Rock-solid integrations.",
];

type Phase = 'typing' | 'pausing' | 'erasing' | 'waiting';

function Typewriter({ speed = 45, eraseSpeed = 25, pauseMs = 2000, waitMs = 500 }: {
  speed?: number;
  eraseSpeed?: number;
  pauseMs?: number;
  waitMs?: number;
}) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('waiting');

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('typing'), waitMs);

    } else if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseMs);
      }

    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('erasing'), 0);

    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(prev => prev.slice(0, -1));
        }, eraseSpeed);
      } else {
        setPhraseIndex(i => (i + 1) % PHRASES.length);
        setPhase('waiting');
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayed, phraseIndex, speed, eraseSpeed, pauseMs, waitMs]);

  const isTyping = phase === 'typing' || phase === 'pausing';

  return (
    <span>
      {displayed}
      <span
        className={`inline-block w-[2px] h-[0.85em] bg-[#7C3AED] ml-[2px] align-middle transition-opacity duration-300 ${
          isTyping ? 'opacity-100' : 'animate-pulse'
        }`}
      />
    </span>
  );
}

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
          <motion.div
            className="inline-flex items-center bg-[#7C3AED]/10  pl-1 pr-4 py-1 mb-2"
            variants={flipVariants}
          >
            <div className="w-7 h-7 rounded-full overflow-hidden mr-2.5 shrink-0 ring-1 ring-[#7C3AED]/40 bg-[#0d1520]">
              <Image
                src="/RajisSaraF.Dev_Logo.png"
                alt="RajisSaraF.Dev logo"
                width={28}
                height={28}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-xs text-[#A8B2D1] font-medium tracking-wide">
              <Typewriter />
            </span>
          </motion.div>

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