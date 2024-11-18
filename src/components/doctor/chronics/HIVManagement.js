import React, { useState, useEffect } from "react";
import { Button, TextField, Select, MenuItem, Typography, Card, CardContent, CardHeader } from "@material-ui/core";
import { FaSyringe, FaCapsules, FaHeartbeat, FaChartLine, FaUserMd, FaClinicMedical, FaPills } from "react-icons/fa";
import useNotifications from "./hooks/useNotifications";

const HIVManagement = () => {
  const [medications, setMedications] = useState([]);
  const [adherenceLevel, setAdherenceLevel] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [testResults, setTestResults] = useState([]);
  const [counselingSessions, setCounselingSessions] = useState([]);
  const [preventionMethods, setPreventionMethods] = useState("");
  const { notify } = useNotifications();

  useEffect(() => {
    // Fetch medications, test results, and counseling sessions
  }, []);

  const handleMedicationAdherence = (event) => {
    const level = event.target.value;
    setAdherenceLevel(level);
    // Notify user
    notify("Adherence Level Set", `Your adherence level is ${level}`);
  };

  const handleSymptomLog = () => {
    // API call to log symptoms
    notify("Symptom Logged", "Your symptom has been logged successfully.");
  };

  const handleTestResultUpload = (result) => {
    // API call to upload test result
    setTestResults([...testResults, result]);
    notify("Test Result Uploaded", "Your test result has been uploaded successfully.");
  };

  const handleCounselingSessionLog = () => {
    // API call to log counseling session
    notify("Counseling Session Logged", "Your counseling session has been logged.");
  };

  const handlePreventionMethodSelect = (event) => {
    const method = event.target.value;
    setPreventionMethods(method);
    // Notify user
    notify("Prevention Method Selected", `You selected ${method}`);
  };

  return (
    <div className="hiv-management-container">
      <Typography variant="h4" gutterBottom>
        HIV Management
      </Typography>

      {/* Antiretroviral Medication Adherence */}
      <Card className="management-card">
        <CardHeader title="Antiretroviral Medication Adherence" />
        <CardContent>
          <Typography variant="body1">
            Ensure strict adherence to your antiretroviral therapy (ART) as prescribed by your healthcare provider.
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
          <Typography variant="caption" display="block" gutterBottom>
            Adherence is critical for viral suppression and preventing drug resistance.
          </Typography>
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
            startIcon={<FaHeartbeat />}
            className="mt-4"
          >
            Log Symptom
          </Button>
        </CardContent>
      </Card>

      {/* Test Results Upload */}
      <Card className="management-card">
        <CardHeader title="Upload HIV Test Results" />
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaChartLine />}
            onClick={() => handleTestResultUpload("New Test Result")}
          >
            Upload Latest Test Result
          </Button>
          <ul>
            {testResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Counseling Sessions */}
      <Card className="management-card">
        <CardHeader title="Log Counseling Session" />
        <CardContent>
          <Typography variant="body1">
            Regular counseling is essential for emotional support, understanding treatment options, and lifestyle management.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaUserMd />}
            onClick={handleCounselingSessionLog}
          >
            Log Counseling Session
          </Button>
          <ul>
            {counselingSessions.map((session, index) => (
              <li key={index}>{session}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Prevention Methods */}
      <Card className="management-card">
        <CardHeader title="Prevention of Transmission" />
        <CardContent>
          <Typography variant="body1">
            Effective prevention methods include consistent use of condoms, Pre-exposure Prophylaxis (PrEP), and post-exposure prophylaxis (PEP) when indicated.
          </Typography>
          <Select
            value={preventionMethods}
            onChange={handlePreventionMethodSelect}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Condoms">Condoms</MenuItem>
            <MenuItem value="PrEP">Pre-exposure Prophylaxis (PrEP)</MenuItem>
            <MenuItem value="PEP">Post-exposure Prophylaxis (PEP)</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Regular Health Monitoring */}
      <Card className="management-card">
        <CardHeader title="Regular Health Monitoring" />
        <CardContent>
          <Typography variant="body1">
            It is recommended to monitor your viral load and CD4 count every 6 months to ensure treatment is effective.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaClinicMedical />}
          >
            Schedule Monitoring
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HIVManagement;
