'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const cards = [
  { id: 1, name: 'Susan', role: 'Client', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et repellendus dolor doloremque saepe voluptatibus consequatur blanditiis.' },
  { id: 2, name: 'Elijah Morakinyo', role: 'CEO Trig8Ltd', text: 'Dedicated, hardworking and diligent developer. He knows the pros and cons of ReactJS and keeps learning every day.' },
  { id: 3, name: 'Anna', role: 'Client', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et repellendus dolor doloremque saepe voluptatibus consequatur blanditiis eum.' },
  { id: 4, name: 'Mike', role: 'Client', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et repellendus dolor doloremque saepe voluptatibus consequatur blanditiis eum.' },
];

export default function TestimonialCarousel() {
  const controls = useAnimation();
  const [slideWidth, setSlideWidth] = useState(50); // default desktop: 50%

  // Listen for screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setSlideWidth(e.matches ? 100 : 50);
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  // Duplicate slides: only 1 for mobile, 2 for desktop
  const slides = [
    ...cards,
    ...cards.slice(0, slideWidth === 100 ? 1 : 2),
  ];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;

      controls.start({
        x: `-${index * slideWidth}%`,
        transition: { duration: 1, ease: 'easeInOut' },
      });

      if (index >= cards.length) {
        setTimeout(() => {
          controls.set({ x: '0%' });
          index = 0;
        }, 1200);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [controls, slideWidth]);

  return (
    <div className="overflow-hidden w-full lg:max-w-7xl lg:mx-auto">
      <motion.div className="flex" animate={controls}>
        {slides.map((card, idx) => (
          <div
            key={idx}
            className={`box-border pr-4 min-w-full md:min-w-1/2`} // 👈 Tailwind handles responsive width
          >
            <div className="relative bg-[#191d2b] border-l-4 border-gray-700 p-4 lg:p-8
              before:absolute before:left-4 before:-bottom-[25px]
              before:border-r-[25px] before:border-t-[25px]
              before:border-r-transparent before:border-t-[#191d2b]">
              <p className="text-[#86a4c4]">{card.text}</p>
            </div>
            <div className="mt-6 text-white">
              <h4 className="font-manrope text-xl">{card.name}</h4>
              <p className="text-sm text-[#86a4c4]">{card.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
