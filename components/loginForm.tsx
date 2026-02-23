"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://beamingindia.com/dev/techie/Api/userLogin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const { access_token } = response.data.data;
      login(access_token);
      toast.success("Login successful!");
      router.push("/");
    } catch (error: any) {
      console.error(error);
      const message = error.response?.data?.message || "Login failed!";
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
          <label htmlFor="email">Email Address</label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="pl-2"> Logging in...</span>
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
