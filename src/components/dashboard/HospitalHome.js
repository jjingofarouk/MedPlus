import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { Link } from 'react-router-dom';

const HospitalHome = () => {
  const [medicalTip, setMedicalTip] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  useEffect(() => {
    const healthTips = ["Encourage healthy workplace habits", "Promote mental health awareness"];
    setMedicalTip(healthTips[Math.floor(Math.random() * healthTips.length)]);
  }, []);

  useEffect(() => {
    setNotifications(["New policy update", "Reminder: Staff training"]);
    setUpcomingAppointments([
      { date: '2024-09-17', time: '1:00 PM', department: 'HR' },
    ]);
  }, []);

  return (
    <DashboardLayout medicalTip={medicalTip} notifications={notifications} upcomingAppointments={upcomingAppointments}>
      <div className="tile-container">
        <div className="tile">
          <h2>Manage Staff</h2>
          <p>View and manage staff appointments and availability.</p>
          <Link to="/staff" className="button">Manage Staff</Link>
        </div>
        <div className="tile">
          <h2>hospital Overview</h2>
          <p>View statistics and analytics for the hospital.</p>
          <Link to="/overview" className="button">View Analytics</Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HospitalHome;
