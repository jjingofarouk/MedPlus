// Documentation.tsx
import React, { useState } from 'react';

const Documentation = () => {
  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDocumentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDocument(e.target.value);
  };

  const handleSaveDocument = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/documentation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: document }),
      });
      if (!response.ok) throw new Error('Failed to save document');
      alert("Document saved successfully!");
    } catch (error) {
      console.error("Error saving document:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Smart Documentation</h2>
      <textarea
        value={document}
        onChange={handleDocumentChange}
        placeholder="Type your documentation here..."
        rows={10}
        cols={50}
      />
      <button onClick={handleSaveDocument} disabled={loading}>
        {loading ? "Saving..." : "Save Document"}
      </button>
    </div>
  );
};

export default Documentation;
