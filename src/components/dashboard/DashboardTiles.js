import React from 'react';
import { Link } from 'react-router-dom';

const DashboardTiles = () => {
    return (
        <div className="tile-container">
            <div className="tile">
                <h2>Consultation Overview</h2>
                <p>Manage and view your consultations with doctors.</p>
                <Link to="/consultations" className="button">View Consultations</Link>
            </div>
            <div className="tile">
                <h2>Appointments</h2>
                <p>Book and manage your appointments easily.</p>
                <Link to="/book-appointment" className="button">Book Appointment</Link>
            </div>
        </div>
    );
};

export default DashboardTiles;
