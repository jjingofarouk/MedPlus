import React, { useState } from 'react';
import './PersonalizedAlerts.css';

function PersonalizedAlerts() {
    const [alertMessage, setAlertMessage] = useState('');
    const [customAlert, setCustomAlert] = useState('');

    const handleSetAlert = () => {
        if (!customAlert) {
            setAlertMessage('Please enter an alert preference.');
            return;
        }
        // Save the user preference for alerts (mocking API call)
        setAlertMessage(`Personalized alert set for: ${customAlert}`); 
        setCustomAlert('');
    };

    return (
        <div className="personalized-alerts">
            <h2>Personalized Alerts</h2>
            <input
                type="text"
                value={customAlert}
                onChange={(e) => setCustomAlert(e.target.value)}
                placeholder="Enter your alert preference"
                required
            />
            <button onClick={handleSetAlert}>Set Personalized Alert</button>
            {alertMessage && <p className="alert-message">{alertMessage}</p>}
        </div>
    );
}

export default PersonalizedAlerts;
