import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-6 text-white overflow-hidden">

      {/* Background ghost number */}
      <span className="absolute text-[20rem] font-extrabold text-white/[0.02] select-none pointer-events-none leading-none">
        404
      </span>

      {/* Glow orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-[140px] pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full bg-[#0d1520] border border-[#1a2a3a] rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/30">

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
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Label */}
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-3">
          Error 404
        </span>

        {/* Heading */}
        <h1 className="font-jakarta text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
          Page not found
        </h1>

        {/* Description */}
        <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-[#1a2a3a] mb-8" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/30"
          >
            ← Back to home
          </Link>
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#1a2a3a] hover:border-[#7C3AED]/50 text-[#94A3B8] hover:text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
