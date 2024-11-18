import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarDay, FaStethoscope, FaComments, FaBook, FaUserMd, FaFileMedical, FaDatabase, FaUserShield, FaCog } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <p className="dashboard-intro">Manage your healthcare system efficiently with the following tools and resources. Click on any section to get started.</p>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <Link to="/appointments" className="dashboard-link">
            <FaCalendarDay className="icon" />
            <h3>Upcoming Appointments</h3>
            <p>View and manage your upcoming patient appointments. Check schedules, reschedule, or cancel appointments easily.</p>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/consultations" className="dashboard-link">
            <FaStethoscope className="icon" />
            <h3>Consultations</h3>
            <p>Access patient consultation records and notes. Update consultation details and view historical data.</p>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/patient-demographics" className="dashboard-link">
            <FaUserMd className="icon" />
            <h3>Patient Demographics</h3>
            <p>Review and update patient demographic information. Ensure records are accurate and up-to-date.</p>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/medical-history" className="dashboard-link">
            <FaFileMedical className="icon" />
            <h3>Medical History</h3>
            <p>Access and manage patient medical history records. View past treatments, diagnoses, and medical notes.</p>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/electronic-prescriptions" className="dashboard-link">
            <FaBook className="icon" />
            <h3>Electronic Prescriptions</h3>
            <p>View and manage electronic prescriptions for patients. Track medication history and renew prescriptions.</p>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/data-backup-recovery" className="dashboard-link">
            <FaDatabase className="icon" />
            <h3>Data Backup & Recovery</h3>
            <p>Manage data backups and recovery options. Ensure patient and system data are securely backed up and can be recovered.</p>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/notifications" className="dashboard-link">
            <FaComments className="icon" />
            <h3>Notifications</h3>
            <p>View recent notifications and alerts. Stay updated with important messages and system alerts.</p>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/user-roles-permissions" className="dashboard-link">
            <FaUserShield className="icon" />
            <h3>User Roles & Permissions</h3>
            <p>Manage user roles and access permissions. Control who can view or modify specific data within the system.</p>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/settings" className="dashboard-link">
            <FaCog className="icon" />
            <h3>Settings</h3>
            <p>Configure system settings and preferences. Customize your dashboard and adjust application settings.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
