import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
  Divider,
} from '@mui/material';
import { examinationSystems } from './ExaminationSystems'; // Assuming this contains your systems data
import './ExaminationFindings.css';

const ExaminationFindings = () => {
  const [selectedSystem, setSelectedSystem] = useState('');
  const [findings, setFindings] = useState({});

  const handleSystemChange = (event) => {
    setSelectedSystem(event.target.value);
  };

  const handleFindingChange = (systemName, category, findingName, value, findingType) => {
    setFindings(prevFindings => ({
      ...prevFindings,
      [systemName]: {
        ...prevFindings[systemName],
        [category]: {
          ...prevFindings[systemName]?.[category],
          [findingName]: {
            value: value,
            type: findingType
          }
        }
      }
    }));
  };

  const renderFindingControl = (systemName, category, finding) => {
    const { name, expected, type, min, max } = finding;

    return (
      <div key={name} style={{ marginBottom: '24px', padding: '8px 16px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <Typography variant="body1" style={{ fontWeight: 600 }}>{name}:</Typography>
        {type === 'options' && expected.map(option => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={findings[systemName]?.[category]?.[name]?.value === option || false}
                onChange={(e) =>
                  handleFindingChange(systemName, category, name, e.target.checked ? option : '', type)
                }
              />
            }
            label={option}
          />
        ))}
        {type === 'range' && (
          <TextField
            type="number"
            value={findings[systemName]?.[category]?.[name]?.value || ''}
            onChange={(e) =>
              handleFindingChange(systemName, category, name, e.target.value, type)
            }
            inputProps={{ min, max }}
            label={`Enter value (Expected: ${min}-${max})`}
            fullWidth
            variant="outlined"
            margin="dense"
          />
        )}
        {type === 'text' && (
          <TextField
            value={findings[systemName]?.[category]?.[name]?.value || ''}
            onChange={(e) =>
              handleFindingChange(systemName, category, name, e.target.value, type)
            }
            label={`Enter text (Expected: ${expected})`}
            fullWidth
            variant="outlined"
            margin="dense"
          />
        )}
      </div>
    );
  };

  const renderSystemFindings = () => {
    if (!selectedSystem) return null;

    const system = examinationSystems.find(sys => sys.name === selectedSystem);

    if (!system || !system.findings) {
      return (
        <Typography variant="body2" color="textSecondary">
          Not relevant.
        </Typography>
      );
    }

    return (
      <Card variant="outlined" style={{ marginTop: '16px' }}>
        <CardHeader title={`${selectedSystem} Examination`} />
        <CardContent>
          {Object.keys(system.findings).map(category => (
            <div key={category}>
              <Typography variant="h6" style={{ margin: '16px 0', fontWeight: 600 }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>
              <Divider style={{ marginBottom: '16px' }} />
              {Array.isArray(system.findings[category]) && system.findings[category].length > 0 ? (
                system.findings[category].map(finding =>
                  renderFindingControl(selectedSystem, category, finding)
                )
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No findings for {category}
                </Typography>
              )}
            </div>
          ))}
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Save Findings
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="examination-findings-container" style={{ maxWidth: '1400px', margin: 'auto' }}>
      <Card variant="outlined">
        <CardHeader title="Physical Examination" />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Select a system to record your examination findings:
          </Typography>
          <Select value={selectedSystem} onChange={handleSystemChange} fullWidth variant="outlined">
            <MenuItem value="">-- Select System --</MenuItem>
            {examinationSystems.map(system => (
              <MenuItem key={system.name} value={system.name}>
                {system.name}
              </MenuItem>
            ))}
          </Select>
        </CardContent>
      </Card>

      {renderSystemFindings()}
    </div>
  );
};

export default ExaminationFindings;
