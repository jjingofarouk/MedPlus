import React, { useState, useEffect } from 'react';
import {
  FaChartBar,
  FaDownload,
  FaUpload,
  FaClipboardList,
  FaMap,
  FaBell,
  FaSearch
} from 'react-icons/fa';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import './LocalDiseasePrevalenceTracker.css';

const LocalDiseasePrevalenceTracker = () => {
  const [diseaseData, setDiseaseData] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState('');
  const [location, setLocation] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const diseases = [
    'Malaria',
    'Tuberculosis',
    'HIV/AIDS',
    'Diabetes',
    'Hypertension',
    'Sickle Cell Disease',
    'Leprosy',
    // Add more diseases as needed
  ];

  const trackDiseasePrevalence = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/disease/prevalence/${selectedDisease}?location=${location}`);
      const data = await response.json();
      setDiseaseData(data);
      prepareChartData(data);
      if (data.some((d) => d.prevalenceRate > 10)) {
        triggerAlert(`Alert: High prevalence of ${selectedDisease} detected in ${location}!`);
      }
    } catch (err) {
      setError('Error fetching disease prevalence data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const prepareChartData = (data) => {
    const labels = data.map((d) => d.year);
    const prevalenceRates = data.map((d) => d.prevalenceRate);
    setChartData({
      labels,
      datasets: [{
        label: 'Prevalence Rate (%)',
        data: prevalenceRates,
        backgroundColor: 'rgba(39, 199, 184, 0.5)',
        borderColor: '#27c7b8',
        borderWidth: 2,
      }],
    });
  };

  const handleSymptomCheck = async () => {
    if (!symptoms) return;
    try {
      const response = await fetch(`/api/symptom-check?symptoms=${symptoms}`);
      const suggestions = await response.json();
      console.log("Possible diseases based on symptoms: ", suggestions);
      triggerAlert(`Possible diseases based on symptoms: ${suggestions.join(', ')}`);
    } catch (error) {
      console.error("Error checking symptoms", error);
      triggerAlert('Error checking symptoms. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackDiseasePrevalence();
  };

  const triggerAlert = (message) => {
    setAlertMessage(message);
    setAlert(true);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  // Function to handle downloading the disease data
  const handleDownload = () => {
    const csvContent = `data:text/csv;charset=utf-8,Year,Prevalence Rate\n` + 
      diseaseData.map(d => `${d.year},${d.prevalenceRate}`).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${selectedDisease}_prevalence_data.csv`);
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link); // Clean up
  };

  // Function to handle uploading a file
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/disease/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log("File upload result: ", result);
      triggerAlert('File uploaded successfully!');
    } catch (error) {
      console.error("Error uploading file", error);
      triggerAlert('Error uploading file. Please try again.');
    }
  };

  return (
    <Card className="tracker-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          Local Disease Prevalence Tracker
        </Typography>
        <Typography color="textSecondary">
          Monitor and analyze disease prevalence in Uganda, including endemic diseases.
        </Typography>
        <form onSubmit={handleSubmit} className="disease-form">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                select
                label="Select Disease"
                value={selectedDisease}
                onChange={(e) => setSelectedDisease(e.target.value)}
                fullWidth
                SelectProps={{
                  native: true,
                }}
              >
                {diseases.map((disease) => (
                  <option key={disease} value={disease}>{disease}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                fullWidth
              />
              <Button onClick={handleSymptomCheck} startIcon={<FaSearch />}>
                Check Symptoms
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : 'Track Prevalence'}
              </Button>
            </Grid>
          </Grid>
        </form>

        {error && <p className="error-message">{error}</p>}

        {diseaseData.length > 0 && (
          <div className="results">
            <h3>Results for {selectedDisease} in {location}</h3>
            <Bar type="bar" data={chartData} />
            <ul>
              {diseaseData.map((data, index) => (
                <li key={index}>{data.year}: {data.prevalenceRate}%</li>
              ))}
            </ul>
          </div>
        )}

        <div className="actions">
          <Button onClick={handleDownload} startIcon={<FaDownload />}>Download Data</Button>
          <input type="file" onChange={handleUpload} accept=".csv,.json" />
        </div>

        <div className="map">
          <h4>Visualize Data on Map</h4>
          <FaMap className="map-icon" />
          {/* Map component would go here */}
        </div>
      </CardContent>

      <Snackbar
        open={alert}
        onClose={handleCloseAlert}
        message={alertMessage}
        autoHideDuration={6000}
      />
    </Card>
  );
};

export default LocalDiseasePrevalenceTracker;
