'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { useEffect } from 'react';
import { 
  FiBold, 
  FiItalic, 
  FiList, 
  FiImage, 
  FiLink, 
  FiUnderline,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight
} from 'react-icons/fi';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  editable?: boolean;
}

export default function Editor({ content, onChange, editable = true }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 hover:underline',
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: 'rounded-lg',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none p-4 min-h-[300px] focus:outline-none',
      },
      editable: () => editable, // Control editability
    },
  });

  const addImage = () => {
    if (!editable) return;
    const url = window.prompt('Enter the URL of the image:');
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    if (!editable) return;
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) return;
    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const setTextAlign = (align: 'left' | 'center' | 'right') => {
    if (!editable) return;
    editor?.chain().focus().setTextAlign(align).run();
  };

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
    }
  }, [editable, editor]);

  if (!editor) {
    return (
      <div className="border rounded-lg overflow-hidden">
        <div className="h-10 bg-gray-100 border-b"></div>
        <div className="h-64 bg-white"></div>
      </div>
    );
  }

  return (
    <div className={`border rounded-lg overflow-hidden ${!editable ? 'opacity-80' : ''}`}>
      {editable && (
        <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50">
          {/* Text Formatting */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Bold"
            aria-label="Bold"
          >
            <FiBold />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Italic"
            aria-label="Italic"
          >
            <FiItalic />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded ${editor.isActive('underline') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Underline"
            aria-label="Underline"
          >
            <FiUnderline />
          </button>

          {/* Lists */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Bullet List"
            aria-label="Bullet List"
          >
            <FiList />
          </button>

          {/* Links */}
          <button
            type="button"
            onClick={addLink}
            className={`p-2 rounded ${editor.isActive('link') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Link"
            aria-label="Link"
          >
            <FiLink />
          </button>

          {/* Images */}
          <button
            type="button"
            onClick={addImage}
            className="p-2 rounded hover:bg-gray-100"
            title="Image"
            aria-label="Image"
          >
            <FiImage />
          </button>

          {/* Text Alignment */}
          <div className="border-l border-gray-300 mx-1 h-8"></div>
          <button
            type="button"
            onClick={() => setTextAlign('left')}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Align Left"
            aria-label="Align Left"
          >
            <FiAlignLeft />
          </button>
          <button
            type="button"
            onClick={() => setTextAlign('center')}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Align Center"
            aria-label="Align Center"
          >
            <FiAlignCenter />
          </button>
          <button
            type="button"
            onClick={() => setTextAlign('right')}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            title="Align Right"
            aria-label="Align Right"
          >
            <FiAlignRight />
          </button>
        </div>
      )}
      
      <EditorContent 
        editor={editor}
        className={!editable ? 'cursor-not-allowed' : ''}
      />
    </div>
  );
}