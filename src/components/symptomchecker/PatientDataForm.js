import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const PatientDataInputs = ({ patientData, handlePatientDataChange }) => (
  <div>
    <TextField
      label="Age"
      name="age"
      value={patientData.age}
      onChange={handlePatientDataChange}
      fullWidth
      margin="normal"
    />
    <FormControl fullWidth margin="normal">
      <InputLabel>Gender</InputLabel>
      <Select
        name="gender"
        value={patientData.gender}
        onChange={handlePatientDataChange}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
    </FormControl>
    <TextField
      label="Recent Travel (Location)"
      name="recentTravel"
      value={patientData.recentTravel}
      onChange={handlePatientDataChange}
      fullWidth
      margin="normal"
    />
  </div>
);

export default PatientDataInputs;
