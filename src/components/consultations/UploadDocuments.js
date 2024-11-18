import React from 'react';

function UploadDocuments() {
  const uploadDocuments = () => {
    // Implement your document upload logic here
  };

  return (
    <div id="upload-documents" className="section">
      <h3>Upload Medical Documents</h3>
      <input type="file" id="medical-documents" multiple />
      <button type="button" className="button" onClick={uploadDocuments}>Upload</button>
    </div>
  );
}

export default UploadDocuments;
