import React, { useEffect, useState } from "react";

const EPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      // Fetch e-prescriptions from the backend in the future
      const dummyData = [
        { id: 1, patientName: "John Doe", medication: "Metformin", status: "Pending" },
        { id: 2, patientName: "Jane Smith", medication: "Lisinopril", status: "Completed" },
      ];
      setPrescriptions(dummyData);
    };
    fetchPrescriptions();
  }, []);

  return (
    <div className="e-prescriptions">
      <h3>E-Prescriptions</h3>
      <ul>
        {prescriptions.map((prescription) => (
          <li key={prescription.id}>
            {prescription.patientName} - {prescription.medication} - Status: {prescription.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EPrescriptions;
