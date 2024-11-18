import React, { useState } from 'react';
import labResults from './labResults'; // Adjust the path if necessary

const sections = [
  {
    title: "Blood Pressure & Glucose",
    fields: [
      { name: "bloodPressure", label: "Blood Pressure (mmHg)", type: "range", min: 90, max: 180, step: 1, range: "90-180" },
      { name: "bloodGlucose", label: "Blood Glucose (mg/dL)", type: "range", min: 70, max: 200, step: 1, range: "70-200" },
    ],
  },
  {
    title: "Cholesterol Levels",
    fields: [
      { name: "cholesterolLDL", label: "Cholesterol LDL (mg/dL)", type: "range", min: 0, max: 200, step: 1, range: "<160" },
      { name: "cholesterolHDL", label: "Cholesterol HDL (mg/dL)", type: "range", min: 0, max: 100, step: 1, range: ">40" },
    ],
  },
  {
    title: "Blood Tests",
    fields: [
      { name: "hemoglobinA1c", label: "Hemoglobin A1c (%)", type: "range", min: 4.0, max: 10.0, step: 0.1, range: "<6.5" },
      { name: "hemoglobin", label: "Hemoglobin (g/dL)", type: "range", min: 2, max: 18, step: 0.1, range: "13.5-17" },
      { name: "whiteBloodCellCount", label: "White Blood Cell Count (x10^9/L)", type: "range", min: 0, max: 20, step: 0.1, range: "4-10" },
      { name: "plateletCount", label: "Platelet Count (x10^9/L)", type: "range", min: 0, max: 600, step: 1, range: "150-450" },
      { name: "meanCorpuscularVolume", label: "Mean Corpuscular Volume (fL)", type: "range", min: 70, max: 120, step: 1, range: "80-100" },
      { name: "reticulocyteCount", label: "Reticulocyte Count (%)", type: "range", min: 0, max: 5, step: 0.1, range: "0.5-2.5" },
    ],
  },
  {
    title: "Thyroid & Liver",
    fields: [
      { name: "thyroidStimulatingHormone", label: "Thyroid Stimulating Hormone (mIU/L)", type: "range", min: 0, max: 10, step: 0.1, range: "0.4-4.0" },
      { name: "liverEnzymes", label: "Liver Enzymes (U/L)", type: "range", min: 0, max: 100, step: 1, range: "<40" },
      { name: "kidneyFunction", label: "Kidney Function (Creatinine mg/dL)", type: "range", min: 0, max: 5, step: 0.1, range: "<1.2" },
    ],
  },
  {
    title: "Infectious Diseases",
    fields: [
      { name: "malariaTest", label: "Malaria Test", type: "select", options: ["Positive", "Negative"] },
      { name: "HIVTest", label: "HIV Test", type: "select", options: ["Positive", "Negative"] },
      { name: "hepatitisB", label: "Hepatitis B Test", type: "select", options: ["Positive", "Negative"] },
    ],
  },
];

