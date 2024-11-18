const SymptomDetails = ({ symptom, severity, duration, handleSeverityChange, handleDurationChange }) => (
    <div style={{ marginBottom: '20px' }}>
      <Typography gutterBottom>{symptom}</Typography>
  
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography id={`severity-${symptom}`} gutterBottom>Severity (1 - 5)</Typography>
          <Slider
            aria-labelledby={`severity-${symptom}`}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            value={severity || 1}
            onChange={(_, value) => handleSeverityChange(symptom, value)}
          />
        </Grid>
  
        <Grid item xs={12} sm={6}>
          <Typography id={`duration-${symptom}`} gutterBottom>Duration (days)</Typography>
          <Slider
            aria-labelledby={`duration-${symptom}`}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={30}
            value={duration || 1}
            onChange={(_, value) => handleDurationChange(symptom, value)}
          />
        </Grid>
      </Grid>
  
      <Paper elevation={1} style={{ padding: '10px', marginTop: '10px' }}>
        <Typography variant="body2"><strong>Summary:</strong></Typography>
        <Typography variant="body2" color="textSecondary">
          Severity: {severity || 'Not set'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Duration: {duration || 'Not set'} days
        </Typography>
      </Paper>
    </div>
  );
  