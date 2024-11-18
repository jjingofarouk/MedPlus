import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Analytics.css';

const Analytics = () => {
  const [metrics, setMetrics] = useState({
    patientsTreated: 0,
    revenueGenerated: 0,
    avgAppointmentTime: 0,
    successfulAppointments: 0,
    canceledAppointments: 0,
    referralsSent: 0,
    referralsReceived: 0,
    reviewsReceived: 0,
    casesUploaded: 0,
    prescriptionsWritten: 0,
    messageRequests: 0,
    filesUploaded: 0,
    cmesFinished: 0,
  });

  useEffect(() => {
    // Simulate fetching performance data from backend
    setMetrics({
      patientsTreated: 399,
      revenueGenerated: 3000000,
      avgAppointmentTime: 42,
      successfulAppointments: 97,
      canceledAppointments: 7,
      referralsSent: 45,
      referralsReceived: 4,
      reviewsReceived: 195,
      casesUploaded: 15,
      prescriptionsWritten: 210,
      messageRequests: 89,
      filesUploaded: 7,
      cmesFinished: 5,
    });
  }, []);

  // Chart.js data for visualizing relevant metrics
  const barData = {
    labels: [
      'Successful Appointments',
      'Canceled Appointments',
      'Referrals Sent',
      'Referrals Received',
      'Reviews Received',
      'Cases Uploaded',
      'Prescriptions Written',
      'Message Requests',
      'Files Uploaded',
      'CMEs Finished',
    ],
    datasets: [
      {
        label: 'Metric Count',
        data: [
          metrics.successfulAppointments,
          metrics.canceledAppointments,
          metrics.referralsSent,
          metrics.referralsReceived,
          metrics.reviewsReceived,
          metrics.casesUploaded,
          metrics.prescriptionsWritten,
          metrics.messageRequests,
          metrics.filesUploaded,
          metrics.cmesFinished,
        ],
        backgroundColor: [
          '#002432',
          '#f78837',
          '#27c7b8',
          '#002432',
          '#f78837',
          '#27c7b8',
          '#002432',
          '#f78837',
          '#27c7b8',
          '#002432',
        ],
      },
    ],
  };

  // Trend data for line chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Patients Treated Over Time',
        data: [20, 30, 45, 60, 75, 100, 120, 150, 170, 399],
        fill: false,
        borderColor: '#27c7b8',
        tension: 0.1,
      },
      {
        label: 'Revenue Generated (Shs)',
        data: [100000, 300000, 450000, 600000, 900000, 1200000, 1500000, 2000000, 2500000, 3000000],
        fill: false,
        borderColor: '#f78837',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h2>My Practice Analytics</h2>

      {/* Metric Cards */}
      <div className="metrics">
        <div className="metric-card">
          <h3>Patients Treated</h3>
          <p>{metrics.patientsTreated}</p>
        </div>

        <div className="metric-card">
          <h3>Revenue Generated</h3>
          <p>Shs. {metrics.revenueGenerated.toLocaleString()}</p>
        </div>

        <div className="metric-card">
          <h3>Avg. Appointment Time</h3>
          <p>{metrics.avgAppointmentTime} minutes</p>
        </div>
      </div>

      {/* Line Chart for Trends */}
      <div className="chart-container">
        <Line data={lineData} options={{ maintainAspectRatio: false }} />
      </div>

      {/* Bar Chart for Other Metrics */}
      <div className="chart-container">
        <Bar
          data={barData}
          options={{
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                enabled: true,
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += context.raw;
                    return label;
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Analytics;
