import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card } from '@/components/ui/card';
// import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white flex flex-col items-center px-4 py-12">
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full"
        />
        <h1 className="text-2xl font-semibold">Jane Influencer</h1>
        <p className="text-sm text-gray-400 max-w-sm text-center">
          Lifestyle content creator. Sharing my journey & fav products 💫
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-4 mt-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/ig.svg" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <Image src="/tt.svg" alt="TikTok" width={24} height={24} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <Image src="/x.svg" alt="X" width={24} height={24} />
        </a>
      </div>

      {/* Link Buttons */}
      <div className="flex flex-col gap-4 mt-10 w-full max-w-md">
        <div className="bg-white/5 hover:bg-white/10 transition p-4 rounded-xl text-center">
          <a href="https://calendly.com/jane-call" target="_blank">📞 Book a 1:1 Call</a>
        </div>
        <div className="bg-white/5 hover:bg-white/10 transition p-4 rounded-xl text-center">
          <a href="https://shop.com/jane-presets" target="_blank">🎨 My Lightroom Presets</a>
        </div>
        <div className="bg-white/5 hover:bg-white/10 transition p-4 rounded-xl text-center">
          <a href="https://youtube.com" target="_blank">🎥 My YouTube Channel</a>
        </div>
      </div>

      {/* Email Capture */}
      <form className="mt-12 w-full max-w-md flex gap-2">
        <input
          type="email"
          placeholder="Join my VIP list"
          className="bg-zinc-900 text-white border border-zinc-700"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600">
          {/* <Mail className="w-4 h-4 mr-1" /> */}
           Join
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-16 text-xs text-zinc-500">
        © 2025 JaneInfluencer — Powered by HackyRaji
      </footer>
    </main>
  );
}
