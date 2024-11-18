import React, { useEffect, useState } from "react";
import DrugInteractionChecker from "./DrugInteractionChecker";
import ClinicalCalculators from "./calculators/ClinicalCalculators";
import RiskStratification from "./RiskStratification";
import ClinicalTrials from "./ClinicalTrials";
import Alerts from "./Alerts";
import EbmLibrary from "./EbmLibrary";
import UCG from "./UCG";
import "./ClinicalDecisionSupport.css";

const ClinicalDecisionSupport = () => {
  const [guidelines, setGuidelines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGuidelines, setFilteredGuidelines] = useState([]);
  const [status, setStatus] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("All");

  // Fetch Guidelines (Mock Data Example)
  useEffect(() => {
    const fetchGuidelines = async () => {
      try {
        const response = [
          { id: 1, title: "Management of Hypertension", link: "/guidelines/hypertension", specialty: "Cardiology", lastUpdated: "2023-09-10" },
          { id: 2, title: "Diabetes Management Protocol", link: "/guidelines/diabetes", specialty: "Endocrinology", lastUpdated: "2023-07-25" },
          { id: 3, title: "Asthma Treatment Guidelines", link: "/guidelines/asthma", specialty: "Pulmonology", lastUpdated: "2023-06-05" },
          { id: 4, title: "COVID-19 Management", link: "/guidelines/covid19", specialty: "Infectious Diseases", lastUpdated: "2023-09-01" },
        ];
        setGuidelines(response);
        setFilteredGuidelines(response);
      } catch (error) {
        setStatus("Error fetching guidelines.");
      }
    };
    fetchGuidelines();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterGuidelines(query, specialtyFilter);
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    setSpecialtyFilter(filter);
    filterGuidelines(searchQuery, filter);
  };

  const filterGuidelines = (query, specialty) => {
    let filtered = guidelines;

    if (specialty !== "All") {
      filtered = filtered.filter((g) => g.specialty === specialty);
    }
    if (query) {
      filtered = filtered.filter((g) =>
        g.title.toLowerCase().includes(query)
      );
    }

    setFilteredGuidelines(filtered);
  };

  return (
    <div className="clinical-decision-support">
      <h3>Clinical Decision Support Tool</h3>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search guidelines..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />

        <select value={specialtyFilter} onChange={handleFilterChange} className="specialty-filter">
          <option value="All">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Endocrinology">Endocrinology</option>
          <option value="Pulmonology">Pulmonology</option>
          <option value="Infectious Diseases">Infectious Diseases</option>
        </select>
      </div>

      <ul className="guideline-list">
        {filteredGuidelines.map((guideline) => (
          <li key={guideline.id} className="guideline-item">
            <a href={guideline.link} target="_blank" rel="noopener noreferrer">
              <strong>{guideline.title}</strong> <br />
              <span>Specialty: {guideline.specialty}</span> <br />
              <span>Last updated: {guideline.lastUpdated}</span>
            </a>
          </li>
        ))}
      </ul>

      {status && <p className="error-message">{status}</p>}

      {/* Tool Components */}
      <div className="tool-components">
        <DrugInteractionChecker />
        <ClinicalCalculators />
        <RiskStratification />
        <ClinicalTrials />
        <Alerts />
        <EbmLibrary />
        <UCG />
      </div>
    </div>
  );
};

export default ClinicalDecisionSupport;