const LabScore = ({ onScoreCalculated }) => {
    const [inputs, setInputs] = useState({
    bloodPressure: 90,
    bloodGlucose: 70,
    cholesterolLDL: 0,
    cholesterolHDL: 0,
    hemoglobinA1c: 4.0,
    hemoglobin: 10,
    whiteBloodCellCount: 0,
    plateletCount: 0,
    meanCorpuscularVolume: 70,
    reticulocyteCount: 0,
    thyroidStimulatingHormone: 0,
    liverEnzymes: 0,
    kidneyFunction: 0,
    malariaTest: '',
    HIVTest: '',
    hepatitisB: '',
  });
  const [currentSection, setCurrentSection] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const calculateRisk = () => {
    let totalScore = 0;
  
    // Blood Pressure
    if (inputs.bloodPressure) {
      const bpResult = labResults.bloodPressure;
      if (inputs.bloodPressure > 140) {
        totalScore += bpResult.high.diseases.Hypertension;
      } else if (inputs.bloodPressure < 90) {
        totalScore += bpResult.low.diseases.Hypotension;
      }
    }
  
    // Blood Glucose
    if (inputs.bloodGlucose) {
      const bgResult = labResults.bloodGlucose;
      if (inputs.bloodGlucose > 126) {
        totalScore += bgResult.high.diseases.DiabetesMellitus;
      } else if (inputs.bloodGlucose < 70) {
        totalScore += bgResult.low.diseases.Hypoglycemia;
      }
    }
  
    // Cholesterol LDL
    if (inputs.cholesterolLDL) {
      const ldlResult = labResults.cholesterolLDL;
      if (inputs.cholesterolLDL > 160) {
        totalScore += ldlResult.high.diseases.Hyperlipidemia;
      }
    }
  
    // Cholesterol HDL
    if (inputs.cholesterolHDL) {
      const hdlResult = labResults.cholesterolHDL;
      if (inputs.cholesterolHDL < 40) {
        totalScore += hdlResult.low.diseases.CoronaryArteryDisease;
      }
    }
  
    // Hemoglobin A1c
    if (inputs.hemoglobinA1c) {
      const a1cResult = labResults.hemoglobinA1c;
      if (inputs.hemoglobinA1c > 6.4) {
        totalScore += a1cResult.high.diseases.DiabetesMellitus;
      }
    }
  
    // Hemoglobin
    if (inputs.hemoglobin) {
      const hemoglobinResult = labResults.hemoglobin;
      if (inputs.hemoglobin < 13.5) {
        totalScore += hemoglobinResult.low.diseases.Anemia;
      } else if (inputs.hemoglobin > 17) {
        totalScore += hemoglobinResult.high.diseases.PolycythemiaVera;
      }
    }
  
    // White Blood Cell Count
    if (inputs.whiteBloodCellCount) {
      const wbcResult = labResults.whiteBloodCellCount;
      if (inputs.whiteBloodCellCount > 11) {
        totalScore += wbcResult.high.diseases.Infection;
      } else if (inputs.whiteBloodCellCount < 4) {
        totalScore += wbcResult.low.diseases.BoneMarrowDisorders;
      }
    }
  
    // Platelet Count
    if (inputs.plateletCount) {
      const plateletResult = labResults.plateletCount;
      if (inputs.plateletCount > 450) {
        totalScore += plateletResult.high.diseases.Thrombocytosis;
      } else if (inputs.plateletCount < 150) {
        totalScore += plateletResult.low.diseases.Thrombocytopenia;
      }
    }
  
    // Mean Corpuscular Volume
    if (inputs.meanCorpuscularVolume) {
      const mcvResult = labResults.meanCorpuscularVolume;
      if (inputs.meanCorpuscularVolume > 100) {
        totalScore += mcvResult.high.diseases.MacrocyticAnemia;
      } else if (inputs.meanCorpuscularVolume < 80) {
        totalScore += mcvResult.low.diseases.MicrocyticAnemia;
      }
    }
  
    // Reticulocyte Count
    if (inputs.reticulocyteCount) {
      const reticulocyteResult = labResults.reticulocyteCount;
      if (inputs.reticulocyteCount > 2.5) {
        totalScore += reticulocyteResult.high.diseases.HemolyticAnemia;
      } else if (inputs.reticulocyteCount < 0.5) {
        totalScore += reticulocyteResult.low.diseases.AplasticAnemia;
      }
    }
  
    // Thyroid Stimulating Hormone
    if (inputs.thyroidStimulatingHormone) {
      const tshResult = labResults.thyroidStimulatingHormone;
      if (inputs.thyroidStimulatingHormone > 4.2) {
        totalScore += tshResult.high.diseases.Hypothyroidism;
      } else if (inputs.thyroidStimulatingHormone < 0.4) {
        totalScore += tshResult.low.diseases.Hyperthyroidism;
      }
    }
  
    // Liver Enzymes
    if (inputs.liverEnzymes) {
      const liverResult = labResults.liverEnzymes;
      if (inputs.liverEnzymes > 40) {
        totalScore += liverResult.high.diseases.Hepatitis;
      }
    }
  
    // Kidney Function
    if (inputs.kidneyFunction) {
      const kidneyResult = labResults.kidneyFunction;
      if (inputs.kidneyFunction > 1.2) {
        totalScore += kidneyResult.high.diseases.AcuteKidneyInjury;
      }
    }
  
    // Malaria Test
    if (inputs.malariaTest) {
      const malariaResult = labResults.malariaTest;
      if (inputs.malariaTest.toLowerCase() === 'positive') {
        totalScore += malariaResult.positive.diseases.Malaria;
      }
    }
  
    // HIV Test
    if (inputs.HIVTest) {
      const hivResult = labResults.HIVTest;
      if (inputs.HIVTest.toLowerCase() === 'positive') {
        totalScore += hivResult.positive.diseases.HIV;
      }
    }
  
    // Hepatitis B Test
    if (inputs.hepatitisB) {
      const hepatitisBResult = labResults.hepatitisB;
      if (inputs.hepatitisB.toLowerCase() === 'positive') {
        totalScore += hepatitisBResult.positive.diseases.HepatitisB;
      }
    }
  
    return totalScore;
  };
  

  const handleNext = () => {
    const riskScore = calculateRisk();
    onScoreCalculated(riskScore); // Pass the risk score to the parent
    goToNextSection();
  };

  
  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const goToPreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

 
  return (
    <form onSubmit={(e) => e.preventDefault()} aria-labelledby="risk-calculator">
      <h2 id="risk-calculator">{sections[currentSection].title}</h2>
      {sections[currentSection].fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}:</label>
          {field.type === "select" ? (
            <select 
              name={field.name} 
              id={field.name} 
              value={inputs[field.name]} 
              onChange={handleChange}
              aria-required="true"
            >
              <option value="">Select...</option>
              {field.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <div className="slider-container">
              <input 
                type="range" 
                name={field.name} 
                id={field.name} 
                min={field.min} 
                max={field.max} 
                step={field.step} 
                value={inputs[field.name]} 
                onChange={handleChange} 
                aria-valuemin={field.min} 
                aria-valuemax={field.max}
                aria-valuenow={inputs[field.name]}
              />
              <div className="slider-info">
                <span className="slider-value">{inputs[field.name]}</span>
                <small className="slider-range"> Range: {field.range}</small>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="navigation-buttons">
        {currentSection > 0 && (
          <button type="button" onClick={goToPreviousSection}>
            Previous
          </button>
        )}
        {currentSection < sections.length - 1 ? (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button type="button" onClick={handleNext}>Check Symptoms</button>
        )}
      </div>
    </form>
  );
};

export default LabScore;