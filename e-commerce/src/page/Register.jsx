import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../apiCalls/userApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !address || !password || !confirmPassword) {
      setError("All fields are required!");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      // Handle registration logic here
    register({username:name,email,address,password})
    .then((response) => {
        if(response.error){
            console.log(error)
        }
        else{
            alert("success")
        }
    })
      console.log("Registered:", { name, email, address, password });
    }
  };

  return (
    <div className="flex min-h-[100vh] w-full flex-col justify-center px-6 py-12 lg:px-8 ">
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
            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm/6 font-medium text-gray-900">
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                type="string"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-indigo-500 focus:ring-indigo-200 focus:outline-none"
            />
            <label htmlFor="terms" className="ml-2 text-sm/6 text-gray-900 font-bold">
              I agree to the terms and conditions
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm/6 text-gray-500">
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
