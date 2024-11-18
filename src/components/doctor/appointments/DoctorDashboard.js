import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { Link } from 'react-router-dom';
import NavBar from 'H:/Med/medhub/src/components/ui/NavBar'

const DoctorDashboard = () => {
  const [medicalTip, setMedicalTip] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);

  useEffect(() => {
    const healthTips = ["Promote preventive care", "Encourage patients to stay active"];
    setMedicalTip(healthTips[Math.floor(Math.random() * healthTips.length)]);
  }, []);

  useEffect(() => {
    setNotifications(["New consultation request", "Reminder: Weekly meeting"]);
    setUpcomingAppointments([
      { date: '2024-09-16', time: '11:00 AM', patient: 'John Doe' },
    ]);
  }, []);

  return (
    <DashboardLayout medicalTip={medicalTip} notifications={notifications} upcomingAppointments={upcomingAppointments}>
      <div className="tile-container">
        <NavBar />
        <div className="tile">
          <h2>Manage Patients</h2>
          <p>View and manage your patients and consultations.</p>
          <Link to="/patients" className="button">Manage Patients</Link>
        </div>
        <div className="tile">
          <h2>Appointments</h2>
          <p>View and manage your schedule.</p>
          <Link to="/appointments" className="button">View Schedule</Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;