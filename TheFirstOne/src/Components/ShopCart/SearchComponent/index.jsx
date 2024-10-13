import React from "react";

const SearchComponent = ({ searchCourse, courseSearchUserFunction }) => {
  return (
    <header className="app-header">
      <h1>GeeksForGeeks shopping Cart</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Searche for GFG Products..."
          value={searchCourse}
          onChange={courseSearchUserFunction}
        />
      </div>
    </header>
  );
};

export default SearchComponent;
