import React from "react";

const SearchInput = () => {
  return (
    <div className="min-w-0 flex-1 pr-10">
      <div className="flex items-center">
        <div className="w-full">
          <form>
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                value={""}
                name="search"
                className="block w-full bg-white dark:bg-gray-600 border border-gray-300 rounded-3xl py-2 pl-10 pr-3 text-sm placeholder-gray-500 dark:placeholder-gray-100 focus:outline-none dark:text-white focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                placeholder="Search"
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
