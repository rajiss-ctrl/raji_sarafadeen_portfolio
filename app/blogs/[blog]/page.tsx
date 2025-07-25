import { notFound } from 'next/navigation';
import { databases } from '@/app/lib/appwrite';
import { Query, type Models } from 'appwrite';
import CommentSection from '@/app/components/blog/CommentSection';
import Image from 'next/image';
import type { Metadata } from 'next';

// 1. Define strict types
interface BlogPost extends Models.Document {
  title: string;
  content: string;
  image?: string;
}

// In page.tsx
interface Comment {
  $id: string;
  content: string;
  userId: string; // Must include this
  authorName: string;
  $createdAt: string;
  like?: boolean;
  blogId: string;
}



// 2. Generate metadata (runs in parallel with page)
export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}): Promise<Metadata> {
  const blog = await getBlogPost(params.blog);
  return {
    title: `${blog.title} | My Blog`,
    description: blog.content.slice(0, 160),
    openGraph: {
      title: blog.title,
      images: blog.image ? [{ url: blog.image }] : [],
    },
  };
}

// 3. Data fetching functions
async function getBlogPost(blogId: string): Promise<BlogPost> {
  const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!;
  
  const doc = await databases.getDocument(dbId, collectionId, blogId);
  if (!doc) throw new Error('Blog not found');
  return doc as BlogPost;
}



async function getComments(blogId: string): Promise<Comment[]> {
  const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COMMENTS_COLLECTION_ID!;
  
  const res = await databases.listDocuments(dbId, collectionId, [
    Query.equal('blogId', blogId),
    Query.orderDesc('$createdAt'),
  ]);

  return res.documents.map(doc => ({
    $id: doc.$id,
    content: doc.content,
    userId: doc.userId,
    authorName: doc.authorName || 'Anonymous',
    $createdAt: doc.$createdAt,
    like: doc.like,
    blogId: doc.blogId,
  }));
}

// 4. Page component
export default async function BlogPage({
  params,
}: {
  params: { blog: string };
}) {
  try {
    // Fetch data in parallel
    const [blog, comments] = await Promise.all([
      getBlogPost(params.blog),
      getComments(params.blog),
    ]);

    return (
      <div className="min-h-screen text-white py-12 px-4 md:pl-[19%]">
        <div className="max-w-4xl mx-auto">
          <article>
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
              <div className="flex items-center text-sm text-gray-400">
                <time dateTime={blog.$createdAt}>
                  {new Date(blog.$createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{Math.ceil(blog.content.length / 1000)} min read</span>
              </div>
            </header>

            {blog.image && (
              <div className="relative w-full h-64 md:h-96 mb-8">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}

            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          <CommentSection blogId={params.blog} initialComments={comments} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error)
    return notFound();
  }
}