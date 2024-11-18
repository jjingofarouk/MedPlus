import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import the CSS file for styling


const Dash = () => {
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
      "Stay up to date with vaccinations and preventive care.",
      "Get enough rest.",
      "Wash your hands on a regular basis",
      "Always go for monthly body check-ups",
      "Stay hydrated. Take a glass of water after every meal",
      "Talk to a doctor if you do not feel well",
      "Avoid eating junk",
      "Share your health issues with a close relative",
      "Stay away from bright screens 1 hour before bed",
      "Sugars are sweet, but they can be dangerous for your health",
      "Sleep under a treated mosquito net"

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
            <p>{medicalTip}</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dash;
