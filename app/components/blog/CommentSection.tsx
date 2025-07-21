'use client'

import { Client, Account } from 'appwrite';
import { databases, ID } from '@/app/lib/appwrite';
import { useState, useEffect } from 'react';
import AuthStatus from '../auth/AuthStatus';

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

type Comment = {
  $id: string;
  content: string;
  userId: string;
  authorName: string;
  $createdAt: string;
  like?: boolean;
  blogId?: string;
};

type CommentSectionProps = {
  blogId: string;
  initialComments: Comment[];
};

type AppwriteUser = {
  $id: string;
  email: string;
  name?: string;
};

function isComment(document: unknown): document is Comment {
  return (
    typeof document === 'object' &&
    document !== null &&
    '$id' in document &&
    'content' in document &&
    'userId' in document &&
    '$createdAt' in document
  );
}

export default function CommentSection({ blogId, initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState<AppwriteUser | null>(null);
  const [loading, setLoading] = useState(false);
  const MAX_WORDS = 30;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const account = new Account(client);
        const currentUser = await account.get();
        setUser({
          $id: currentUser.$id,
          email: currentUser.email,
          name: currentUser.name
        });
      } catch (error) {
        console.log('User not logged in', error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const wordCount = newComment.trim() ? newComment.trim().split(/\s+/).length : 0;
  const isLimitExceeded = wordCount > MAX_WORDS;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newComment.trim() || isLimitExceeded) return;

    setLoading(true);
    try {
      // Safely fallback if name is null or empty
      const authorName = user.name?.trim() || user.email.split('@')[0] || 'Unknown';

      const response = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COMMENTS_COLLECTION_ID!,
        ID.unique(),
        {
          content: newComment.trim(),
          authorName,
          blogId,
          userId: user.$id
        }
      );

      if (!isComment(response)) {
        throw new Error('Invalid comment format returned');
      }

      setComments([response, ...comments]);
      setNewComment('');
    } catch (error) {
      console.error('Failed to post comment:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (commentId: string, like: boolean) => {
    if (!user) return;

    try {
      await databases.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COMMENTS_COLLECTION_ID!,
        commentId,
        { like }
      );

      setComments(comments.map(c =>
        c.$id === commentId ? { ...c, like } : c
      ));
    } catch (error) {
      console.error('Failed to update like:', error);
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-6">{comments.length} Comment{comments.length <= 1 ? '' : 's'}</h3>

      
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-2">
            <div className="flex gap-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="grid place-content-center font-bold h-[40px] w-[40px] bg-blue-500 rounded-full text-white">
                  <h3>{(user?.name?.trim() || user?.email.split('@')[0] || 'U')[0]}</h3>
                </div>
                <h3 className="text-white text-xs font-bold">
                  {user?.name?.trim() || user?.email.split('@')[0] || 'Unknown'}
                </h3>
              </div>

              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts (max 30 words)"
                className="w-full p-1 outline-0 bg-[#1c1e27] border-2 border-[#494b52] rounded-lg"
                rows={3}
                disabled={loading}
              />
            </div>
            <div className={`text-sm ${isLimitExceeded ? 'text-red-500' : 'text-gray-500'}`}>
              {wordCount} / {MAX_WORDS} words
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              disabled={!newComment.trim() || isLimitExceeded || loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Posting...
                </>
              ) : (
                'Post Comment'
              )}
            </button>
            <AuthStatus />
          </div>
        </form>
    

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.$id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-1">
                  <div className="grid place-content-center font-bold h-[10px] bg-blue-500 p-3 rounded-[6px] text-white">
                    <h3>{comment.authorName?.slice(0, 1)}</h3>
                  </div>
                  <h3 className="text-white text-xs font-bold">{comment.authorName}</h3>
                </div>
                <p className="text-[#86a4c4]">{comment.content}</p>
                <div className="text-sm text-[#86a4c4] mt-2">
                  {new Date(comment.$createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                onClick={() => handleLike(comment.$id, true)}
                className={`p-1 rounded ${comment.like === true ? 'text-blue-500' : 'text-gray-400'}`}
                disabled={loading}
                >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                </button>
                <button
                onClick={() => handleLike(comment.$id, false)}
                className={`p-1 rounded ${comment.like === false ? 'text-red-500' : 'text-gray-400'}`}
                disabled={loading}
                >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                </svg>
                </button>







                {/* <button
                  onClick={() => handleLike(comment.$id, true)}
                  className={`p-1 rounded ${comment.like === true ? 'text-blue-500' : 'text-gray-400'}`}
                  disabled={loading}
                >
                  👍
                </button>
                <button
                  onClick={() => handleLike(comment.$id, false)}
                  className={`p-1 rounded ${comment.like === false ? 'text-red-500' : 'text-gray-400'}`}
                  disabled={loading}
                >
                  👎
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




