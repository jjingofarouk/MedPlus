import React, { useState } from 'react';
import { FaFilePdf, FaChartLine, FaUsers, FaCog } from 'react-icons/fa'; // Import your icon library here
import './QualitativeDataAnalysisSuite.css'; // Custom CSS for styling
import CodingSystem from './CodingSystem'; // Component for coding qualitative data
import TextAnalysis from './TextAnalysis'; // Component for analyzing text data
import Collaboration from '../Collaboration'; // Component for collaborative work
import DataVisualization from './DataVisualization'; // Component for visualizing data

const QualitativeDataAnalysisSuite = () => {
  const [activeTab, setActiveTab] = useState('coding');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="qualitative-data-analysis-suite">
      <div className="header flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-semibold">Qualitative Data Analysis Suite</h3>
        <div className="tab-links flex space-x-4">
          <button onClick={() => handleTabChange('coding')} className={`tab-button ${activeTab === 'coding' ? 'active' : ''}`}>
            <FaCog className="w-4 h-4" /> Coding
          </button>
          <button onClick={() => handleTabChange('analysis')} className={`tab-button ${activeTab === 'analysis' ? 'active' : ''}`}>
            <FaFilePdf className="w-4 h-4" /> Text Analysis
          </button>
          <button onClick={() => handleTabChange('visualization')} className={`tab-button ${activeTab === 'visualization' ? 'active' : ''}`}>
            <FaChartLine className="w-4 h-4" /> Visualization
          </button>
          <button onClick={() => handleTabChange('collaboration')} className={`tab-button ${activeTab === 'collaboration' ? 'active' : ''}`}>
            <FaUsers className="w-4 h-4" /> Collaboration
          </button>
        </div>
      </div>

      <div className="content p-4">
        {activeTab === 'coding' && <CodingSystem />}
        {activeTab === 'analysis' && <TextAnalysis />}
        {activeTab === 'visualization' && <DataVisualization />}
        {activeTab === 'collaboration' && <Collaboration />}
      </div>
    </div>
  );
};

export default QualitativeDataAnalysisSuite;
