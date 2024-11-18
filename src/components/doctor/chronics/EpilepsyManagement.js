import React, { useState, useEffect } from "react";
import { Button, TextField, Select, MenuItem, Typography, Card, CardContent, CardHeader } from "@material-ui/core";
import { FaBrain, FaNotesMedical, FaClock, FaFileMedicalAlt, FaStethoscope } from "react-icons/fa";
import useNotifications from "./hooks/useNotifications";

const EpilepsyManagement = () => {
  const [seizureType, setSeizureType] = useState("");
  const [seizureLog, setSeizureLog] = useState("");
  const [medications, setMedications] = useState([]);
  const [medicationAdherence, setMedicationAdherence] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [emergencyPlan, setEmergencyPlan] = useState("");
  const { notify } = useNotifications();

  useEffect(() => {
    // Fetch medications and guidelines for epilepsy management
  }, []);

  const handleSeizureTypeSelect = (event) => {
    const selectedType = event.target.value;
    setSeizureType(selectedType);
    notify("Seizure Type Selected", `You selected seizure type: ${selectedType}`);
  };

  const handleSeizureLog = () => {
    // Log seizure details
    notify("Seizure Logged", "Your seizure has been logged successfully.");
  };

  const handleMedicationAdherenceLog = () => {
    // Log medication adherence
    notify("Adherence Logged", "Your medication adherence has been logged.");
  };

  const handleAppointmentSchedule = () => {
    // Schedule appointment
    notify("Appointment Scheduled", `Your appointment is scheduled for ${appointmentDate}`);
  };

  const handleEmergencyPlanUpdate = () => {
    // Update emergency plan
    notify("Emergency Plan Updated", "Your emergency plan has been updated.");
  };

  return (
    <div className="epilepsy-management-container">
      <Typography variant="h4" gutterBottom>
        Epilepsy Management
      </Typography>

      {/* Seizure Type Selection */}
      <Card className="management-card">
        <CardHeader title="Select Seizure Type" />
        <CardContent>
          <Select
            value={seizureType}
            onChange={handleSeizureTypeSelect}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Focal Seizure">Focal Seizure</MenuItem>
            <MenuItem value="Generalized Seizure">Generalized Seizure</MenuItem>
            <MenuItem value="Unknown Onset">Unknown Onset Seizure</MenuItem>
          </Select>
          <Typography variant="body2" className="mt-4">
            Identifying seizure types is essential for effective management and treatment planning.
          </Typography>
        </CardContent>
      </Card>

      {/* Seizure Logging */}
      <Card className="management-card">
        <CardHeader title="Log Seizures" />
        <CardContent>
          <TextField
            label="Enter Seizure Details"
            value={seizureLog}
            onChange={(e) => setSeizureLog(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleSeizureLog}
            variant="contained"
            color="primary"
            startIcon={<FaBrain />}
            className="mt-4"
          >
            Log Seizure
          </Button>
        </CardContent>
      </Card>

      {/* Medication Management */}
      <Card className="management-card">
        <CardHeader title="Medication Management" />
        <CardContent>
          <Typography variant="body1">
            Adherence to prescribed medications is crucial in managing epilepsy. Common medications include:
          </Typography>
          <ul>
            <li>Levetiracetam (Keppra)</li>
            <li>Lamotrigine (Lamictal)</li>
            <li>Valproate (Depakote)</li>
            <li>Carbamazepine (Tegretol)</li>
          </ul>
          <Select
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Levetiracetam">Levetiracetam</MenuItem>
            <MenuItem value="Lamotrigine">Lamotrigine</MenuItem>
            <MenuItem value="Valproate">Valproate</MenuItem>
            <MenuItem value="Carbamazepine">Carbamazepine</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Medication Adherence Tracking */}
      <Card className="management-card">
        <CardHeader title="Log Medication Adherence" />
        <CardContent>
          <TextField
            label="Enter Adherence Details"
            value={medicationAdherence}
            onChange={(e) => setMedicationAdherence(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleMedicationAdherenceLog}
            variant="contained"
            color="primary"
            startIcon={<FaNotesMedical />}
            className="mt-4"
          >
            Log Adherence
          </Button>
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
            startIcon={<FaClock />}
            className="mt-4"
          >
            Schedule Appointment
          </Button>
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
            Having an emergency plan is essential for safety during seizures. Ensure caregivers are aware of the plan.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default EpilepsyManagement;
