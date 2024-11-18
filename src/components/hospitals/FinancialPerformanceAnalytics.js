import React, { useState } from 'react';

const FinancialPerformanceAnalytics = () => {
  const [financialData, setFinancialData] = useState({
    revenue: 5000000,
    expenses: 4200000,
    netIncome: 800000,
  });

  const calculateProfitMargin = () => {
    return ((financialData.netIncome / financialData.revenue) * 100).toFixed(2);
  };

  return (
    <div>
      <h2>Financial Performance Analytics</h2>
      <p>Monitor hospital revenue and expenses in real-time.</p>
      <ul>
        <li>Revenue: ${financialData.revenue.toLocaleString()}</li>
        <li>Expenses: ${financialData.expenses.toLocaleString()}</li>
        <li>Net Income: ${financialData.netIncome.toLocaleString()}</li>
        <li>Profit Margin: {calculateProfitMargin()}%</li>
      </ul>
      <button onClick={() => alert('Generate Financial Report')}>
        Generate Report
      </button>
    </div>
  );
};

export default FinancialPerformanceAnalytics;
