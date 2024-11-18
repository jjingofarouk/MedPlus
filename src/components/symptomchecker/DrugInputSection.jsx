import { useEffect, useState } from 'react';
import { Autocomplete, TextField, Grid, Button } from '@mui/material';
import { drugOptions } from './drugOptions'; // Adjust the import path as needed

const DrugInputSection = ({ handleAddDrug }) => {
  const [drugInput, setDrugInput] = useState('');
  const [suggestions, setSuggestions] = useState(drugOptions); // Initialize with drugOptions

  const handleDrugInputChange = (event) => {
    const value = event.target.value;
    setDrugInput(value);
    
    // Filter suggestions based on input
    if (value) {
      const filteredOptions = drugOptions.filter((drug) =>
        drug.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredOptions);
    } else {
      setSuggestions(drugOptions); // Reset suggestions if input is empty
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={8}>
        <Autocomplete
          options={suggestions} // Use filtered suggestions
          getOptionLabel={(option) => option.name} // Ensure this matches your data structure
          value={drugInput}
          onChange={(event, newValue) => setDrugInput(newValue ? newValue.name : '')}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter Drug"
              fullWidth
              variant="outlined"
              sx={{ marginBottom: '20px' }}
              onChange={handleDrugInputChange}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          onClick={() => handleAddDrug(drugInput)} // Pass the drugInput to handleAddDrug
          variant="contained"
          sx={{ backgroundColor: '#f78837', color: '#dfe4e5', width: '100%' }}
        >
          Add Drug
        </Button>
      </Grid>
    </Grid>
  );
};

export default DrugInputSection;
