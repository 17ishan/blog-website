import { type BlogPost } from "../types/blog"
import { type FC } from "react"

interface Props {
  post: BlogPost
  onEdit: (post: BlogPost) => void
  onDelete: (id: number) => void
}

const BlogCard: FC<Props> = ({ post, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-700 mt-2">{post.content}</p>

      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(post)}
          className="px-3 py-1 bg-yellow-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(post.id)}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default BlogCard
