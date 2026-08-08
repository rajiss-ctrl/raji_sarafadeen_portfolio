'use client'

import { Client, Account } from 'appwrite';
import { databases, ID } from '@/app/lib/appwrite';
import { useState, useEffect } from 'react';
import AuthStatus from '../auth/AuthStatus';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

interface Comment {
  $id: string;
  content: string;
  userId: string; 
  authorName: string;
  $createdAt: string;
  like?: boolean;
  blogId?: string;
}

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
    <div className="mt-8 md:mt-10 lg:mt-12">
      <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
        {comments.length} Comment{comments.length !== 1 ? 's' : ''}
      </h3>

      <form onSubmit={handleSubmit} className="mb-6 md:mb-8">
        <div className="mb-2">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            {/* User Avatar */}
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <div className="grid place-content-center font-bold h-9 w-9 md:h-10 md:w-10 bg-[#7C3AED] rounded-lg text-white text-sm md:text-base flex-shrink-0">
                <span>{(user?.name?.trim() || user?.email?.split('@')[0] || 'U')[0].toUpperCase()}</span>
              </div>
              <h3 className="text-white text-xs md:text-sm font-medium truncate max-w-[100px] sm:max-w-[150px]">
                {user?.name?.trim() || user?.email?.split('@')[0] || 'Unknown'}
              </h3>
            </div>

            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts (max 30 words)"
              className="flex-1 p-2 md:p-3 outline-none bg-[#1a1a2e] border-2 border-[#2d2d44] rounded-xl text-white text-sm md:text-base placeholder-[#64748B] focus:border-[#7C3AED] transition-colors duration-300 resize-none min-h-[80px] md:min-h-[100px]"
              rows={3}
              disabled={loading}
            />
          </div>
          <div className={`text-xs md:text-sm mt-1 ${isLimitExceeded ? 'text-red-500' : 'text-[#64748B]'}`}>
            {wordCount} / {MAX_WORDS} words
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
          <button
            type="submit"
            disabled={!newComment.trim() || isLimitExceeded || loading}
            className="px-4 py-2 md:px-5 md:py-2.5 bg-[#7C3AED] text-white rounded-lg text-sm md:text-base font-medium hover:bg-[#6D28D9] disabled:bg-[#2d2d44] disabled:text-[#64748B] disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center min-w-[120px]"
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

      {/* Comments List */}
      <div className="space-y-4 md:space-y-5">
        {comments.map((comment) => (
          <div key={comment.$id} className="bg-[#1a1a2e] rounded-xl border border-[#2d2d44] p-3 md:p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="grid place-content-center font-bold h-7 w-7 md:h-8 md:w-8 bg-[#7C3AED] rounded-lg text-white text-xs md:text-sm flex-shrink-0">
                    <span>{comment.authorName?.slice(0, 1).toUpperCase() || 'U'}</span>
                  </div>
                  <h3 className="text-white text-xs md:text-sm font-medium">
                    {comment.authorName || 'Unknown'}
                  </h3>
                </div>
                <p className="text-[#A8B2D1] text-sm md:text-base mt-1.5 leading-relaxed">
                  {comment.content}
                </p>
                <div className="text-[10px] md:text-xs text-[#64748B] mt-1.5">
                  {new Date(comment.$createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>

              {/* Like/Dislike Buttons */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => handleLike(comment.$id, true)}
                  className={`p-1.5 rounded-lg transition-all duration-300 ${
                    comment.like === true 
                      ? 'bg-[#7C3AED]/20 text-[#7C3AED]' 
                      : 'text-[#64748B] hover:text-[#7C3AED] hover:bg-[#7C3AED]/10'
                  }`}
                  disabled={loading}
                  aria-label="Like"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleLike(comment.$id, false)}
                  className={`p-1.5 rounded-lg transition-all duration-300 ${
                    comment.like === false 
                      ? 'bg-red-500/20 text-red-500' 
                      : 'text-[#64748B] hover:text-red-500 hover:bg-red-500/10'
                  }`}
                  disabled={loading}
                  aria-label="Dislike"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <div className="text-center py-6 md:py-8">
            <p className="text-[#64748B] text-sm md:text-base">No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  );
}