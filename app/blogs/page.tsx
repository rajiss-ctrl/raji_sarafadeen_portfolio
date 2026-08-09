import { Metadata } from "next";
import Link from "next/link";
import { BiMessage } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Blog | Raji Sarafadeen",
  description: "Technical articles and thoughts from Raji Sarafadeen — coming soon.",
};

export default function BlogListPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      {/* Background ghost text */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold absolute top-6 left-4 opacity-[0.03] select-none pointer-events-none">
        BLOG
      </h1>

      {/* Glow orb */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#7C3AED]/10 blur-[120px] pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full bg-[#0d1520] border border-[#1a2a3a] rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/30">

        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#7C3AED]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
            />
          </svg>
        </div>

        {/* Label */}
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-3">
          Coming Soon
        </span>

        {/* Heading */}
        <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
          The blog is on its way
        </h2>

        {/* Description */}
        <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-8">
          I&apos;m working on articles about React, Next.js, performance, and
          building products. Check back soon — or reach out if there&apos;s a
          topic you&apos;d like me to cover.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-[#1a2a3a] mb-8" />

        {/* CTA */}
        <Link
          href="/contacts"
          className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/30"
        >
          <BiMessage size={15} />
          Get notified
        </Link>

        <Link
          href="/"
          className="mt-4 text-xs text-[#64748B] hover:text-[#A8B2D1] transition-colors duration-300"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
