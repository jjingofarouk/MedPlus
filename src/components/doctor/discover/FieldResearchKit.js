import React, { useState, useEffect } from 'react';
import { FaMapPin, FaDatabase, FaChartLine, FaUpload } from 'react-icons/fa';
import Map, { Marker, Popup } from 'react-map-gl'; // Example library for mapping
import axios from 'axios'; // For API calls
import { ToastContainer, toast } from 'react-toastify'; // For notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import LoadingSpinner from '../ui/LoadingSpinner'; // Custom loading spinner component
import SampleForm from '../SampleForm'; // Custom form component for entering sample data
import { Bar } from 'react-chartjs-2'; // For data visualization
import "./FieldResearchKit.css"; // Custom CSS for styling
import DataExport from './DataExport'; // Export component for CSV/Excel
import DataUpload from './DataUpload'; // Component for bulk data upload
import FilterOptions from '../FilterOptions'; // Component for filtering data by criteria

const FieldResearchKit = () => {
  const [fieldData, setFieldData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mapView, setMapView] = useState({
    latitude: -1.286389, // Default latitude for Uganda
    longitude: 36.817223, // Default longitude for Uganda
    zoom: 5,
  });
  const [chartData, setChartData] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    fetchFieldData();
  }, []);

  const fetchFieldData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/field-data'); // Replace with your API endpoint
      setFieldData(response.data);
      toast.success('Field data loaded successfully.');
      generateChartData(response.data);
    } catch (err) {
      setError(err.message);
      toast.error(`Error fetching data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const generateChartData = (data) => {
    const labels = data.map(item => item.date);
    const values = data.map(item => item.value);
    
    setChartData({
      labels,
      datasets: [
        {
          label: 'Field Data Over Time',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  const handleNewSample = async (newSample) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/field-data', newSample); // Replace with your API endpoint
      setFieldData([...fieldData, response.data]);
      toast.success('New sample data saved successfully.');
      generateChartData([...fieldData, response.data]);
    } catch (err) {
      setError(err.message);
      toast.error(`Error saving sample data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkerClick = (data) => {
    setSelectedMarker(data);
  };

  const handleClosePopup = () => {
    setSelectedMarker(null);
  };

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <ToastContainer />
      <div className="flex items-center mb-4">
        <FaMapPin className="w-8 h-8 text-green-500" />
        <h3 className="ml-3 text-xl font-bold">Field Research Kit</h3>
      </div>
      <p className="text-gray-600">
        Comprehensive tool for collecting and managing data during field research, including sample management and GPS mapping.
      </p>

      {loading && <LoadingSpinner />}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <SampleForm onSubmit={handleNewSample} /> {/* Sample form for data entry */}
      <DataUpload onUpload={fetchFieldData} /> {/* Component for bulk data upload */}
      <DataExport data={fieldData} /> {/* Component for data export */}

      <FilterOptions onFilter={fetchFieldData} /> {/* Component for filtering data */}

      {!loading && !error && chartData && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Data Analysis</h4>
          <Bar type="line" data={chartData} options={{ responsive: true }} />
        </div>
      )}

      <div className="mt-6">
        <h4 className="text-lg font-semibold">Map View</h4>
        <Map
          initialViewState={mapView}
          style={{ width: '100%', height: '400px' }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          {/* Add markers for each field data point */}
          {fieldData.map(item => (
            <Marker key={item.id} longitude={item.longitude} latitude={item.latitude}>
              <div className="marker" onClick={() => handleMarkerClick(item)}></div>
            </Marker>
          ))}
          
          {selectedMarker && (
            <Popup
              longitude={selectedMarker.longitude}
              latitude={selectedMarker.latitude}
              onClose={handleClosePopup}
            >
              <div>
                <h4>{selectedMarker.title}</h4>
                <p>{selectedMarker.description}</p>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
};

export default FieldResearchKit;
