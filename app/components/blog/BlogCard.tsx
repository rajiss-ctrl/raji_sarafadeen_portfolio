import Link from 'next/link';
import Image from 'next/image';

type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  date: string; // Expecting ISO string or parsable date
  readTime: string;
};

export default function BlogCard({ id, title,  imageUrl,excerpt, date }: BlogCardProps) {
  // excerpt,
  const parsedDate = new Date(date);

  const day = parsedDate.getDate().toString().padStart(2, '0');
  const month = parsedDate.toLocaleString('en-US', { month: 'short' });

  return (
    <Link href={`/blogs/${id}`} className="group bg-[#191d2b] ">
      <div className=" rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-white p-5">
        <div className="relative h-64 w-full">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
          {/* Date Box Overlay */}
          <div className="absolute font-bold  top-4 left-4 bg-blue-600 text-white text-center  py-2 px-4  shadow-lg">
            <p className="text-lg leading-4">{day}</p>
            <p className="text-lg">{month}</p>
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl font-bold my-3">{title}</h3>
          {/* <p className="text-sm text-gray-300">{excerpt}</p> */}
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
      </div>
    </Link>
  );
}
