import React, { useState } from 'react';
import { FaUsers, FaFileExport, FaClipboardCheck } from 'react-icons/fa'; // Import your icon library here

const PatientDataCollectionApp = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    medicalHistory: '',
    symptoms: '',
    consent: false,
    location: '',
  });

  const [alert, setAlert] = useState({ open: false, message: '' });
  const [dataCollectionMode, setDataCollectionMode] = useState('standard'); // Standard or survey mode
  const [surveyQuestions, setSurveyQuestions] = useState([]);
  const [userRole, setUserRole] = useState('researcher'); // Can be 'researcher', 'dataCollector', etc.
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check for mobile responsiveness

  const collectPatientData = () => {
    if (validateForm()) {
      console.log("Collecting patient data...", patientData);
      // Here, you can send the patient data to the server or database
      setAlert({ open: true, message: 'Patient data collected successfully!' });
      resetForm();
    } else {
      setAlert({ open: true, message: 'Please fill in all required fields correctly.' });
    }
  };

  const validateForm = () => {
    // Simple validation logic for demonstration
    return patientData.name && patientData.age && patientData.gender && patientData.consent && patientData.location;
  };

  const resetForm = () => {
    setPatientData({
      name: '',
      age: '',
      gender: '',
      medicalHistory: '',
      symptoms: '',
      consent: false,
      location: '',
    });
    setSurveyQuestions([]); // Reset survey questions
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPatientData({
      ...patientData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(patientData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'patient_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPatientData({ ...patientData, location: `${latitude}, ${longitude}` });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const renderSurveyQuestions = () => {
    // Example rendering for survey questions
    return surveyQuestions.map((question, index) => (
      <div key={index}>
        <label>{question}</label>
        <input
          type="text"
          name={`surveyResponse_${index}`}
          onChange={handleChange}
        />
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center p-4 border-b cursor-pointer">
      <FaUsers className="w-6 h-6" />
      <div className="ml-4 w-full">
        <h3 className="text-lg font-semibold">Patient Data Collection App</h3>
        <p className="text-sm text-gray-600">
          Tool for standardized patient data collection during clinical trials or observational studies.
        </p>

        {/* Data Collection Mode Selection */}
        <div className="flex mb-4">
          <button onClick={() => setDataCollectionMode('standard')}>Standard Mode</button>
          <button onClick={() => setDataCollectionMode('survey')}>Survey Mode</button>
        </div>

        {/* Patient Data Form */}
        <form className="patient-data-form">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={patientData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={patientData.age}
            onChange={handleChange}
            required
          />
          <select name="gender" value={patientData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="medicalHistory"
            placeholder="Medical History"
            value={patientData.medicalHistory}
            onChange={handleChange}
          />
          <textarea
            name="symptoms"
            placeholder="Symptoms"
            value={patientData.symptoms}
            onChange={handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={patientData.consent}
              onChange={handleChange}
              required
            />
            I give my consent for data collection
          </label>

          {/* Geolocation Button */}
          <button type="button" onClick={handleGeolocation}>
            Get Location
          </button>

          {dataCollectionMode === 'survey' && (
            <div>
              <h4>Survey Questions</h4>
              {renderSurveyQuestions()}
            </div>
          )}

          <button type="button" onClick={collectPatientData}>
            Submit Data
          </button>
          <button type="button" onClick={handleExportData}>
            <FaFileExport /> Export Data
          </button>
        </form>

        {/* Alert for success or error messages */}
        {alert.open && <p className="alert-message">{alert.message}</p>}
      </div>
    </div>
  );
};

export default PatientDataCollectionApp;
