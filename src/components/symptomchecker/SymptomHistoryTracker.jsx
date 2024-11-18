import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

const SymptomHistoryTracker = ({ symptomHistory }) => (
  <List>
    {Object.entries(symptomHistory).map(([symptom, records]) => (
      <ListItem key={symptom}>
        <Typography>{symptom}: {records.map(record => `${record.date.toDateString()} (Severity: ${record.severity})`).join(', ')}</Typography>
      </ListItem>
    ))}
  </List>
);

export default SymptomHistoryTracker;
