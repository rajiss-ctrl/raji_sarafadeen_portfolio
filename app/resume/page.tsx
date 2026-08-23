import React from 'react';
import { Metadata } from 'next';
import Resume from '../components/Resume';

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View the professional resume of Raji Sarafadeen — ReactJS & Next.js developer. Skills include React, Next.js, TypeScript, TailwindCSS, Node.js, and more.",
  keywords: [
    "Raji Sarafadeen resume",
    "React developer CV",
    "Next.js developer skills",
    "frontend developer resume Nigeria",
    "TypeScript developer",
    "TailwindCSS developer",
    "web developer experience",
    "software engineer CV",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/resume`,
  },
  openGraph: {
    title: "Resume — Raji Sarafadeen | React & Next.js Developer",
    description:
      "Professional resume of Raji Sarafadeen — skills, experience, and education as a ReactJS & Next.js developer.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/resume`,
    images: [{ url: "/RajisSaraF-profile-image.png", width: 1200, height: 630, alt: "Raji Sarafadeen Resume" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume — Raji Sarafadeen",
    description: "Skills, experience, and education of Raji Sarafadeen, ReactJS & Next.js developer.",
    images: ["/RajisSaraF-profile-image.png"],
  },
};

export default function Page() {
  return (
    <div className="w-full mt-14 lg:mt-14 p-4 lg:pl-10 text-white">
      <Resume/>
    </div>
  );
}

