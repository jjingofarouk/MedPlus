// RemoteDataCollectionTools.js
import React from 'react';
import { FaWifi } from 'react-icons/fa'; // Import your icon library here

const RemoteDataCollectionTools = () => {
  const collectRemoteData = () => {
    console.log("Collecting data remotely...");
    // Implement remote data collection process
  };

  return (
    <div className="flex items-center p-4 border-b cursor-pointer" onClick={collectRemoteData}>
      <FaWifi className="w-6 h-6" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">Remote Data Collection Tools</h3>
        <p className="text-sm text-gray-600">
          Collect data remotely using mobile devices and IoT sensors, facilitating research in remote areas.
        </p>
      </div>
    </div>
  );
};

export default RemoteDataCollectionTools;
