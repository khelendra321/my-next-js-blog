"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
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
        "https://beamingindia.com/dev/techie/Api/userRegistration",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response.data);
      toast.success("Registration successful!");
      router.push("/login");
    } catch (error: any) {
      console.error(error);
      const message = error.response?.data?.message || "Registration failed!";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-5 border border-gray-400 rounded-lg"
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="first_name">First Name</label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              type="text"
              name="first_name"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="last_name">Last Name</label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              type="text"
              name="last_name"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="mobile">mobile Number</label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            type="phone"
            name="mobile"
            id="mobile"
            value={formData.mobile}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded-lg"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="pl-2"> Registering...</span>
            </div>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}
