import React from 'react';
import { FaFileExport } from 'react-icons/fa'; // Import your icon library here

const DataExport = () => {
  const handleExport = () => {
    console.log("Exporting data...");
    // Implement data export functionality (CSV/Excel)
  };

  return (
    <div className="data-export flex items-center p-4 border-b cursor-pointer" onClick={handleExport}>
      <FaFileExport className="w-6 h-6" />
      <div className="ml-4">
        <h4 className="text-md font-semibold">Export Data</h4>
        <p className="text-sm text-gray-600">
          Export collected data in CSV or Excel format for further analysis.
        </p>
      </div>
    </div>
  );
};

export default DataExport;
