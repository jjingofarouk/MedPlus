import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

// Pediatric Glasgow Coma Scale Calculator
const PediatricGCS = () => {
  const [eye, setEye] = useState(0);
  const [verbal, setVerbal] = useState(0);
  const [motor, setMotor] = useState(0);
  const [totalGCS, setTotalGCS] = useState(0);

  const calculateGCS = () => {
    const total = parseInt(eye) + parseInt(verbal) + parseInt(motor);
    setTotalGCS(total);
  };

  return (
    <Card>
      <CardHeader title="Pediatric Glasgow Coma Scale Calculator" />
      <CardContent>
        <TextField
          label="Eye Opening (1-4)"
          type="number"
          value={eye}
          onChange={(e) => setEye(e.target.value)}
        />
        <TextField
          label="Verbal Response (1-5)"
          type="number"
          value={verbal}
          onChange={(e) => setVerbal(e.target.value)}
        />
        <TextField
          label="Motor Response (1-6)"
          type="number"
          value={motor}
          onChange={(e) => setMotor(e.target.value)}
        />
        <Button onClick={calculateGCS}>Calculate GCS</Button>
        <Typography variant="h6">Total GCS: {totalGCS}</Typography>
      </CardContent>
    </Card>
  );
};

// Pediatric Early Warning Score (PEWS) Calculator
const PediatricPEWS = () => {
  const [scores, setScores] = useState({
    behavior: 0,
    cardiovascular: 0,
    respiratory: 0,
    temperature: 0,
    hydration: 0,
  });
  const [totalScore, setTotalScore] = useState(0);

  const calculatePEWS = () => {
    const total = Object.values(scores).reduce((acc, val) => acc + (parseInt(val) || 0), 0);
    setTotalScore(total);
  };

  return (
    <Card>
      <CardHeader title="Pediatric Early Warning Score (PEWS)" />
      <CardContent>
        {Object.keys(scores).map((key) => (
          <TextField
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            type="number"
            value={scores[key]}
            onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
          />
        ))}
        <Button onClick={calculatePEWS}>Calculate PEWS</Button>
        <Typography variant="h6">Total PEWS Score: {totalScore}</Typography>
      </CardContent>
    </Card>
  );
};

// Pediatric Risk of Mortality (PRISM) Calculator
const PediatricPRISM = () => {
  const [scores, setScores] = useState({
    age: 0,
    heartRate: 0,
    respiratoryRate: 0,
    temperature: 0,
    systolicBP: 0,
    // Add other relevant fields here...
  });
  const [totalScore, setTotalScore] = useState(0);

  const calculatePRISM = () => {
    // Placeholder for actual PRISM calculation logic
    const total = Object.values(scores).reduce((acc, val) => acc + (parseInt(val) || 0), 0);
    setTotalScore(total);
  };

  return (
    <Card>
      <CardHeader title="Pediatric Risk of Mortality (PRISM)" />
      <CardContent>
        {Object.keys(scores).map((key) => (
          <TextField
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            type="number"
            value={scores[key]}
            onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
          />
        ))}
        <Button onClick={calculatePRISM}>Calculate PRISM</Button>
        <Typography variant="h6">Total PRISM Score: {totalScore}</Typography>
      </CardContent>
    </Card>
  );
};

// APGAR Score Calculator
const APGARScore = () => {
  const [scores, setScores] = useState({
    appearance: 0,
    pulse: 0,
    grimace: 0,
    activity: 0,
    respiration: 0,
  });
  const [totalScore, setTotalScore] = useState(0);

  const calculateAPGAR = () => {
    const total = Object.values(scores).reduce((acc, val) => acc + (parseInt(val) || 0), 0);
    setTotalScore(total);
  };

  return (
    <Card>
      <CardHeader title="APGAR Score Calculator" />
      <CardContent>
        {Object.keys(scores).map((key) => (
          <TextField
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            type="number"
            value={scores[key]}
            onChange={(e) => setScores({ ...scores, [key]: e.target.value })}
          />
        ))}
        <Button onClick={calculateAPGAR}>Calculate APGAR</Button>
        <Typography variant="h6">Total APGAR Score: {totalScore}</Typography>
      </CardContent>
    </Card>
  );
};

