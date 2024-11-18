import React, { useState } from "react";
import { MenuItem, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import PersonalInfo from './PersonalInfo';
import ChiefComplaint from './ChiefComplaint';
import HistoryOfPresentIllness from './HistoryOfPresentIllness';
import PastMedicalHistory from './PastMedicalHistory';
import FamilyHistory from './FamilyHistory';
import SocialHistory from './SocialHistory';
import ReviewOfSystems from './ReviewOfSystems';
import ExaminationFindings from './ExaminationFindings';
import { Select } from '../ui/select';

const History = () => {
  const [patientData, setPatientData] = useState({
    personalInfo: {},
    chiefComplaint: '',
    historyOfPresentIllness: '',
    pastMedicalHistory: {},
    familyHistory: '',
    socialHistory: {},
  });

  const [selectedSection, setSelectedSection] = useState("");

  const handleInputChange = (section, field, value) => {
    setPatientData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "personalInfo":
        return <PersonalInfo personalInfo={patientData.personalInfo} handleInputChange={handleInputChange} />;
      case "chiefComplaint":
        return <ChiefComplaint chiefComplaint={patientData.chiefComplaint} handleInputChange={handleInputChange} />;
      case "historyOfPresentIllness":
        return <HistoryOfPresentIllness historyOfPresentIllness={patientData.historyOfPresentIllness} handleInputChange={handleInputChange} />;
      case "pastMedicalHistory":
        return <PastMedicalHistory pastMedicalHistory={patientData.pastMedicalHistory} handleInputChange={handleInputChange} />;
      case "familyHistory":
        return <FamilyHistory familyHistory={patientData.familyHistory} handleInputChange={handleInputChange} />;
      case "socialHistory":
        return <SocialHistory socialHistory={patientData.socialHistory} handleInputChange={handleInputChange} />;
      case "reviewOfSystems":
        return <ReviewOfSystems patientData={patientData} handleInputChange={handleInputChange} />;
      case "examinationFindings":
        return <ExaminationFindings />;
      default:
        return <div>Please select a section to fill out.</div>;
    }
  };

  const handleSectionSelect = (event) => {
    setSelectedSection(event.target.value);
  };

  return (
    <div className="history-container">
      <Card>
        <CardHeader>
          <Typography variant="h6">Record Patient History</Typography>
        </CardHeader>
        <CardContent>
          <Select value={selectedSection} onChange={handleSectionSelect} fullWidth>
            <MenuItem value="">-- Select Section --</MenuItem>
            <MenuItem value="personalInfo">Patient Demographics</MenuItem>
            <MenuItem value="chiefComplaint">Presenting Complaint</MenuItem>
            <MenuItem value="historyOfPresentIllness">History of Present Complaint</MenuItem>
            <MenuItem value="pastMedicalHistory">Past Medical History</MenuItem>
            <MenuItem value="pastSurgicalHistory">Past Surgical History</MenuItem>
            <MenuItem value="familyHistory">Family History</MenuItem>
            <MenuItem value="socialHistory">Social History</MenuItem>
            <MenuItem value="reviewOfSystems">Review of Systems</MenuItem>
            <MenuItem value="examinationFindings">Examination Findings</MenuItem>
            <MenuItem value="historySummary">Summary</MenuItem>

          </Select>
        </CardContent>
      </Card>

      <div className="section-component">
        {renderSection()}
      </div>

      <button onClick={() => console.log(patientData)}>Submit Patient History</button>
    </div>
  );
};

export default History;