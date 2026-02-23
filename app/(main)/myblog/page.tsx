"use client";
import BlogContainer from "@/components/BlogContainer";
import { useAuth } from "@/app/context/AuthContext";

export default function MyBlogs() {
  const { user } = useAuth();
  return (
    <div>
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-1">My Blogs</h1>
        <p className="text-sm font-normal text-gray-600 mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vel
          aliquam eveniet nostrum nesciunt dolore. Lorem ipsum dolor sit amet
        </p>
        <BlogContainer userId={user?.id || ""} />
      </main>
    </div>
  );
}
