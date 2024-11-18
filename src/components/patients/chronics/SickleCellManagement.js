import React, { useState, useEffect } from "react";
import { Button, TextField, Select, MenuItem, Typography, Card, CardContent, CardHeader } from "@material-ui/core";
import { FaHeartbeat, FaSyringe, FaBandAid, FaMedkit, FaFileMedicalAlt, FaProcedures, FaThermometer, FaClinicMedical } from "react-icons/fa";
import useNotifications from "./hooks/useNotifications";

const SickleCellManagement = () => {
  const [medications, setMedications] = useState([]);
  const [painLevel, setPainLevel] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [hydrationLevel, setHydrationLevel] = useState("");
  const [actionPlan, setActionPlan] = useState("");
  const { notify } = useNotifications();

  useEffect(() => {
    // Fetch medications, pain management strategies, and other necessary data
  }, []);

  const handlePainLevelSelect = (event) => {
    const level = event.target.value;
    setPainLevel(level);
    // Notify user
    notify("Pain Level Selected", `You selected pain level ${level}`);
  };

  const handleSymptomLog = () => {
    // Log symptoms
    notify("Symptom Logged", "Your symptom has been logged successfully.");
  };

  const handleHydrationLog = () => {
    // Log hydration level
    notify("Hydration Level Logged", "Your hydration level has been logged.");
  };

  const handleActionPlanUpdate = () => {
    // Update personalized action plan
    notify("Action Plan Updated", "Your sickle cell action plan has been updated.");
  };

  return (
    <div className="sicklecell-management-container">
      <Typography variant="h4" gutterBottom>
        Sickle Cell Disease Management
      </Typography>

      {/* Pain Management */}
      <Card className="management-card">
        <CardHeader title="Pain Management" />
        <CardContent>
          <Typography variant="body1">
            Pain crises are a hallmark of SCD. Select your current pain level and manage it according to your personalized plan.
          </Typography>
          <Select
            value={painLevel}
            onChange={handlePainLevelSelect}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Mild">Mild</MenuItem>
            <MenuItem value="Moderate">Moderate</MenuItem>
            <MenuItem value="Severe">Severe</MenuItem>
          </Select>
          <Typography variant="body2" className="mt-4">
            Pain management options include:
          </Typography>
          <ul>
            <li>Hydration (oral or IV)</li>
            <li>Non-opioid analgesics (e.g., acetaminophen)</li>
            <li>Opioids for severe pain (e.g., morphine or hydromorphone)</li>
            <li>Non-pharmacological techniques (e.g., warm compresses, relaxation exercises)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Medication Management */}
      <Card className="management-card">
        <CardHeader title="Medication Management" />
        <CardContent>
          <Typography variant="body1">
            Managing SCD involves the use of medications to prevent complications and manage symptoms. Follow your medication schedule carefully.
          </Typography>
          <Select
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Hydroxyurea">Hydroxyurea (reduces pain crises)</MenuItem>
            <MenuItem value="Penicillin">Penicillin (for infection prevention)</MenuItem>
            <MenuItem value="Folic Acid">Folic Acid (supports red blood cell production)</MenuItem>
            <MenuItem value="Crizanlizumab">Crizanlizumab (reduces vaso-occlusive crises)</MenuItem>
            <MenuItem value="L-glutamine">L-glutamine (reduces oxidative stress)</MenuItem>
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
            startIcon={<FaHeartbeat />}
            className="mt-4"
          >
            Log Symptom
          </Button>
        </CardContent>
      </Card>

      {/* Hydration Logging */}
      <Card className="management-card">
        <CardHeader title="Hydration Tracking" />
        <CardContent>
          <Typography variant="body1">
            Proper hydration is essential in SCD to prevent pain crises. Log your daily water intake.
          </Typography>
          <TextField
            label="Enter Hydration Level (Liters)"
            value={hydrationLevel}
            onChange={(e) => setHydrationLevel(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            onClick={handleHydrationLog}
            variant="contained"
            color="primary"
            startIcon={<FaThermometer />}
            className="mt-4"
          >
            Log Hydration
          </Button>
        </CardContent>
      </Card>

      {/* Personalized Action Plan */}
      <Card className="management-card">
        <CardHeader title="SCD Action Plan" />
        <CardContent>
          <Typography variant="body1">
            Follow your personalized sickle cell action plan for managing crises, preventing infections, and staying healthy. Update it as necessary with your healthcare provider.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaProcedures />}
            onClick={handleActionPlanUpdate}
            className="mt-4"
          >
            Update Action Plan
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Protocols */}
      <Card className="management-card">
        <CardHeader title="Emergency Protocols" />
        <CardContent>
          <Typography variant="body1">
            If you experience severe pain, fever, or difficulty breathing, use emergency protocols and contact your healthcare provider immediately.
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

      {/* Infection Prevention */}
      <Card className="management-card">
        <CardHeader title="Infection Prevention" />
        <CardContent>
          <Typography variant="body1">
            People with SCD are at higher risk for infections. Follow recommended vaccination schedules (e.g., pneumococcal, meningococcal, flu vaccines) and take preventive antibiotics if prescribed.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaSyringe />}
            onClick={() => notify("Vaccination Reminder", "Ensure all vaccinations are up to date.")}
          >
            Vaccination Reminder
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SickleCellManagement;
