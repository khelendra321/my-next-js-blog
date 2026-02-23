"use client";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

type Props = {
  userId?: string; // optional
};

export default function BlogContainer({ userId }: Props) {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  // GLOBAL STORAGE >> redux / zustand
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        let url = "https://beamingindia.com/dev/techie/Api/AllBlogs";
        if (userId) {
          url = `https://beamingindia.com/dev/techie/Api/BlogByUserId?user_id=${userId}`;
        }
        const response = await axios.get(url);
        setBlogs(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {loading && <Loader text="Loading blogs..." />}
      <div className="grid grid-cols-3 gap-6 mt-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}
