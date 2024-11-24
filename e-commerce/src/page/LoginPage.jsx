import React from "react";

const LoginPage = () => {
  return (
    <div class="flex min-h-[100vh] w-full flex-col justify-center px-6 py-12 lg:px-8 bg-[url(/bg1.png)] bg-no-repeat bg-cover bg-center">

      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-aut0 w-full object-contain"
          src="/logo1.png"
          alt="pasa"
        />
        <h2 class="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm shadow-[0_0_60px_rgba(0,0,0,0.3)] rounded-xl p-8 bg-white">
        <form class="space-y-4" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 focus:outline-none sm:text-sm/6" 
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </label>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 
                focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="rememberme" name="rememberme" className="size-4" />
            <label className="ml-2 text-sm/6 text-gray-900 font-bold" for="rememberme">
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
          <div class="text-sm ">
            <a
              href="#"
              class="font-semibold text-indigo-600 hover:text-indigo-500 "
            >
              Forgot password?
            </a>
          </div>
        </form>

        <p class="mt-8 text-center text-sm/6 text-gray-500 before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-gray-200 before:top-[-1rem] before:start-0 relative">
          Don't have an account?
          <a
            href="#"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
