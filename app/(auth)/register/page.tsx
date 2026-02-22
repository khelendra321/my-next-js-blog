import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex flex-col w-1/3 gap-3">
        <h1 className="text-2xl font-normal mb-1 text-center">
          Techie Register
        </h1>
        <div className="flex flex-col gap-3 p-5 border border-gray-400 rounded-lg">
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
        </div>
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
