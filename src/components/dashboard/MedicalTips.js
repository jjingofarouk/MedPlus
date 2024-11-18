import React, { useEffect, useState } from 'react';
import { healthTips } from './HealthTips';



const MedicalTip = () => {
    const [tip, setTip] = useState("");

    useEffect(() => {
        const getRandomTip = () => {
            const randomIndex = Math.floor(Math.random() * healthTips.length);
            return healthTips[randomIndex];
        };
        setTip(getRandomTip());
    }, []);

    return (
        <div className="dashboard-item">
            <h2>Medical Tip of the Day</h2>
            <p>{tip}</p>
        </div>
    );
};

export default MedicalTip;
