import React, { useState } from "react";

const NephrologyCalculators = () => {
  return (
    <div className="nephrology-calculators">
      <h2>Nephrology Calculators</h2>
      <GFRCalculator />
      <CKDEpiCalculator />
      <CreatinineClearanceCalculator />
      <UrineProteinToCreatinineRatio />
      <ChronicKidneyDiseaseStageCalculator />
      <ElectrolyteImbalanceCalculator />
      <UricAcidCalculator />
      <HypertensiveNephropathyRiskScore />
      <KidneyStoneRiskAssessment />
      <NephroticSyndromeScore />
    </div>
  );
};

// GFR Calculator
const GFRCalculator = () => {
  const [creatinine, setCreatinine] = useState('');
  const [age, setAge] = useState('');
  const [gfr, setGfr] = useState(null);

  const calculateGFR = () => {
    // Basic logic using Cockcroft-Gault formula (not actual GFR calculation)
    const gfrValue = ((140 - age) * 1.23) / creatinine; // Simplified version
    setGfr(gfrValue.toFixed(2));
  };

  return (
    <div>
      <h3>GFR Calculator</h3>
      <input 
  type="number" 
  placeholder="Creatinine (mg/dL) - Reference: 0.6 - 1.2" 
  value={creatinine} 
  onChange={(e) => setCreatinine(e.target.value)} 
/>

      <input 
        type="number" 
        placeholder="Age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <button onClick={calculateGFR}>Calculate GFR</button>
      {gfr && <p>GFR: {gfr} mL/min</p>}
    </div>
  );
};

// CKD-EPI Calculator
const CKDEpiCalculator = () => {
  const [creatinine, setCreatinine] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [gfr, setGfr] = useState(null);

  const calculateCKDEpi = () => {
    // Placeholder for CKD-EPI calculation logic
    const gfrValue = (140 - age) / creatinine; // Simplified logic
    setGfr(gfrValue.toFixed(2));
  };

  return (
    <div>
      <h3>CKD-EPI Calculator</h3>
      <input 
  type="number" 
  placeholder="Creatinine (mg/dL) - Reference: 0.6 - 1.2" 
  value={creatinine} 
  onChange={(e) => setCreatinine(e.target.value)} 
/>

      <input 
        type="number" 
        placeholder="Age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateCKDEpi}>Calculate CKD-EPI</button>
      {gfr && <p>CKD-EPI GFR: {gfr} mL/min</p>}
    </div>
  );
};

// Creatinine Clearance Calculator
const CreatinineClearanceCalculator = () => {
  const [creatinine, setCreatinine] = useState('');
  const [age, setAge] = useState('');
  const [creatinineClearance, setCreatinineClearance] = useState(null);

  const calculateCreatinineClearance = () => {
    const clearance = ((140 - age) * 1.23) / creatinine; // Simplified formula
    setCreatinineClearance(clearance.toFixed(2));
  };

  return (
<div>
  <h3>Creatinine Clearance Calculator</h3>
  <input 
    type="number" 
    placeholder="Creatinine (mg/dL) - Reference: 0.6 - 1.2" 
    value={creatinine} 
    onChange={(e) => setCreatinine(e.target.value)} 
  />
  <input 
    type="number" 
    placeholder="Age (years) - Reference: 18+" 
    value={age} 
    onChange={(e) => setAge(e.target.value)} 
  />
  <button onClick={calculateCreatinineClearance}>Calculate Creatinine Clearance</button>
  {creatinineClearance && <p>Creatinine Clearance: {creatinineClearance} mL/min</p>}
</div>

  );
};

// Urine Protein-to-Creatinine Ratio Calculator
const UrineProteinToCreatinineRatio = () => {
  const [protein, setProtein] = useState('');
  const [creatinine, setCreatinine] = useState('');
  const [ratio, setRatio] = useState(null);

  const calculateRatio = () => {
    const ratioValue = protein / creatinine;
    setRatio(ratioValue.toFixed(2));
  };

  return (
<div>
  <h3>Urine Protein-to-Creatinine Ratio Calculator</h3>
  <input 
    type="number" 
    placeholder="Protein (mg/dL) - Reference: < 150" 
    value={protein} 
    onChange={(e) => setProtein(e.target.value)} 
  />
  <input 
    type="number" 
    placeholder="Creatinine (mg/dL) - Reference: 0.6 - 1.2" 
    value={creatinine} 
    onChange={(e) => setCreatinine(e.target.value)} 
  />
  <button onClick={calculateRatio}>Calculate Ratio</button>
  {ratio && <p>Protein-to-Creatinine Ratio: {ratio}</p>}
</div>

  );
};

// Chronic Kidney Disease Stage Calculator
const ChronicKidneyDiseaseStageCalculator = () => {
  const [gfr, setGfr] = useState('');
  const [stage, setStage] = useState(null);

  const determineCKDStage = () => {
    let stageValue;
    if (gfr >= 90) {
      stageValue = "Stage 1";
    } else if (gfr >= 60) {
      stageValue = "Stage 2";
    } else if (gfr >= 30) {
      stageValue = "Stage 3";
    } else if (gfr >= 15) {
      stageValue = "Stage 4";
    } else {
      stageValue = "Stage 5";
    }
    setStage(stageValue);
  };

  return (
    <div>
      <h3>Chronic Kidney Disease Stage Calculator</h3>
      <input 
  type="number" 
  placeholder="GFR (mL/min) - Reference: ≥ 90" 
  value={gfr} 
  onChange={(e) => setGfr(e.target.value)} 
/>

      <button onClick={determineCKDStage}>Determine CKD Stage</button>
      {stage && <p>CKD Stage: {stage}</p>}
    </div>
  );
};

