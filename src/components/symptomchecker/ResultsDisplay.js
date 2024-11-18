import React from 'react';
import { Paper, Typography, LinearProgress } from '@mui/material';

const ResultsDisplay = ({ results }) => (
  <div>
    {results.map((result, index) => (
      <Paper key={index} style={{ padding: '10px', marginBottom: '10px' }}>
        <Typography variant="h6" style={{ color: result.confidenceColor }}>
          {result.condition}
        </Typography>
        <LinearProgress variant="determinate" value={result.confidence} />
        <Typography variant="body2">
          Confidence: {result.confidence}% ({result.confidenceLevel})
        </Typography>
      </Paper>
    ))}
  </div>
);

export default ResultsDisplay;
