import React, { useState } from 'react';
import Chart from 'react-apexcharts'; // Import charting library
import { FaChartBar, FaUpload, FaKeyboard } from 'react-icons/fa'; // Icons for UI enhancements
import './DataVisualization.css'; // Custom CSS for styling

const DataVisualization = () => {
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartType] = useState('bar');
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState('');
  const [textInput, setTextInput] = useState('');
  const [customColors, setCustomColors] = useState(['#FF4560', '#00E396', '#775DD0']); // Default colors

  const visualizeData = () => {
    if (chartData.length === 0) return;
    setLoading(true);
    console.log('Visualizing data...');

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      if (file.type === 'application/json') {
        const jsonData = JSON.parse(content);
        setChartData(jsonData);

      } else if (file.type === 'text/plain') {
        const lines = content.split('\n').map((line) => {
          const [label, value] = line.split(',');
          return { label, value: parseFloat(value) };
        });
        setChartData(lines);
      }
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const parseTextInput = () => {
    const lines = textInput.split('\n').map((line) => {
      const [label, value] = line.split(',');
      return { label, value: parseFloat(value) };
    });
    setChartData(lines);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const handleColorChange = (index, color) => {
    const newColors = [...customColors];
    newColors[index] = color;
    setCustomColors(newColors);
  };

  return (
    <div className="data-visualization">
      <h4 className="text-md font-semibold">Data Visualization</h4>
      <p className="text-sm text-gray-600">Visualize data using file uploads or text input in various chart types.</p>

      <div className="file-upload">
        <label htmlFor="file-upload" className="btn btn-secondary">
          <FaUpload /> Upload Data File (JSON, CSV, TXT)
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".json,.csv,.txt"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
      </div>

      <textarea
        value={textInput}
        onChange={handleTextInputChange}
        placeholder="Or paste your data here, e.g., 'Category,Value'"
        className="text-input"
        rows={4}
      />
      <button onClick={parseTextInput} className="btn btn-secondary">
        <FaKeyboard /> Parse Text Input
      </button>

      <select value={chartType} onChange={handleChartTypeChange} className="chart-type-select">
        <option value="bar">Bar Chart</option>
        <option value="line">Line Chart</option>
        <option value="pie">Pie Chart</option>
        {/* Add more chart types as needed */}
      </select>

      <div className="color-selector">
        <h5>Customize Chart Colors:</h5>
        {customColors.map((color, index) => (
          <input
            key={index}
            type="color"
            value={color}
            onChange={(e) => handleColorChange(index, e.target.value)}
          />
        ))}
      </div>

      <button onClick={visualizeData} className="btn btn-primary">
        {loading ? 'Visualizing...' : 'Visualize Data'}
      </button>

      {chartData.length > 0 && (
        <div className="chart-container">
          <Chart
            options={{
              chart: {
                id: 'data-visualization-chart',
                toolbar: {
                  show: true,
                  tools: {
                    download: true,
                    selection: true,
                  },
                },
              },
              xaxis: {
                categories: chartData.map((data) => data.label),
              },
              colors: customColors,
            }}
            series={[{
              name: 'Data Series',
              data: chartData.map((data) => data.value),
            }]}
            type={chartType}
            height={350}
          />
        </div>
      )}
    </div>
  );
};

export default DataVisualization;
