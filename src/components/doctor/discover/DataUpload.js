import React from 'react';
import { FaUpload } from 'react-icons/fa'; // Import your icon library here

const DataUpload = () => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploading data from:", file.name);
      // Implement data upload functionality (e.g., to backend)
    }
  };

  return (
    <div className="data-upload flex items-center p-4 border-b cursor-pointer">
      <FaUpload className="w-6 h-6" />
      <div className="ml-4">
        <h4 className="text-md font-semibold">Bulk Data Upload</h4>
        <p className="text-sm text-gray-600">
          Upload data files for bulk entry into the system.
        </p>
        <input type="file" onChange={handleUpload} accept=".csv, .xls, .xlsx" className="mt-2" />
      </div>
    </div>
  );
};

export default DataUpload;
