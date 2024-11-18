// SymptomInput.js
import React from 'react';
import { Typography, Slider, Paper, Grid } from '@mui/material';

const SymptomInput = ({ symptom, severity, duration, onSeverityChange, onDurationChange }) => (
  <div style={{ marginBottom: '20px' }}>
    <Typography gutterBottom style={{ color: '#002432' }}>{symptom}</Typography>
    
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography id={`severity-${symptom}`} gutterBottom style={{ color: '#002432' }}>
          Severity (1 - 5)
        </Typography>
        <Slider
          aria-labelledby={`severity-${symptom}`}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={5}
          value={severity}
          onChange={(_, value) => onSeverityChange(symptom, value)}
          style={{ color: '#27c7b8' }}
          aria-describedby={`severity-description-${symptom}`}
        />
        <Typography id={`severity-description-${symptom}`} variant="caption" color="textSecondary">
          Adjust the severity of the symptom from 1 (mild) to 5 (severe).
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography id={`duration-${symptom}`} gutterBottom style={{ color: '#002432' }}>
          Duration (days)
        </Typography>
        <Slider
          aria-labelledby={`duration-${symptom}`}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={30}
          value={duration}
          onChange={(_, value) => onDurationChange(symptom, value)}
          style={{ color: '#27c7b8' }}
          aria-describedby={`duration-description-${symptom}`}
        />
        <Typography id={`duration-description-${symptom}`} variant="caption" color="textSecondary">
          Adjust the number of days the symptom has been present.
        </Typography>
      </Grid>
    </Grid>

    <Paper elevation={1} style={{ padding: '10px', marginTop: '10px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" style={{ color: '#002432' }}>
        <strong>Summary:</strong>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Severity: {severity || 'Not set'}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Duration: {duration || 'Not set'} days
      </Typography>
    </Paper>
  </div>
);

export default SymptomInput;
