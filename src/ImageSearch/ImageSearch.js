import React from "react";
import "./ImageSearch.css";

const ImageSearch = ({ handleGetRequest }) => {
  return (
    <div className="imageSearch">
      <form onSubmit={handleGetRequest} className="imageSearchForm">
        <input
          type="text"
          autoComplete="off"
          name="searchValue"
          placeholder="Search images..."
        />
        <button>Search</button>
      </form>
    </div>
  );
};
export default ImageSearch;
