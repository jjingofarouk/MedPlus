import React, { useEffect, useState } from "react";

const WellnessPrograms = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      // Fetch wellness programs from the backend in the future
      const dummyData = [
        { id: 1, title: "Yoga for Beginners", description: "Join our beginner-friendly yoga classes." },
        { id: 2, title: "Nutrition Workshop", description: "Learn about healthy eating habits." },
        { id: 3, title: "Stress Management Seminar", description: "Techniques to manage stress effectively." },
      ];
      setPrograms(dummyData);
    };
    fetchPrograms();
  }, []);

  return (
    <div className="wellness-programs">
      <h3>Wellness Programs</h3>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h4>{program.title}</h4>
            <p>{program.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WellnessPrograms;
