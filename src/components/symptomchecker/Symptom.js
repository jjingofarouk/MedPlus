import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Autocomplete,
  TextField,
  CircularProgress,
  Button,
  Box,
  Snackbar,
  Alert,
  FormControl,
  List,
  ListItem,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
  Paper,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemButton, // Add this line
  ListItemIcon,   // Add this line
  ListItemText,   // Add this line
  Chip,
  Dialog,
  DialogTitle,
  Checkbox,
  FormControlLabel,
  DialogContent,
  DialogActions,
  LinearProgress
} from '@mui/material';
import ExpandMoreIcon from './ExpandMore';
import { debounce } from 'lodash';
import symptomCombinations from './symptomCombinations';
import symptomWeights from './symptomWeights';
import symptomsList from './symptomsList';
import travelRiskFactors from './travelRiskFactors';
import guidance from './guidance';
import drugHistoryWeights from './drugHistoryWeights';
import { drugOptions } from './drugOptions';
import riskFactorWeights from './riskFactorWeights';
import DrugInputSection from './DrugInputSection';
import DrugHistory from './DrugHistory'; // Import the DrugHistory component
import { calculateAgeGroup, calculateConfidence, getConfidenceLevel, getConfidenceColor } from './utils'; // Adjust the path as needed



const loadPatientData = () => {
  const data = localStorage.getItem('patientData');
  return data ? JSON.parse(data) : null;
};




const fetchSuggestions = debounce((inputValue, callback) => {
  const lowerInputValue = inputValue.toLowerCase().trim();

  if (lowerInputValue === '') {
    callback([]);
    return;
  }

  const exactMatches = symptomsList.filter(symptom =>
    symptom.toLowerCase() === lowerInputValue
  );

  const partialMatches = symptomsList.filter(symptom =>
    symptom.toLowerCase().includes(lowerInputValue) && symptom.toLowerCase() !== lowerInputValue
  );

  const suggestions = [...exactMatches, ...partialMatches]
    .slice(0, 10)
    .sort((a, b) => {
      const aStartsWith = a.toLowerCase().startsWith(lowerInputValue);
      const bStartsWith = b.toLowerCase().startsWith(lowerInputValue);
      return (bStartsWith - aStartsWith) || (a.localeCompare(b));
    });

  callback(suggestions);
}, 300);

