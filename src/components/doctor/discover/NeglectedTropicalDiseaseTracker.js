import React, { useState, useEffect } from 'react';
import { FaStethoscope } from 'react-icons/fa'; // Import your icon library here
import axios from 'axios'; // For API requests
import { Bar } from 'react-chartjs-2'; // For data visualization
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; // Import required components
import { Select } from '../ui/select';
import { toast } from 'react-toastify'; // For notifications

// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const NeglectedTropicalDiseaseTracker = () => {
  const [diseases, setDiseases] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [symptoms, setSymptoms] = useState([]);
  const [patientData, setPatientData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchDiseases = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/ntd'); // Replace with your actual API endpoint
        setDiseases(response.data);
      } catch (err) {
        setError('Error fetching neglected tropical diseases data.');
        toast.error('Failed to load diseases data');
      } finally {
        setLoading(false);
      }
    };

    fetchDiseases();
  }, []);

  const handleSelectDisease = (disease) => {
    setSelectedDisease(disease);
    setSymptoms(disease.symptoms); // Assume each disease has an array of symptoms
    toast.success(`Selected disease: ${disease.label}`);
  };

  const documentSymptoms = () => {
    const newPatientData = {
      disease: selectedDisease,
      symptoms: symptoms,
      location: location,
      date: new Date().toISOString(),
    };
    setPatientData([...patientData, newPatientData]);
    toast.success('Symptoms documented successfully!');
  };

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        toast.info('Location captured successfully!');
      }, () => {
        toast.error('Unable to retrieve location');
      });
    } else {
      toast.error('Geolocation is not supported by this browser');
    }
  };

  // Chart data preparation
  const prepareChartData = () => {
    const symptomCounts = {};
    patientData.forEach(data => {
      data.symptoms.forEach(symptom => {
        symptomCounts[symptom] = (symptomCounts[symptom] || 0) + 1;
      });
    });

    return {
      labels: Object.keys(symptomCounts),
      datasets: [
        {
          label: 'Symptom Count',
          data: Object.values(symptomCounts),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  const chartData = prepareChartData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <FaStethoscope className="w-8 h-8" />
        <h3 className="text-xl font-semibold ml-2">Neglected Tropical Disease Tracker</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Document and analyze symptoms of neglected tropical diseases common in Uganda.
      </p>

      <Select
        options={diseases.map(disease => ({
          value: disease.id,
          label: disease.name,
          symptoms: disease.symptoms,
        }))}
        onChange={handleSelectDisease}
        placeholder="Select a neglected tropical disease"
        className="mb-4"
      />

      {selectedDisease && (
        <div>
          <h4 className="text-lg font-semibold">Selected Disease: {selectedDisease.label}</h4>
          <button className="bg-blue-500 text-white p-2 rounded mb-2" onClick={fetchLocation}>
            Capture Location
          </button>
          <div>
            <h5 className="font-medium">Symptoms:</h5>
            <ul>
              {symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>
          <button className="bg-green-500 text-white p-2 rounded mt-4" onClick={documentSymptoms}>
            Document Symptoms
          </button>
        </div>
      )}

      <h4 className="text-lg font-semibold mt-6">Symptom Tracking Chart:</h4>
      <Bar data={chartData} options={{ responsive: true }} />

      <h4 className="text-lg font-semibold mt-6">Patient Data:</h4>
      <ul className="list-disc pl-5">
        {patientData.map((data, index) => (
          <li key={index}>
            <strong>Disease:</strong> {data.disease.label}, <strong>Date:</strong> {data.date}, <strong>Location:</strong> {data.location?.lat}, {data.location?.lng}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NeglectedTropicalDiseaseTracker;
