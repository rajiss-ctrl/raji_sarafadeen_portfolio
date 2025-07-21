// app/failure/page.tsx
import Link from 'next/link';

export default function FailurePage() {
  return (
    <div className="max-w-md mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Login Failed</h1>
      <p className="mb-4">We couldn&apos;t log you in. Please try again.</p>
      <Link href="/login" className="text-blue-600 hover:underline">
        Go back to login
      </Link>
    </div>
  );
}