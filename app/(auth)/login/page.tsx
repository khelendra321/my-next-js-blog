import Link from "next/link";
import LoginForm from "@/components/loginForm";

export default function Login() {
  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex flex-col w-1/3 gap-3">
        <h1 className="text-2xl font-normal mb-1 text-center">Techie Login</h1>
        <LoginForm />
        <div className="flex flex-col gap-1">
          <div className="text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>
          </div>
          <div className="text-center">
            Back to{" "}
            <Link href="/" className="text-blue-500">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
