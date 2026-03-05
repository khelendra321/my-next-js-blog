"use client";

import Link from "next/link";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";

type Props = {
  id: string;
};

export default function BlogDetail({ id }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["blog" + id],
    queryFn: () =>
      fetch(`https://beamingindia.com/dev/techie/Api/BlogById?id=${id}`).then(
        (result) => result.json(),
      ),
  });

  if (isLoading) {
    return <Loader text="Loading blog data..." />;
  }

  return (
    <main className="p-10 pt-5">
      <Link href="/" className="backBtn flex items-center mb-4">
        <AiOutlineArrowLeft className="mr-2" />
        Back
      </Link>

      <img
        src={
          data?.data?.banner_img
            ? `https://beamingindia.com/dev/techie/${data?.data?.banner_img}`
            : "https://placehold.co/1000x300"
        }
        className="w-full mb-4 rounded-xl"
        alt={data?.data?.title}
      />

      <div className="flex justify-between items-center pt-2 text-sm text-gray-800 mb-3">
        <div className="flex gap-3">
          <p>
            Posted by {data?.data?.first_name} {data?.data?.last_name}
          </p>
          <p>
            Posted on{" "}
            {new Date(data?.data?.created_at).toLocaleDateString("en-IN", {
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

      <h1 className="text-3xl font-bold mb-4">{data?.data?.title}</h1>

      <p className="text-md font-normal text-gray-600 leading-relaxed">
        {data?.data?.content || "No content available."}
      </p>
    </main>
  );
}
