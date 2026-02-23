"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <form className="flex flex-col gap-3 p-5 border border-gray-400 rounded-lg">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="fname">First Name</label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              type="text"
              name="fname"
              id="fname"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lname">Last Name</label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              type="text"
              name="lname"
              id="lname"
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
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            type="phone"
            name="phone"
            id="phone"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
}
