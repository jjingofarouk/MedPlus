import React, { useState, useEffect } from "react";
import {
  Button, TextField, Select, MenuItem, Typography, Card, CardContent, CardHeader
} from "@material-ui/core";
import { FaSyringe, FaCapsules, FaLungs, FaStethoscope, FaFileMedical, FaUserMd } from "react-icons/fa";
import useNotifications from "./hooks/useNotifications";
import './TuberculosisManagement.css';

const TuberculosisManagement = () => {
  const [medications, setMedications] = useState([]);
  const [treatmentStage, setTreatmentStage] = useState("");
  const [adherenceLevel, setAdherenceLevel] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [diagnosticTests, setDiagnosticTests] = useState([]);
  const { notify } = useNotifications();

  useEffect(() => {
    // Fetch medications, diagnostic tests, etc.
  }, []);

  const handleTreatmentStageSelect = (event) => {
    const stage = event.target.value;
    setTreatmentStage(stage);
    notify("Treatment Stage Selected", `You selected ${stage}`);
  };

  const handleMedicationAdherence = (event) => {
    const level = event.target.value;
    setAdherenceLevel(level);
    notify("Adherence Level Set", `Your adherence level is ${level}`);
  };

  const handleSymptomLog = () => {
    notify("Symptom Logged", "Your symptom has been logged successfully.");
  };

  const handleDiagnosticTestUpload = (test) => {
    setDiagnosticTests([...diagnosticTests, test]);
    notify("Diagnostic Test Uploaded", "Your diagnostic test has been uploaded successfully.");
  };

  return (
    <div className="tb-management-container">
      <Typography variant="h4" gutterBottom>
        Tuberculosis (TB) Management
      </Typography>

      {/* TB Treatment Stages */}
      <Card className="management-card">
        <CardHeader title="Treatment Stage" />
        <CardContent>
          <Typography variant="body1">
            TB treatment includes options for drug-resistant TB. Ensure you're in the correct phase based on your provider's recommendation.
          </Typography>
          <Select
            value={treatmentStage}
            onChange={handleTreatmentStageSelect}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Intensive Phase">Intensive Phase</MenuItem>
            <MenuItem value="Continuation Phase">Continuation Phase</MenuItem>
            <MenuItem value="MDR-TB Short Regimen">MDR-TB Short Regimen</MenuItem>
            <MenuItem value="MDR-TB Long Regimen">MDR-TB Long Regimen</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Medication Adherence */}
      <Card className="management-card">
        <CardHeader title="Medication Adherence" />
        <CardContent>
          <Typography variant="body1">
            TB treatment requires strict adherence. Please ensure full adherence to avoid resistance.
          </Typography>
          <Select
            value={adherenceLevel}
            onChange={handleMedicationAdherence}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="High">High Adherence</MenuItem>
            <MenuItem value="Moderate">Moderate Adherence</MenuItem>
            <MenuItem value="Low">Low Adherence</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Symptom Logging */}
      <Card className="management-card">
        <CardHeader title="Log Symptoms" />
        <CardContent>
          <TextField
            label="Enter Symptom"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleSymptomLog}
            variant="contained"
            color="primary"
            startIcon={<FaLungs />}
            className="mt-4"
          >
            Log Symptom
          </Button>
        </CardContent>
      </Card>

      {/* Diagnostic Test Upload */}
      <Card className="management-card">
        <CardHeader title="Upload Diagnostic Test Results" />
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaFileMedical />}
            onClick={() => handleDiagnosticTestUpload("New Test Result")}
          >
            Upload Test Result
          </Button>
          <ul>
            {diagnosticTests.map((test, index) => (
              <li key={index}>{test}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Follow-Up and Sputum Monitoring */}
      <Card className="management-card">
        <CardHeader title="Follow-Up and Sputum Monitoring" />
        <CardContent>
          <Typography variant="body1">
            Regular follow-up is critical. Sputum smear tests should be repeated at 2, 5, and 6 months of treatment.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaStethoscope />}
          >
            Schedule Follow-Up
          </Button>
        </CardContent>
      </Card>

      {/* DOTS (Directly Observed Therapy) Support */}
      <Card className="management-card">
        <CardHeader title="Directly Observed Therapy (DOTS)" />
        <CardContent>
          <Typography variant="body1">
            Enroll in a DOTS program where a healthcare provider supervises your treatment adherence.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaUserMd />}
          >
            Join DOTS Program
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TuberculosisManagement;
