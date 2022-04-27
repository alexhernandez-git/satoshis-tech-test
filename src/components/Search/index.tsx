import React, { useContext } from "react";
import { AppContext, AppContextInterface } from "../../App";
import SearchInput from "./SearchInput";

const SearchComponent = () => {
  const { setMobileFiltersOpen } = useContext<AppContextInterface>(AppContext);
  return (
    <div className={"flex align-center items-center justify-center my-10"}>
      {/* Search Input */}
      <SearchInput />

      {/* Filter icon */}
      <span
        onClick={() => setMobileFiltersOpen(true)}
        className="w-8 h-8 flex justify-center items-center rounded-lg text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:to-pink-600 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </span>
    </div>
  );
};

export default SearchComponent;
