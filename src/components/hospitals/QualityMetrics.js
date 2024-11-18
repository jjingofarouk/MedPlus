import React, { useState, useEffect, useContext } from 'react';
import { Line } from 'react-chartjs-2'; // ChartJS for visualizations
import axios from 'axios'; // For API calls
import './QualityMetrics.css'; // Import the CSS file

const QualityMetrics = () => {
  const [metrics, setMetrics] = useState({
    readmissionRate: 4.5,
    patientSatisfaction: 92,
    infectionRate: 1.2,
    averageLOS: 3.6, // Length of Stay
  });
  const [alerts, setAlerts] = useState([]);
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    // Fetch historical data on component mount
    axios.get('/api/metrics/history').then((response) => {
      setHistoricalData(response.data);
    });

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics((prevMetrics) => {
        const updatedMetrics = {
          ...prevMetrics,
          readmissionRate: Math.max(0, prevMetrics.readmissionRate + (Math.random() - 0.5)),
          infectionRate: Math.max(0, prevMetrics.infectionRate + (Math.random() - 0.3)),
        };

        // Generate alerts for thresholds
        if (updatedMetrics.infectionRate > 2.0) {
          setAlerts((prev) => [...prev, 'Infection rate exceeded 2%! Immediate attention required.']);
        }

        return updatedMetrics;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleGoalUpdate = (metric, value) => {
    setMetrics((prev) => ({ ...prev, [metric]: value }));
  };

  const exportMetrics = () => {
    const blob = new Blob([JSON.stringify(metrics)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'metrics_report.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Readmission Rate (%)',
        data: historicalData.map((data) => data.readmissionRate),
        borderColor: 'rgba(39, 199, 184, 0.8)',
        fill: false,
      },
      {
        label: 'Infection Rate (%)',
        data: historicalData.map((data) => data.infectionRate),
        borderColor: 'rgba(247, 136, 55, 0.8)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Quality Metrics Dashboard</h2>
      <button>
      </button>
      <p>Track hospital performance metrics in real-time.</p>

      <ul>
        <li>
          Readmission Rate: 
          <input
            type="number"
            value={metrics.readmissionRate.toFixed(2)}
            onChange={(e) => handleGoalUpdate('readmissionRate', parseFloat(e.target.value))}
          />%
        </li>
        <li>
          Patient Satisfaction: {metrics.patientSatisfaction}%
          <button onClick={() => handleGoalUpdate('patientSatisfaction', 100)}>
            Boost to 100%
          </button>
        </li>
        <li>Infection Rate: {metrics.infectionRate.toFixed(2)}%</li>
        <li>Average Length of Stay: {metrics.averageLOS.toFixed(1)} days</li>
      </ul>

      <h3>Alerts</h3>
      <ul>
        {alerts.map((alert, idx) => (
          <li key={idx} style={styles.alert}>{alert}</li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <h3>Performance Trends</h3>
        <Line data={chartData} />
      </div>

      <button onClick={exportMetrics} style={styles.exportButton}>
        Export Metrics Report
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#dfe4e5',
    borderRadius: '8px',
  },
  darkContainer: {
    padding: '20px',
    backgroundColor: '#002432',
    color: '#dfe4e5',
    borderRadius: '8px',
  },
  alert: {
    color: '#f78837',
  },
  exportButton: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#27c7b8',
    border: 'none',
    cursor: 'pointer',
  },
};

export default QualityMetrics;
