import React, { useState } from 'react';
import axios from 'axios'; // For form submission

function EditPrescription() {
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    date: '',
    medication: '',
    dosage: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
    axios.post('/api/update-prescription', formData)
      .then(response => {
        alert('Prescription updated successfully!');
        // Optionally redirect or refresh
      })
      .catch(error => {
        console.error('There was an error updating the prescription!', error);
      });
  };

  return (
    <main>
      <h1>Edit Prescription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patient_id">Patient ID:</label><br />
          <input
            type="text"
            id="patient_id"
            name="patient_id"
            value={formData.patient_id}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="doctor_id">Doctor ID:</label><br />
          <input
            type="text"
            id="doctor_id"
            name="doctor_id"
            value={formData.doctor_id}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="date">Date:</label><br />
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          /><br />
        </div>
        <div>
          <label htmlFor="medication">Medication:</label><br />
          <input
            type="text"
            id="medication"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="dosage">Dosage:</label><br />
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            size="32"
            required
          /><br />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label><br />
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="3"
            placeholder="e.g., take with food, avoid alcohol, etc."
          /><br />
        </div>
        <button type="submit">Update Prescription</button>
      </form>
    </main>
  );
}

export default EditPrescription;