// Electrolyte Imbalance Calculator
const ElectrolyteImbalanceCalculator = () => {
  const [sodium, setSodium] = useState('');
  const [potassium, setPotassium] = useState('');
  const [imbalance, setImbalance] = useState(null);

  const checkElectrolyteImbalance = () => {
    let result = "Normal";
    if (sodium < 135 || sodium > 145) {
      result = "Sodium Imbalance";
    } else if (potassium < 3.5 || potassium > 5.0) {
      result = "Potassium Imbalance";
    }
    setImbalance(result);
  };

  return (
<div>
  <h3>Electrolyte Imbalance Calculator</h3>
  <input 
    type="number" 
    placeholder="Sodium (mEq/L) - Reference: 135 - 145" 
    value={sodium} 
    onChange={(e) => setSodium(e.target.value)} 
  />
  <input 
    type="number" 
    placeholder="Potassium (mEq/L) - Reference: 3.5 - 5.0" 
    value={potassium} 
    onChange={(e) => setPotassium(e.target.value)} 
  />
  <button onClick={checkElectrolyteImbalance}>Check Electrolyte Imbalance</button>
  {imbalance && <p>Electrolyte Imbalance: {imbalance}</p>}
</div>

  );
};

// Uric Acid Calculator
const UricAcidCalculator = () => {
  const [uricAcid, setUricAcid] = useState('');
  const [result, setResult] = useState(null);

  const checkUricAcid = () => {
    const status = uricAcid > 6.8 ? "Hyperuricemia" : "Normal";
    setResult(status);
  };

  return (
    <div>
      <h3>Uric Acid Calculator</h3>
      <input 
  type="number" 
  placeholder="Uric Acid (mg/dL) - Reference: 3.5 - 7.2" 
  value={uricAcid} 
  onChange={(e) => setUricAcid(e.target.value)} 
/>

      <button onClick={checkUricAcid}>Check Uric Acid</button>
      {result && <p>Uric Acid Status: {result}</p>}
    </div>
  );
};

// Hypertensive Nephropathy Risk Score Calculator
const HypertensiveNephropathyRiskScore = () => {
  const [age, setAge] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [score, setScore] = useState(null);

  const calculateRisk = () => {
    // Simplified risk score calculation
    const risk = age * 0.1 + bloodPressure * 0.5; // Placeholder formula
    setScore(risk.toFixed(2));
  };

  return (
<div>
  <h3>Hypertensive Nephropathy Risk Score</h3>
  <input 
    type="number" 
    placeholder="Age (years) - Reference: 18+" 
    value={age} 
    onChange={(e) => setAge(e.target.value)} 
  />
  <input 
    type="number" 
    placeholder="Blood Pressure (mmHg) - Reference: < 120/80" 
    value={bloodPressure} 
    onChange={(e) => setBloodPressure(e.target.value)} 
  />
  <button onClick={calculateRisk}>Calculate Risk Score</button>
  {score && <p>Risk Score: {score}</p>}
</div>

  );
};

// Kidney Stone Risk Assessment
const KidneyStoneRiskAssessment = () => {
  const [calcium, setCalcium] = useState('');
  const [oxalate, setOxalate] = useState('');
  const [risk, setRisk] = useState(null);

  const calculateRisk = () => {
    const riskValue = calcium * 0.1 + oxalate * 0.2; // Simplified logic
    setRisk(riskValue.toFixed(2));
  };

  return (
<div>
  <h3>Kidney Stone Risk Assessment</h3>
  <input 
    type="number" 
    placeholder="Calcium (mg/dL) - Reference: 8.5-10.5" 
    value={calcium} 
    onChange={(e) => setCalcium(e.target.value)} 
  />
  <input 
    type="number" 
    placeholder="Oxalate (mg/dL) - Reference: < 40" 
    value={oxalate} 
    onChange={(e) => setOxalate(e.target.value)} 
  />
  <button onClick={calculateRisk}>Calculate Risk</button>
  {risk && <p>Kidney Stone Risk: {risk}</p>}
</div>

  );
};

// Nephrotic Syndrome Score Calculator
const NephroticSyndromeScore = () => {
  const [albumin, setAlbumin] = useState('');
  const [proteinuria, setProteinuria] = useState('');
  const [score, setScore] = useState(null);

  const calculateScore = () => {
    const syndromeScore = (albumin * 0.1 + proteinuria * 0.2).toFixed(2);
    setScore(syndromeScore);
  };

  return (
<div>
  <h3>Nephrotic Syndrome Score</h3>
  <input 
    type="number" 
    placeholder="Albumin (g/dL) - Reference: 3.5-5.0" 
    value={albumin} 
    onChange={(e) => setAlbumin(e.target.value)} 
  />
  <input 
    type="number" 
    placeholder="Proteinuria (mg/day) - Reference: < 150" 
    value={proteinuria} 
    onChange={(e) => setProteinuria(e.target.value)} 
  />
  <button onClick={calculateScore}>Calculate Score</button>
  {score && <p>Nephrotic Syndrome Score: {score}</p>}
</div>

  );
};

export default NephrologyCalculators;
