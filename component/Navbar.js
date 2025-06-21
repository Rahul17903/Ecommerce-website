"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowdropdown] = useState(false);

  return (
    <div  className="bg-[#212121] text-white shadow-md py-4 px-6  flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-indigo-600">
        <Link href="/">RahulXLab</Link>
      </div>

      {/* Center: Dropdown if logged in */}
      {session && (
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer  relative focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setShowdropdown(!showDropdown)}
            
          >
            {session.user.email}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {showDropdown && (
            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute top-12">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link
                    href="/dashboard"
                    onClick={() => setShowdropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.name}`}
                    onClick={() => setShowdropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Earning"
                    onClick={() => setShowdropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Right: Auth and profile */}
      <div className="flex gap-4 items-center">
        {session && (
          <>
            <button
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              onClick={() => signOut()}
            >
              <span className="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent transition-all duration-75 ease-in">
                Sign out
              </span>
            </button>

            <Link href="/dashboard">
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-10 w-10 rounded-full object-cover border-2 border-white"
              />
            </Link>
          </>
        )}
        {!session && (
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
