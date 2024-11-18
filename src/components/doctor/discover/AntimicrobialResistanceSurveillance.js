import React, { useState, useEffect } from 'react';
import { FaBacteria } from 'react-icons/fa'; // Import your icon library here
import { Select } from '../ui/select';
import axios from 'axios'; // For API calls
import { Bar } from 'react-chartjs-2'; // For data visualization
import { ToastContainer, toast } from 'react-toastify'; // For notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import LoadingSpinner from '../ui/LoadingSpinner'; // Custom loading spinner component

const AntimicrobialResistanceSurveillance = () => {
  const [selectedAntibiotic, setSelectedAntibiotic] = useState(null);
  const [resistanceData, setResistanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedDateRange, setSelectedDateRange] = useState([new Date(), new Date()]);

  // Fetch antibiotics, locations, and resistance data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [antibioticsResponse, locationsResponse] = await Promise.all([
          axios.get('/api/antibiotics'), // Replace with your API endpoint
          axios.get('/api/locations'), // Endpoint for locations
        ]);
        setResistanceData(antibioticsResponse.data);
        setLocations(locationsResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAntibioticChange = (selectedOption) => {
    setSelectedAntibiotic(selectedOption);
    trackResistancePatterns(selectedOption.value, selectedLocation);
  };

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
    trackResistancePatterns(selectedAntibiotic.value, selectedOption);
  };

  const handleDateRangeChange = (dates) => {
    setSelectedDateRange(dates);
    trackResistancePatterns(selectedAntibiotic.value, selectedLocation);
  };

  const trackResistancePatterns = async (antibiotic, location) => {
    if (!antibiotic || !location) return;
    
    console.log(`Tracking resistance patterns for ${antibiotic} in ${location.label}...`);
    try {
      const response = await axios.get(`/api/resistance-data`, {
        params: {
          antibiotic,
          location: location.value,
          startDate: selectedDateRange[0].toISOString(),
          endDate: selectedDateRange[1].toISOString(),
        },
      });
      setResistanceData(response.data);
      // Show a success notification
      toast.success(`Successfully fetched resistance patterns for ${antibiotic} in ${location.label}.`);
    } catch (err) {
      setError(err.message);
      toast.error(`Error fetching data: ${err.message}`);
    }
  };

  const getChartData = () => {
    return {
      labels: resistanceData.map(data => data.date),
      datasets: [
        {
          label: 'Resistance Rate (%)',
          data: resistanceData.map(data => data.resistanceRate),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <ToastContainer />
      <div className="flex items-center mb-4">
        <FaBacteria className="w-8 h-8 text-red-500" />
        <h3 className="ml-3 text-xl font-bold">Antimicrobial Resistance Surveillance</h3>
      </div>
      <p className="text-gray-600">
        Tracks and reports antimicrobial resistance patterns relevant to Uganda's healthcare context.
      </p>

      <div className="mt-4">
        <Select
          options={resistanceData.map(data => ({
            value: data.antibiotic,
            label: data.antibiotic,
          }))}
          placeholder="Select Antibiotic..."
          onChange={handleAntibioticChange}
        />
      </div>

      <div className="mt-4">
        <Select
          options={locations.map(location => ({
            value: location.id,
            label: location.name,
          }))}
          placeholder="Select Location..."
          onChange={handleLocationChange}
        />
      </div>

      <div className="mt-4">
        <input
          type="date"
          value={selectedDateRange[0].toISOString().split('T')[0]}
          onChange={(e) => handleDateRangeChange([new Date(e.target.value), selectedDateRange[1]])}
          className="mr-2"
        />
        <input
          type="date"
          value={selectedDateRange[1].toISOString().split('T')[0]}
          onChange={(e) => handleDateRangeChange([selectedDateRange[0], new Date(e.target.value)])}
        />
      </div>

      {loading && <LoadingSpinner />}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {!loading && !error && resistanceData.length > 0 && selectedAntibiotic && selectedLocation && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Resistance Patterns for {selectedAntibiotic.label} in {selectedLocation.label}</h4>
          <Bar type="line" data={getChartData()} options={{ responsive: true }} />
        </div>
      )}

      {/* Educational Resources Section */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold">Educational Resources</h4>
        <ul>
          <li>
            <a href="https://www.who.int/health-topics/antimicrobial-resistance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              WHO: Antimicrobial Resistance
            </a>
          </li>
          <li>
            <a href="https://www.cdc.gov/drugresistance/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              CDC: Antimicrobial Resistance
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AntimicrobialResistanceSurveillance;
