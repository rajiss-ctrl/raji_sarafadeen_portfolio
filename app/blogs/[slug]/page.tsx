import { notFound } from 'next/navigation';
import { databases } from '@/app/lib/appwrite';
import { Query } from 'appwrite';
import CommentSection from '@/app/components/blog/CommentSection';
import Image from 'next/image';
// import type { Metadata, ResolvingMetadata } from 'next';
import { generateMetadata } from './generateMetadata';
import { getBlogPost } from './data';

// interface BlogPost {
  //   $id: string;
  //   title: string;
  //   content: string;
  //   $createdAt: string;
  //   image?: string;
  // }
  
  interface Comment {
    $id: string;
    content: string;
    userId: string;
    authorName: string;
    $createdAt: string;
    like?: boolean;
    blogId: string;
  }
  
  
  export const revalidate = 3600;
  
  type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };
  
  export { /* @next-codemod-error `generateMetadata` export is re-exported. Check if this component uses `params` or `searchParams`*/
  generateMetadata };
// export async function generateMetadata(
//   { params }: Props,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   _parent: ResolvingMetadata
// ): Promise<Metadata> {
//   try {
//     const { slug: blogId } = params; // ✅ NO await
//     const blogPost = await getBlogPost(blogId);

//     return {
//       title: `${blogPost.title} | My Blog`,
//       description: blogPost.content.slice(0, 160),
//       openGraph: {
//         title: blogPost.title,
//         description: blogPost.content.slice(0, 160),
//         images: blogPost.image ? [{ url: blogPost.image }] : [],
//       },
//     };
//   } catch {
//     return {
//       title: 'Blog Post',
//       description: 'A blog post',
//     };
//   }
// }



// async function getBlogPost(blogId: string): Promise<BlogPost> {
//   const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
//   const collectionId = process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID;

//   if (!dbId || !collectionId) {
//     throw new Error('Missing environment variables');
//   }

//   const doc = await databases.getDocument(dbId, collectionId, blogId);
//   if (!doc) throw new Error('Blog not found');

//   return {
//     $id: doc.$id,
//     title: doc.title,
//     content: doc.content,
//     $createdAt: doc.$createdAt,
//     image: doc.image,
//   };
// }

async function getComments(blogId: string): Promise<Comment[]> {
  const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COMMENTS_COLLECTION_ID;

  if (!dbId || !collectionId) {
    throw new Error('Missing environment variables');
  }

  const res = await databases.listDocuments(dbId, collectionId, [
    Query.equal('blogId', blogId),
    Query.orderDesc('$createdAt'),
  ]);

  return res.documents.map((doc) => ({
    $id: doc.$id,
    content: doc.content,
    userId: doc.userId,
    authorName: doc.authorName || 'Anonymous',
    $createdAt: doc.$createdAt,
    like: doc.like,
    blogId: doc.blogId,
  }));
}

export default async function BlogPage(props: Props) {
  const params = await props.params;
  try {
    const { slug: blogId } = params; 
    const [blogPost, comments] = await Promise.all([
      getBlogPost(blogId),
      getComments(blogId),
    ]);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: blogPost.title,
      datePublished: blogPost.$createdAt,
      wordCount: blogPost.content.split(/\s+/).length,
    };

    return (
      <div className="min-h-screen text-white py-12 px-4 md:pl-[19%]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="max-w-4xl mx-auto">
          <article>
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{blogPost.title}</h1>
              <div className="flex items-center text-sm text-gray-400">
                <time dateTime={blogPost.$createdAt}>
                  {new Date(blogPost.$createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>
                  {Math.ceil(blogPost.content.length / 1000)} min read
                </span>
              </div>
            </header>

            {blogPost.image && (
              <div className="relative w-full h-64 md:h-96 mb-8">
                <Image
                  src={blogPost.image}
                  alt={blogPost.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </article>

          <CommentSection blogId={blogId} initialComments={comments} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return notFound();
  }
}