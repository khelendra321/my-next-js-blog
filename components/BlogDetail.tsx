"use client";

import Link from "next/link";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import BlogContainer from "./BlogContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

type Props = {
  id: string;
};

type BlogType = {
  title: string;
  content?: string;
  banner_img?: string;
  created_at: string;
  first_name: string;
  last_name: string;
};

export default function BlogDetail({ id }: Props) {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://beamingindia.com/dev/techie/Api/BlogById?id=${id}`,
        );

        setBlog(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load blog.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  if (loading) {
    return <Loader text="Loading blog data..." />;
  }

  if (error) {
    return <div className="p-10 text-red-500">{error}</div>;
  }

  if (!blog) {
    return <div className="p-10">No blog found.</div>;
  }

  return (
    <main className="p-10 pt-5">
      <Link href="/" className="backBtn flex items-center mb-4">
        <AiOutlineArrowLeft className="mr-2" />
        Back
      </Link>

      <img
        src={
          blog.banner_img
            ? `https://beamingindia.com/dev/techie/${blog.banner_img}`
            : "https://placehold.co/1000x300"
        }
        className="w-full mb-4 rounded-xl"
        alt={blog.title}
      />

      <div className="flex justify-between items-center pt-2 text-sm text-gray-800 mb-3">
        <div className="flex gap-3">
          <p>
            Posted by {blog.first_name} {blog.last_name}
          </p>
          <p>
            Posted on{" "}
            {new Date(blog.created_at).toLocaleDateString("en-IN", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="flex gap-3">
          <p>
            <AiFillHeart className="inline-flex items-center text-red-500 mr-1 text-xl" />
            <span>Like</span>
          </p>

          <p>
            <AiOutlineComment className="inline-flex items-center text-blue-500 mr-1 text-xl" />
            <span>Comment</span>
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-md font-normal text-gray-600 leading-relaxed">
        {blog.content || "No content available."}
      </p>
    </main>
  );
}
