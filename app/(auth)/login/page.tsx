import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex flex-col w-1/3 gap-3">
        <h1 className="text-2xl font-normal mb-1 text-center">Techie Login</h1>
        <div className="flex flex-col gap-4 p-5 border border-gray-400 rounded-lg">
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
            <label htmlFor="password">Password</label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded-lg">
            Login
          </button>
        </div>
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
