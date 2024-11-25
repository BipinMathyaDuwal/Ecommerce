import React from "react";
import { Link } from "react-router-dom";
// import { FaSearch, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section: Logo and Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img className="h-8" src="/logo1.png" alt="Logo" />
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-4">
              <Link
                to="/dashboard"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Dashboard
              </Link>
              <Link
                to="/team"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Team
              </Link>
              <Link
                to="/projects"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Projects
              </Link>
              <Link
                to="/calendar"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              >
                Calendar
              </Link>
            </div>
          </div>

          {/* Right Section: Search Bar, Notifications, and Profile */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative text-gray-400 focus-within:text-white">
              {/* <FaSearch className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" /> */}
              <input
                type="text"
                placeholder="Search"
                className="block w-full bg-gray-800 rounded-full pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-700"
              />
            </div>
            {/* Notifications */}
            <button className="text-gray-400 hover:text-white">
              {/* <FaBell size={20} /> */}
            </button>
            {/* Profile Image */}
            <img
              className="h-8 w-8 rounded-full"
              src="/profile.jpg"
              alt="User"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
