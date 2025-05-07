import Link from "next/link";

export default function Register() {
  const styleInput =
    "border outline-none border-gray-400 rounded-lg p-2 text-left w-full";
  return (
    <div className="flex gap-2 flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center w-[300px] gap-4">
        <h1 className="text-4xl font-bold my-3">Register</h1>
        <div className="flex flex-col gap-4 w-full items-center justify-center">
          <input
            className={styleInput}
            type="text"
            placeholder="Name"
            required
          />
          <input
            className={styleInput}
            type="text"
            placeholder="Surname"
            required
          />
          <input
            className={styleInput}
            type="text"
            placeholder="Email"
            required
          />
          <input
            className={styleInput}
            type="password"
            placeholder="Password"
            required
          />
          <button className="bg-gray-900 w-full cursor-pointer transition-all duration-150 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
            Register
          </button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link
              className="hover:underline cursor-pointer font-bold"
              href={"/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
