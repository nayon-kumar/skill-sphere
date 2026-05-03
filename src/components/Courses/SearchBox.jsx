import React from "react";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="input focus:border-none"
        placeholder="Search"
      />
      <button className="btn">Search</button>
    </div>
  );
};

export default SearchBox;
