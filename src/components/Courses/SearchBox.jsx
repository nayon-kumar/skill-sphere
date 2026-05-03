"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const router = useRouter();

  const [inputValue, setInputValue] = useState(search || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString);
    if (inputValue) {
      params.set("search", inputValue);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        className="input focus:border-none"
        placeholder="Search"
      />
      <button onClick={handleSearch} className="btn">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