// Fever Management Algorithm
const FeverManagement = () => {
  return (
    <Card>
      <CardHeader title="Fever Management Algorithm" />
      <CardContent>
        <Typography variant="body1">
          <strong>Fever Management Steps:</strong>
        </Typography>
        <Typography variant="body2">
          1. Assess the child’s temperature and symptoms.
        </Typography>
        <Typography variant="body2">
          2. Administer appropriate antipyretics based on age.
        </Typography>
        <Typography variant="body2">
          3. Monitor the child’s temperature regularly.
        </Typography>
        <Typography variant="body2">
          4. Ensure the child is hydrated and comfortable.
        </Typography>
      </CardContent>
    </Card>
  );
};

// Neonatal Hyperbilirubinemia Risk Calculator
const NeonatalHyperbilirubinemiaRisk = () => {
  const [riskFactors, setRiskFactors] = useState({
    gestationalAge: 0,
    birthWeight: 0,
    hemolysis: 0,
  });
  const [riskScore, setRiskScore] = useState(0);

  const calculateRisk = () => {
    // Placeholder for actual risk calculation logic
    const total = Object.values(riskFactors).reduce((acc, val) => acc + (parseInt(val) || 0), 0);
    setRiskScore(total);
  };

  return (
    <Card>
      <CardHeader title="Neonatal Hyperbilirubinemia Risk Calculator" />
      <CardContent>
        {Object.keys(riskFactors).map((key) => (
          <TextField
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            type="number"
            value={riskFactors[key]}
            onChange={(e) => setRiskFactors({ ...riskFactors, [key]: e.target.value })}
          />
        ))}
        <Button onClick={calculateRisk}>Calculate Risk</Button>
        <Typography variant="h6">Risk Score: {riskScore}</Typography>
      </CardContent>
    </Card>
  );
};

// Pediatric Pain Assessment Scale
const PediatricPainAssessment = () => {
  const [painScore, setPainScore] = useState(0);

  return (
    <Card>
      <CardHeader title="Pediatric Pain Assessment Scale" />
      <CardContent>
        <TextField
          label="Pain Score (0-10)"
          type="number"
          value={painScore}
          onChange={(e) => setPainScore(e.target.value)}
        />
        <Typography variant="h6">
          {painScore < 4 ? "Mild Pain" : painScore < 7 ? "Moderate Pain" : "Severe Pain"}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Respiratory Distress Assessment in Infants
const RespiratoryDistressAssessment = () => {
  const [symptoms, setSymptoms] = useState({
    nasalFlare: false,
    grunting: false,
    retractions: false,
    breathingRate: 0,
  });

  const assessDistress = () => {
    const distress = symptoms.nasalFlare || symptoms.grunting || symptoms.retractions || symptoms.breathingRate > 60;
    return distress ? "Respiratory Distress Detected" : "No Respiratory Distress";
  };

  return (
    <Card>
      <CardHeader title="Respiratory Distress Assessment in Infants" />
      <CardContent>
        <TextField
          label="Breathing Rate"
          type="number"
          value={symptoms.breathingRate}
          onChange={(e) => setSymptoms({ ...symptoms, breathingRate: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            checked={symptoms.nasalFlare}
            onChange={(e) => setSymptoms({ ...symptoms, nasalFlare: e.target.checked })}
          />
          Nasal Flare
        </label>
        <label>
          <input
            type="checkbox"
            checked={symptoms.grunting}
            onChange={(e) => setSymptoms({ ...symptoms, grunting: e.target.checked })}
          />
          Grunting
        </label>
        <label>
          <input
            type="checkbox"
            checked={symptoms.retractions}
            onChange={(e) => setSymptoms({ ...symptoms, retractions: e.target.checked })}
          />
          Retractions
        </label>
        <Typography variant="h6">{assessDistress()}</Typography>
      </CardContent>
    </Card>
  );
};

// PediatricCalculator Component
const PediatricsCalculator = () => {
  return (
    <div>
      <PediatricGCS />
      <PediatricPEWS />
      <PediatricPRISM />
      <APGARScore />
      <FeverManagement />
      <NeonatalHyperbilirubinemiaRisk />
      <PediatricPainAssessment />
      <RespiratoryDistressAssessment />
    </div>
  );
};

export default PediatricsCalculator;
