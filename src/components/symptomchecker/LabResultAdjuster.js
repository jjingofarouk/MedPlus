import React, { useEffect } from 'react';

const LabResultAdjuster = ({ labResults, inputs, conditionScores, setConditionScores }) => {
  useEffect(() => {
    const updatedScores = { ...conditionScores };

    // Blood Pressure adjustments
    if (labResults.bloodPressure) {
      if (labResults.bloodPressure > 160) {
        Object.keys(updatedScores).forEach(condition => {
          updatedScores[condition] *= 1.5; // Severe blood pressure
        });
      } else if (labResults.bloodPressure > 140) {
        Object.keys(updatedScores).forEach(condition => {
          updatedScores[condition] *= 1.2;
        });
      }
    }

    // Blood Glucose adjustments
    if (labResults.bloodGlucose) {
      if (labResults.bloodGlucose > 200) {
        updatedScores['Diabetes'] *= 1.5;
      } else if (labResults.bloodGlucose > 160) {
        updatedScores['Diabetes'] *= 1.3;
      }
    }

    // Cholesterol adjustments
    if (labResults.cholesterolLDL && labResults.cholesterolLDL > 130) {
      Object.keys(updatedScores).forEach(condition => {
        updatedScores[condition] *= 1.1;
      });
    }

    // Hemoglobin A1c adjustments
    if (labResults.hemoglobinA1c && labResults.hemoglobinA1c > 7.0) {
      updatedScores['Diabetes'] *= 1.3;
    }

    // Hemoglobin adjustments
    if (labResults.hemoglobin && labResults.hemoglobin < 10.0) {
      updatedScores['Anemia'] *= 1.1;
    }

    // White Blood Cell Count adjustments
    if (labResults.whiteBloodCellCount && labResults.whiteBloodCellCount > 11.0) {
      updatedScores['Infection'] *= 1.2;
    }

    // Liver enzymes and other tests
    if (inputs.liverEnzymes && labResults.liverEnzymes && inputs.liverEnzymes > 40) {
      updatedScores['Hepatitis'] += labResults.liverEnzymes?.high?.diseases?.Hepatitis || 0;
    }

    if (inputs.kidneyFunction && labResults.kidneyFunction && inputs.kidneyFunction > 1.2) {
      updatedScores['AcuteKidneyInjury'] += labResults.kidneyFunction?.high?.diseases?.AcuteKidneyInjury || 0;
    }

    if (inputs.malariaTest && labResults.malariaTest && inputs.malariaTest.toLowerCase() === 'positive') {
      updatedScores['Malaria'] += labResults.malariaTest?.positive?.diseases?.Malaria || 0;
    }

    if (inputs.HIVTest && labResults.HIVTest && inputs.HIVTest.toLowerCase() === 'positive') {
      updatedScores['HIV'] += labResults.HIVTest?.positive?.diseases?.HIV || 0;
    }

    if (inputs.hepatitisB && labResults.hepatitisB && inputs.hepatitisB.toLowerCase() === 'positive') {
      updatedScores['HepatitisB'] += labResults.hepatitisB?.positive?.diseases?.HepatitisB || 0;
    }

    setConditionScores(updatedScores); // Update the condition scores state

  }, [labResults, inputs, conditionScores, setConditionScores]); // Dependencies

  return null; // This component does not render anything
};

export default LabResultAdjuster;
