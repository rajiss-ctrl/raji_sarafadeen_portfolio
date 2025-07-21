import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300","400", "500", "700","800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ReactJS & Next.js Developer Portfolio | Raji Sarafadeen",
    template: "%s | ReactJS & Next.js Developer | Raji Sarafadeen",
  },
  description: "Raji Sarafadeen's portfolio — ReactJS & Next.js Developer for web & mobile solutions.",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: 'website',
    siteName: 'Raji Sarafadeen Portfolio',
    emails: ['omosanjos@hotmail.com'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Facebook OAuth Meta Tags */}
        <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        
        {/* Privacy Policy Link for Facebook Compliance */}
        <link rel="privacy-policy" href="/privacy" />
      </head>
      
      <body className="relative bg-[#0f172a] text-white font-[var(--font-roboto)] overflow-x-hidden">
        {/* Fixed Sidebar */}
        <aside className="fixed top-0 left-0 z-20 h-screen">
          <Sidebar />
        </aside>

        {/* Decorative vertical lines */}
        <div className="fixed top-0 left-0 w-full h-full flex justify-between z-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-[2px] bg-[#191d2b] h-full"></div>
          ))}
        </div>

        {/* Main content */}
        <main className="w-full lg:pl-auto h-screen lg:overflow-y-auto relative z-10 ">
          {/* Auth Success/Failure Toasts would appear here */}
          {children}
          
          {/* Privacy and Data Deletion Links (footer or hidden) */}
          <div className="hidden">
            <a href="/privacy">Privacy Policy</a>
            <a href="/data-deletion">Data Deletion</a>
          </div>
        </main>
      </body>
    </html>
  );
}