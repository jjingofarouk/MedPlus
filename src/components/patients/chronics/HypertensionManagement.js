import React, { useState } from "react";
import { Button, TextField, Select, MenuItem, Typography, Card, CardContent, CardHeader } from "@material-ui/core";
import { FaHeartbeat, FaWalking, FaMedkit, FaChartLine } from "react-icons/fa";
import useNotifications from "../hooks/useNotifications";

const HypertensionManagement = () => {
  const [bloodPressure, setBloodPressure] = useState({ systolic: "", diastolic: "" });
  const [medications, setMedications] = useState([]);
  const [lifestyleFactors, setLifestyleFactors] = useState("");
  const [devices, setDevices] = useState([]);
  const [diet, setDiet] = useState("");
  const { notify } = useNotifications();

  const handleBloodPressureLog = () => {
    // API call to log blood pressure
    notify("Blood Pressure Logged", `Systolic: ${bloodPressure.systolic}, Diastolic: ${bloodPressure.diastolic}`);
  };

  const handleMedicationLog = (event) => {
    const medication = event.target.value;
    setMedications([...medications, medication]);
    // API call to log medication
    notify("Medication Added", `${medication} has been logged.`);
  };

  const handleDeviceIntegration = (event) => {
    const device = event.target.value;
    setDevices([...devices, device]);
    // API call to integrate medical device
    notify("Device Integrated", `${device} has been integrated.`);
  };

  const handleLifestyleLog = () => {
    // API call to log lifestyle recommendations
    notify("Lifestyle Factor Logged", "Your lifestyle recommendations have been updated.");
  };

  const handleDietaryRecommendationLog = () => {
    // API call to log dietary recommendation
    notify("Dietary Recommendations Logged", "Your dietary recommendations have been updated.");
  };

  return (
    <Card>
      <CardHeader
        avatar={<FaHeartbeat size={24} />}
        title="Hypertension Management"
        subheader="Latest Evidence-Based Protocols"
      />
      <CardContent>
        <Typography variant="h6">Log Blood Pressure</Typography>
        <div className="bp-inputs">
          <TextField
            label="Systolic (mmHg)"
            value={bloodPressure.systolic}
            onChange={(e) => setBloodPressure({ ...bloodPressure, systolic: e.target.value })}
            fullWidth
          />
          <TextField
            label="Diastolic (mmHg)"
            value={bloodPressure.diastolic}
            onChange={(e) => setBloodPressure({ ...bloodPressure, diastolic: e.target.value })}
            fullWidth
            className="mt-2"
          />
          <Button onClick={handleBloodPressureLog} variant="contained" color="primary" className="mt-4">
            Log Blood Pressure
          </Button>
        </div>

        <Typography variant="h6" className="mt-4">Medications</Typography>
        <Select value={medications} onChange={handleMedicationLog} fullWidth>
          <MenuItem value="Lisinopril">Lisinopril</MenuItem>
          <MenuItem value="Amlodipine">Amlodipine</MenuItem>
          <MenuItem value="Hydrochlorothiazide">Hydrochlorothiazide</MenuItem>
          <MenuItem value="Losartan">Losartan</MenuItem>
          <MenuItem value="Metoprolol">Metoprolol</MenuItem>
        </Select>
        <Button variant="contained" color="primary" className="mt-4">
          Add Medication
        </Button>

        <Typography variant="h6" className="mt-4">Lifestyle Modifications</Typography>
        <TextField
          label="Enter Lifestyle Changes (e.g., Exercise, Smoking Cessation)"
          value={lifestyleFactors}
          onChange={(e) => setLifestyleFactors(e.target.value)}
          fullWidth
        />
        <Button onClick={handleLifestyleLog} variant="contained" color="primary" className="mt-4">
          Log Lifestyle Changes
        </Button>

        <Typography variant="h6" className="mt-4">Medical Device Integration</Typography>
        <Select value={devices} onChange={handleDeviceIntegration} fullWidth>
          <MenuItem value="Omron Blood Pressure Monitor">Omron Blood Pressure Monitor</MenuItem>
          <MenuItem value="Withings BPM Connect">Withings BPM Connect</MenuItem>
        </Select>
        <Button variant="contained" color="primary" className="mt-4">
          Integrate Device
        </Button>

        <Typography variant="h6" className="mt-4">Dietary Recommendations</Typography>
        <TextField
          label="Enter Dietary Recommendations (e.g., DASH Diet)"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          fullWidth
        />
        <Button onClick={handleDietaryRecommendationLog} variant="contained" color="primary" className="mt-4">
          Log Dietary Recommendations
        </Button>

        <Typography variant="h6" className="mt-4">Follow-Up Scheduling</Typography>
        <Button variant="contained" color="primary" className="mt-2">
          Schedule Follow-Up
        </Button>

        <Typography variant="h6" className="mt-4">Generate Report</Typography>
        <Button variant="contained" color="primary" className="mt-2">
          Generate Hypertension Report
        </Button>
      </CardContent>
    </Card>
  );
};

export default HypertensionManagement;
