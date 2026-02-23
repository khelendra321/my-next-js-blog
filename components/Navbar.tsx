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
          <div className="flex items-center gap-4">
            <Link href="/" className="mylink">
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/createblog" className="mylink">
                  Create Blog
                </Link>
                <Link href="/myblog" className="mylink">
                  My blogs
                </Link>
                <Link href="/profile" className="mylink">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="mylink"
                  style={{ color: "red" }}
                >
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
