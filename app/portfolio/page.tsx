import { Metadata } from 'next';
import React from 'react'
import Portfolio from '../components/Portfolio';

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse the portfolio of Raji Sarafadeen — ReactJS & Next.js developer. Projects include web apps, mobile interfaces, and full-stack solutions built with React, Next.js, and TypeScript.",
  keywords: [
    "Raji Sarafadeen portfolio",
    "React projects",
    "Next.js projects",
    "frontend developer work",
    "web app projects Nigeria",
    "JavaScript portfolio",
    "TypeScript projects",
    "full-stack developer projects",
  ],
  openGraph: {
    title: "Portfolio — Raji Sarafadeen | React & Next.js Projects",
    description:
      "Explore web and mobile projects built by Raji Sarafadeen using React, Next.js, TypeScript, and TailwindCSS.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio`,
    images: [{ url: "/RajisSaraF-profile-image.png", width: 1200, height: 630, alt: "Raji Sarafadeen Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Raji Sarafadeen",
    description: "React & Next.js projects by Raji Sarafadeen.",
    images: ["/RajisSaraF-profile-image.png"],
  },
};

const page = () => {
  return (
    <div className='py-10 px-4 lg:pb-10  lg:px-12'>
      <Portfolio/>
    </div >
  )
}

export default page