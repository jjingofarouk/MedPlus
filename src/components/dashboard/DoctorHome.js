// DoctorHome.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from './DashboardLayout'; // Layout wrapper
import './DoctorHome.css'; // CSS for styling

// Data Arrays
const healthTips = [
  "Encourage preventive care for all patients.",
  "Promote physical activity and healthy eating.",
  "Stay current with medical research and trends.",
  "Educate patients about managing chronic conditions.",
  "Recommend regular health check-ups.",
  "Advocate for mental health and stress management.",
  "Encourage hydration and a healthy diet.",
  "Remind patients to adhere to prescribed medications.",
];

const notifications = [
  "New patient consultation request received.",
  "Reminder: Review lab results for Jane Doe.",
  "Your weekly team meeting starts at 3 PM.",
];

const upcomingAppointments = [
  { date: '2024-10-20', time: '9:00 AM', patient: 'Alice Johnson' },
  { date: '2024-10-21', time: '1:00 PM', patient: 'Mark Spencer' },
];

const tasks = [
  { title: 'Review lab results for Alice', due: 'Today' },
  { title: 'Prepare for patient follow-up', due: 'Tomorrow' },
];

// DoctorHome Component
const DoctorHome = () => {
  const [medicalTip, setMedicalTip] = useState('');

  // Select a random medical tip on component mount
  useEffect(() => {
    setMedicalTip(healthTips[Math.floor(Math.random() * healthTips.length)]);
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard-container">


        {/* Main Content Section */}
        <section className="dashboard-sections">
          {/* Notifications Card */}
          <div className="dashboard-card">
            <h3>Notifications</h3>
            {notifications.length ? (
              notifications.map((notification, index) => (
                <div key={index} className="notification-item">
                  {notification}
                </div>
              ))
            ) : (
              <p>No new notifications.</p>
            )}
          </div>

          {/* Upcoming Appointments Card */}
          <div className="dashboard-card">
            <h3>Upcoming Appointments</h3>
            {upcomingAppointments.length ? (
              upcomingAppointments.map((appointment, index) => (
                <div key={index} className="appointment-item">
                  <p>
                    {appointment.patient} - {appointment.date} at {appointment.time}
                  </p>
                </div>
              ))
            ) : (
              <p>No upcoming appointments.</p>
            )}
            <Link to="/appointments" className="btn-primary">
              View All Appointments
            </Link>
          </div>

          {/* Tasks & Reminders Card */}
          <div className="dashboard-card">
            <h3>Tasks & Reminders</h3>
            {tasks.map((task, index) => (
              <div key={index} className="task-item">
                <p>
                  {task.title} - <span>{task.due}</span>
                </p>
              </div>
            ))}
            <button className="btn-secondary">Add New Task</button>
          </div>

          {/* Patient Management Card */}
          <div className="dashboard-card">
            <h3>Patient Management</h3>
            <p>Track, update, and manage patient records.</p>
            <Link to="/patients" className="btn-primary">
              Manage Patients
            </Link>
          </div>

          {/* Health Analytics Card */}
          <div className="dashboard-card">
            <h3>Health Analytics</h3>
            <p>Track patient trends, outcomes, and practice metrics.</p>
            <Link to="/analytics" className="btn-primary">
              View Analytics
            </Link>
          </div>

          {/* Billing & Invoices Card */}
          <div className="dashboard-card">
            <h3>Billing & Invoices</h3>
            <p>Manage payments, track invoices, and process claims.</p>
            <Link to="/billing" className="btn-primary">
              Manage Billing
            </Link>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default DoctorHome;
