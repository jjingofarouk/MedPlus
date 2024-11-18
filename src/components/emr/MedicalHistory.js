import React, { useState } from 'react';
import './MedicalHistory.css';

const MedicalHistory = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    medicalConditions: '',
    allergies: '',
    currentMedications: '',
    pastSurgeries: '',
    familyHistory: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.patientId) errors.patientId = 'Patient ID is required';
    if (!formData.medicalConditions) errors.medicalConditions = 'Medical conditions are required';
    if (!formData.allergies) errors.allergies = 'Allergies information is required';
    if (!formData.currentMedications) errors.currentMedications = 'Current medications are required';
    if (!formData.pastSurgeries) errors.pastSurgeries = 'Past surgeries information is required';
    if (!formData.familyHistory) errors.familyHistory = 'Family history is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic here
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="medical-history">
      <h2>Medical History</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientId">Patient ID:</label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            className={errors.patientId ? 'input-error' : ''}
          />
          {errors.patientId && <span className="error-text">{errors.patientId}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="medicalConditions">Medical Conditions:</label>
          <textarea
            id="medicalConditions"
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            className={errors.medicalConditions ? 'input-error' : ''}
            rows="4"
          />
          {errors.medicalConditions && <span className="error-text">{errors.medicalConditions}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="allergies">Allergies:</label>
          <textarea
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className={errors.allergies ? 'input-error' : ''}
            rows="4"
          />
          {errors.allergies && <span className="error-text">{errors.allergies}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="currentMedications">Current Medications:</label>
          <textarea
            id="currentMedications"
            name="currentMedications"
            value={formData.currentMedications}
            onChange={handleChange}
            className={errors.currentMedications ? 'input-error' : ''}
            rows="4"
          />
          {errors.currentMedications && <span className="error-text">{errors.currentMedications}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="pastSurgeries">Past Surgeries:</label>
          <textarea
            id="pastSurgeries"
            name="pastSurgeries"
            value={formData.pastSurgeries}
            onChange={handleChange}
            className={errors.pastSurgeries ? 'input-error' : ''}
            rows="4"
          />
          {errors.pastSurgeries && <span className="error-text">{errors.pastSurgeries}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="familyHistory">Family History:</label>
          <textarea
            id="familyHistory"
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleChange}
            className={errors.familyHistory ? 'input-error' : ''}
            rows="4"
          />
          {errors.familyHistory && <span className="error-text">{errors.familyHistory}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="notes">Additional Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default MedicalHistory;
