import React, { useState, useEffect } from 'react';

const Prescriptions = () => {
  // State to manage prescription details
  const [prescription, setPrescription] = useState({
    medication: '',
    dosage: '',
    frequency: '',
    duration: '',
    notes: '',
  });
  const [medicationsList, setMedicationsList] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [drugInteractions, setDrugInteractions] = useState([]);
  const [status, setStatus] = useState('');
  const [prescriptionList, setPrescriptionList] = useState([]);

  // Fetch medications and patient allergies (mocked for this example)
  useEffect(() => {
    // Replace with actual API calls to fetch medications and allergies
    setMedicationsList(['Aspirin', 'Ibuprofen', 'Metformin']);
    setAllergies(['Penicillin', 'Aspirin']);
  }, []);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrescription({ ...prescription, [name]: value });
  };

  // Function to handle prescription submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add advanced interaction check logic before submission
    const interactionWarnings = checkInteractions();
    if (interactionWarnings.length > 0) {
      alert('Please resolve drug interactions before submitting.');
      return;
    }
    
    // Submit the prescription (API call or saving logic)
    setPrescriptionList([...prescriptionList, prescription]);
    setStatus('Prescription saved successfully!');

    // Reset form after submission
    setPrescription({
      medication: '',
      dosage: '',
      frequency: '',
      duration: '',
      notes: '',
    });
  };

  // Function to check for drug interactions (mocked for this example)
  const checkInteractions = () => {
    const interactions = [];
    if (prescription.medication === 'Aspirin' && allergies.includes('Aspirin')) {
      interactions.push('Patient is allergic to Aspirin!');
    }
    
    // Add other interaction checks here...
    if (interactions.length > 0) {
      setDrugInteractions(interactions);
    } else {
      setDrugInteractions([]);
    }
    
    return interactions;
  };

  // Function to add multiple prescriptions
  const handleAddAnotherPrescription = () => {
    // Reset the form for another entry
    setPrescription({
      medication: '',
      dosage: '',
      frequency: '',
      duration: '',
      notes: '',
    });
  };

  return (
    <div>
      <h3>Prescriptions</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="medication">Medication:</label>
          <input
            type="text"
            name="medication"
            value={prescription.medication}
            onChange={handleChange}
            onBlur={checkInteractions}
            required
            list="medications-list"
          />
          <datalist id="medications-list">
            {medicationsList.map((med, index) => (
              <option key={index} value={med} />
            ))}
          </datalist>
        </div>

        <div>
          <label htmlFor="dosage">Dosage:</label>
          <input
            type="number"
            name="dosage"
            value={prescription.dosage}
            onChange={handleChange}
            required
            placeholder="e.g., 500 mg"
          />
        </div>

        <div>
          <label htmlFor="frequency">Frequency:</label>
          <select
            name="frequency"
            value={prescription.frequency}
            onChange={handleChange}
            required
          >
            <option value="">Select Frequency</option>
            <option value="once daily">Once Daily</option>
            <option value="twice daily">Twice Daily</option>
            <option value="thrice daily">Thrice Daily</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            name="duration"
            value={prescription.duration}
            onChange={handleChange}
            required
            placeholder="e.g., 7 days"
          />
        </div>

        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            name="notes"
            value={prescription.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Additional instructions (optional)"
          />
        </div>

        <button type="submit">Submit Prescription</button>
        <button type="button" onClick={handleAddAnotherPrescription}>
          Add Another Prescription
        </button>
      </form>

      {status && <p>{status}</p>}

      {drugInteractions.length > 0 && (
        <div>
          <h4>Drug Interactions:</h4>
          <ul>
            {drugInteractions.map((interaction, index) => (
              <li key={index}>{interaction}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display all prescriptions */}
      {prescriptionList.length > 0 && (
        <div>
          <h4>Submitted Prescriptions</h4>
          <ul>
            {prescriptionList.map((pres, index) => (
              <li key={index}>
                {pres.medication} - {pres.dosage} - {pres.frequency} for {pres.duration}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Prescriptions;