const calculateConditionScores = (userSymptoms, patientData, drugHistory, labResults, inputs, riskFactors) => {
  const conditionScores = {};
  const combinationScores = {};
  const combinationMultiplier = 1; // Start at 1 for combination weights

  // Step 1: Process symptom combinations first
  if (symptomCombinations) {
    Object.entries(symptomCombinations).forEach(([combo, conditions]) => {
      const comboSymptoms = combo.split(', ');
      const matchCount = comboSymptoms.filter(symptom => userSymptoms.includes(symptom)).length;
      const comboScore = (matchCount / comboSymptoms.length) * 10; // Scale from 1 to 10

      if (comboScore > 0) {
        Object.entries(conditions).forEach(([condition, weight]) => {
          combinationScores[condition] = (combinationScores[condition] || 0) + (comboScore * weight);
        });
      }
    });
  }

  // Step 2: Loop through user symptoms to calculate base condition scores
  userSymptoms.forEach(symptom => {
    if (symptomWeights?.[symptom]) {
      Object.entries(symptomWeights[symptom]).forEach(([condition, data]) => {
        const baseScore = data.weight * (userSymptoms.length / 5);
        const ageAdjustedScore = baseScore * (data.ageFactors?.[patientData.ageGroup] || 1);
        const genderAdjustedScore = ageAdjustedScore * (data.genderFactors?.[patientData.gender] || 1);
        conditionScores[condition] = (conditionScores[condition] || 0) + genderAdjustedScore;
      });
    }
  });

  userSymptoms.forEach(symptom => {
    // Retrieve severity and duration factors from the dataset for the specific symptom
    const severityLevel = symptomWeights?.[symptom]?.severityFactors?.[patientData.severityLevel] || 1;
    const durationFactor = symptomWeights?.[symptom]?.durationFactors?.[patientData.durationLevel] || 1;
  
    // Calculate severity and duration factors (adjust as needed for scaling)
    const conditionSeverityFactor = Math.pow(severityLevel, 1.5);
    const conditionDurationFactor = Math.pow(durationFactor, 1.2);
  
    // Adjust condition scores based on severity and duration factors
    if (symptomWeights?.[symptom]) {
      Object.entries(symptomWeights[symptom]).forEach(([condition, data]) => {
        conditionScores[condition] = (conditionScores[condition] || 0) * conditionSeverityFactor * conditionDurationFactor;
      });
    }
  });
  
  // Step 4: Adjust scores based on travel and environmental risks
  if (patientData.recentTravel) {
    const travelRisks = travelRiskFactors?.[patientData.recentTravel] || {};
    Object.entries(travelRisks).forEach(([condition, factor]) => {
      if (conditionScores[condition]) {
        conditionScores[condition] *= factor;
      }
    });
  }

  // Step 5: Refined drug history impact on condition scores
  drugHistory.forEach(drug => {
    if (drugHistoryWeights?.[drug]) {
      Object.entries(drugHistoryWeights[drug]).forEach(([condition, factor]) => {
        if (conditionScores[condition]) {
          conditionScores[condition] *= factor;
        }
      });
    }
  });

  // Step 6: Expand lab result adjustments with refined ranges
if (inputs.bloodPressure) {
  if (inputs.bloodPressure > 160) {
    conditionScores = {...conditionScores}; // Create a copy to avoid mutation
    Object.keys(conditionScores).forEach(condition => {
      conditionScores[condition] *= 1.5;  // Higher threshold for severe blood pressure
    });
  } else if (inputs.bloodPressure > 140) {
    Object.keys(conditionScores).forEach(condition => {
      conditionScores[condition] *= 1.2;
    });
  }
}

// Blood glucose refined
if (inputs.bloodGlucose) {
  if (inputs.bloodGlucose > 200) {
    conditionScores['DiabetesMellitus'] += labResults.bloodGlucose.high.diseases.DiabetesMellitus || 0;
  } else if (inputs.bloodGlucose > 160) {
    conditionScores['DiabetesMellitus'] += labResults.bloodGlucose.high.diseases.DiabetesMellitus * 0.3; // Adjust based on severity
  }
}

// Cholesterol LDL
if (inputs.cholesterolLDL && inputs.cholesterolLDL > 130) {
  Object.keys(conditionScores).forEach(condition => {
    conditionScores[condition] *= 1.1;
  });
}

// Hemoglobin A1c
if (inputs.hemoglobinA1c && inputs.hemoglobinA1c > 7.0) {
  conditionScores['DiabetesMellitus'] += labResults.hemoglobinA1c.high.diseases.DiabetesMellitus || 0;
}

// Hemoglobin
if (inputs.hemoglobin) {
  if (inputs.hemoglobin < 10.0) {
    conditionScores['Anemia'] += labResults.hemoglobin.low.diseases.Anemia || 0;
  } else if (inputs.hemoglobin > 17) {
    conditionScores['PolycythemiaVera'] += labResults.hemoglobin.high.diseases.PolycythemiaVera || 0;
  }
}

// White Blood Cell Count
if (inputs.whiteBloodCellCount) {
  if (inputs.whiteBloodCellCount > 11.0) {
    conditionScores['Infection'] += labResults.whiteBloodCellCount.high.diseases.Infection || 0;
  }
}

// Liver enzymes
if (inputs.liverEnzymes && inputs.liverEnzymes > 40) {
  conditionScores['Hepatitis'] += labResults.liverEnzymes.high.diseases.Hepatitis || 0;
}

// Kidney Function
if (inputs.kidneyFunction && inputs.kidneyFunction > 1.2) {
  conditionScores['AcuteKidneyInjury'] += labResults.kidneyFunction.high.diseases.AcuteKidneyInjury || 0;
}

// Malaria Test
if (inputs.malariaTest && inputs.malariaTest.toLowerCase() === 'positive') {
  conditionScores['Malaria'] += labResults.malariaTest.positive.diseases.Malaria || 0;
}

// HIV Test
if (inputs.HIVTest && inputs.HIVTest.toLowerCase() === 'positive') {
  conditionScores['HIV'] += labResults.HIVTest.positive.diseases.HIV || 0;
}

// Hepatitis B Test
if (inputs.hepatitisB && inputs.hepatitisB.toLowerCase() === 'positive') {
  conditionScores['HepatitisB'] += labResults.hepatitisB.positive.diseases.HepatitisB || 0;
}

  // Step 7: Add combination scores to the final condition scores
  Object.entries(combinationScores).forEach(([condition, score]) => {
    conditionScores[condition] = (conditionScores[condition] || 0) + score;
  });

  // Step 8: Refine risk factor adjustments for disease-specific conditions
  Object.entries(riskFactors).forEach(([factor, status]) => {
    if (status && riskFactorWeights[factor]) {
      Object.entries(riskFactorWeights[factor]).forEach(([condition, weight]) => {
        if (conditionScores[condition]) {
          conditionScores[condition] *= weight;
        }
      });

      // Disease-specific risk factor handling
      const diseaseSpecificRiskFactors = {
        Diabetes: ['HeartDisease', 'KidneyFailure'],
        Smoking: ['LungCancer', 'COPD'],
      };

      if (diseaseSpecificRiskFactors[factor]) {
        diseaseSpecificRiskFactors[factor].forEach(disease => {
          if (conditionScores[disease]) {
            conditionScores[disease] *= 1.5;
          }
        });
      }
    }
  });

  // Step 9: Apply refined logarithmic scaling for final scores
  Object.keys(conditionScores).forEach(condition => {
    conditionScores[condition] = Math.log(conditionScores[condition] + 1) * 15;
  });

  // Step 10: Return the top 5 conditions sorted by score with confidence levels
  return Object.entries(conditionScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([condition, score]) => ({
      condition,
      score,
      confidence: calculateConfidence(score),
    }));
};

