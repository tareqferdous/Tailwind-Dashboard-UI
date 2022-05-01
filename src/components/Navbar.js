import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-12 md:h-16 bg-white shadow-sm px-8 fixed w-full top-0 left-0 flex items-center">
        <div className="text-xl font-semibold text-gray-700">Starbucks</div>
        <div className="ml-1 gray-400 mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="relative ml-36">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute left-2 top-2 text-gray-400 hidden md:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="block w-72 shadow border-none rounded-xl focus:outline-none py-2 bg-gray-100 text-base text-gray-600 pl-11 pr-2 hidden md:block"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="ml-auto flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>

          <div className="ml-4 relative">
            <div>
              <img
                className="h-8 w-8 rounded-full object-cover"
                src="https://cswnn.edu.in/system/files/2021-02/avatar-png-1-original.png"
                alt=""
              />
            </div>
          </div>
          <div className="ml-4 font-semibold">
            <p>John Doe</p>
          </div>
          <div className="ml-1 gray-600 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 hidden md:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
