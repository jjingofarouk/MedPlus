import React, { useState, useEffect } from "react";
import { Button, TextField, Select, MenuItem, Typography, Card, CardContent, CardHeader } from "@material-ui/core";
import { FaHeartbeat, FaStethoscope, FaWater, FaKidney, FaFileMedicalAlt, FaNotesMedical, FaCalendarAlt } from "react-icons/fa";
import useNotifications from "./hooks/useNotifications";

const CKDManagement = () => {
  const [stage, setStage] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [fluidIntake, setFluidIntake] = useState("");
  const [medications, setMedications] = useState([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const { notify } = useNotifications();

  useEffect(() => {
    // Fetch medications, dietary guidelines, and other necessary data
  }, []);

  const handleStageSelect = (event) => {
    const selectedStage = event.target.value;
    setStage(selectedStage);
    // Notify user
    notify("Stage Selected", `You selected CKD Stage: ${selectedStage}`);
  };

  const handleSymptomLog = () => {
    // Log symptoms
    notify("Symptom Logged", "Your symptom has been logged successfully.");
  };

  const handleFluidIntakeLog = () => {
    // Log fluid intake
    notify("Fluid Intake Logged", "Your fluid intake has been logged.");
  };

  const handleDietaryRestrictionUpdate = () => {
    // Update dietary restrictions
    notify("Dietary Restrictions Updated", "Your dietary restrictions have been updated.");
  };

  const handleAppointmentSchedule = () => {
    // Schedule appointment
    notify("Appointment Scheduled", `Your appointment is scheduled for ${appointmentDate}`);
  };

  return (
    <div className="ckd-management-container">
      <Typography variant="h4" gutterBottom>
        Chronic Kidney Disease (CKD) Management
      </Typography>

      {/* CKD Stage Selection */}
      <Card className="management-card">
        <CardHeader title="Select CKD Stage" />
        <CardContent>
          <Select
            value={stage}
            onChange={handleStageSelect}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Stage 1">Stage 1</MenuItem>
            <MenuItem value="Stage 2">Stage 2</MenuItem>
            <MenuItem value="Stage 3a">Stage 3a</MenuItem>
            <MenuItem value="Stage 3b">Stage 3b</MenuItem>
            <MenuItem value="Stage 4">Stage 4</MenuItem>
            <MenuItem value="Stage 5">Stage 5 (End-stage Kidney Disease)</MenuItem>
          </Select>
          <Typography variant="body2" className="mt-4">
            Management strategies vary by stage and may include lifestyle modifications, medication adherence, and regular monitoring.
          </Typography>
        </CardContent>
      </Card>

      {/* Symptom Logging */}
      <Card className="management-card">
        <CardHeader title="Log Symptoms" />
        <CardContent>
          <TextField
            label="Enter Symptoms"
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
            Log Symptoms
          </Button>
        </CardContent>
      </Card>

      {/* Fluid Intake Tracking */}
      <Card className="management-card">
        <CardHeader title="Fluid Intake Tracking" />
        <CardContent>
          <TextField
            label="Enter Fluid Intake (Liters)"
            value={fluidIntake}
            onChange={(e) => setFluidIntake(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleFluidIntakeLog}
            variant="contained"
            color="primary"
            startIcon={<FaWater />}
            className="mt-4"
          >
            Log Fluid Intake
          </Button>
          <Typography variant="body2" className="mt-4">
            Proper fluid intake is essential in CKD management. Be sure to follow your healthcare provider’s recommendations.
          </Typography>
        </CardContent>
      </Card>

      {/* Medication Management */}
      <Card className="management-card">
        <CardHeader title="Medication Management" />
        <CardContent>
          <Typography variant="body1">
            Adherence to prescribed medications is crucial in managing CKD. Common medications may include:
          </Typography>
          <ul>
            <li>ACE inhibitors or ARBs (for blood pressure control)</li>
            <li>Statins (for cholesterol management)</li>
            <li>Phosphate binders (to manage phosphorus levels)</li>
            <li>Erythropoiesis-stimulating agents (for anemia)</li>
          </ul>
          <Select
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Lisinopril">Lisinopril</MenuItem>
            <MenuItem value="Losartan">Losartan</MenuItem>
            <MenuItem value="Atorvastatin">Atorvastatin</MenuItem>
            <MenuItem value="Sevelamer">Sevelamer</MenuItem>
            <MenuItem value="Epoetin alfa">Epoetin alfa</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Dietary Restrictions */}
      <Card className="management-card">
        <CardHeader title="Dietary Restrictions" />
        <CardContent>
          <TextField
            label="Enter Dietary Restrictions"
            value={dietaryRestrictions}
            onChange={(e) => setDietaryRestrictions(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleDietaryRestrictionUpdate}
            variant="contained"
            color="primary"
            startIcon={<FaNotesMedical />}
            className="mt-4"
          >
            Update Dietary Restrictions
          </Button>
          <Typography variant="body2" className="mt-4">
            Common dietary considerations include:
            <ul>
              <li>Limiting sodium intake to help control blood pressure.</li>
              <li>Controlling protein intake based on kidney function.</li>
              <li>Managing potassium and phosphorus levels to prevent complications.</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>

      {/* Appointment Scheduling */}
      <Card className="management-card">
        <CardHeader title="Schedule Appointment" />
        <CardContent>
          <TextField
            type="date"
            label="Select Appointment Date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleAppointmentSchedule}
            variant="contained"
            color="primary"
            startIcon={<FaCalendarAlt />}
            className="mt-4"
          >
            Schedule Appointment
          </Button>
        </CardContent>
      </Card>

      {/* Patient Education */}
      <Card className="management-card">
        <CardHeader title="Patient Education" />
        <CardContent>
          <Typography variant="body1">
            Understanding CKD is crucial for effective management. Here are key points:
          </Typography>
          <ul>
            <li>CKD is a progressive disease; early detection and management are vital.</li>
            <li>Regular monitoring of kidney function and related parameters is essential.</li>
            <li>Involve a multidisciplinary team for comprehensive care.</li>
            <li>Stay informed about advances in CKD management and treatment options.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CKDManagement;