const SymptomChecker = () => {
  const [riskScore, setRiskScore] = useState(0);
  const [symptoms, setSymptoms] = useState([]);
  const [showDrugHistory, setShowDrugHistory] = useState(false);
  const [drugHistory, setDrugHistory] = useState([]);
  const [newDrug, setNewDrug] = useState({ name: '', dosage: '' });
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [showLoadDialog, setShowLoadDialog] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [drugInput, setDrugInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [labResults, setLabResults] = useState({
    bloodPressure: '',
    bloodGlucose: '',
    cholesterolLDL: '',
    cholesterolHDL: '',
    hemoglobinA1c: '',
    hemoglobin: '',
    whiteBloodCellCount: '',
    thyroidStimulatingHormone: '',
  });
  const [patientData, setPatientData] = useState({
    age: '',
    gender: '',
    ageGroup: '',
    recentTravel: '',         // Travel history
    severities: {},           // Severity of symptoms
    durations: {},            // Duration of symptoms
    symptoms: [],             // List of symptoms
    drugHistory: [],          // List of drugs
    riskFactors: {},          // Risk factors
    labResults: {},           // Lab results data (if applicable)
  });
  
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRiskFactors, setSelectedRiskFactors] = useState({});
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    const profiles = JSON.parse(localStorage.getItem('savedProfiles')) || [];
    setSavedProfiles(profiles);
  }, []);

  useEffect(() => {
    const data = loadPatientData();
    if (data) {
      setPatientData(data);
    }
  }, []);

  const handleScoreCalculated = (score) => {
    const { percentage, level } = calculateConfidence(score);
    const confidenceColor = getConfidenceColor(level);
  
    // Update your state with the calculated values
    setResults((prevResults) =>
      prevResults.map((result) => ({
        ...result,
        confidence: percentage,
        confidenceLevel: level,
        confidenceColor: confidenceColor,
      }))
    );
  };
  
  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleRiskFactorChange = (event, riskFactor) => {
    setSelectedRiskFactors((prev) => ({
      ...prev,
      [riskFactor]: !prev[riskFactor],
    }));
  };

  const renderRiskFactors = () => {
    return Object.keys(riskFactorWeights).map((riskFactor) => (
      <FormControlLabel
        key={riskFactor}
        control={
          <Checkbox
            checked={!!selectedRiskFactors[riskFactor]}
            onChange={(event) => handleRiskFactorChange(event, riskFactor)}
            name={riskFactor}
          />
        }
        label={riskFactor.charAt(0).toUpperCase() + riskFactor.slice(1)}
      />
    ));
  };

  const handleAddDrug = (newDrug) => {
    setDrugHistory((prevHistory) => [...prevHistory, newDrug]);
  };

  const handleSymptomChange = useCallback((event, newValue) => {
    setSymptoms(newValue);
  }, []);


  const handleSaveProfile = () => {
    const newProfile = { name: profileName, data: { ...patientData, symptoms } };
    const updatedProfiles = [...savedProfiles, newProfile];
    setSavedProfiles(updatedProfiles);
    localStorage.setItem('savedProfiles', JSON.stringify(updatedProfiles));
    setShowSaveDialog(false);
    setProfileName('');
  };

  const handleSave = () => {
    localStorage.setItem('patientData', JSON.stringify(patientData));
  };

  const handleLabResultChange = (e) => {
    setLabResults(prevResults => ({
      ...prevResults,
      [e.target.name]: e.target.value,
    }));
  };
  
  const handleLoadProfile = (profile) => {
    setPatientData(profile.data);
    setSymptoms(profile.data.symptoms);
    setCurrentProfile(profile.name);
    setShowLoadDialog(false);
  };



  const handlePatientDataChange = useCallback((event) => {
    const { name, value } = event.target;
    setPatientData(prevData => ({
      ...prevData,
      [name]: value,
      ageGroup: name === 'age' ? calculateAgeGroup(Number(value)) : prevData.ageGroup
    }));
  }, []);

  const handleSeverityChange = useCallback((symptom, value) => {
    setPatientData(prevData => ({
      ...prevData,
      severities: {
        ...prevData.severities,
        [symptom]: value
      }
    }));
  }, []);


