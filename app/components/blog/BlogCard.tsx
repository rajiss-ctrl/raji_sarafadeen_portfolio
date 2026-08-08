import Link from 'next/link';
import Image from 'next/image';

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  date: string;
  readTime: string;
};

export default function BlogCard({ id, title, imageUrl, excerpt, date }: BlogCardProps) {
  const parsedDate = new Date(date);
  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = parsedDate.toLocaleString('en-US', { month: 'short' });

  return (
    <Link href={`/blogs/${id}`} className="group block h-full">
      <div className="bg-[#1a1a2e] rounded-xl border border-[#2d2d44] overflow-hidden hover:border-[#7C3AED] transition-all duration-500 hover:shadow-xl hover:shadow-[#7C3AED]/10 hover:-translate-y-1 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#13162D]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-transparent z-10"></div>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#64748B]">
              No image
            </div>
          )}
          
          {/* Date Box */}
          <div className="absolute top-3 left-3 z-20 bg-[#7C3AED] text-white text-center py-1.5 px-2.5 rounded-lg shadow-lg shadow-[#7C3AED]/30">
            <p className="text-sm md:text-base font-bold leading-4">{day}</p>
            <p className="text-xs md:text-sm font-semibold">{month}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 md:p-3.5 lg:p-4 flex flex-col flex-1">
          <h3 className="text-sm md:text-base lg:text-lg font-semibold text-white group-hover:text-[#7C3AED] transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          
          <div 
            className="text-[#94A3B8] text-xs md:text-sm font-light leading-relaxed mt-1 line-clamp-3 flex-1"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />

          {/* Read More Link */}
          <div className="flex items-center justify-end mt-2 md:mt-2.5 pt-1.5 md:pt-2 border-t border-[#2d2d44]">
            <span className="text-[#7C3AED] text-xs md:text-sm font-medium group-hover:text-[#8B5CF6] transition-colors duration-300">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}