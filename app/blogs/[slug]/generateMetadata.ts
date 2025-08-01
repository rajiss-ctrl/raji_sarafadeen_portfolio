import { getBlogPost } from './data'; // Move getBlogPost to a shared file like data.ts
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }>, _parent: ResolvingMetadata }): Promise<Metadata> {
  try {
    const resolvedParams = await params; // Await the params object
    const blogPost = await getBlogPost(resolvedParams.slug); // Use resolved params

    return {
      title: `${blogPost.title} | My Blog`,
      description: blogPost.content.slice(0, 160),
      openGraph: {
        title: blogPost.title,
        description: blogPost.content.slice(0, 160),
        images: blogPost.image ? [{ url: blogPost.image }] : [],
      },
    };
  } catch {
    return {
      title: 'Blog Post',
      description: 'A blog post',
    };
  }
}