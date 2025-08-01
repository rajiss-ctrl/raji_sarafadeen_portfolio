import { databases } from '@/app/lib/appwrite';

export async function getBlogPost(blogId: string) {
  const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!;

  const doc = await databases.getDocument(dbId, collectionId, blogId);

  return {
    $id: doc.$id,
    title: doc.title,
    content: doc.content,
    $createdAt: doc.$createdAt,
    image: doc.image,
  };
}
