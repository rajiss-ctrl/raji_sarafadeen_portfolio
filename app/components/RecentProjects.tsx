"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../data";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const RecentProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'web', 'mobile', 'fullstack'];
  
  // Filter projects - if category doesn't exist, treat as 'web' default
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        // If project has category, use it, otherwise default to 'web'
        const category = (project as { category?: string }).category || 'web';
        return category === activeFilter;
      });

  return (
    <div className="w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 md:gap-2 mb-4 lg:mb-5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              px-3 py-1.5 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2 rounded-lg text-xs md:text-sm font-medium capitalize
              transition-all duration-300
              ${activeFilter === filter 
                ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30' 
                : 'bg-[#1a1a2e] text-[#A8B2D1] border border-[#2d2d44] hover:border-[#7C3AED] hover:text-white'
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3.5 lg:gap-4 ml-0">
        {filteredProjects.map((item) => (
          <div
            className="group relative"
            key={item.id}
          >
            <Link href={item.link || '#'} target="_blank" rel="noopener noreferrer">
              <div className="bg-[#1a1a2e] rounded-xl border border-[#2d2d44] overflow-hidden hover:border-[#7C3AED] transition-all duration-500 hover:shadow-xl hover:shadow-[#7C3AED]/10 hover:-translate-y-1 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#13162D]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-transparent z-10"></div>
                  <Image
                    src={item.img || '/placeholder.png'}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Badge - use default if not exists */}
                  <span className="absolute top-2 right-2 z-20 text-[10px] bg-[#1a1a2e]/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[#A8B2D1] border border-[#2d2d44] capitalize">
                    {(item as { category?: string }).category || 'Web'}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-3 md:p-3.5 lg:p-4 flex flex-col flex-1">
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white group-hover:text-[#7C3AED] transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#94A3B8] text-xs md:text-sm font-light leading-relaxed mt-1 line-clamp-2 flex-1">
                    {item.des}
                  </p>

                  {/* Tech Stack Icons */}
                  {item.iconLists && item.iconLists.length > 0 && (
                    <div className="flex items-center mt-1.5 md:mt-2">
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-[#2d2d44] rounded-full bg-[#0a121f] w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex justify-center items-center hover:border-[#7C3AED] transition-all duration-300"
                            style={{
                              transform: `translateX(-${3 * index + 2}px)`,
                              zIndex: 10 - index,
                            }}
                          >
                            <Image 
                              src={icon} 
                              alt="tech icon" 
                              width={12} 
                              height={12}
                              className="p-0.5 object-contain md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Live Site Link */}
                  <div className="flex items-center justify-between mt-1.5 md:mt-2 pt-1.5 md:pt-2 border-t border-[#2d2d44]">
                    <span className="text-[10px] text-[#64748B]">
                      {item.iconLists?.length || 0} technologies
                    </span>
                    <div className="flex items-center gap-1 text-[#A8B2D1] group-hover:text-[#7C3AED] transition-colors duration-300">
                      <span className="text-[10px] md:text-xs font-medium">View Project</span>
                      <FaLocationArrow className="text-[#7C3AED] text-[10px] md:text-xs group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-8 md:py-10">
          <p className="text-[#A8B2D1] text-sm md:text-base">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;