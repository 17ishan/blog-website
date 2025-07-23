import { type BlogPost } from "../types/blog";
import { type Dispatch, type FC, type SetStateAction, useState } from "react";

interface Props {
  blog: BlogPost;
  setBlog: Dispatch<SetStateAction<BlogPost>>;
  onSubmit: () => void;
}

const BlogForm: FC<Props> = ({ blog, setBlog, onSubmit }) => {
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    const newTag = tagInput.trim();
    if (newTag && !blog.tags.includes(newTag)) {
      setBlog({ ...blog, tags: [...blog.tags, newTag] });
      setTagInput("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto backdrop-blur-xs bg-white/70 dark:bg-gray-800/50 rounded-xl shadow-xl p-4 sm:p-6 mb-6 border border-gray-200 dark:border-gray-700 transition-all">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Write a Blog
      </h2>

      <input
        type="text"
        placeholder="Blog Title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/80 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      />

      <textarea
        placeholder="Write your content..."
        value={blog.content}
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        rows={6}
        className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/80 dark:text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      />

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a tag"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          className="flex-1 min-w-[150px] p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/80 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
        />
        <button
          onClick={handleAddTag}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all cursor-pointer"
        >
          Add Tag
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white px-3 py-1 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      <button
        onClick={onSubmit}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all cursor-pointer"
      >
        {blog.id ? "Update Blog" : "Add Blog"}
      </button>
    </div>
  );
};

export default BlogForm;
