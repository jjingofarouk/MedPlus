import React, { useState } from "react";

const PulmonaryCalculators = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Pulmonary Calculators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CalculatorCategory title="CURB-65 Pneumonia Severity">
          <CURB65Calculator />
        </CalculatorCategory>
        <CalculatorCategory title="Wells Score for PE">
          <WellsScoreCalculator />
        </CalculatorCategory>
        <CalculatorCategory title="PSI/PORT Score">
          <PSICalculator />
        </CalculatorCategory>
        <CalculatorCategory title="PERC Rule for PE">
          <PERCCalculator />
        </CalculatorCategory>
        <CalculatorCategory title="BODE Index">
          <BODECalculator />
        </CalculatorCategory>
        <CalculatorCategory title="Asthma Control Test (ACT)">
          <ACTCalculator />
        </CalculatorCategory>
        <CalculatorCategory title="COPD Assessment Test (CAT)">
          <CATCalculator />
        </CalculatorCategory>
        <CalculatorCategory title="FEV1/FVC Ratio Calculator">
          <FEV1FVC_Calculator />
        </CalculatorCategory>
        <CalculatorCategory title="Peak Expiratory Flow Rate (PEFR) Calculator">
          <PEFRCalculator />
        </CalculatorCategory>
        <CalculatorCategory title="Modified Medical Research Council (mMRC) Dyspnea Scale">
          <MMRC_Calculator />
        </CalculatorCategory>
        <CalculatorCategory title="Lung Age Calculator">
          <LungAgeCalculator />
        </CalculatorCategory>
      </div>
    </div>
  );
};

// Helper components for each calculator
const CalculatorCategory = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

// CURB-65 Pneumonia Severity Calculator
const CURB65Calculator = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  const calculateScore = (values) => {
    const { confusion, urea, respiratoryRate, bloodPressure, age } = values;
    let score = 0;
    if (confusion) score += 1;
    if (urea > 7.0) score += 1; // urea in mmol/L
    if (respiratoryRate >= 30) score += 1;
    if (bloodPressure < 90) score += 1; // systolic blood pressure
    if (age >= 65) score += 1;
    
    setScore(score);
    setResult(getCURB65Interpretation(score));
  };

  const getCURB65Interpretation = (score) => {
    if (score === 0) return "Low risk (home treatment)";
    if (score <= 1) return "Low risk (consider home treatment)";
    if (score === 2) return "Moderate risk (hospitalization recommended)";
    return "High risk (consider ICU admission)";
  };

  return (
    <CalculatorForm
      onSubmit={calculateScore}
      initialValues={{ confusion: false, urea: "", respiratoryRate: "", bloodPressure: "", age: "" }}
      fields={[
        { label: "Confusion (yes/no)", name: "confusion", type: "checkbox" },
        { label: "Urea (mmol/L)", name: "urea", type: "number" },
        { label: "Respiratory Rate (breaths/min)", name: "respiratoryRate", type: "number" },
        { label: "Systolic Blood Pressure (mmHg)", name: "bloodPressure", type: "number" },
        { label: "Age (years)", name: "age", type: "number" },
      ]}
      score={score}
      result={result}
    />
  );
};

// Wells Score for PE Calculator
const WellsScoreCalculator = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  const calculateScore = (values) => {
    const { clinicalSigns, alternativeDiagnosis, immobilization, previousPE, heartRate, cancer, hemoptysis } = values;
    let score = 0;
    if (clinicalSigns) score += 3;
    if (alternativeDiagnosis) score -= 3;
    if (immobilization) score += 1;
    if (previousPE) score += 1.5;
    if (heartRate > 100) score += 1;
    if (cancer) score += 1;
    if (hemoptysis) score += 1;

    setScore(score);
    setResult(getWellsInterpretation(score));
  };

  const getWellsInterpretation = (score) => {
    if (score <= 0) return "Low probability (PE unlikely)";
    if (score <= 4) return "Moderate probability (PE possible)";
    return "High probability (PE likely)";
  };

  return (
    <CalculatorForm
      onSubmit={calculateScore}
      initialValues={{ clinicalSigns: false, alternativeDiagnosis: false, immobilization: false, previousPE: false, heartRate: "", cancer: false, hemoptysis: false }}
      fields={[
        { label: "Clinical Signs of DVT (yes/no)", name: "clinicalSigns", type: "checkbox" },
        { label: "Alternative Diagnosis (yes/no)", name: "alternativeDiagnosis", type: "checkbox" },
        { label: "Recent Immobilization (yes/no)", name: "immobilization", type: "checkbox" },
        { label: "Previous PE (yes/no)", name: "previousPE", type: "checkbox" },
        { label: "Heart Rate (>100 bpm)", name: "heartRate", type: "number" },
        { label: "Active Cancer (yes/no)", name: "cancer", type: "checkbox" },
        { label: "Hemoptysis (yes/no)", name: "hemoptysis", type: "checkbox" },
      ]}
      score={score}
      result={result}
    />
  );
};

