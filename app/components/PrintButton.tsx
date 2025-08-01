'use client';

import React from 'react';

interface PrintButtonProps {
  targetId: string; // The HTML element id to print
  label?: string; // Button text
  documentTitle?: string; // Optional document title
}

export default function PrintButton({
  targetId,
  label = 'Download / Print',
  documentTitle = 'Document',
}: PrintButtonProps) {
  const handlePrint = async () => {
    // Dynamically import print-js to avoid server-side evaluation
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
      className="group relative bg-[#037fff] py-3 px-6 mt-8 cursor-pointer overflow-hidden print:hidden"
    >
      <span className="relative z-10 text-white">{label}</span>
      <span
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
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