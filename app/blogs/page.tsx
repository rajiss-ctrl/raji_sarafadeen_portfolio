import React from 'react'

// Project Id =687163cd0004697be38b
// API ENDPOINT =https://fra.cloud.appwrite.io/v1
// import { databases } from '@/lib/appwrite';
import { Query } from 'appwrite';
// import BlogCard from '@/components/Blog/BlogCard';
// import AuthStatus from '@/components/Auth/AuthStatus';
import { Metadata } from 'next';
import { databases } from '../lib/appwrite';
import BlogCard from '../components/blog/BlogCard';
import AuthStatus from '../components/auth/AuthStatus';
// import AuthStatus from '../components/auth/AuthStatus';
// import CommentSection from '../components/blog/CommentSection';
export const metadata: Metadata = {
  title: 'Blog | Raji Sarafadeen',
  description: 'Technical articles and thoughts',
};

export default async function BlogListPage() {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!,
      [Query.orderDesc('$createdAt')] // Sorting by creation date
    );

    const blogs = response.documents.map(blog => ({
      id: blog.$id,
      title: blog.title,
      excerpt: blog.content.substring(0, 150) + '...',
      imageUrl: blog.image,
       date: blog.$createdAt,
      readTime: `${Math.ceil(blog.content.length / 1000)} min read`
    }));

    return (
      <div className=" min-h-screen text-white py-24 px-4 md:pl-[19%]">
        <AuthStatus/>
        <div className="max-w-7xl mx-auto mt-10">
          <h1 className="text-6xl font-bold absolute top-40 left-34 opacity-5 text-gray-400"> RECENT BLOGS</h1>
          <div className="pl-4 lg:pl-0 lg:w-[320px]">
            <h1 className="text-4xl font-extrabold mb-8 pb-4">
               RECENT BLOGS
            </h1>
            <div className="
                      w-[50%] h-[0.4rem] 
                      bg-[#0c3360] 
                      rounded-[10px] 
                      -mt-4
                      relative before:absolute before:top before:left-0 before:w-1/2 before:h-[0.4rem] before:rounded-[10px] before:bg-[#037fff] before:content-['']
                      ">
              </div>
          </div>

          {/* <h1 className="text-4xl font-extrabold mb-8 border-b border-gray-700 pb-4">
            RECENT BLOGS
          </h1> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {blogs.map(blog => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

          {/* Pagination mock */}
          <div className="flex justify-center mt-10 space-x-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-full ${
                  page === 2 ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
                } hover:bg-blue-500 hover:text-white transition`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

    );
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return (
      <div className="md:pl-[19%] container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Blog</h1>
        <p className="text-red-500">Error loading blog posts. Please try again later.</p>
      </div>
    );
  }
}