'use client';

import React from 'react';

interface PrintButtonProps {
  targetId: string;
  label?: string;
  documentTitle?: string;
}

export default function PrintButton({
  targetId,
  label = 'Download / Print',
  documentTitle = 'Document',
}: PrintButtonProps) {
  const handlePrint = async () => {
    const printJS = (await import('print-js')).default;

    printJS({
      printable: targetId,
      type: 'html',
      targetStyles: ['*'],
      documentTitle: documentTitle,
    });
  };

  return (
    <button
      onClick={handlePrint}
      className="group relative bg-[#7C3AED] hover:bg-[#6D28D9] py-2.5 px-6 md:py-3 md:px-8 mt-4 md:mt-6 cursor-pointer overflow-hidden print:hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/30"
    >
      <span className="relative z-10 text-white font-medium text-sm md:text-base">
        {label}
      </span>
      <span
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          bg-white
          origin-right
          scale-x-0
          transition-transform
          duration-500
          ease-in-out
          group-hover:origin-left
          group-hover:scale-x-100
        "
      ></span>
    </button>
  );
}