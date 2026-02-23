import Link from "next/link";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";

type BlogCardProps = {
  id: number;
  user_id: number;
  title: string;
  content: string;
  banner_img: string;
  created_at: string;
  first_name: string;
  last_name: string;
};

export default function BlogCard({
  id,
  title,
  content,
  banner_img,
  created_at,
  first_name,
  last_name,
}: BlogCardProps) {
  return (
    <div>
      <Link href={`/blog/blogdetail/${id}`}>
        <div className="border pb-2 rounded-xl hover:shadow-lg hover:bg-gray-50 transition-all">
          <img
            src={"https://beamingindia.com/dev/techie/" + banner_img}
            className="w-full mb-2 rounded-t-xl h-60 object-cover"
            alt={title}
          />
          <div className="px-2">
            <div className="">
              <h2 className="text-xl font-semibold mb-1 line-clamp-1">
                {title}
              </h2>
            </div>
            <p className="text-sm text-gray-600 line-clamp-4 mb-2">{content}</p>
            <div className="flex justify-between items-center text-xs text-gray-600 bg-gray-200 rounded-b-xl px-2 py-1">
              <p>
                Posted by {first_name} {last_name}
              </p>
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
