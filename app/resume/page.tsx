import React from 'react';
import { Metadata } from 'next';
import Resume from '../components/Resume';

export const metadata: Metadata = {
  title: 'Resume',
};

export default function Page() {
  return (
    <div className="w-full mt-14 lg:mt-14 p-4 lg:pl-10 text-white">
      <Resume/>
    </div>
  );
}