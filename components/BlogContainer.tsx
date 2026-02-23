"use client";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
export default function BlogContainer() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://beamingindia.com/dev/techie/Api/AllBlogs",
        );
        setBlogs(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}
