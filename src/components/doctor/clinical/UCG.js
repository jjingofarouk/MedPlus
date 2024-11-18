import React, { useEffect, useState } from "react";
import { guidelines as guidelinesData } from "./guidelines";
import "./UCG.css";

const UCG = () => {
  const [filteredGuidelines, setFilteredGuidelines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [resultsLimit, setResultsLimit] = useState(10);
  const [selectedGuideline, setSelectedGuideline] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setFilteredGuidelines(guidelinesData.slice(0, resultsLimit));
  }, [resultsLimit]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setIsSearching(true);

    if (query) {
      const searchWords = query.split(" ");
      const results = guidelinesData.filter((guideline) =>
        searchWords.every((word) =>
          guideline.content.toLowerCase().includes(word)
        )
      );
      setFilteredGuidelines(results.slice(0, resultsLimit));
    } else {
      setFilteredGuidelines(guidelinesData.slice(0, resultsLimit));
    }

    setIsSearching(false);
  };

  const handleResultLimitChange = (e) => {
    setResultsLimit(parseInt(e.target.value, 10));
  };

  const openModal = (guideline) => {
    setSelectedGuideline(guideline);
  };

  const closeModal = () => {
    setSelectedGuideline(null);
  };

  const highlightQuery = (text, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <div className="ucg-container">
      <h3>Uganda Clinical Guidelines</h3>

      <div className="ucg-filters">
        <input
          type="text"
          placeholder="Search guidelines..."
          value={searchQuery}
          onChange={handleSearch}
          className="ucg-search-input"
        />

        <label htmlFor="results-limit">Results per page:</label>
        <select
          id="results-limit"
          onChange={handleResultLimitChange}
          value={resultsLimit}
          className="ucg-select"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      {isSearching && <p className="loading-text">Searching...</p>}

      <div className="guideline-cards">
        {filteredGuidelines.length > 0 ? (
          filteredGuidelines.map((guideline) => (
            <div key={guideline.id} className="guideline-card">
              <h4 className="guideline-title">{guideline.title}</h4>
              <p className="guideline-specialty">
                {guideline.specialty}
              </p>
              <p
                className="guideline-snippet"
                dangerouslySetInnerHTML={{
                  __html: highlightQuery(guideline.content, searchQuery),
                }}
              ></p>
              <button
                className="toggle-button"
                onClick={() => openModal(guideline)}
              >
                See More
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>

      {selectedGuideline && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>{selectedGuideline.title}</h4>
            <p>Specialty: {selectedGuideline.specialty}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedGuideline.formatted_content,
              }}
            />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UCG;
