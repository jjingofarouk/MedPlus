import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

// FRAX Fracture Risk Assessment
const FRAXCalculator = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [bmd, setBMD] = useState(0);
  const [fractureRisk, setFractureRisk] = useState(null);

  const calculateFRAX = () => {
    // Example logic for FRAX calculation (mockup)
    let risk = (age + (gender === "female" ? 10 : 0) + bmd) / 100; // Simplified logic
    setFractureRisk((risk * 100).toFixed(2) + "%");
  };

  return (
    <Card>
      <CardHeader title="FRAX® Fracture Risk Assessment" />
      <CardContent>
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox checked={gender === "female"} onChange={() => setGender(gender === "female" ? "male" : "female")} />}
          label="Female"
        />
        <TextField
          label="BMD (g/cm²)"
          type="number"
          value={bmd}
          onChange={(e) => setBMD(e.target.value)}
        />
        <Button variant="contained" onClick={calculateFRAX}>
          Calculate Risk
        </Button>
        {fractureRisk && <Typography>Fracture Risk: {fractureRisk}</Typography>}
      </CardContent>
    </Card>
  );
};

// Wells' Criteria for DVT
const WellsCriteriaCalculator = () => {
  const [symptoms, setSymptoms] = useState({
    activeCancer: false,
    paralysis: false,
    recentlyBedridden: false,
    localizedTenderness: false,
    swelling: false,
    alternativeDiagnosis: false,
  });

  const calculateWells = () => {
    const score =
      (symptoms.activeCancer ? 1 : 0) +
      (symptoms.paralysis ? 1 : 0) +
      (symptoms.recentlyBedridden ? 1 : 0) +
      (symptoms.localizedTenderness ? 1 : 0) +
      (symptoms.swelling ? 1 : 0) -
      (symptoms.alternativeDiagnosis ? 2 : 0);
    return score;
  };

  return (
    <Card>
      <CardHeader title="Wells' Criteria for DVT" />
      <CardContent>
        {Object.keys(symptoms).map((symptom) => (
          <FormControlLabel
            key={symptom}
            control={
              <Checkbox
                checked={symptoms[symptom]}
                onChange={(e) => setSymptoms({ ...symptoms, [symptom]: e.target.checked })}
              />
            }
            label={symptom.replace(/([A-Z])/g, " $1")}
          />
        ))}
        <Button variant="contained" onClick={() => alert(`Wells Score: ${calculateWells()}`)}>
          Calculate Wells Score
        </Button>
      </CardContent>
    </Card>
  );
};

// Oswestry Disability Index
const OswestryDisabilityIndex = () => {
  const [answers, setAnswers] = useState(Array(10).fill(0));

  const calculateOswestry = () => {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    return (totalScore / 50) * 100; // Scale to percentage
  };

  return (
    <Card>
      <CardHeader title="Oswestry Disability Index" />
      <CardContent>
        {answers.map((_, index) => (
          <TextField
            key={index}
            label={`Question ${index + 1} Score (0-5)`}
            type="number"
            value={answers[index]}
            onChange={(e) => {
              const newAnswers = [...answers];
              newAnswers[index] = Number(e.target.value);
              setAnswers(newAnswers);
            }}
            inputProps={{ min: 0, max: 5 }}
          />
        ))}
        <Button variant="contained" onClick={() => alert(`Oswestry Score: ${calculateOswestry()}%`)}>
          Calculate Oswestry Score
        </Button>
      </CardContent>
    </Card>
  );
};

