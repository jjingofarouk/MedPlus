import React from 'react';

function SearchBar({ searchQuery, onSearch }) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search by medication or doctor..."
      className="search-bar"
    />
  );
}

export default SearchBar;
