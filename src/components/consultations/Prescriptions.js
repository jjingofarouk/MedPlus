import React, { useState } from 'react';
import './Prescriptions.css'; // Assuming you have a CSS file for styling

const Prescriptions = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    date: '',
    medication: '',
    dosage: '',
    instructions: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    let newErrors = {};

    if (!formData.patient_id) newErrors.patient_id = 'Patient ID is required';
    if (!formData.doctor_id) newErrors.doctor_id = 'Doctor ID is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.medication) newErrors.medication = 'Medication is required';
    if (!formData.dosage) newErrors.dosage = 'Dosage is required';

    setErrors(newErrors);

    // Submit data if no errors
    if (Object.keys(newErrors).length === 0) {
      // Example: Submit the formData to the server
      // fetch('/api/prescriptions', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: { 'Content-Type': 'application/json' }
      // }).then(response => response.json())
      // .then(data => console.log(data));

      console.log('Prescription created successfully:', formData);
    }
  };

  return (
    <div className="prescriptions-page">
      <main>
        <h1>Create Prescription</h1>
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
            />
            {errors.patient_id && <span className="error">{errors.patient_id}</span>}
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
            />
            {errors.doctor_id && <span className="error">{errors.doctor_id}</span>}
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
            />
            {errors.date && <span className="error">{errors.date}</span>}
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
            />
            {errors.medication && <span className="error">{errors.medication}</span>}
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
            />
            {errors.dosage && <span className="error">{errors.dosage}</span>}
          </div>
          <div>
            <label htmlFor="instructions">Instructions:</label><br />
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="3"
            />
          </div>
          <button type="submit">Create Prescription</button>
        </form>
      </main>
      <footer>
        <div className="footer-links">
          <p>&copy; 2024 MedHub. All rights reserved.</p>
          <a href="/">Back Home</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/support">Get Support</a>
          <a href="/view-medical-history">View Medical History</a>
          <a href="/forum">Community</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Prescriptions;
