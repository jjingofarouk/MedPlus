import React, { useEffect, useState } from "react";

const PatientDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      // Fetch patient data from the backend in the future
      const dummyData = [
        { id: 1, name: "John Doe", lastVisit: "2024-09-20" },
        { id: 2, name: "Jane Smith", lastVisit: "2024-09-15" },
        { id: 3, name: "Alice Johnson", lastVisit: "2024-09-10" },
      ];
      setPatients(dummyData);
    };
    fetchPatients();
  }, []);

  return (
    <div className="patient-dashboard">
      <h3>Patient Dashboard</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDashboard;
