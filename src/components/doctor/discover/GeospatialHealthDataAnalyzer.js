import React, { useState, useEffect } from 'react';
import { FaMapPin, FaCog, FaChartLine } from 'react-icons/fa'; // Additional icons
import Map from 'react-map-gl'; // Example library for mapping (replace with actual map library)
import axios from 'axios'; // For API calls
import { Select } from '../ui/select';
import { ToastContainer, toast } from 'react-toastify'; // For notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import LoadingSpinner from '../ui/LoadingSpinner'; // Custom loading spinner component
import { Bar } from 'react-chartjs-2'; // For data visualization
import { Marker } from 'react-map-gl'; // or the appropriate library

const GeospatialHealthDataAnalyzer = () => {
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mapView, setMapView] = useState({
    latitude: -1.286389, // Default latitude for Uganda
    longitude: 36.817223, // Default longitude for Uganda
    zoom: 5,
  });
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchHealthData();
  }, []);

  const fetchHealthData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/geospatial-data'); // Replace with your API endpoint
      setData(response.data);
      toast.success('Geospatial health data loaded successfully.');
    } catch (err) {
      setError(err.message);
      toast.error(`Error fetching data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRegionChange = (selectedOption) => {
    setSelectedRegion(selectedOption);
    analyzeSpatialPatterns(selectedOption.value);
  };

  const analyzeSpatialPatterns = (region) => {
    console.log(`Analyzing spatial patterns in ${region}...`);
    
    // Simulate data analysis
    const analyzedData = data.filter(item => item.region === region);
    generateChartData(analyzedData);

    // Integrate with mapping library (e.g., showing markers)
    setMapView({
      latitude: analyzedData[0]?.latitude || mapView.latitude,
      longitude: analyzedData[0]?.longitude || mapView.longitude,
      zoom: 8,
    });
  };

  const generateChartData = (analyzedData) => {
    const labels = analyzedData.map(item => item.date);
    const casesData = analyzedData.map(item => item.cases);
    
    setChartData({
      labels,
      datasets: [
        {
          label: 'Cases Over Time',
          data: casesData,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  const regionsOptions = data.map(item => ({
    value: item.region,
    label: item.region,
  }));

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <ToastContainer />
      <div className="flex items-center mb-4">
        <FaMapPin className="w-8 h-8 text-green-500" />
        <h3 className="ml-3 text-xl font-bold">Geospatial Health Data Analyzer</h3>
        <FaCog className="ml-auto w-6 h-6 text-gray-600 cursor-pointer" onClick={() => alert('Settings clicked!')} />
      </div>
      <p className="text-gray-600">
        Integrates GIS with health data to analyze spatial patterns of diseases and resource distribution in Uganda.
      </p>

      <div className="mt-4">
        <Select
          options={regionsOptions}
          placeholder="Select Region..."
          onChange={handleRegionChange}
        />
      </div>

      {loading && <LoadingSpinner />}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {!loading && !error && chartData && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Cases Analysis</h4>
          <Bar type="line" data={chartData} options={{ responsive: true }} />
        </div>
      )}

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Map View</h4>
        <Map
          initialViewState={mapView}
          style={{ width: '100%', height: '400px' }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          // onViewportChange={setMapView} // Uncomment to enable zoom and pan controls
        >
          {/* Add markers for each analyzed data point */}
          {data.map(item => (
            <Marker key={item.id} longitude={item.longitude} latitude={item.latitude}>
              <div className="marker"></div>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
};

export default GeospatialHealthDataAnalyzer;
