import React, { useState, useEffect } from 'react';

const ClinicalTrials = () => {
  const [trials, setTrials] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrials, setFilteredTrials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrial, setSelectedTrial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch clinical trial data (mock data for now)
  useEffect(() => {
    const fetchTrials = async () => {
      const trialData = [
        { 
          id: 1, 
          name: "Diabetes Drug Study", 
          phase: "Phase III", 
          condition: "Diabetes", 
          location: "Hospital A", 
          eligibility: "Ages 18-65, diagnosed with Type 2 Diabetes",
          results: "Preliminary results show a 30% reduction in HbA1c.",
          contacts: "Dr. Smith, contact@hospitalA.com"
        },
        { 
          id: 2, 
          name: "Cancer Immunotherapy Trial", 
          phase: "Phase II", 
          condition: "Cancer", 
          location: "Hospital B", 
          eligibility: "Adults with metastatic cancer",
          results: "Showed improved survival rates in preliminary studies.",
          contacts: "Dr. Jones, contact@hospitalB.com"
        },
        { 
          id: 3, 
          name: "Hypertension Study", 
          phase: "Phase I", 
          condition: "Hypertension", 
          location: "Hospital C", 
          eligibility: "Ages 30-75 with uncontrolled hypertension",
          results: "Results are pending.",
          contacts: "Dr. Taylor, contact@hospitalC.com"
        },
        // Add more trials as needed
      ];
      setTrials(trialData);
      setLoading(false);
    };
    fetchTrials();
  }, []);

  // Update filtered trials based on search term
  useEffect(() => {
    setFilteredTrials(
      trials.filter(trial =>
        trial.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, trials]);

  const handleEnroll = (id) => {
    const trial = trials.find(t => t.id === id);
    if (trial && !enrolled.some(e => e.id === id)) {
      setEnrolled([...enrolled, trial]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (trial) => {
    setSelectedTrial(trial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrial(null);
  };

  if (loading) return <p>Loading clinical trials...</p>;

  return (
    <div>
      <h2>Clinical Trials</h2>
      <input
        type="text"
        placeholder="Search by trial name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredTrials.length > 0 ? (
        <ul>
          {filteredTrials.map(trial => (
            <li key={trial.id}>
              <h4>{trial.name} - {trial.phase}</h4>
              <p><strong>Condition:</strong> {trial.condition}</p>
              <p><strong>Location:</strong> {trial.location}</p>
              <button onClick={() => handleEnroll(trial.id)}>Enroll</button>
              <button onClick={() => openModal(trial)}>View Details</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No clinical trials found.</p>
      )}
      
      {enrolled.length > 0 && (
        <>
          <h4>Enrolled Trials</h4>
          <ul>
            {enrolled.map(trial => (
              <li key={trial.id}>{trial.name} - {trial.phase}</li>
            ))}
          </ul>
        </>
      )}

      {/* Modal for displaying trial details */}
      {isModalOpen && selectedTrial && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h4>{selectedTrial.name}</h4>
            <p><strong>Phase:</strong> {selectedTrial.phase}</p>
            <p><strong>Condition:</strong> {selectedTrial.condition}</p>
            <p><strong>Location:</strong> {selectedTrial.location}</p>
            <p><strong>Eligibility Criteria:</strong> {selectedTrial.eligibility}</p>
            <p><strong>Preliminary Results:</strong> {selectedTrial.results}</p>
            <p><strong>Contact:</strong> {selectedTrial.contacts}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinicalTrials;
