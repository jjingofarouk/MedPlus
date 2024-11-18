// PatientHistory.tsx
import React from 'react';

const PatientHistory = () => {
  const [history, setHistory] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/patient-history'); // Update with actual API endpoint
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching patient history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  if (loading) return <p>Loading patient history...</p>;

  return (
    <div>
      <h2>Patient History</h2>
      <ul>
        {history.map((entry) => (
          <li key={entry.id}>{entry.description} - {entry.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientHistory;
