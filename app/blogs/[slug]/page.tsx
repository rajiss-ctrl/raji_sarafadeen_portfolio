import { notFound } from 'next/navigation';
import { databases } from '@/app/lib/appwrite';
import { Query } from 'appwrite';
import CommentSection from '@/app/components/blog/CommentSection';
import Image from 'next/image';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    const blogsCollectionId = process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!;
    
    const blog = await databases.getDocument(dbId, blogsCollectionId, params.slug);
    
    return {
      title: `${blog.title} | Your Blog Name`,
      description: blog.description || 'A blog post',
      openGraph: {
        title: blog.title,
        description: blog.description || 'A blog post',
        images: blog.image ? [{ url: blog.image }] : [],
      },
    };
  } catch (error) {
    console.log(error)
    return {
      title: 'Blog Post',
      description: 'A blog post',
    };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const slug = params.slug;

  try {
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    const blogsCollectionId = process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!;
    const commentsCollectionId = process.env.NEXT_PUBLIC_APPWRITE_COMMENTS_COLLECTION_ID!;

    const blog = await databases.getDocument(dbId, blogsCollectionId, slug);

    const commentsRes = await databases.listDocuments(
      dbId,
      commentsCollectionId,
      [Query.equal('blogId', slug), Query.orderDesc('$createdAt')]
    );

    const comments = commentsRes.documents.map((comment) => ({
      $id: comment.$id,
      content: comment.content,
      userId: comment.userId,
      authorName: comment.authorName || 'Unknown',
      $createdAt: comment.$createdAt,
      like: comment.like,
      blogId: comment.blogId,
    }));

    return (
      <div className="min-h-screen text-white py-12 px-4 md:pl-[19%]">
        <div className="max-w-4xl mx-auto">
          <article>
            <div className="flex items-center text-sm text-gray-400 mb-6">
              <span>
                {new Date(blog.$createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{Math.ceil(blog.content.length / 1000)} min read</span>
            </div>

            {blog.image && (
              <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden shadow-lg">
                <Image
                  width={1000}
                  height={1000}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}

            <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
            
            <div
              className="prose prose-invert max-w-none leading-relaxed tracking-wide"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          <CommentSection blogId={slug} initialComments={comments} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return notFound();
  }
}