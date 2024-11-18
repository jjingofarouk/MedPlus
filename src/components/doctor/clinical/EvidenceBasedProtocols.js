import React, { useEffect, useState } from "react";
import dummyData from "./Protocols"; // Adjust the path if necessary

// Main Evidence-Based Protocols Component
const EvidenceBasedProtocols = () => {
  const [protocols, setProtocols] = useState([]); // Ensure this starts as an empty array
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProtocol, setSelectedProtocol] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  // Dummy categories for filtering
  const categories = ["All", "Cardiology", "Endocrinology"];

  useEffect(() => {
    // Check the imported data
    console.log("Imported dummyData:", dummyData);

    // Set the protocols state
    if (Array.isArray(dummyData)) {
      setProtocols(dummyData);
    } else {
      console.error("Expected dummyData to be an array, but got:", dummyData);
    }
  }, []);

  // Search and category filtering
  const filteredProtocols = protocols.filter((protocol) => 
    (selectedCategory === "All" || protocol.category === selectedCategory) &&
    protocol.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handling feedback and rating
  const handleSubmitFeedback = () => {
    console.log(`Feedback: ${feedback}, Rating: ${rating}`);
  };

  // Download PDF function
  const handleDownload = (protocol) => {
    const pdfContent = `<h1>${protocol.title}</h1><p>${protocol.description}</p>`;
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${protocol.title}.pdf`;
    a.click();
  };

  // Handling checklist toggles
  const handleToggleChecklist = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="evidence-based-protocols">
      <h3 className="text-2xl font-bold mb-4">Evidence-Based Protocols</h3>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search protocols..."
        className="mb-4 p-2 border"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Dropdown */}
      <select
        className="mb-4 p-2 border"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Protocols List */}
      <ul className="mb-4">
        {filteredProtocols.map((protocol) => (
          <li key={protocol.id} className="mb-2">
            <button
              onClick={() => setSelectedProtocol(protocol)}
              className="text-blue-600 underline"
            >
              {protocol.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Protocol Details */}
      {selectedProtocol && (
        <div className="protocol-details">
          <h4 className="text-xl font-semibold">{selectedProtocol.title}</h4>
          <p>{selectedProtocol.description}</p>

          {/* Versioning */}
          <h5 className="text-lg font-medium mt-4">Version History</h5>
          <ul>
            {selectedProtocol.versions.map((v, index) => (
              <li key={index}>
                Version {v.version} - {v.date}: {v.changes}
              </li>
            ))}
          </ul>

          {/* Download PDF */}
          <button
            onClick={() => handleDownload(selectedProtocol)}
            className="mt-4 p-2 bg-green-500 text-white rounded"
          >
            Download PDF
          </button>

          {/* Checklist */}
          <h5 className="text-lg font-medium mt-4">Checklist</h5>
          <ul>
            {selectedProtocol.checklist.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item)}
                  onChange={() => handleToggleChecklist(item)}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Feedback and Ratings */}
          <div className="protocol-feedback mt-4">
            <h5 className="text-lg font-medium">Leave Feedback</h5>
            <textarea
              className="p-2 border w-full mb-2"
              placeholder="Provide your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div className="rating mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => setRating(star)}>
                  {star <= rating ? "★" : "☆"}
                </span>
              ))}
            </div>
            <button
              onClick={handleSubmitFeedback}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Submit Feedback
            </button>
          </div>

          {/* External Resources */}
          <div className="external-resources mt-4">
            <h5 className="text-lg font-medium">External Resources</h5>
            <ul>
              <li>
                <a
                  href="https://www.who.int"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  WHO Guidelines on Hypertension
                </a>
              </li>
              <li>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  PubMed Article on Diabetes
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvidenceBasedProtocols;
