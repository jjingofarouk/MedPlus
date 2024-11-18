import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, TextField, Button } from '@material-ui/core';

// Component for the Cancer Staging Calculator
const CancerStagingCalculator = () => {
  const [stage, setStage] = useState('');

  return (
    <Card>
      <CardHeader title="Cancer Staging Calculator" />
      <CardContent>
        <TextField
          label="Enter Stage (I, II, III, IV)"
          value={stage}
          onChange={(e) => setStage(e.target.value)}
        />
        <Typography variant="h6">
          Stage: {stage}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Component for the Chemotherapy Dosing Calculator by Body Weight
const ChemotherapyDosingCalculator = () => {
  const [weight, setWeight] = useState('');
  const [dose, setDose] = useState('');

  const calculateDose = () => {
    // Assume a standard dose of 10 mg/kg for simplicity
    setDose(weight ? `${(weight * 10).toFixed(2)} mg` : 'Invalid weight');
  };

  return (
    <Card>
      <CardHeader title="Chemotherapy Dosing Calculator" />
      <CardContent>
        <TextField
          label="Enter Weight (kg)"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Button onClick={calculateDose}>Calculate Dose</Button>
        <Typography variant="h6">
          Dose: {dose}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Component for the Chemotherapy Toxicity Risk Calculator
const ChemotherapyToxicityRiskCalculator = () => {
  const [age, setAge] = useState('');
  const [risk, setRisk] = useState('');

  const calculateRisk = () => {
    if (age < 50) {
      setRisk('Low Risk');
    } else if (age >= 50 && age <= 70) {
      setRisk('Moderate Risk');
    } else {
      setRisk('High Risk');
    }
  };

  return (
    <Card>
      <CardHeader title="Chemotherapy Toxicity Risk Calculator" />
      <CardContent>
        <TextField
          label="Enter Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button onClick={calculateRisk}>Calculate Risk</Button>
        <Typography variant="h6">
          Risk Level: {risk}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Component for the Oncotype DX Score Calculator
const OncotypeDXScoreCalculator = () => {
  const [score, setScore] = useState('');

  const calculateScore = (value) => {
    setScore(value);
  };

  return (
    <Card>
      <CardHeader title="Oncotype DX Score Calculator" />
      <CardContent>
        <TextField
          label="Enter Recurrence Score"
          type="number"
          onChange={(e) => calculateScore(e.target.value)}
        />
        <Typography variant="h6">
          Oncotype DX Score: {score}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Main Oncology Calculator Component
const OncologyCalculator = () => {
  return (
    <div>
      <Typography variant="h4">Oncology Calculators</Typography>
      <CancerStagingCalculator />
      <ChemotherapyDosingCalculator />
      <ChemotherapyToxicityRiskCalculator />
      <OncotypeDXScoreCalculator />
      {/* You can add more calculators here */}
    </div>
  );
};

export default OncologyCalculator;
