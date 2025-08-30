"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthStatus from "../components/auth/AuthStatus";
import BlogCard from "../components/blog/BlogCard";


export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const blogsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen text-white py-24 px-4 md:pl-[19%]">
      <AuthStatus />
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-6xl font-bold absolute top-40 left-34 opacity-5 text-gray-400">
          RECENT BLOGS
        </h1>
        <div className="pl-4 lg:pl-0 lg:w-[320px]">
          <h1 className="text-4xl font-extrabold mb-8 pb-4">RECENT BLOGS</h1>
          <div
            className="
              w-[50%] h-[0.4rem] 
              bg-[#0c3360] 
              rounded-[10px] 
              -mt-4
              relative before:absolute before:top before:left-0 before:w-1/2 before:h-[0.4rem] before:rounded-[10px] before:bg-[#037fff] before:content-['']
            "
          ></div>
        </div>

        {/* Blogs Grid with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20"
          >
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination (only show if > 4 blogs) */}
        {blogs.length > blogsPerPage && (
          <div className="flex justify-center mt-10 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-md bg-gray-700 text-gray-200 hover:bg-blue-500 disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx + 1}
                onClick={() => handlePageChange(idx + 1)}
                className={`w-10 h-10 rounded-full ${
                  currentPage === idx + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
                } transition`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-md bg-gray-700 text-gray-200 hover:bg-blue-500 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
