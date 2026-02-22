import Link from "next/link";
import {
  AiFillHeart,
  AiOutlineComment,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import BlogCard from "./BlogCard";

export default function BlogDetail() {
  return (
    <div>
      <main className="p-10 pt-5">
        <Link href="/" className="backBtn">
          <AiOutlineArrowLeft className="mr-2" />
          Back
        </Link>
        <img
          src="https://placehold.co/1000x300"
          className="w-full mb-2 rounded-xl"
          alt=""
        />
        <div className="flex justify-between items-center pt-2 text-sm text-gray-800 mb-3">
          <div className="flex gap-3">
            <p>Posted by Admin</p>
            <p>Posted on 22/02/2026</p>
          </div>
          <div className="flex gap-3">
            <p>
              <AiFillHeart className="inline-flex items-center text-red-500 mr-1 text-xl" />
              <span>like</span>
            </p>
            <p>
              <AiOutlineComment className="inline-flex items-center text-blue-500 mr-1 text-xl" />
              <span>comment</span>
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-1 pt-3">Blogs title</h1>
        <p className="text-md font-normal text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vel
          aliquam eveniet nostrum nesciunt dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Aliquid vel aliquam eveniet nostrum
          nesciunt dolore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Mollitia hic impedit architecto debitis vero a
          voluptatibus eveniet dicta, iure doloremque sunt tempore dolor,
          officiis et fugit perspiciatis amet minima praesentium. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Mollitia hic impedit
          architecto debitis vero a voluptatibus eveniet dicta, iure doloremque
          sunt tempore dolor, officiis et fugit perspiciatis amet minima
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia hic impedit architecto debitis vero a voluptatibus eveniet
          dicta, iure doloremque sunt tempore dolor, officiis et fugit
          perspiciatis amet minima praesentium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Mollitia hic impedit architecto debitis
          vero a voluptatibus eveniet dicta, iure doloremque sunt tempore dolor,
          officiis et fugit perspiciatis amet minima praesentium. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Aliquid vel aliquam
          eveniet nostrum nesciunt dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Mollitia hic impedit architecto
          debitis vero a voluptatibus eveniet dicta, iure doloremque sunt
          tempore dolor, officiis et fugit perspiciatis amet minima praesentium.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic
          impedit architecto debitis vero a voluptatibus eveniet dicta, iure
          doloremque sunt tempore dolor, officiis et fugit perspiciatis amet
          minima praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Mollitia hic impedit architecto debitis vero a voluptatibus
          eveniet dicta, iure doloremque sunt tempore dolor, officiis et fugit
          perspiciatis amet minima praesentium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Mollitia hic impedit architecto debitis
          vero a voluptatibus eveniet dicta, iure doloremque sunt tempore dolor,
          officiis et fugit perspiciatis amet minima praesentium.
        </p>
        <h1 className="text-2xl font-bold mb-1 pt-3 mt-3">
          More Blogs to explore
        </h1>
        <div className="grid grid-cols-3 gap-6 mt-3">
          <BlogCard />
          <BlogCard />
        </div>
      </main>
    </div>
  );
}