const handleDrugInputChange = (event) => {
  const value = event.target.value.trim();
  setDrugInput(value);

  if (value) {
    const lowerCaseValue = value.toLowerCase(); 

 

    // Fetch suggestions using fuzzy matching
    const filteredSuggestions = results.map(result => result.item);

    // Sort suggestions to prioritize exact or near matches
    const sortedSuggestions = filteredSuggestions.sort((a, b) => {
      const lowerCaseA = a.toLowerCase();
      const lowerCaseB = b.toLowerCase();

      if (lowerCaseA === lowerCaseValue) return -1; // Exact match first
      if (lowerCaseB === lowerCaseValue) return 1;
      return 0; // Maintain original order for other cases
    });

    setSuggestions(sortedSuggestions);
  } else {
    setSuggestions([]);
  }
};

  const handleDurationChange = useCallback((symptom, value) => {
    setPatientData(prevData => ({
      ...prevData,
      durations: {
        ...prevData.durations,
        [symptom]: value
      }
    }));
  }, []);

  const checkSymptoms = useCallback((e) => {
    e.preventDefault();
    setLoading(true);

    if (symptoms.length < 2) {
      setError('Please enter at least two symptoms.');
      setResults([]);
      setLoading(false);
      setOpenSnackbar(true);
      return;
    }

    setError('');
    const diagnosis = calculateConditionScores(symptoms, patientData, drugHistory, labResults, inputs, selectedRiskFactors);

    const updatedResults = diagnosis.map(result => {
      const confidenceLevel = getConfidenceLevel(result.confidence);
      return {
        ...result,
        confidenceLevel,
        confidenceColor: getConfidenceColor(confidenceLevel)
      };
    });

    setResults(updatedResults);
    setLoading(false);
  }, [symptoms, patientData, drugHistory, labResults, inputs, selectedRiskFactors]);

  const symptomInputs = useMemo(() => (
    <div>
      <Autocomplete
        multiple
        options={suggestions}
        onInputChange={(event, newInputValue) => {
          fetchSuggestions(newInputValue, setSuggestions);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Symptoms" variant="outlined" />
        )}
        value={symptoms}
        onChange={handleSymptomChange}
        getOptionLabel={(option) => option.label || option}
        filterSelectedOptions
      />

      {symptoms.map((symptom) => (
        <div key={symptom} style={{ marginBottom: '20px' }}>
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
                onChange={(_, value) => handleSeverityChange(symptom, value)}
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
                onChange={(_, value) => handleDurationChange(symptom, value)}
                style={{ color: '#27c7b8' }}
                aria-describedby={`duration-description-${symptom}`}
              />
              <Typography id={`duration-description-${symptom}`} variant="caption" color="textSecondary">
                Adjust the number of days the symptom has been present.
              </Typography>
            </Grid>
          </Grid>

          <Paper elevation={1} style={{ padding: '10px', marginTop: '10px', backgroundColor: '#002432' }}>
            <Typography variant="body2" style={{ color: '#dfe4e5' }}>
              <strong>Summary:</strong>
            </Typography>
            <Typography variant="body2" color="#dfe4e5 ">
              Severity: {patientData.severities[symptom] || 'Not set'}
            </Typography>
            <Typography variant="body2" color="#dfe4e5">
              Duration: {patientData.durations[symptom] || 'Not set'} days
            </Typography>
          </Paper>
        </div>
      ))}
    </div>
  ), [symptoms, suggestions, handleSymptomChange, handleSeverityChange, handleDurationChange, patientData.severities, patientData.durations]);


  const handleSubmit = () => {
    const calculatedScores = calculateConditionScores(
      symptoms,
      patientData,
      drugHistory,
      labResults,
      inputs,
      selectedRiskFactors
    );
    setResults(calculatedScores);
    handleCloseDialog();
  };

  const theme = {
    primary: '#002432',
    secondary: '#dfe4e5',
    accent: '#27c7b8',
    highlight: '#f78837'
  };

  return (
    <Paper elevation={3} sx={{ 
      padding: '30px', 
      margin: '30px', 
      backgroundColor: theme.secondary,
      borderRadius: '15px'
    }}>
      {loading && <LinearProgress />}
  
      <Typography variant="h3" gutterBottom sx={{ color: theme.primary, alignItems: 'center', fontWeight: 'bold' }}>
        Symptom Checker
      </Typography>
  
      {/* Drug History Option */}
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={showDrugHistory}
                onChange={() => setShowDrugHistory(!showDrugHistory)}
              />
            }
            label="Show Drugs History"
          />
        </Grid>
      </Grid>
  
      {showDrugHistory && drugHistory.length > 0 && (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6" sx={{ color: theme.primary }}>
            Your Drug History
          </Typography>
          <ul>
            {drugHistory.map((drug, index) => (
              <li key={index}>{drug.name}: {drug.dosage}</li>
            ))}
          </ul>
        </Box>
      )}
  
      {/* Profile Management UI */}
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item>
          <Button variant="outlined" onClick={() => setShowSaveDialog(true)} sx={{ color: theme.secondary, backgroundColor: theme.accent, fontWeight: 'bold' }}>
            Save Profile
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => setShowLoadDialog(true)} sx={{ color: theme.secondary, backgroundColor: theme.accent, fontWeight: 'bold' }}>
            Load Profile
          </Button>
        </Grid>
        {currentProfile && (
          <Grid item>
            <Typography variant="body2">Current Profile: {currentProfile}</Typography>
          </Grid>
        )}
      </Grid>
  
      <Button onClick={handleSave}>Save Patient Data </Button>
  
      <Typography variant="body1" paragraph sx={{ color: theme.primary, marginTop: '30px', marginBottom: '30px' }}>
        Enter your symptoms and personal details for a more accurate assessment.
      </Typography>
  
      <form onSubmit={checkSymptoms}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              name="age"
              label="Age"
              type="number"
              value={patientData.age}
              onChange={handlePatientDataChange}
              InputProps={{ sx: { color: theme.primary } }}
              InputLabelProps={{ sx: { color: theme.primary } }}
              sx={{ backgroundColor: '#dfe4e5', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: theme.primary }}>Gender</InputLabel>
              <Select
                name="gender"
                value={patientData.gender}
                onChange={handlePatientDataChange}
                sx={{ color: theme.primary, backgroundColor: '#dfe4e5 ', borderRadius: '8px' }}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: theme.primary }}>Recent Travel</InputLabel>
              <Select
                name="recentTravel"
                value={patientData.recentTravel}
                onChange={handlePatientDataChange}
                sx={{ color: theme.primary, backgroundColor: '#dfe4e5', borderRadius: '8px' }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Sub-Saharan Africa">Sub-Saharan Africa</MenuItem>
                <MenuItem value="South Asia">South Asia</MenuItem>
                <MenuItem value="East Asia">East Asia</MenuItem>
                <MenuItem value="Latin America">Latin America</MenuItem>
                <MenuItem value="Middle East">Middle East</MenuItem>
                <MenuItem value="North America">North America</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
  

        {/* Drug Input Section */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <Autocomplete
              options={drugOptions}
              value={drugInput}
              onChange={(event, newValue) => setDrugInput(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter Drug"
                  fullWidth
                  variant="outlined"
                  sx={{ marginBottom: '10px', backgroundColor: '#dfe4e5', color: '#002432' }}
                  onChange={handleDrugInputChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              onClick={handleAddDrug}
              variant="contained"
              sx={{ backgroundColor: '#dfe4e5 ', color: '#dfe4e5', width: '100%' }}
            >
              Add Drug
            </Button>
          </Grid>
        </Grid>
  
        {/* Display Added Drugs */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ marginTop: '20px' }}>Added Drugs:</Typography>
          {drugHistory.length > 0 ? (
            drugHistory.map((drug, index) => (
              <Typography key={index} variant="body2" sx={{ marginTop: '5px' }}>
                {drug.name}: {drug.dosage || 'Dosage not specified'}
              </Typography>
            ))
          ) : (
            <Typography variant="body2" sx={{ color: '#002432' }}>No drugs added yet.</Typography>
          )}
        </Grid>
  
        {/* Risk Factors Section */}
        <Grid container spacing={2} sx={{ marginTop: '30px' }}>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ backgroundColor: theme.accent, color: theme.secondary }} onClick={handleOpenDialog}>
              Enter Risk Factors
            </Button>
          </Grid>
        </Grid>
  
  {/* Risk Factors Dialog */}
<Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
  <DialogTitle sx={{ textAlign: 'center' }}>Let's Learn More About Your Health!</DialogTitle>
  <DialogContent>
    <Typography variant="body1" sx={{ marginBottom: '16px', textAlign: 'center' }}>
      Please select any risk factors that apply to you. You can choose multiple options:
    </Typography>
    <List>
      {Object.keys(riskFactorWeights).map((riskFactor) => (
        <ListItem key={riskFactor}>
          <ListItemButton
            onClick={() => handleRiskFactorChange(riskFactor)}
            sx={{
              backgroundColor: selectedRiskFactors[riskFactor] ? theme.primary : 'transparent',
              '&:hover': {
                backgroundColor: selectedRiskFactors[riskFactor] ? theme.primary : theme.hover,
              },
              borderRadius: '8px',
              transition: 'background-color 0.2s ease',
            }}
          >
            <ListItemIcon>
              <Checkbox
                checked={selectedRiskFactors[riskFactor]}
                onChange={() => handleRiskFactorChange(riskFactor)}
                color="primary"
              />
            </ListItemIcon>
            <ListItemText
              primary={riskFactor.charAt(0).toUpperCase() + riskFactor.slice(1)}
              primaryTypographyProps={{
                sx: {
                  fontWeight: selectedRiskFactors[riskFactor] ? 'bold' : 'normal',
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </DialogContent>
  <DialogActions sx={{ justifyContent: 'space-between' }}>
    <Button variant="outlined" onClick={handleCloseDialog} sx={{ flexGrow: 1, marginRight: '8px' }}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleSubmit} sx={{ flexGrow: 1, color: theme.secondary }}>
      Submit
    </Button>
  </DialogActions>
</Dialog>

  

  
        {symptomInputs}
  
        <Button
          type="submit"
          variant="contained"
          sx={{ 
            marginTop: '30px', 
            backgroundColor: theme.highlight, 
            color: theme.secondary,
            '&:hover': {
              backgroundColor: theme.primary
            }
          }}
        >
          {loading ? <CircularProgress size={24} /> : 'Check Symptoms'}
        </Button>
      </form>
  
      {/* Snackbar for Errors */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
  
      {/* Results Section */}
      {results.length > 0 && (
        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h4" gutterBottom sx={{ color: theme.primary, fontWeight: 'bold' }}>
            Results
          </Typography>
          {results.map(result => (
            <Accordion 
              key={result.condition} 
              sx={{ 
                marginBottom: '20px', 
                width: '100%',
                backgroundColor: theme.secondary, 
                borderRadius: '10px',
                border: `2px solid ${theme.highlight}`,
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: theme.primary }} />}
                sx={{ 
                  backgroundColor: theme.secondary,
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              >
                <Typography variant="h6" sx={{ color: theme.primary, marginLeft: '20px', fontWeight: 'bold' }}>
                  {result.condition}
                </Typography>

                <Chip 
                  label={`Confidence: ${result.score.toFixed(0)}% (${result.confidenceLevel})`} 
                  sx={{ 
                    marginLeft: '15px', 
                    backgroundColor: result.confidenceColor, 
                    color: theme.primary
                  }} 
                />
              </AccordionSummary>
  
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '10px',
                    color: theme.secondary,
                    backgroundColor: theme.primary,
                    padding: '10px',
                    borderRadius: '8px',
                  }}
                >
                  {guidance[result.condition] ? (
                    <>
                      <Typography variant="body2" sx={{ marginTop: '10px', color: theme.accent }}>
                        <strong>Next Steps:</strong> {guidance[result.condition].steps}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          marginTop: '10px',
                          color: '#dfe4e5',
                          textAlign: 'left',
                        }}
                      >
                        <strong>About this condition:</strong> 
                        {guidance[result.condition].content.split('\n').map((line, index) => (
                          line.trim() ? (
                            <Typography key={index} variant="body2" component="p">{line}</Typography>
                          ) : (
                            <br key={index} />
                          )
                        ))}
                      </Typography>
                    </>
                  ) : 'No guidance available.'}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
  
      {/* Save Profile Dialog */}
      <Dialog open={showSaveDialog} onClose={() => setShowSaveDialog(false)}>
        <DialogTitle>Save Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Profile Name"
            fullWidth
            variant="standard"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSaveDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveProfile}>Save</Button>
        </DialogActions>
      </Dialog>
  
      {/* Load Profile Dialog */}
      <Dialog open={showLoadDialog} onClose={() => setShowLoadDialog(false)}>
        <DialogTitle>Load Profile</DialogTitle>
        <DialogContent>
          {savedProfiles.map((profile, index) => (
            <Button key={index} onClick={() => handleLoadProfile(profile)}>
              {profile.name}
            </Button>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowLoadDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
  
};

export default SymptomChecker;