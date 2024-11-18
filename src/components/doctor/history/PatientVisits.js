import React, { useState } from 'react';

const PatientVisits = () => {
  // State to manage the visit details
  const [visitData, setVisitData] = useState({
    visitType: '',
    reasonForVisit: '',
    dateOfVisit: '',
    duration: '',
    physician: '',
    notes: '',
  });

  // Function to handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitData({ ...visitData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient Visit Data:', visitData);
    // Here you can send the visit data to your backend or handle it accordingly
    // Reset form after submission
    setVisitData({
      visitType: '',
      reasonForVisit: '',
      dateOfVisit: '',
      duration: '',
      physician: '',
      notes: '',
    });
  };

  return (
    <div>
      <h3>Patient Visits</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="visitType">Type of Visit:</label>
          <select name="visitType" value={visitData.visitType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="Routine">Routine</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Emergency">Emergency</option>
            <option value="Specialist">Specialist</option>
          </select>
        </div>

        <div>
          <label htmlFor="reasonForVisit">Reason for Visit:</label>
          <input
            type="text"
            name="reasonForVisit"
            value={visitData.reasonForVisit}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="dateOfVisit">Date of Visit:</label>
          <input
            type="date"
            name="dateOfVisit"
            value={visitData.dateOfVisit}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="duration">Duration of Visit (minutes):</label>
          <input
            type="number"
            name="duration"
            value={visitData.duration}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="physician">Physician:</label>
          <input
            type="text"
            name="physician"
            value={visitData.physician}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="notes">Additional Notes:</label>
          <textarea
            name="notes"
            value={visitData.notes}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <button type="submit">Record Visit</button>
      </form>
    </div>
  );
};

export default PatientVisits;
