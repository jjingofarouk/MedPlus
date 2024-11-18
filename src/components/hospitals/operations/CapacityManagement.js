import React, { useState, useEffect } from 'react';
import './CapacityManagement.css'; // For custom styles

const CapacityManagement = () => {
  const [capacity, setCapacity] = useState({
    ICU: 30, 
    Wards: 60,
    Emergency: 90,
    Ventilators: 20, 
    Staff: 40,
    OxygenSupply: 70,
  });

  const [notifications, setNotifications] = useState([]);
  const [predictions, setPredictions] = useState({
    ICU: 'Stable', 
    Wards: 'Stable',
    Emergency: 'Overload Imminent',
  });
  const [crossHospitalResources, setCrossHospitalResources] = useState({
    nearbyHospitalBeds: 15,
    sharedVentilators: 5,
    ambulancesAvailable: 3,
  });

  // Simulate real-time updates to capacity and resources
  useEffect(() => {
    const interval = setInterval(() => {
      setCapacity((prev) => ({
        ICU: Math.min(prev.ICU + Math.floor(Math.random() * 5), 100),
        Wards: Math.min(prev.Wards + Math.floor(Math.random() * 3), 100),
        Emergency: Math.min(prev.Emergency + Math.floor(Math.random() * 4), 100),
        Ventilators: Math.max(prev.Ventilators - Math.floor(Math.random() * 2), 0),
        Staff: Math.max(prev.Staff - Math.floor(Math.random() * 2), 0),
        OxygenSupply: Math.max(prev.OxygenSupply - Math.floor(Math.random() * 1), 0),
      }));

      // Simulate cross-hospital sharing
      setCrossHospitalResources((prev) => ({
        nearbyHospitalBeds: Math.max(prev.nearbyHospitalBeds - Math.floor(Math.random() * 1), 0),
        sharedVentilators: Math.max(prev.sharedVentilators - Math.floor(Math.random() * 1), 0),
        ambulancesAvailable: Math.max(prev.ambulancesAvailable - Math.floor(Math.random() * 1), 0),
      }));

    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Notification for critical capacity
  useEffect(() => {
    const newNotifications = [];
    Object.entries(capacity).forEach(([unit, quantity]) => {
      if (unit !== 'Ventilators' && unit !== 'Staff' && quantity > 90) {
        newNotifications.push(`${unit} is over 90% capacity!`);
      }
    });
    setNotifications(newNotifications);
  }, [capacity]);

  const increaseCapacity = (unit) => {
    setCapacity((prev) => ({ ...prev, [unit]: prev[unit] + 10 }));
  };

  return (
    <div>
      <h2>Capacity Management</h2>
      <p>Monitor and optimize resource availability across all hospital units in real-time.</p>

      {/* Capacity Section */}
      <div className="capacity-container">
        {Object.entries(capacity).map(([unit, quantity]) => (
          <div key={unit} className="capacity-item">
            <h3>{unit}</h3>
            <p>{quantity} {unit === 'Ventilators' || unit === 'Staff' || unit === 'OxygenSupply' ? 'units' : '% full'}</p>
            <div className={`capacity-bar ${quantity >= 90 ? 'full' : quantity >= 70 ? 'high' : 'low'}`} style={{ width: `${unit === 'Ventilators' || unit === 'Staff' || unit === 'OxygenSupply' ? 100 : quantity}%` }}></div>
            {quantity < 100 && unit !== 'Ventilators' && unit !== 'Staff' && (
              <button onClick={() => increaseCapacity(unit)}>Increase Capacity</button>
            )}
          </div>
        ))}
      </div>

      {/* Cross-Hospital Resource Sharing */}
      <h4>Cross-Hospital Resource Sharing</h4>
      <ul>
        <li>Nearby Hospital Beds Available: {crossHospitalResources.nearbyHospitalBeds}</li>
        <li>Shared Ventilators Available: {crossHospitalResources.sharedVentilators}</li>
        <li>Ambulances Available: {crossHospitalResources.ambulancesAvailable}</li>
      </ul>

      {/* Emergency Surge Management */}
      <h4>Emergency Surge Management</h4>
      <p>
        In case of sudden surges (mass casualties or pandemics), additional surge beds, equipment, and staff can be allocated automatically.
      </p>

      {/* Environmental & Utilities Monitoring */}
      <h4>Environmental & Utilities Monitoring</h4>
      <ul>
        <li>Oxygen Supply: {capacity.OxygenSupply}%</li>
        <li>Air Quality: Optimal</li>
        <li>Power Backup Status: Stable</li>
      </ul>

      {/* Ambulance and Emergency Response Coordination */}
      <h4>Ambulance and Emergency Response Coordination</h4>
      <p>Manage ambulance dispatch and incoming critical patients. Track available ambulances and estimated time of arrival (ETA) to hospitals.</p>

      {/* Capacity Predictions */}
      <h4>Capacity Predictions</h4>
      <ul>
        {Object.entries(predictions).map(([unit, status]) => (
          <li key={unit}>
            {unit}: {status}
          </li>
        ))}
      </ul>

      {/* Notifications */}
      <h4>Notifications</h4>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notif, idx) => (
            <li key={idx} className="notification-item">
              {notif}
            </li>
          ))}
        </ul>
      ) : (
        <p>No critical alerts at the moment.</p>
      )}

      {/* Additional Features for Small Clinics */}
      <h4>Small Clinic Mode</h4>
      <p>
        For small clinics, this system scales down to manage fewer beds and resources but retains the same features: predictive analysis, ambulance coordination, and utility monitoring.
      </p>
    </div>
  );
};

export default CapacityManagement;
