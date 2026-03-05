"use client";
import BlogCard from "./BlogCard";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";

type Props = {
  userId?: string; // optional
};

export default function BlogContainer({ userId }: Props) {
  const { data, isPending } = useQuery({
    queryKey: ["blogs", "blogs" + userId],
    queryFn: async () => {
      if (userId) {
        return fetch(
          `https://beamingindia.com/dev/techie/Api/BlogByUserId?user_id=${userId}`,
        ).then((res) => res.json());
      }
      return fetch("https://beamingindia.com/dev/techie/Api/AllBlogs").then(
        (res) => res.json(),
      );
    },
  });

  return (
    <div>
      {isPending && <Loader text="Loading blogs..." />}
      <div className="grid grid-cols-3 gap-6 mt-5">
        {userId
          ? data?.data.map((blog: any) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          : data?.data.map((userBlog: any) => (
              <BlogCard key={userBlog.id} blog={userBlog} />
            ))}
      </div>
    </div>
  );
}
