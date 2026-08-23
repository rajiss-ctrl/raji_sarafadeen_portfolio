import Hero from "./components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raji Sarafadeen | ReactJS & Next.js Developer Portfolio",
  description:
    "Raji Sarafadeen is a ReactJS & Next.js developer based in Nigeria, building fast, accessible, and scalable web applications for clients worldwide.",
  keywords: [
    "Raji Sarafadeen",
    "React developer Nigeria",
    "Next.js developer",
    "frontend developer portfolio",
    "web developer Nigeria",
    "ReactJS developer",
    "JavaScript developer",
    "hire React developer",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  openGraph: {
    title: "Raji Sarafadeen | ReactJS & Next.js Developer",
    description:
      "Portfolio of Raji Sarafadeen — ReactJS & Next.js developer building fast, scalable web apps.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [{ url: "/RajisSaraF-profile-image.png", width: 1200, height: 630, alt: "Raji Sarafadeen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raji Sarafadeen | ReactJS & Next.js Developer",
    description: "Portfolio of Raji Sarafadeen — ReactJS & Next.js developer.",
    images: ["/RajisSaraF-profile-image.png"],
  },
};

export default function Home() {
  return <Hero />;
}
