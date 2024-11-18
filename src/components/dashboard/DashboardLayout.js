import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ 
  children, 
  medicalTip = '', 
  notifications = [], 
  upcomingAppointments = [] 
}) => (
  <div className="dashboard">
    <div className="dashboard-content">


      {/* Main Content */}
      <div className="dashboard-items">
        <div className="dashboard-item calendar-card">
          <h2>Appointment Calendar</h2>
          <Link to="/calendar">View Full Calendar</Link>
        </div>

        <div className="dashboard-item notifications">
          <h2>Notifications</h2>
          {notifications.length > 0 ? (
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          ) : (
            <p>No new notifications.</p>
          )}
        </div>

        <div className="dashboard-item upcoming-appointments">
          <h2>Upcoming Appointments</h2>
          {upcomingAppointments.length > 0 ? (
            <ul>
              {upcomingAppointments.map((appointment, index) => (
                <li key={index}>
                  {appointment.date} at {appointment.time} with {appointment.doctor}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming appointments.</p>
          )}
        </div>

        <div className="dashboard-item medical-tip">
          <h2>Medical Tip of the Day</h2>
          <p>{medicalTip || "Stay hydrated and exercise regularly!"}</p>
        </div>
      </div>

      {children}
    </div>
  </div>
);

export default DashboardLayout;
