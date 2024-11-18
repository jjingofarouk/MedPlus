import React from 'react';
import PatientInfo from './PatientInfo';
import History from './History';
import Lab from './Labs';
import Rad from './Rad';
import VitalSigns from './VitalSigns';
import Medications from './Medications';
import PatientVisits from './PatientVisits';
import Prescriptions from './Prescriptions'

const EMR = () => {
  const [emrData, setEmrData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const fetchEMR = async () => {
      try {
        const response = await fetch('/api/emr');
        const data = await response.json();
        setEmrData(data);
      } catch (error) {
        console.error("Error fetching EMR data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEMR();
  }, []);
  
  if (loading) return <p>Loading EMR data...</p>;
  
  return (
    <div>
      <h2>Electronic Medical Records</h2>
      
      {/* Render subcomponents */}
      <PatientInfo />
      <History />
      <Lab />
      <Rad />
      <VitalSigns />
      <Medications />
      <PatientVisits />
      <Prescriptions />
    </div>
  );
};

export default EMR;
