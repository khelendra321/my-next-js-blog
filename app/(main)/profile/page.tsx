"use client";
import { useAuth } from "@/app/context/AuthContext";
import BlogContainer from "@/components/BlogContainer";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="p-4">
          <h1 className="text-xl font-medium mb-2">My Profile</h1>
          <div className="bg-white shadow-xl border rounded-2xl p-4">
            <div className="space-y-3">
              <div>
                <p className="text-gray-600 text-sm">Full Name</p>
                <p className="font-medium text-gray-800">{user?.full_name}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Email</p>
                <p className="font-medium text-gray-800">{user?.email}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Mobile</p>
                <p className="font-medium text-gray-800">{user?.mobile}</p>
              </div>
            </div>
            <button className="mt-6 w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="col-span-4 p-4">
          <h1 className="text-xl font-medium mb-1">My Blogs</h1>
          <p className="text-sm font-normal text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            vel aliquam eveniet nostrum nesciunt dolore. Lorem ipsum dolor sit
            amet
          </p>
          <BlogContainer userId={user?.id || ""} />
        </div>
      </div>
    </>
  );
}
