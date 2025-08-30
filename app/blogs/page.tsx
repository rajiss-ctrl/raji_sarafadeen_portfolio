

import { Query, Models } from "appwrite";
import { databases } from "../lib/appwrite";
import BlogList from "./BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog | Raji Sarafadeen',
  description: 'Technical articles and thoughts',
};

export default async function BlogListPage() {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );

    // Map Appwrite docs into blog objects
    const blogs = response.documents.map((blog: Models.Document) => ({
      id: blog.$id,
      title: blog.title as string,
      excerpt: (blog.content as string).substring(0, 150) + "...",
      imageUrl: blog.image as string,
      date: blog.$createdAt,
      readTime: `${Math.ceil((blog.content as string).length / 1000)} min read`,
    }));

    return <BlogList blogs={blogs} />;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <div className="md:pl-[19%] container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Blog</h1>
        <p className="text-red-500">
          Error loading blog posts. Please try again later.
        </p>
      </div>
    );
  }
}