// PSI/PORT Score Calculator
const PSICalculator = () => {
  // Implement PSI calculation logic
  return <div>PSI/PORT Score Calculator Placeholder</div>;
};

// PERC Rule for PE Calculator
const PERCCalculator = () => {
  // Implement PERC calculation logic
  return <div>PERC Rule for PE Calculator Placeholder</div>;
};

// BODE Index Calculator
const BODECalculator = () => {
  // Implement BODE Index calculation logic
  return <div>BODE Index Calculator Placeholder</div>;
};

// Asthma Control Test (ACT) Calculator
const ACTCalculator = () => {
  // Implement ACT calculation logic
  return <div>Asthma Control Test (ACT) Calculator Placeholder</div>;
};

// COPD Assessment Test (CAT) Calculator
const CATCalculator = () => {
  // Implement CAT calculation logic
  return <div>COPD Assessment Test (CAT) Calculator Placeholder</div>;
};

// FEV1/FVC Ratio Calculator
const FEV1FVC_Calculator = () => {
  const [fev1, setFEV1] = useState("");
  const [fvc, setFVC] = useState("");
  const [ratio, setRatio] = useState("");

  const calculateRatio = () => {
    if (fvc > 0) {
      const result = (fev1 / fvc) * 100;
      setRatio(result.toFixed(2) + "%");
    } else {
      setRatio("Invalid FVC");
    }
  };

  return (
    <div>
      <input
        type="number"
        value={fev1}
        onChange={(e) => setFEV1(e.target.value)}
        placeholder="Enter FEV1 (L)"
      />
      <input
        type="number"
        value={fvc}
        onChange={(e) => setFVC(e.target.value)}
        placeholder="Enter FVC (L)"
      />
      <button onClick={calculateRatio}>Calculate FEV1/FVC Ratio</button>
      <div>FEV1/FVC Ratio: {ratio}</div>
    </div>
  );
};

// Peak Expiratory Flow Rate (PEFR) Calculator
const PEFRCalculator = () => {
  const [pefr, setPEFR] = useState("");

  const calculatePEFR = (age, height) => {
    // Simplified calculation, adjust as needed
    const result = (height * 5) / (age + 10);
    setPEFR(result.toFixed(2) + " L/min");
  };

  return (
    <div>
      <input type="number" placeholder="Age" onChange={(e) => calculatePEFR(e.target.value, 170)} />
      <input type="number" placeholder="Height (cm)" onChange={(e) => calculatePEFR(25, e.target.value)} />
      <div>PEFR: {pefr}</div>
    </div>
  );
};

// Modified Medical Research Council (mMRC) Dyspnea Scale Calculator
const MMRC_Calculator = () => {  // Rename from mMRC_Calculator to MMRC_Calculator
    const [score, setScore] = useState("");
  
    const calculateMMRC = (dyspneaLevel) => {
      setScore(dyspneaLevel);
    };

  return (
    <div>
      <select onChange={(e) => calculateMMRC(e.target.value)}>
        <option value="">Select Dyspnea Level</option>
        <option value="0">0 - I only get breathless with strenuous exercise</option>
        <option value="1">1 - I get breathless when hurrying on level ground or walking up a slight hill</option>
        <option value="2">2 - I walk slower than people of the same age on level ground because of breathlessness</option>
        <option value="3">3 - I stop for breath after walking about 100 meters or after a few minutes on level ground</option>
        <option value="4">4 - I am too breathless to leave the house or I am breathless when dressing</option>
      </select>
      <div>MMRC Dyspnea Scale Score: {score}</div>
    </div>
  );
};

// Lung Age Calculator
const LungAgeCalculator = () => {
  const [age, setAge] = useState("");
  const [fev1, setFEV1] = useState("");
  const [lungAge, setLungAge] = useState("");

  const calculateLungAge = () => {
    const result = Math.round(60 - (fev1 / 2)); // Simplified calculation
    setLungAge(result);
  };

  return (
    <div>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age (years)" />
      <input type="number" value={fev1} onChange={(e) => setFEV1(e.target.value)} placeholder="FEV1 (L)" />
      <button onClick={calculateLungAge}>Calculate Lung Age</button>
      <div>Lung Age: {lungAge} years</div>
    </div>
  );
};

// Generic form for calculators
const CalculatorForm = ({ onSubmit, initialValues, fields, score, result }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {fields.map((field) => (
        <div key={field.name}>
          <label>
            {field.label}:
            {field.type === "checkbox" ? (
              <input type="checkbox" name={field.name} checked={values[field.name]} onChange={handleChange} />
            ) : (
              <input type={field.type} name={field.name} value={values[field.name]} onChange={handleChange} />
            )}
          </label>
        </div>
      ))}
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white">Calculate</button>
      {score !== null && <div>Score: {score}</div>}
      {result && <div>Result: {result}</div>}
    </form>
  );
};

export default PulmonaryCalculators;
