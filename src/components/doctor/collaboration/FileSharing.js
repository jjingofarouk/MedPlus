import React, { useState } from 'react';
import './FileSharing.css'; // Import your custom styles

const FileSharing = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [sharedFiles, setSharedFiles] = useState([]);

  // Handle file selection
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = () => {
    if (selectedFile) {
      const newFile = {
        id: sharedFiles.length + 1, // Generate a new ID for each file
        name: selectedFile.name,
        url: URL.createObjectURL(selectedFile), // Create a URL for the uploaded file
      };
      setSharedFiles([...sharedFiles, newFile]);
      setSelectedFile(null); // Reset file input
    }
  };

  return (
    <div className="file-sharing-container">
      <h2>File Sharing</h2>

      <div className="upload-section">
        <input
          type="file"
          onChange={handleFileSelect}
          className="file-input"
          aria-label="Upload file"
        />
        <button onClick={handleFileUpload} className="upload-btn" disabled={!selectedFile}>
          Upload File
        </button>
      </div>

      <section className="shared-files-section">
        <h3>Shared Files</h3>
        {sharedFiles.length === 0 ? (
          <p>No files shared yet.</p>
        ) : (
          <ul className="file-list">
            {sharedFiles.map((file) => (
              <li key={file.id} className="file-item">
                <a href={file.url} download={file.name} className="file-link">
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default FileSharing;
