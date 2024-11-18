import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import {
  FaHeartbeat,
  FaRegHospital,
  FaBrain,
  FaClock,
  FaFileMedicalAlt,
} from "react-icons/fa";
import useNotifications from "./hooks/useNotifications";

const StrokeManagement = () => {
  const [strokeType, setStrokeType] = useState("");
  const [symptomLog, setSymptomLog] = useState("");
  const [riskFactors, setRiskFactors] = useState([]);
  const [medication, setMedication] = useState("");
  const [rehabilitationGoals, setRehabilitationGoals] = useState("");
  const [emergencyPlan, setEmergencyPlan] = useState("");
  const { notify } = useNotifications();

  useEffect(() => {
    // Fetch initial data for stroke management, risk factors, and medications
  }, []);

  const handleStrokeTypeSelect = (event) => {
    const selectedType = event.target.value;
    setStrokeType(selectedType);
    notify("Stroke Type Selected", `You selected stroke type: ${selectedType}`);
  };

  const handleSymptomLog = () => {
    // Log symptoms
    notify("Symptoms Logged", "Your symptoms have been logged successfully.");
  };

  const handleMedicationChange = (event) => {
    setMedication(event.target.value);
  };

  const handleRehabilitationGoalsSubmit = () => {
    // Submit rehabilitation goals
    notify("Rehabilitation Goals Submitted", "Your rehabilitation goals have been submitted.");
  };

  const handleEmergencyPlanUpdate = () => {
    // Update emergency plan
    notify("Emergency Plan Updated", "Your emergency plan has been updated.");
  };

  return (
    <div className="stroke-management-container">
      <Typography variant="h4" gutterBottom>
        Stroke Management
      </Typography>

      {/* Stroke Type Selection */}
      <Card className="management-card">
        <CardHeader title="Select Stroke Type" />
        <CardContent>
          <Select
            value={strokeType}
            onChange={handleStrokeTypeSelect}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Ischemic Stroke">Ischemic Stroke</MenuItem>
            <MenuItem value="Hemorrhagic Stroke">Hemorrhagic Stroke</MenuItem>
            <MenuItem value="Transient Ischemic Attack (TIA)">Transient Ischemic Attack (TIA)</MenuItem>
          </Select>
          <Typography variant="body2" className="mt-4">
            Identifying the stroke type is essential for determining treatment and management strategies.
          </Typography>
        </CardContent>
      </Card>

      {/* Symptom Logging */}
      <Card className="management-card">
        <CardHeader title="Log Symptoms" />
        <CardContent>
          <TextField
            label="Enter Symptoms"
            value={symptomLog}
            onChange={(e) => setSymptomLog(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleSymptomLog}
            variant="contained"
            color="primary"
            startIcon={<FaBrain />}
            className="mt-4"
          >
            Log Symptoms
          </Button>
        </CardContent>
      </Card>

      {/* Risk Factors Management */}
      <Card className="management-card">
        <CardHeader title="Manage Risk Factors" />
        <CardContent>
          <Typography variant="body1">
            Common risk factors include:
          </Typography>
          <ul>
            <li>High blood pressure</li>
            <li>Diabetes</li>
            <li>High cholesterol</li>
            <li>Smoking</li>
            <li>Obesity</li>
          </ul>
          <Select
            multiple
            value={riskFactors}
            onChange={(e) => setRiskFactors(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="High Blood Pressure">High Blood Pressure</MenuItem>
            <MenuItem value="Diabetes">Diabetes</MenuItem>
            <MenuItem value="High Cholesterol">High Cholesterol</MenuItem>
            <MenuItem value="Smoking">Smoking</MenuItem>
            <MenuItem value="Obesity">Obesity</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Medication Management */}
      <Card className="management-card">
        <CardHeader title="Medication Management" />
        <CardContent>
          <Typography variant="body1">
            Antithrombotic medications are commonly prescribed. Select your medication:
          </Typography>
          <Select
            value={medication}
            onChange={handleMedicationChange}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Aspirin">Aspirin</MenuItem>
            <MenuItem value="Clopidogrel">Clopidogrel</MenuItem>
            <MenuItem value="Warfarin">Warfarin</MenuItem>
            <MenuItem value="Dabigatran">Dabigatran</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Rehabilitation Goals */}
      <Card className="management-card">
        <CardHeader title="Set Rehabilitation Goals" />
        <CardContent>
          <TextField
            label="Enter Rehabilitation Goals"
            value={rehabilitationGoals}
            onChange={(e) => setRehabilitationGoals(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleRehabilitationGoalsSubmit}
            variant="contained"
            color="primary"
            startIcon={<FaRegHospital />}
            className="mt-4"
          >
            Submit Goals
          </Button>
          <Typography variant="body2" className="mt-4">
            Setting clear rehabilitation goals is essential for recovery and overall well-being.
          </Typography>
        </CardContent>
      </Card>

      {/* Emergency Plan */}
      <Card className="management-card">
        <CardHeader title="Emergency Plan" />
        <CardContent>
          <TextField
            label="Enter Emergency Plan Details"
            value={emergencyPlan}
            onChange={(e) => setEmergencyPlan(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleEmergencyPlanUpdate}
            variant="contained"
            color="primary"
            startIcon={<FaFileMedicalAlt />}
            className="mt-4"
          >
            Update Emergency Plan
          </Button>
          <Typography variant="body2" className="mt-4">
            Having an emergency plan is crucial for timely intervention in case of stroke symptoms.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrokeManagement;
