import CreateBlogForm from "@/components/CreateBlogForm";

export default function CreateBlog() {
  return (
    <div className="flex justify-center items-center pt-10">
      <div className="flex flex-col w-1/2 gap-3">
        <h1 className="text-2xl font-normal mb-1 text-center">
          Create New Blog
        </h1>
        <CreateBlogForm />
      </div>
    </div>
  );
}
