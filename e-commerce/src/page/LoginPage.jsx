import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and Password are required!");
    } else {
      setError("");
      // Handle login logic here
      console.log("Email:", email, "Password:", password);
    }
  };

  return (
    <div className="flex min-h-[100vh] w-full flex-col justify-center px-6 py-12 lg:px-8 bg-[url(/bg1.png)] bg-no-repeat bg-cover bg-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-full object-contain"
          src="/logo1.png"
          alt="pasa"
        />
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm shadow-[0_0_60px_rgba(0,0,0,0.3)] rounded-xl p-8 pt-4 bg-white">
        <h2 className="mb-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="rememberme" name="rememberme" className="size-4" />
            <label className="ml-2 text-sm/6 text-gray-900 font-bold" htmlFor="rememberme">
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
          <div className="text-sm ">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </form>

        <p className="mt-8 text-center text-sm/6 text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
