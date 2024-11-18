import React, { useEffect, useState } from "react";

const MyCareTeam = () => {
  const [careTeam, setCareTeam] = useState([]);

  useEffect(() => {
    // Fetch care team data from the backend in the future
    // For now, simulate with dummy data
    const fetchCareTeam = async () => {
      const dummyData = [
        { id: 1, name: "Dr. Smith", role: "Primary Doctor", contact: "123-456-7890" },
        { id: 2, name: "Nurse John", role: "Nurse", contact: "987-654-3210" },
      ];
      setCareTeam(dummyData);
    };
    fetchCareTeam();
  }, []);

  return (
    <div className="my-care-team">
      <h3>My Care Team</h3>
      <ul>
        {careTeam.map((member) => (
          <li key={member.id}>
            {member.name} ({member.role}) - Contact: {member.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCareTeam;
