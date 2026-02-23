"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
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
      router.push("/");
    } catch (error) {
      console.error(error);
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
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}
