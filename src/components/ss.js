import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import the CSS file for styling


const Dashboard = () => {
  const [medicalTip, setMedicalTip] = useState('');

  useEffect(() => {
    const healthTips = [
      "Drink plenty of water throughout the day.",
      "Aim for at least 30 minutes of exercise each day.",
      "Eat a balanced diet rich in fruits and vegetables.",
      "Get at least 7-8 hours of sleep each night.",
      "Practice mindfulness and stress-reducing techniques.",
      "Avoid excessive consumption of sugary and processed foods.",
      "Maintain a healthy weight through diet and exercise.",
      "Schedule regular check-ups with your healthcare provider.",
      "Avoid smoking and limit alcohol consumption.",
      "Stay up to date with vaccinations and preventive care."
    ];

    // Function to select a random health tip
    const getRandomTip = () => {
      const randomIndex = Math.floor(Math.random() * healthTips.length);
      return healthTips[randomIndex];
    };

    setMedicalTip(getRandomTip());
  }, []);

  useEffect(() => {



  }, []);

  return (
    <div>
      <div >
    

        <div className="dashboard-items">
          <div className="dashboard-item medical-tip">
            <h2>Medical Tip of the Day</h2>
            <p>{medicalTip}</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;
