'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { useEffect } from 'react';
import { 
  FiBold, FiItalic, FiList, FiImage, FiLink, FiUnderline,
  FiAlignLeft, FiAlignCenter, FiAlignRight,
} from 'react-icons/fi';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  editable?: boolean;
}

export default function Editor({ content, onChange, editable = true }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 hover:underline',
        },
      }),
      Image.extend({
        addAttributes() {
          return {
            ...this.parent?.(),
            class: {
              default: 'rounded-lg',
              parseHTML: el => el.getAttribute('class'),
              renderHTML: attrs => ({ class: attrs.class }),
            },
          };
        },
      }).configure({
        inline: true,
        allowBase64: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose max-w-none p-4 min-h-[300px] focus:outline-none',
      },
      editable: () => editable,
    },
  });

  const addImage = () => {
    if (!editor || !editable) return;   // ✅ guard editor
    const url = window.prompt('Enter the URL of the image:');
    if (url) {
      const size = window.prompt('Enter size: small / medium / large', 'small');
      let className = 'rounded-lg';

      if (size === 'small') className += ' w-32 h-32 object-cover';
      else if (size === 'medium') className += ' w-64 h-64 object-cover';
      else if (size === 'large') className += ' w-full object-cover';

      editor.chain().focus().setImage({ src: url }).run();
      const { state, dispatch } = editor.view;
      const { tr, selection } = state;
      const nodePos = selection.$anchor.before();
      tr.setNodeMarkup(nodePos, undefined, { src: url, class: className });
      dispatch(tr);
    }
  };

  const addLink = () => {
    if (!editor || !editable) return;  // ✅ guard editor
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const setTextAlign = (align: 'left' | 'center' | 'right') => {
    if (!editor || !editable) return;  // ✅ guard editor
    editor.chain().focus().setTextAlign(align).run();
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
          <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded ${editor.isActive('bold') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            <FiBold />
          </button>
          <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded ${editor.isActive('italic') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            <FiItalic />
          </button>
          <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`p-2 rounded ${editor.isActive('underline') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            <FiUnderline />
          </button>

          {/* Lists */}
          <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            <FiList />
          </button>

          {/* Headings */}
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            H2
          </button>
          <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            H3
          </button>

          {/* Links */}
          <button type="button" onClick={addLink}
            className={`p-2 rounded ${editor.isActive('link') ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            <FiLink />
          </button>

          {/* Images */}
          <button type="button" onClick={addImage} className="p-2 rounded hover:bg-gray-100">
            <FiImage />
          </button>

          {/* Text Alignment */}
          <div className="border-l border-gray-300 mx-1 h-8"></div>
          <button type="button" onClick={() => setTextAlign('left')}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            <FiAlignLeft />
          </button>
          <button type="button" onClick={() => setTextAlign('center')}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            <FiAlignCenter />
          </button>
          <button type="button" onClick={() => setTextAlign('right')}
            className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
            <FiAlignRight />
          </button>
        </div>
      )}

      <EditorContent editor={editor} className={!editable ? 'cursor-not-allowed' : ''} />
    </div>
  );
}
