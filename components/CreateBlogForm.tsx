"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";
import toast from "react-hot-toast";

export default function CreateBlogForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<{
    title: string;
    content: string;
    banner_img: File | null;
  }>({
    title: "",
    content: "",
    banner_img: null,
  });

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   ) => {
  //     if (e.target instanceof HTMLInputElement && e.target.type === "file") {
  //       const file = e.target.files?.[0];
  //       if (file) {
  //         setFormData({
  //           ...formData,
  //           banner_img: file,
  //         });
  //       }
  //     } else {
  //       setFormData({
  //         ...formData,
  //         [e.target.name]: e.target.value,
  //       });
  //     }
  //   };

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        banner_img: file,
      });
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);

      if (formData.banner_img) {
        data.append("banner_img", formData.banner_img);
      }

      const response = await axios.post(
        "https://beamingindia.com/dev/techie/Api/AddNewBlog",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      );

      toast.success("Blog created successfully!");
      router.push("/");
    } catch (error: any) {
      console.error(error);
      const message = error.response?.data?.message || "Blog creation failed!";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-5 border border-gray-400 rounded-lg"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Blog Title</label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="content">Blog Content</label>
          <textarea
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            name="content"
            id="content"
            rows={5}
            value={formData.content}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="banner_img">Blog Banner</label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            type="file"
            name="banner_img"
            id="banner_img"
            onChange={handleFileChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-1/3 bg-blue-500 text-white p-2 rounded-lg"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="pl-2"> Processing...</span>
            </div>
          ) : (
            "Create Blog"
          )}
        </button>
      </form>
    </div>
  );
}
