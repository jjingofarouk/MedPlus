import React, { useState, useEffect } from 'react';
import './ElectronicPrescriptions.css';

const ElectronicPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [formData, setFormData] = useState({
    prescriptionId: '',
    patientName: '',
    medication: '',
    dosage: '',
    frequency: '',
    startDate: '',
    endDate: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Load existing prescriptions from a data source if needed
    // For demo, setting empty array
    setPrescriptions([]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.patientName) errors.patientName = 'Patient name is required';
    if (!formData.medication) errors.medication = 'Medication is required';
    if (!formData.dosage) errors.dosage = 'Dosage is required';
    if (!formData.frequency) errors.frequency = 'Frequency is required';
    if (!formData.startDate) errors.startDate = 'Start date is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isEditing) {
        const updatedPrescriptions = prescriptions.map((prescription, index) =>
          index === editIndex ? formData : prescription
        );
        setPrescriptions(updatedPrescriptions);
        setIsEditing(false);
      } else {
        setPrescriptions([...prescriptions, formData]);
      }
      setFormData({
        prescriptionId: '',
        patientName: '',
        medication: '',
        dosage: '',
        frequency: '',
        startDate: '',
        endDate: '',
        notes: '',
      });
    }
  };

  const handleEdit = (index) => {
    setFormData(prescriptions[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPrescriptions = prescriptions.filter((_, i) => i !== index);
    setPrescriptions(updatedPrescriptions);
  };

  return (
    <div className="electronic-prescriptions">
      <h2>Electronic Prescriptions</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className={errors.patientName ? 'input-error' : ''}
          />
          {errors.patientName && <span className="error-text">{errors.patientName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="medication">Medication:</label>
          <input
            type="text"
            id="medication"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            className={errors.medication ? 'input-error' : ''}
          />
          {errors.medication && <span className="error-text">{errors.medication}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="dosage">Dosage:</label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            className={errors.dosage ? 'input-error' : ''}
          />
          {errors.dosage && <span className="error-text">{errors.dosage}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="frequency">Frequency:</label>
          <input
            type="text"
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            className={errors.frequency ? 'input-error' : ''}
          />
          {errors.frequency && <span className="error-text">{errors.frequency}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className={errors.startDate ? 'input-error' : ''}
          />
          {errors.startDate && <span className="error-text">{errors.startDate}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
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

        <button type="submit" className="submit-btn">
          {isEditing ? 'Update Prescription' : 'Add Prescription'}
        </button>
      </form>

      <div className="prescription-list">
        <h3>Existing Prescriptions</h3>
        <table>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription, index) => (
              <tr key={index}>
                <td>{prescription.patientName}</td>
                <td>{prescription.medication}</td>
                <td>{prescription.dosage}</td>
                <td>{prescription.frequency}</td>
                <td>{prescription.startDate}</td>
                <td>{prescription.endDate}</td>
                <td>{prescription.notes}</td>
                <td>
                  <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ElectronicPrescriptions;
