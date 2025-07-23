import { type FC } from "react";
import { type BlogPost } from "../types/blog";

interface Props {
  blogs: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (id: number) => void;
}

const BlogList: FC<Props> = ({ blogs, onEdit, onDelete }) => {
  return (
    <div className="px-3 sm:px-0 space-y-4">
      {blogs.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md overflow-hidden"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white break-words">
            {post.title}
          </h2>

          <p className="text-sm text-gray-700 dark:text-gray-200 mt-2 whitespace-pre-wrap break-words">
            {post.content}
          </p>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button
              onClick={() => onEdit(post)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded text-sm w-full sm:w-auto"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm w-full sm:w-auto"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
