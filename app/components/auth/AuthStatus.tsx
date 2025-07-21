// components/auth/AuthStatus.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
import { account } from '@/app/lib/appwrite';

type AppwriteUser = {
  $id: string;
  email: string;
  name?: string;
};

export default function AuthStatus() {
  const [user, setUser] = useState<AppwriteUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        console.log(error)
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
        

  if (loading) return <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>;

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
        {user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
          <Link 
            href="/admin" 
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Admin Dashboard
          </Link>
        }
          <button
            onClick={handleLogout}
            className="text-sm bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Logout
          </button>
        </>
      ) : (
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
          <SocialIcons />
        </div>
      )}
    </div>
  );
}