"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthStatus from "../components/auth/AuthStatus";
import BlogCard from "../components/blog/BlogCard";
import Link from "next/link";
import { BiMessage } from "react-icons/bi";

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
    <div className="relative w-full min-h-screen p-3 md:p-4 lg:p-5 text-white overflow-y-auto">
      {/* Contact Button */}
      <Link 
        href="/contacts" 
        className="absolute z-50 right-2 md:right-3 top-2 md:top-3 flex items-center gap-1 text-white bg-[#1a1a2e] px-2 py-1 md:px-2.5 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium border border-[#2d2d44] hover:border-[#7C3AED] transition-all duration-300 group"
      >
        <BiMessage size={12} className="text-[#7C3AED] group-hover:text-[#8B5CF6] transition-colors md:size-[14]" />
        <span className="text-[#A8B2D1] group-hover:text-white transition-colors">Contact Me</span>
      </Link>

      {/* Background heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold absolute top-6 md:top-8 lg:top-10 left-2 md:left-3 opacity-[0.04] text-white select-none">
        BLOGS
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto pt-3 md:pt-4 lg:pt-5">
        {/* Header */}
        <div className="md:w-[200px] lg:w-[240px]">
          <h1 className="font-jakarta relative leading-tight text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            RECENT BLOGS
          </h1>
          <div className="w-[50%] h-[2px] bg-[#2d2d44] rounded-[10px] mt-1.5 relative">
            <div className="absolute top-0 left-0 w-1/2 h-full rounded-[10px] bg-[#7C3AED]"></div>
          </div>
        </div>

        {/* Blogs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3.5 lg:gap-4 mt-3 md:mt-4 lg:mt-5 ml-0"
          >
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {blogs.length > blogsPerPage && (
          <div className="flex flex-wrap justify-center items-center gap-1.5 md:gap-2 mt-4 md:mt-5 lg:mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium bg-[#1a1a2e] text-[#A8B2D1] border border-[#2d2d44] hover:border-[#7C3AED] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
            >
              Prev
            </button>
            
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx + 1}
                onClick={() => handlePageChange(idx + 1)}
                className={`
                  w-8 h-8 md:w-9 md:h-9 rounded-lg text-xs md:text-sm font-medium transition-all duration-300
                  ${currentPage === idx + 1 
                    ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30" 
                    : "bg-[#1a1a2e] text-[#A8B2D1] border border-[#2d2d44] hover:border-[#7C3AED] hover:text-white"
                  }
                `}
              >
                {idx + 1}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium bg-[#1a1a2e] text-[#A8B2D1] border border-[#2d2d44] hover:border-[#7C3AED] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}