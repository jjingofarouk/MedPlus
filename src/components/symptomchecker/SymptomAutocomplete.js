import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const SymptomAutocomplete = ({ symptoms, suggestions, handleSymptomChange, handleInputChange }) => (
  <Autocomplete
    multiple
    options={suggestions}
    value={symptoms}
    onChange={handleSymptomChange}
    onInputChange={handleInputChange}
    filterSelectedOptions
    renderInput={(params) => (
      <TextField {...params} label="Symptoms" variant="outlined" />
    )}
  />
);

export default SymptomAutocomplete;