// Harris Hip Score
const HarrisHipScore = () => {
    const [pain, setPain] = useState(0);
    const [functionScore, setFunctionScore] = useState(0);
    const [rangeOfMotion, setRangeOfMotion] = useState(0);
    const [totalScore, setTotalScore] = useState(null); // State to hold the total score
  
    const calculateHarrisHipScore = () => {
      // Calculate the score based on input values
      const score = pain + functionScore + rangeOfMotion; // Example calculation
      setTotalScore(score); // Update the total score state
    };
  
    return (
      <Card>
        <CardHeader title="Harris Hip Score" />
        <CardContent>
          <TextField
            label="Pain (0-44)"
            type="number"
            value={pain}
            onChange={(e) => setPain(Number(e.target.value))}
            inputProps={{ min: 0, max: 44 }}
          />
          <TextField
            label="Function (0-47)"
            type="number"
            value={functionScore}
            onChange={(e) => setFunctionScore(Number(e.target.value))}
            inputProps={{ min: 0, max: 47 }}
          />
          <TextField
            label="Range of Motion (0-5)"
            type="number"
            value={rangeOfMotion}
            onChange={(e) => setRangeOfMotion(Number(e.target.value))}
            inputProps={{ min: 0, max: 5 }}
          />
          <Button variant="contained" onClick={calculateHarrisHipScore}>
            Calculate Harris Hip Score
          </Button>
  
          {totalScore !== null && (
            <Typography style={{ marginTop: "16px" }}>
              Harris Hip Score: {totalScore}
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  };

// Osteoporosis Risk Assessment Calculator
const OsteoporosisRiskCalculator = () => {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [familyHistory, setFamilyHistory] = useState(false);
  const [historyOfFractures, setHistoryOfFractures] = useState(false);

  const calculateOsteoporosisRisk = () => {
    let risk = age / 10 + (gender === "female" ? 1 : 0) + (familyHistory ? 1 : 0) + (historyOfFractures ? 1 : 0);
    return risk; // Mock risk score
  };

  return (
    <Card>
      <CardHeader title="Osteoporosis Risk Assessment" />
      <CardContent>
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox checked={familyHistory} onChange={() => setFamilyHistory(!familyHistory)} />}
          label="Family History of Osteoporosis"
        />
        <FormControlLabel
          control={<Checkbox checked={historyOfFractures} onChange={() => setHistoryOfFractures(!historyOfFractures)} />}
          label="Personal History of Fractures"
        />
        <Button variant="contained" onClick={() => alert(`Osteoporosis Risk: ${calculateOsteoporosisRisk()}`)}>
          Calculate Osteoporosis Risk
        </Button>
      </CardContent>
    </Card>
  );
};

// Western Ontario and McMaster Universities Osteoarthritis Index (WOMAC)
const WOMACCalculator = () => {
  const [scores, setScores] = useState(Array(24).fill(0));

  const calculateWOMAC = () => {
    const totalScore = scores.reduce((a, b) => a + b, 0);
    return (totalScore / 120) * 100; // Scale to percentage
  };

  return (
    <Card>
      <CardHeader title="WOMAC Index" />
      <CardContent>
        {scores.map((_, index) => (
          <TextField
            key={index}
            label={`Question ${index + 1} Score (0-4)`}
            type="number"
            value={scores[index]}
            onChange={(e) => {
              const newScores = [...scores];
              newScores[index] = Number(e.target.value);
              setScores(newScores);
            }}
            inputProps={{ min: 0, max: 4 }}
          />
        ))}
        <Button variant="contained" onClick={() => alert(`WOMAC Score: ${calculateWOMAC()}%`)}>
          Calculate WOMAC Score
        </Button>
      </CardContent>
    </Card>
  );
};

// Joint Replacement Risk Calculator
const JointReplacementRiskCalculator = () => {
  const [age, setAge] = useState(0);
  const [comorbidities, setComorbidities] = useState(0);
  const [previousSurgeries, setPreviousSurgeries] = useState(0);

  const calculateJointReplacementRisk = () => {
    const risk = (age + comorbidities + previousSurgeries) / 10; // Mock risk assessment
    return risk * 100; // Return percentage
  };

  return (
    <Card>
      <CardHeader title="Joint Replacement Risk Calculator" />
      <CardContent>
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          label="Comorbidities (count)"
          type="number"
          value={comorbidities}
          onChange={(e) => setComorbidities(e.target.value)}
        />
        <TextField
          label="Previous Surgeries (count)"
          type="number"
          value={previousSurgeries}
          onChange={(e) => setPreviousSurgeries(e.target.value)}
        />
        <Button variant="contained" onClick={() => alert(`Joint Replacement Risk: ${calculateJointReplacementRisk()}%`)}>
          Calculate Risk
        </Button>
      </CardContent>
    </Card>
  );
};

// Constant-Murley Shoulder Score
const ConstantMurleyScore = () => {
  const [pain, setPain] = useState(0);
  const [functionScore, setFunctionScore] = useState(0);
  const [activeMotion, setActiveMotion] = useState(0);

  const calculateConstantMurleyScore = () => {
    const totalScore = pain + functionScore + activeMotion; // Mock calculation
    return totalScore;
  };

  return (
    <Card>
      <CardHeader title="Constant-Murley Shoulder Score" />
      <CardContent>
        <TextField
          label="Pain Score (0-15)"
          type="number"
          value={pain}
          onChange={(e) => setPain(Number(e.target.value))}
          inputProps={{ min: 0, max: 15 }}
        />
        <TextField
          label="Function Score (0-35)"
          type="number"
          value={functionScore}
          onChange={(e) => setFunctionScore(Number(e.target.value))}
          inputProps={{ min: 0, max: 35 }}
        />
        <TextField
          label="Active Motion Score (0-20)"
          type="number"
          value={activeMotion}
          onChange={(e) => setActiveMotion(Number(e.target.value))}
          inputProps={{ min: 0, max: 20 }}
        />
        <Button variant="contained" onClick={() => alert(`Constant-Murley Score: ${calculateConstantMurleyScore()}`)}>
          Calculate Score
        </Button>
      </CardContent>
    </Card>
  );
};

// Main Orthopedics Calculators Component
const OrthopedicsCalculators = () => {
  return (
    <div>
      <FRAXCalculator />
      <WellsCriteriaCalculator />
      <OswestryDisabilityIndex />
      <HarrisHipScore />
      <OsteoporosisRiskCalculator />
      <WOMACCalculator />
      <JointReplacementRiskCalculator />
      <ConstantMurleyScore />
      {/* Add other calculators here */}
    </div>
  );
};

export default OrthopedicsCalculators;
