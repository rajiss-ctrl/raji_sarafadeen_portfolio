export type Comment = {
  $id: string;
  content: string;
  userId: string;
  $createdAt: string;
  like?: boolean;
  blogId?: string;
};