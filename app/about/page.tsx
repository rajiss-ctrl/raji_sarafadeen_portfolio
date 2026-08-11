import { Metadata } from 'next';
import React from 'react'
import About from '../components/About';

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Raji Sarafadeen — a ReactJS & Next.js developer from Nigeria with expertise in building performant, accessible web and mobile applications.",
  keywords: [
    "about Raji Sarafadeen",
    "React developer biography",
    "Next.js developer Nigeria",
    "frontend engineer profile",
    "web developer skills",
    "JavaScript engineer",
    "hire frontend developer",
    "software developer Nigeria",
  ],
  openGraph: {
    title: "About Raji Sarafadeen | ReactJS & Next.js Developer",
    description:
      "Meet Raji Sarafadeen — ReactJS & Next.js developer building scalable web solutions from Nigeria.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
    images: [{ url: "/RajisSaraF-profile-image.png", width: 1200, height: 630, alt: "Raji Sarafadeen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Raji Sarafadeen | React Developer",
    description: "ReactJS & Next.js developer from Nigeria. Learn more about Raji Sarafadeen.",
    images: ["/RajisSaraF-profile-image.png"],
  },
};

const page = () => {
  return (
    <>
      <About/>
    </>
  )
}

export default page