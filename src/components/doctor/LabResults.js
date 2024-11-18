// LabResults.tsx
import React from 'react';

const LabResults = () => {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('/api/lab-results'); // Update with actual API endpoint
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching lab results:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, []);

  if (loading) return <p>Loading lab results...</p>;

  return (
    <div>
      <h2>Lab Results</h2>
      <table>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Result</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.testName}</td>
              <td>{result.result}</td>
              <td>{result.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabResults;
