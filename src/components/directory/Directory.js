import React, { useState, useEffect } from "react"; 
import './Directory.css';
import PublicHospitalsSection from './PublicHospitalsSection';
import PharmaciesSection from './PharmaciesSection';
import MobileClinicsSection from './MobileClinicsSection';
import HealthCampaignsSection from './HealthCampaignsSection';
import HealthEventsSection from './HealthEventsSection';
import EmergencyRouteSection from './EmergencyRouteSection';
import DoctorsSection from './DoctorsSection'; // Import the DoctorsSection component
import Spinner from 'H:/Med/medhub/src/components/ui/Spinner.js'; // Import the Spinner component

const Directory = () => {
  const [activeTab, setActiveTab] = useState('hospitals');
  const [publicHospitals, setPublicHospitals] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [mobileClinics, setMobileClinics] = useState([]);
  const [healthCampaigns, setHealthCampaigns] = useState([]);
  const [healthEvents, setHealthEvents] = useState([]);
  const [emergencyRoute, setEmergencyRoute] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchPublicHospitals();
      await fetchPharmacies();
      await fetchMobileClinics();
      await fetchHealthCampaigns();
      await fetchHealthEvents();
      await fetchEmergencyRoute();
      await fetchDoctors();
      setLoading(false);
    };

    fetchData();
  }, []);

  const tabs = [
    { id: 'hospitals', label: 'Hospitals', component: <PublicHospitalsSection hospitals={publicHospitals} /> },
    { id: 'pharmacies', label: 'Pharmacies', component: <PharmaciesSection pharmacies={pharmacies} /> },
    { id: 'clinics', label: 'Mobile Clinics', component: <MobileClinicsSection clinics={mobileClinics} /> },
    { id: 'campaigns', label: 'Health Campaigns', component: <HealthCampaignsSection campaigns={healthCampaigns} /> },
    { id: 'events', label: 'Health Events', component: <HealthEventsSection events={healthEvents} /> },
    { id: 'routes', label: 'Emergency Routes', component: <EmergencyRouteSection emergencyRoute={emergencyRoute} /> },
    { id: 'doctors', label: 'Doctors', component: <DoctorsSection doctors={doctors} /> },
  ];

  const fetchPublicHospitals = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/public-hospitals'); // Update with the correct endpoint
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPublicHospitals(data);
    } catch (error) {
      console.error('Error fetching public hospitals:', error);
    }
  };

  const fetchPharmacies = async () => {
    // Fetch data from your backend if available
    try {
      const response = await fetch('http://localhost:5000/api/pharmacies'); // Update with the correct endpoint
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPharmacies(data);
    } catch (error) {
      console.error('Error fetching pharmacies:', error);
    }
  };

  const fetchDoctors = async () => {
    // Fetch data from your backend if available
    try {
      const response = await fetch('http://localhost:5000/api/doctors'); // Update with the correct endpoint
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const fetchMobileClinics = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/mobile-clinics'); // Update with the correct endpoint
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setMobileClinics(data);
    } catch (error) {
      console.error('Error fetching mobile clinics:', error);
    }
  };

  const fetchHealthCampaigns = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/health-campaigns'); // Update with the correct endpoint
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setHealthCampaigns(data);
    } catch (error) {
      console.error('Error fetching health campaigns:', error);
    }
  };

  const fetchHealthEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/health-events'); // Update with the correct endpoint
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setHealthEvents(data);
    } catch (error) {
      console.error('Error fetching health events:', error);
    }
  };

  const fetchEmergencyRoute = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/emergency-route'); // Update with the correct endpoint
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setEmergencyRoute(data);
    } catch (error) {
      console.error('Error fetching emergency route:', error);
    }
  };

  if (loading) {
    return <div className="spinner-container"><Spinner /></div>; // Show spinner while loading
  }

  return (
    <div className="directory">
      <NavBar />
      <h1>Quick Care Connect</h1>
      <div className="tab-container">
        <div className="tab-buttons">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default Directory;
