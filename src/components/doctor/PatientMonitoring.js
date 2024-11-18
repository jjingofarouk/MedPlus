import React, { useEffect, useState } from "react";

const PatientMonitoring = () => {
  const [monitoringData, setMonitoringData] = useState([]);

  useEffect(() => {
    const fetchMonitoringData = async () => {
      // Fetch monitoring data from the backend in the future
      const dummyData = [
        { id: 1, patientName: "John Doe", vitalSign: "Blood Pressure: 120/80 mmHg" },
        { id: 2, patientName: "Jane Smith", vitalSign: "Heart Rate: 75 bpm" },
      ];
      setMonitoringData(dummyData);
    };
    fetchMonitoringData();
  }, []);

  return (
    <div className="patient-monitoring">
      <h3>Patient Monitoring</h3>
      <ul>
        {monitoringData.map((data) => (
          <li key={data.id}>
            <strong>{data.patientName}</strong>: {data.vitalSign}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientMonitoring;
