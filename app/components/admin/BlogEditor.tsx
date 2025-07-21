'use client'
import { useState, useRef, useEffect } from 'react';
import { account, databases, ID } from '@/app/lib/appwrite';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Define types for our blog post
interface BlogPost {
  title: string;
  content: string;
  image?: string | null;
  userId: string;
}

// Define type for the error
type AppwriteError = Error & {
  message: string;
  code?: number;
  type?: string;
};

// Dynamically import Editor with SSR disabled
const Editor = dynamic(
  () => import('./Editor'),
  { 
    ssr: false,
    loading: () => <p className="p-4 text-gray-500">Loading editor...</p>
  }
);

export default function BlogEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load draft from localStorage on component mount
  useEffect(() => {
    const draft = localStorage.getItem('draft');
    if (draft) {
      try {
        const { title: draftTitle, content: draftContent } = JSON.parse(draft) as { 
          title: string; 
          content: string 
        };
        setTitle(draftTitle || '');
        setContent(draftContent || '');
      } catch (e) {
        console.error('Failed to parse draft:', e);
      }
    }
  }, []);

  // Auto-save draft every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (title || content) {
        localStorage.setItem('draft', JSON.stringify({ title, content }));
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [title, content]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleImageUpload = async (file: File): Promise<string | null> => {
    try {
      setUploadProgress(10);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      );

      setUploadProgress(90);
      
      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const data = await response.json() as { secure_url: string };
      setUploadProgress(100);
      return data.secure_url;
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Failed to upload image. Please try again.');
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    if (!content.trim()) {
      setError('Content is required');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      let imageUrl: string | null = null;
      if (image) {
        imageUrl = await handleImageUpload(image);
        if (!imageUrl) {
          setIsSubmitting(false);
          return;
        }
      }
      
      const user = await account.get();
      const blogPost: BlogPost = {
        title: title.trim(),
        content: content.trim(),
        ...(imageUrl && { image: imageUrl }),
        userId: user.$id
      };
      
      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID!,
        ID.unique(),
        blogPost
      );
      
      localStorage.removeItem('draft');
      router.push('/admin');
    } catch (error: unknown) {
      const err = error as AppwriteError;
      console.error('Failed to create blog:', err);
      setError(err.message || 'Failed to publish post. Please try again.');
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  const clearDraft = () => {
    if (confirm('Are you sure you want to clear your draft?')) {
      localStorage.removeItem('draft');
      setTitle('');
      setContent('');
      setImage(null);
      setImagePreview('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Blog Post</h1>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="title">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            placeholder="Enter post title"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Featured Image</label>
          <div className="flex items-center space-x-4">
            {imagePreview ? (
              <div className="w-32 h-32 relative rounded-lg overflow-hidden">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setImagePreview('');
                    if (fileInputRef.current) fileInputRef.current.value = '';
                  }}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  aria-label="Remove image"
                  disabled={isSubmitting}
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400">
                No image
              </div>
            )}
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                id="image-upload"
                disabled={isSubmitting}
              />
              <label
                htmlFor="image-upload"
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  isSubmitting 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Choose Image
              </label>
            </div>
          </div>
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Content <span className="text-red-500">*</span>
          </label>
          <div className="border rounded-lg overflow-hidden">
            <Editor
              content={content}
              onChange={setContent}
              editable={!isSubmitting}
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={clearDraft}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400"
            disabled={isSubmitting}
          >
            Clear Draft
          </button>
          
          <button
            type="submit"
            disabled={isSubmitting || !title.trim() || !content.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center min-w-32"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Publishing...
              </>
            ) : (
              'Publish Post'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}