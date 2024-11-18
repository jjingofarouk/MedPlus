import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { Link } from 'react-router-dom';
import NavBar from 'H:/Med/medhub/src/components/ui/NavBar.js'

const patientDashboard = () => {
  const [medicalTip, setMedicalTip] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  useEffect(() => {
    const healthTips = ["Drink water", "Exercise regularly"];
    setMedicalTip(healthTips[Math.floor(Math.random() * healthTips.length)]);
  }, []);

  useEffect(() => {
    setNotifications(["Message from Dr. Smith", "Health screening reminder"]);
    setUpcomingAppointments([
      { date: '2024-09-15', time: '10:00 AM', doctor: 'Dr. Johnson' },
    ]);
  }, []);

  return (
    <DashboardLayout medicalTip={medicalTip} notifications={notifications} upcomingAppointments={upcomingAppointments}>
        <NavBar />
      <div className="tile-container">
        <div className="tile">
          <h2>Your Health Goals</h2>
          <p>Track your progress and stay on top of your health goals.</p>
          <Link to="/goals" className="button">View Goals</Link>
        </div>
        <div className="tile">
          <h2>Appointments</h2>
          <p>Book and manage your appointments.</p>
          <Link to="/book-appointment" className="button">Manage Appointments</Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default patientDashboard;
