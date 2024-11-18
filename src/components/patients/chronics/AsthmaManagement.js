import React, { useState, useEffect } from "react";
import { Button, TextField, Select, MenuItem, Typography, Card, CardContent, CardHeader } from "@material-ui/core";
import { FaLungs, FaCapsules, FaClinicMedical, FaClipboard, FaFileMedical, FaProcedures, FaChartLine } from "react-icons/fa";
import useNotifications from "./hooks/useNotifications";

const AsthmaManagement = () => {
  const [medications, setMedications] = useState([]);
  const [asthmaControlLevel, setAsthmaControlLevel] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [peakFlowReadings, setPeakFlowReadings] = useState([]);
  const [actionPlan, setActionPlan] = useState("");
  const { notify } = useNotifications();

  useEffect(() => {
    // Fetch medication options, peak flow data, etc.
  }, []);

  const handleControlLevelSelect = (event) => {
    const controlLevel = event.target.value;
    setAsthmaControlLevel(controlLevel);
    // Notify user
    notify("Asthma Control Level Selected", `You selected ${controlLevel}`);
  };

  const handleSymptomLog = () => {
    // Log symptoms
    notify("Symptom Logged", "Your symptom has been logged successfully.");
  };

  const handlePeakFlowUpload = (reading) => {
    // Upload peak flow reading
    setPeakFlowReadings([...peakFlowReadings, reading]);
    notify("Peak Flow Uploaded", "Your peak flow reading has been uploaded successfully.");
  };

  const handleActionPlanUpdate = () => {
    // Update action plan
    notify("Action Plan Updated", "Your asthma action plan has been updated.");
  };

  return (
    <div className="asthma-management-container">
      <Typography variant="h4" gutterBottom>
        Asthma Management
      </Typography>

      {/* Asthma Control Level */}
      <Card className="management-card">
        <CardHeader title="Asthma Control Level" />
        <CardContent>
          <Typography variant="body1">
            Monitoring your asthma control is crucial. Select the current control level based on your symptoms and peak flow readings.
          </Typography>
          <Select
            value={asthmaControlLevel}
            onChange={handleControlLevelSelect}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Well Controlled">Well Controlled</MenuItem>
            <MenuItem value="Partly Controlled">Partly Controlled</MenuItem>
            <MenuItem value="Poorly Controlled">Poorly Controlled</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Medication Management */}
      <Card className="management-card">
        <CardHeader title="Medication Management" />
        <CardContent>
          <Typography variant="body1">
            Asthma medications are typically divided into two types: controllers (taken daily) and relievers (used for immediate symptom relief). Please ensure adherence to both types.
          </Typography>
          <Select
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="ICS (Inhaled Corticosteroids)">ICS (Inhaled Corticosteroids)</MenuItem>
            <MenuItem value="LABA (Long-acting Beta Agonists)">LABA (Long-acting Beta Agonists)</MenuItem>
            <MenuItem value="SABA (Short-acting Beta Agonists)">SABA (Short-acting Beta Agonists)</MenuItem>
            <MenuItem value="LTRA (Leukotriene Receptor Antagonists)">LTRA (Leukotriene Receptor Antagonists)</MenuItem>
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

      {/* Peak Flow Monitoring */}
      <Card className="management-card">
        <CardHeader title="Peak Flow Monitoring" />
        <CardContent>
          <Typography variant="body1">
            Regularly tracking your peak flow readings helps monitor your lung function and predict asthma flare-ups. Upload your peak flow reading below.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaClipboard />}
            onClick={() => handlePeakFlowUpload("New Peak Flow Reading")}
          >
            Upload Peak Flow Reading
          </Button>
          <ul>
            {peakFlowReadings.map((reading, index) => (
              <li key={index}>{reading}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Asthma Action Plan */}
      <Card className="management-card">
        <CardHeader title="Asthma Action Plan" />
        <CardContent>
          <Typography variant="body1">
            Follow your personalized asthma action plan for managing symptoms and controlling flare-ups. Update it as necessary in consultation with your healthcare provider.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaProcedures />}
            onClick={handleActionPlanUpdate}
          >
            Update Action Plan
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Action */}
      <Card className="management-card">
        <CardHeader title="Emergency Protocols" />
        <CardContent>
          <Typography variant="body1">
            In case of severe asthma exacerbations (e.g., difficulty speaking, breathing, or bluish lips), immediate medical intervention is required. Use your quick-relief inhaler and seek emergency help.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FaClinicMedical />}
            onClick={() => notify("Emergency Protocol", "Emergency protocol initiated.")}
          >
            Initiate Emergency Protocol
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AsthmaManagement;
