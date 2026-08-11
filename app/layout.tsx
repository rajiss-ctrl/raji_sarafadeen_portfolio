import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Raji Sarafadeen | ReactJS & Next.js Developer Portfolio",
    template: "%s | ReactJS & Next.js Developer | Raji Sarafadeen",
  },
  description:
    "Raji Sarafadeen's portfolio — ReactJS & Next.js Developer for web & mobile solutions.",
  twitter: { card: "summary_large_image" },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    siteName: "Raji Sarafadeen Portfolio",
    emails: ["omosanjos@hotmail.com"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${plusJakartaSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <link rel="privacy-policy" href="/privacy" />
      </head>

      <body className="bg-[#060d18] text-white overflow-x-hidden" suppressHydrationWarning>
        <SidebarProvider>
          <Sidebar />

          <main
            className="
              w-full min-h-screen bg-[#0a121f]
              md:fixed md:top-3 md:bottom-3 md:right-3 md:left-[240px]
              md:w-auto
              md:min-h-0
              md:rounded-2xl
              md:border md:border-[#1a2a3a]/50
              md:overflow-hidden
              relative z-10
              shadow-2xl shadow-black/20
            "
          >
            {/* Scrollable content with hidden scrollbar */}
            <div className="w-full h-full overflow-y-auto scrollbar-hide">
              {children}
            </div>

            <div className="hidden" aria-hidden="true">
              <a href="/privacy">Privacy Policy</a>
              <a href="/data-deletion">Data Deletion</a>
            </div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}