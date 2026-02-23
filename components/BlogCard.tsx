import Link from "next/link";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";

type BlogCardProps = {
  id: number;
  user_id: number;
  title: string;
  content: string;
  banner_img: string;
  created_at: string;
};

export default function BlogCard({
  id,
  title,
  content,
  banner_img,
  created_at,
}: BlogCardProps) {
  return (
    <div>
      <Link href={`/blog/blogdetail/${id}`}>
        <div className="border pb-2 rounded-xl hover:shadow-lg hover:bg-gray-50 transition-all">
          <img
            src={"https://beamingindia.com/dev/techie/" + banner_img}
            className="w-full mb-2 rounded-t-xl"
            alt={title}
          />
          <div className="px-2">
            <div className="">
              <h2 className="text-xl font-semibold mb-1">{title}</h2>
            </div>

            <p className="text-sm text-gray-600 line-clamp-4">{content}</p>
            <div className="flex justify-between items-center pt-2 text-xs text-gray-600">
              <p>Posted by Admin</p>
              <p>
                Posted on{" "}
                {new Date(created_at).toLocaleDateString("en-IN", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
