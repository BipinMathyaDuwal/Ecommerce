import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../apiCalls/userApi";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the event
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    if (!user.username || !user.email || !user.password || !user.confirmPassword || !user.address) {
      setError("All fields are required!");
    } else if (user.password !== user.confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      register(user).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          console.log(response.message);
        }
      });
    }
  };

  return (
    <div className="flex min-h-[100vh] w-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-full object-contain"
          src="/logo1.png"
          alt="pasa"
        />
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm shadow-[0_0_60px_rgba(0,0,0,0.3)] rounded-xl p-8 pt-4 bg-white">
        <h2 className="mb-2 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={user.username}
                onChange={handleChange}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-900">
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                value={user.address}
                onChange={handleChange}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={user.confirmPassword}
                onChange={handleChange}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
