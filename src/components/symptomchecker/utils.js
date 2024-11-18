
// Calculate the age group based on the patient's age
export const calculateAgeGroup = (age) => {
  // Logic to determine age group
  if (age < 18) return 'child';
  if (age < 65) return 'adult';
  return 'senior';
};


// Calculate confidence percentage and level based on score
export const calculateConfidence = (score, maxScore = 100) => {
  const percentage = Math.round((score / maxScore) * 100);
  let level;

  if (percentage >= 80) {
    level = 'High';
  } else if (percentage >= 50) {
    level = 'Medium';
  } else {
    level = 'Lower';
  }

  return { percentage, level };
};

// Get the confidence level ('High', 'Medium', 'Low') based on score
export const getConfidenceLevel = (percentage) => {
  if (percentage >= 80) return 'High';
  if (percentage >= 50) return 'Medium';
  return 'Low';
};

// Get the confidence level color based on the confidence level
export const getConfidenceColor = (level) => {
  switch (level) {
    case 'High':
      return '#27c7b8'; // Teal
    case 'Medium':
      return '#f78837'; // Orange
    case 'Low':
      return '#f44336'; // Red
    default:
      return '#9e9e9e'; // Gray
  }
};
