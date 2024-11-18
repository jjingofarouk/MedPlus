import React from 'react';
import { Grid, TextField, Typography, Paper } from '@mui/material';

const LabInput = ({ labResults, setLabResults }) => {
  const handleLabResultChange = (e) => {
    const { name, value } = e.target;
    setLabResults((prevResults) => ({ ...prevResults, [name]: value }));
  };

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Lab Results
      </Typography>
      <Grid container spacing={2}>
        {renderLabResultFields(labResults, handleLabResultChange)}
      </Grid>
    </Paper>
  );
};

// Function to render each lab result field
const renderLabResultFields = (labResults, handleChange) => {
  const fields = [
    { label: "Blood Pressure (mm Hg)", name: "bloodPressure" },
    { label: "Blood Glucose (mg/dL)", name: "bloodGlucose" },
    { label: "Cholesterol (LDL) (mg/dL)", name: "cholesterolLDL" },
    { label: "Cholesterol (HDL) (mg/dL)", name: "cholesterolHDL" },
    { label: "Hemoglobin A1c (%)", name: "hemoglobinA1c" },
    { label: "Hemoglobin (g/dL)", name: "hemoglobin" },
    { label: "White Blood Cell Count (cells/mcL)", name: "whiteBloodCellCount" },
    { label: "Platelet Count (cells/mcL)", name: "plateletCount" },
    { label: "Mean Corpuscular Volume (MCV)", name: "meanCorpuscularVolume" },
    { label: "Reticulocyte Count (%)", name: "reticulocyteCount" },
    { label: "Thyroid Stimulating Hormone (TSH) (mIU/L)", name: "thyroidStimulatingHormone" },
    { label: "Liver Enzymes (ALT/AST) (U/L)", name: "liverEnzymes" },
    { label: "Kidney Function (Creatinine) (mg/dL)", name: "kidneyFunction" },
    { label: "Malaria Test Result (Positive/Negative)", name: "malariaTest" },
    { label: "HIV Test Result (Positive/Negative)", name: "hivTest" },
    { label: "Hepatitis B Test Result (Positive/Negative)", name: "hepatitisBTest" },
  ];

  return fields.map((field) => (
    <Grid item xs={12} sm={6} key={field.name}>
      <TextField
        fullWidth
        label={field.label}
        name={field.name}
        value={labResults[field.name] || ''} // Ensure value is a string
        onChange={handleChange}
        type={field.name.includes('Test') ? 'text' : 'number'} // Use text for test results
        inputProps={{ min: 0 }} // Prevent negative values for numerical inputs
        required // Make fields required
        variant="outlined"
      />
    </Grid>
  ));
};

export default LabInput;
