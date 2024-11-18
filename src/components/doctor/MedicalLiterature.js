// MedicalLiterature.js
import React, { useState } from 'react';

const MedicalLiterature = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Simulate literature search (API call)
    const searchResults = [
      { id: 1, title: "New Approaches in Oncology", journal: "The Lancet" },
      { id: 2, title: "Innovations in Cardiology", journal: "JACC" },
    ];
    setResults(searchResults);
  };

  return (
    <div>
      <h3>Literature Search</h3>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for medical papers..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(result => (
          <li key={result.id}>
            {result.title} - {result.journal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalLiterature;
