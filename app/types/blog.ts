// app/types/blog.ts
export interface Comment {
  $id: string;
  content: string;
  userId: string;          // Required by CommentSection
  authorName: string;
  $createdAt: string;
  like?: boolean;
  blogId: string;
}

export interface BlogPost {
  $id: string;
  title: string;
  content: string;
  $createdAt: string;
  image?: string;
}