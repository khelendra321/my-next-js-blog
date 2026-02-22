import Link from "next/link";
import { AiFillHeart, AiOutlineComment } from "react-icons/ai";

export default function BlogCard() {
  return (
    <div>
      <Link href="/blog/blogdetail">
        <div className="border pb-2 rounded-xl hover:shadow-lg hover:bg-gray-50 transition-all">
          <img
            src="https://placehold.co/800x400"
            className="w-full mb-2 rounded-t-xl"
            alt=""
          />
          <div className="px-2">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold mb-1">Blog Title</h2>
              <div className="flex gap-2 items-center">
                <p>
                  <AiFillHeart className="text-red-500 mr-1 text-lg" />
                </p>
                <p>
                  <AiOutlineComment className="text-blue-500 mr-1 text-lg" />
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Blog Excerpt Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Quaerat, eveniet officia? Dicta architecto animi assumenda,
              ipsa laborum cupiditate ex odio quam at temporibus necessitatibus
              dolorum molestias nulla, inventore nostrum nemo!
            </p>
            <div className="flex justify-between items-center pt-2 text-xs text-gray-600">
              <p>Posted by Admin</p>
              <p>Posted on 22/02/2026</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
