import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HealthEducation = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      // Fetch health education resources from the backend in the future
      const dummyData = [
        { id: 1, title: "Understanding Diabetes", link: "/education/diabetes" },
        { id: 2, title: "Managing Hypertension", link: "/education/hypertension" },
        { id: 3, title: "Nutrition Basics", link: "/education/nutrition" },
      ];
      setResources(dummyData);
    };
    fetchResources();
  }, []);

  return (
    <div className="health-education">
      <h3>Health Education</h3>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <Link to={resource.link}>{resource.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthEducation;
