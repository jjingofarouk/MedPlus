import React, { useEffect, useState } from "react";

const HealthChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      // Fetch health challenges from the backend in the future
      const dummyData = [
        { id: 1, title: "30-Day Fitness Challenge", description: "Join us for a month of fitness activities!" },
        { id: 2, title: "Mindfulness Challenge", description: "Practice mindfulness for 30 days." },
        { id: 3, title: "Healthy Eating Challenge", description: "Eat healthy for a month and track your progress." },
      ];
      setChallenges(dummyData);
    };
    fetchChallenges();
  }, []);

  return (
    <div className="health-challenges">
      <h3>Health Challenges</h3>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            <h4>{challenge.title}</h4>
            <p>{challenge.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthChallenges;
