import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex flex-col w-1/3 gap-3">
        <h1 className="text-2xl font-normal mb-1 text-center">
          Techie Register
        </h1>
        <RegisterForm />
        <div className="flex flex-col gap-1">
          <div className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
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
