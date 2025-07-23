import { useEffect, useState } from "react";
import Header from "./components/Header";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import { type BlogPost } from "./types/blog";
import { WarpBackground } from "@/components/ui/WarpBackground";

const getFromStorage = (): BlogPost[] => {
  const data = localStorage.getItem("blogs");
  return data ? JSON.parse(data) : [];
};

function App() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [blog, setBlog] = useState<BlogPost>({
    id: 0,
    title: "",
    content: "",
    tags: [],
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setBlogs(getFromStorage());
  }, []);

  const saveToStorage = (data: BlogPost[]) => {
    setBlogs(data);
    localStorage.setItem("blogs", JSON.stringify(data));
  };

  const handleSubmit = () => {
    if (!blog.title || !blog.content) return;

    if (editing) {
      const updated = blogs.map((b) => (b.id === blog.id ? blog : b));
      saveToStorage(updated);
    } else {
      const newBlog = { ...blog, id: Date.now() };
      saveToStorage([...blogs, newBlog]);
    }

    setBlog({ id: 0, title: "", content: "", tags: [] });
    setEditing(false);
  };

  const handleEdit = (post: BlogPost) => {
    setBlog(post);
    setEditing(true);
  };

  const handleDelete = (id: number) => {
    const updated = blogs.filter((b) => b.id !== id);
    saveToStorage(updated);
  };

  return (
    <div className="min-h-screen h-full w-full transition-all text-gray-900 dark:text-white ">
      <WarpBackground>
        <Header />
        <main className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 max-w-5xl mx-auto py-6">
          <BlogForm blog={blog} setBlog={setBlog} onSubmit={handleSubmit} />
          <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </WarpBackground>
    </div>
  );
}

export default App;
