// app/success/page.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '@/app/lib/appwrite';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get();
        router.push('/blogs'); // Or your desired destination
      } catch {
        router.push('/blog');
      }
    };
    checkAuth();
  }, [router]);

  return <div>Loading...</div>;
}