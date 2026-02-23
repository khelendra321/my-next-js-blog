import BlogContainer from "@/components/BlogContainer";

export default function BlogHome() {
  return (
    <div>
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-1 text-center">All Blogs</h1>
        <p className="text-sm font-normal text-center text-gray-600 mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid vel
          aliquam eveniet nostrum nesciunt dolore. Lorem ipsum dolor sit amet
        </p>
        <BlogContainer />
      </main>
    </div>
  );
}
