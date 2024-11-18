import React from 'react';
import { FaFilter } from 'react-icons/fa'; // Import your icon library here

const FilterOptions = () => {
  const applyFilter = () => {
    console.log("Applying filter...");
    // Implement filtering logic based on selected criteria
  };

  return (
    <div className="filter-options flex items-center p-4 border-b cursor-pointer" onClick={applyFilter}>
      <FaFilter className="w-6 h-6" />
      <div className="ml-4">
        <h4 className="text-md font-semibold">Filter Options</h4>
        <p className="text-sm text-gray-600">
          Filter data by various criteria such as date, location, and disease type.
        </p>
        {/* Add your filter controls (e.g., dropdowns, checkboxes) here */}
        <select className="mt-2" onChange={applyFilter}>
          <option value="">Select Filter</option>
          <option value="date">Date</option>
          <option value="location">Location</option>
          <option value="disease">Disease Type</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
