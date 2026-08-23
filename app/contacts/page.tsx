import { Metadata } from 'next';
import React from 'react'
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Raji Sarafadeen — ReactJS & Next.js developer available for freelance projects, collaborations, and full-time opportunities.",
  keywords: [
    "contact Raji Sarafadeen",
    "hire React developer Nigeria",
    "freelance Next.js developer",
    "hire frontend developer",
    "web developer for hire",
    "React freelancer",
    "Next.js freelancer Nigeria",
    "get in touch web developer",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contacts`,
  },
  openGraph: {
    title: "Contact Raji Sarafadeen | Hire a React & Next.js Developer",
    description:
      "Available for freelance, contract, and full-time roles. Reach out to Raji Sarafadeen — ReactJS & Next.js developer.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contacts`,
    images: [{ url: "/RajisSaraF-profile-image.png", width: 1200, height: 630, alt: "Contact Raji Sarafadeen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Raji Sarafadeen",
    description: "Hire Raji Sarafadeen for React & Next.js development work.",
    images: ["/RajisSaraF-profile-image.png"],
  },
};

const page = () => {
  return (
    <div className='px-2 py-10 lg:pl-14'>
      <Contact/> 
    </div>
  )
}

export default page