import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Typography,
} from "@mui/material";

// Prothrombin Time (PT) Calculator
const PTCalculator = () => {
  const [pt, setPT] = useState("");
  const [result, setResult] = useState(null);

  const calculatePT = () => {
    const ptValue = parseFloat(pt);
    if (!isNaN(ptValue)) {
      setResult(ptValue); // Simplified, just returns input
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <Card>
      <CardHeader title="Prothrombin Time (PT) Calculator" />
      <CardContent>
        <TextField
          label="PT (seconds)"
          value={pt}
          onChange={(e) => setPT(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={calculatePT}>
          Calculate
        </Button>
        {result && <Typography>Result: {result} seconds</Typography>}
      </CardContent>
    </Card>
  );
};

// Activated Partial Thromboplastin Time (APTT) Calculator
const APTTCalculator = () => {
  const [APTT, setAPTT] = useState("");
  const [result, setResult] = useState(null);

  const calculateAPTT = () => {
    const APTTValue = parseFloat(APTT);
    if (!isNaN(APTTValue)) {
      setResult(APTTValue); // Simplified, just returns input
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <Card>
      <CardHeader title="Activated Partial Thromboplastin Time (APTT) Calculator" />
      <CardContent>
        <TextField
          label="APTT (seconds)"
          value={APTT}
          onChange={(e) => setAPTT(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={calculateAPTT}>
          Calculate
        </Button>
        {result && <Typography>Result: {result} seconds</Typography>}
      </CardContent>
    </Card>
  );
};

// International Normalized Ratio (INR) Calculator
const INRCalculator = () => {
  const [pt, setPT] = useState("");
  const [controlPT, setControlPT] = useState("");
  const [result, setResult] = useState(null);

  const calculateINR = () => {
    const ptValue = parseFloat(pt);
    const controlPTValue = parseFloat(controlPT);
    if (!isNaN(ptValue) && !isNaN(controlPTValue) && controlPTValue > 0) {
      const inr = (ptValue / controlPTValue) ** 2; // Example calculation
      setResult(inr.toFixed(2)); // Rounded to 2 decimal places
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <Card>
      <CardHeader title="International Normalized Ratio (INR) Calculator" />
      <CardContent>
        <TextField
          label="PT (seconds)"
          value={pt}
          onChange={(e) => setPT(e.target.value)}
          type="number"
        />
        <TextField
          label="Control PT (seconds)"
          value={controlPT}
          onChange={(e) => setControlPT(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={calculateINR}>
          Calculate
        </Button>
        {result && <Typography>Result: {result}</Typography>}
      </CardContent>
    </Card>
  );
};

// Coagulation Profile Calculator
const CoagulationProfileCalculator = () => {
  const [pt, setPT] = useState("");
  const [APTT, setAPTT] = useState("");
  const [inr, setINR] = useState("");
  const [result, setResult] = useState(null);

  const calculateProfile = () => {
    const ptValue = parseFloat(pt);
    const APTTValue = parseFloat(APTT);
    const inrValue = parseFloat(inr);

    if (!isNaN(ptValue) && !isNaN(APTTValue) && !isNaN(inrValue)) {
      const profile = {
        PT: ptValue,
        APTT: APTTValue,
        INR: inrValue,
      };
      setResult(profile);
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <Card>
      <CardHeader title="Coagulation Profile Calculator" />
      <CardContent>
        <TextField
          label="PT (seconds)"
          value={pt}
          onChange={(e) => setPT(e.target.value)}
          type="number"
        />
        <TextField
          label="APTT (seconds)"
          value={APTT}
          onChange={(e) => setAPTT(e.target.value)}
          type="number"
        />
        <TextField
          label="INR"
          value={inr}
          onChange={(e) => setINR(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={calculateProfile}>
          Calculate
        </Button>
        {result && (
          <Typography>
            Result: PT: {result.PT} seconds, APTT: {result.APTT} seconds, INR: {result.INR}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

// Sickle Cell Disease Severity Score
const SickleCellSeverityScore = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  const calculateScore = () => {
    // Mock calculation based on various factors
    const severity = score * 2; // Simplified logic
    setResult(severity);
  };

  return (
    <Card>
      <CardHeader title="Sickle Cell Disease Severity Score" />
      <CardContent>
        <TextField
          label="Enter Score (0-10)"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          type="number"
          inputProps={{ min: 0, max: 10 }}
        />
        <Button variant="contained" onClick={calculateScore}>
          Calculate Severity Score
        </Button>
        {result !== null && <Typography>Severity Score: {result}</Typography>}
      </CardContent>
    </Card>
  );
};

// Anemia Classification Score
const AnemiaClassificationScore = () => {
  const [hemoglobin, setHemoglobin] = useState("");
  const [classification, setClassification] = useState("");

  const classifyAnemia = () => {
    const hbValue = parseFloat(hemoglobin);
    if (!isNaN(hbValue) && hbValue > 0) {
      if (hbValue < 13.5) {
        setClassification("Anemia");
      } else {
        setClassification("Normal");
      }
    } else {
      setClassification("Invalid input");
    }
  };

  return (
    <Card>
      <CardHeader title="Anemia Classification Score" />
      <CardContent>
        <TextField
          label="Hemoglobin (g/dL)"
          value={hemoglobin}
          onChange={(e) => setHemoglobin(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={classifyAnemia}>
          Classify Anemia
        </Button>
        {classification && <Typography>Classification: {classification}</Typography>}
      </CardContent>
    </Card>
  );
};

// Iron Deficiency Anemia Calculator
const IronDeficiencyAnemiaCalculator = () => {
  const [ferritin, setFerritin] = useState("");
  const [result, setResult] = useState(null);

  const calculateIronDeficiency = () => {
    const ferritinValue = parseFloat(ferritin);
    if (!isNaN(ferritinValue)) {
      if (ferritinValue < 30) {
        setResult("Iron Deficiency Anemia");
      } else {
        setResult("Normal Ferritin Levels");
      }
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <Card>
      <CardHeader title="Iron Deficiency Anemia Calculator" />
      <CardContent>
        <TextField
          label="Ferritin (ng/mL)"
          value={ferritin}
          onChange={(e) => setFerritin(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={calculateIronDeficiency}>
          Check Iron Deficiency
        </Button>
        {result && <Typography>Result: {result}</Typography>}
      </CardContent>
    </Card>
  );
};

// Myeloproliferative Neoplasm Risk Score
const MyeloproliferativeNeoplasmRiskScore = () => {
  const [age, setAge] = useState("");
  const [platelets, setPlatelets] = useState("");
  const [result, setResult] = useState(null);

  const calculateRisk = () => {
    const ageValue = parseInt(age);
    const plateletsValue = parseInt(platelets);
    if (!isNaN(ageValue) && !isNaN(plateletsValue)) {
      const risk = (ageValue + plateletsValue) / 10; // Mock risk assessment
      setResult(risk.toFixed(2)); // Return mock risk percentage
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <Card>
      <CardHeader title="Myeloproliferative Neoplasm Risk Score" />
      <CardContent>
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        />
        <TextField
          label="Platelets (x10^9/L)"
          value={platelets}
          onChange={(e) => setPlatelets(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={calculateRisk}>
          Calculate Risk
        </Button>
        {result && <Typography>Risk Score: {result}</Typography>}
      </CardContent>
    </Card>
  );
};

// D-dimer Calculator
const DdimerCalculator = () => {
  const [ddimer, setDdimer] = useState("");
  const [result, setResult] = useState(null);

  const calculateDdimer = () => {
    const dDimerValue = parseFloat(ddimer);
    if (!isNaN(dDimerValue)) {
      setResult(dDimerValue); // Mock logic, just returns input
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <Card>
      <CardHeader title="D-dimer Calculator" />
      <CardContent>
        <TextField
          label="D-dimer (ng/mL)"
          value={ddimer}
          onChange={(e) => setDdimer(e.target.value)}
          type="number"
        />
        <Button variant="contained" onClick={calculateDdimer}>
          Calculate
        </Button>
        {result && <Typography>Result: {result} ng/mL</Typography>}
      </CardContent>
    </Card>
  );
};

// Main Hematology Calculators Component
const HematologyCalculators = () => {
  return (
    <div>
      <PTCalculator />
      <APTTCalculator />
      <INRCalculator />
      <CoagulationProfileCalculator />
      <SickleCellSeverityScore />
      <AnemiaClassificationScore />
      <IronDeficiencyAnemiaCalculator />
      <MyeloproliferativeNeoplasmRiskScore />
      <DdimerCalculator />
    </div>
  );
};

export default HematologyCalculators;
