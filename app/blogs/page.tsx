import { Query, Models } from "appwrite";
import { databases } from "../lib/appwrite";
import BlogList from "./BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog | Raji Sarafadeen',
  description: 'Technical articles and thoughts from Raji Sarafadeen',
};

// Add revalidation to prevent excessive API calls
export const revalidate = 3600; // revalidate every hour

export default async function BlogListPage() {
  // Check if environment variables are set
  const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID;

  if (!dbId || !collectionId) {
    console.error('Missing Appwrite environment variables');
    return (
      <div className="relative w-full min-h-screen p-3 md:p-4 lg:p-5 text-white flex items-center justify-center">
        <div className="bg-[#1a1a2e] border border-[#2d2d44] rounded-xl p-6 md:p-8 lg:p-10 max-w-md w-full text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Configuration Error</h2>
          <p className="text-[#94A3B8] text-sm md:text-base mb-4">
            Blog service is not configured. Please check your environment variables.
          </p>
        </div>
      </div>
    );
  }

  try {
    const response = await databases.listDocuments(
      dbId,
      collectionId,
      [Query.orderDesc("$createdAt")]
    );

    const blogs = response.documents.map((blog: Models.Document) => ({
      id: blog.$id,
      title: blog.title as string || 'Untitled',
      excerpt: ((blog.content as string) || '').substring(0, 150) + "...",
      imageUrl: blog.image as string || '',
      date: blog.$createdAt || new Date().toISOString(),
      readTime: `${Math.ceil(((blog.content as string) || '').length / 1000)} min read`,
    }));

    return <BlogList blogs={blogs} />;
  } catch (error: any) {
    console.error("Error fetching blogs:", error);
    
    // Check if it's the paused project error
    const isPaused = error?.message?.includes('paused due to inactivity');
    
    return (
      <div className="relative w-full min-h-screen p-3 md:p-4 lg:p-5 text-white flex items-center justify-center">
        <div className="bg-[#1a1a2e] border border-[#2d2d44] rounded-xl p-6 md:p-8 lg:p-10 max-w-md w-full text-center">
          {isPaused ? (
            <>
              <div className="text-5xl mb-4">⏸️</div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Blog Service Unavailable</h2>
              <p className="text-[#94A3B8] text-sm md:text-base mb-4">
                The blog service is currently paused. Please try again later or contact the administrator.
              </p>
            </>
          ) : (
            <>
              <div className="text-5xl mb-4">🔌</div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Connection Error</h2>
              <p className="text-[#94A3B8] text-sm md:text-base mb-4">
                We're having trouble connecting to the blog service. Please try again later.
              </p>
            </>
          )}
          <button 
            onClick={() => window.location.reload()}
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
}