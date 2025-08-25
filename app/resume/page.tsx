import React from 'react';
import { Metadata } from 'next';
import Resume from '../components/Resume';

export const metadata: Metadata = {
  title: 'Resume',
};

export default function Page() {
  return (
    <div className="w-full mt-14 lg:mt-32 p-4 lg:pl-[19%] text-white">
      <Resume/>
    </div>
  );
}