"use client";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const handleLogout = () => {
    logout(); // clear token + state
    router.push("/login"); // redirect
  };

  const { isLoggedIn, user, logout } = useAuth();
  return (
    <div className="sticky top-0">
      <div className="flex items-center h-16 bg-gray-100 px-10 border-b border-gray-300">
        <div className="flex items-center justify-between w-full">
          <div className="text-xl font-bold">Techie Blogs</div>
          <div className="flex gap-4">
            <Link href="/" className="mylink">
              Home
            </Link>
            <Link href="/blog" className="mylink">
              My blogs
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/profile" className="mylink">
                  Profile
                </Link>
                <button onClick={handleLogout} className="mylink text-red-500">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="mylink">
                  Login
                </Link>
                <Link href="/register" className="mylink">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
