'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const cards = [
  { 
    id: 1, 
    name: 'Mr. Orji', 
    role: 'Client', 
    text: "PCDF is thrilled with our new website. The clean design makes our work shine, and it's now incredibly easy for people to get involved and donate. We highly recommend Mr. Raji for your website development." 
  },
  { 
    id: 2, 
    name: 'Elijah Morakinyo', 
    role: 'CEO Trig8Ltd', 
    text: 'Dedicated, hardworking and diligent developer. He knows the pros and cons of ReactJS and keeps learning every day.' 
  },
  { 
    id: 3, 
    name: 'Idris A.', 
    role: 'Collaborator', 
    text: 'Collaborating with Raji was fantastic. His clean code and pixel-perfect attention to detail made the entire process smooth and the result impressive. A true asset to any team.' 
  },
];

export default function TestimonialCarousel() {
  const controls = useAnimation();
  const [slideWidth, setSlideWidth] = useState(50);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Handle resize
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setSlideWidth(e.matches ? 100 : 50);
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isMounted) return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let isAnimating = false;

    intervalRef.current = setInterval(() => {
      if (isAnimating) return;
      isAnimating = true;

      indexRef.current++;

      controls.start({
        x: `-${indexRef.current * slideWidth}%`,
        transition: { duration: 0.8, ease: 'easeInOut' },
      });

      // Reset to beginning after reaching the end
      if (indexRef.current >= cards.length) {
        setTimeout(() => {
          if (isMounted) {
            controls.set({ x: '0%' });
            indexRef.current = 0;
          }
          isAnimating = false;
        }, 1000);
      } else {
        setTimeout(() => {
          isAnimating = false;
        }, 800);
      }
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [controls, slideWidth, isMounted]);

  // Create slides array with duplicates for seamless looping
  const slides = [
    ...cards,
    ...cards.slice(0, slideWidth === 100 ? 1 : 2),
  ];

  // Don't render until mounted
  if (!isMounted) {
    return (
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto px-2 md:px-4">
        <div className="flex">
          {cards.map((card, idx) => (
            <div key={idx} className="box-border pr-2 md:pr-4 min-w-full md:min-w-1/2">
              <div className="bg-[#1a1a2e] border-l-4 border-[#7C3AED] rounded-r-xl p-4 md:p-6 lg:p-8 mx-1 md:mx-2 h-40 animate-pulse">
                <div className="h-full flex items-center justify-center">
                  <span className="text-[#64748B]">Loading...</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden w-full max-w-7xl mx-auto px-2 md:px-4">
      {/* Purple accent line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-[#7C3AED] opacity-50 rounded-full"></div>

      <motion.div className="flex" animate={controls}>
        {slides.map((card, idx) => (
          <div
            key={`${card.id}-${idx}`}
            className="box-border pr-2 md:pr-4 min-w-full md:min-w-1/2"
          >
            <div className="relative bg-[#1a1a2e] border-l-4 border-[#7C3AED] rounded-r-xl p-4 md:p-6 lg:p-8 mx-1 md:mx-2
              before:absolute before:left-4 before:-bottom-[22px] md:before:-bottom-[24px]
              before:border-r-[20px] md:before:border-r-[25px] before:border-t-[20px] md:before:border-t-[25px]
              before:border-r-transparent before:border-t-[#1a1a2e]
              hover:border-[#7C3AED] transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/10"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="absolute top-3 right-3 text-[#7C3AED]/20 text-2xl md:text-3xl" />
              
              <p className="text-[#A8B2D1] text-sm md:text-base leading-relaxed relative z-10">
                {card.text}
              </p>
              
              <FaQuoteRight className="absolute bottom-3 right-3 text-[#7C3AED]/20 text-xl md:text-2xl" />
            </div>
            
            <div className="mt-4 md:mt-5 text-white pl-2 md:pl-4">
              <h4 className="font-jakarta text-base md:text-lg lg:text-xl font-semibold text-white">
                {card.name}
              </h4>
              <p className="text-xs md:text-sm text-[#94A3B8] font-light">
                {card.role}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
              indexRef.current = idx;
              controls.start({
                x: `-${idx * slideWidth}%`,
                transition: { duration: 0.6, ease: 'easeInOut' },
              });
            }}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
              indexRef.current % cards.length === idx 
                ? 'bg-[#7C3AED] w-4 md:w-6' 
                : 'bg-[#2d2d44] hover:bg-[#64748B]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}