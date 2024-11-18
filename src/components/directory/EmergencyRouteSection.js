import React, { useState } from 'react';
import './EmergencyRouteSection.css';

const EmergencyRouteSection = ({ fetchEmergencyRoute, emergencyRoute }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchRoute = async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      await fetchEmergencyRoute(); // This function should set the emergencyRoute state
    } catch (err) {
      setError('Failed to fetch the emergency route. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="emergency-route-section">
      <h2>Emergency Route</h2>
      <button onClick={handleFetchRoute} disabled={loading}>
        {loading ? 'Fetching Route...' : 'Get Nearest Emergency Route'}
      </button>

      {error && <p className="error-message">{error}</p>}

      {emergencyRoute && (
        <div className="route-details">
          <div className="map-container">          </div>
          <h3>Route: {emergencyRoute.routeName}</h3>
          <p><strong>Path:</strong> {emergencyRoute.path.map(point => `(${point.lat}, ${point.lng})`).join(" > ")}</p>
          <p><strong>Estimated Time:</strong> {emergencyRoute.estimatedTime}</p>
          <p><strong>Distance:</strong> {emergencyRoute.distance}</p>
          <p><strong>Traffic Status:</strong> {emergencyRoute.trafficStatus}</p>
          <p><strong>Hospital Name:</strong> {emergencyRoute.hospitalName}</p>
          <p><strong>Hospital Contact:</strong> {emergencyRoute.hospitalContact}</p>

          <h4>Alternative Routes</h4>
          <ul>
            {emergencyRoute.alternativeRoutes.map(route => (
              <li key={route.routeName}>
                <h5>{route.routeName}</h5>
                <p><strong>Path:</strong> {route.path.map(point => `(${point.lat}, ${point.lng})`).join(" > ")}</p>
                <p><strong>Estimated Time:</strong> {route.estimatedTime}</p>
                <p><strong>Distance:</strong> {route.distance}</p>
                <p><strong>Traffic Status:</strong> {route.trafficStatus}</p>
              </li>
            ))}
          </ul>

          <div className="instructions">
            <h4>Instructions</h4>
            <p>Use the interactive map above to view the route and alternative routes visually. Follow the path instructions and check the estimated time to reach the hospital. For real-time traffic updates, ensure your location services are enabled.</p>
          </div>
        </div>
      )}

      <div className="emergency-contacts">
        <h2>Emergency Contacts</h2>
        <ul>
          <li>
            <h3>AAR Health Services</h3>
            <p>Plot 16A, Elizabeth Avenue, Upper Kololo</p>
            <p>Tel: 0716 166999; 0757 166999; 0414 258527; 0414 560900; 0312 261318/9</p>
          </li>
          <li>
            <h3>Bai Health & Medical Intin Centre</h3>
            <p>Rashid Khamis Road, Old Kampala</p>
            <p>Tel: 0414 255700</p>
          </li>
          <li>
            <h3>Bugolobi Nursing Home Ambulance Services</h3>
            <p>Plot 34/6, Spring Road, Bugolobi</p>
            <p>Tel: 0414 222354</p>
          </li>
          <li>
            <h3>Care Plus Emergency Medical Services</h3>
            <p>Plot 135, Kira Road, Kamwokya</p>
            <p>Tel: 0773 395395; 0706 395395</p>
          </li>
          <li>
            <h3>Case Medical Centre</h3>
            <p>Plot 69/71, Buganda Road</p>
            <p>Tel: 0312 250362</p>
          </li>
          <li>
            <h3>City Ambulance Limited</h3>
            <p>Plot 12, Acacia Avenue, Kololo (Opp. FINCA Head office)</p>
            <p>Tel: 0414 240158; 0392 177174</p>
            <p>Toll free: 0800 111044</p>
            <p>Email: <a href="mailto:info@cityambulance.net">info@cityambulance.net</a></p>
          </li>
          <li>
            <h3>International Air Ambulance</h3>
            <p>Kitgum House, Jinja Road</p>
            <p>Tel: 0414 344374</p>
          </li>
          <li>
            <h3>International Hospital Kampala</h3>
            <p>Plot 4686, Kisugu, Namuwongo</p>
            <p>Tel: 0312 200400</p>
          </li>
          <li>
            <h3>Rescue Medical Services</h3>
            <p>Mobile: 0772 217218; 0772 349990</p>
            <p>Email: <a href="mailto:rmsuganda@gmail.com">rmsuganda@gmail.com</a></p>
          </li>
          <li>
            <h3>St. John's Ambulance Services</h3>
            <p>Plot 29, Buganda Road, (next to Baden Powell House)</p>
            <p>Tel: 0414 230671; 0414 236007; 0312 264385; 0772 503296</p>
            <p>Email: <a href="mailto:stjohnug@utionline.co.ug">stjohnug@utionline.co.ug</a></p>
          </li>
          <li>
            <h3>Samaritan Ambulance Transport & Community</h3>
            <p>Katalemwa Road, Naguru, Nakawa</p>
            <p>Tel: 0414 288229</p>
          </li>
          <li>
            <h3>The Surgery</h3>
            <p>Plot 42, Naguru Drive, Naguru</p>
            <p>Tel: 0752 756003; 0312 256001/2/3</p>
          </li>
          <li>
            <h3>Uganda Ambulance Service</h3>
            <p>Mobile: 0782 556878</p>
            <p>Emergency: 0792 112999; 0712 112999</p>
            <p>Email: <a href="mailto:ugambula@yahoo.co.uk">ugambula@yahoo.co.uk</a></p>
          </li>
          <li>
            <h3>Uganda Charity Ambulance And Rescue Services (UCAARS)</h3>
            <p>Ntinda Shopping Center, Room D13</p>
            <p>Tel: 0704 493913</p>
          </li>
          <li>
            <h3>Uganda Police Ambulance Service</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EmergencyRouteSection;
