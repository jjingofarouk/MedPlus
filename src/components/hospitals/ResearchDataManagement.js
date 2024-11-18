import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ResearchDataManagement.css';

const ResearchDataManagement = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', status: '', milestones: [] });
  const [researchData, setResearchData] = useState([]);
  const [report, setReport] = useState([]);

  // Sample initial project data
  useEffect(() => {
    const sampleProjects = [
      { id: 1, title: 'Diabetes Study', status: 'Ongoing', milestones: ['Initial Approval', 'Data Collection'] },
      { id: 2, title: 'Heart Disease Research', status: 'Completed', milestones: ['Literature Review', 'Final Report'] },
    ];
    setProjects(sampleProjects);
  }, []);

  // Handle new project submission
  const handleProjectSubmit = () => {
    const updatedProjects = [...projects, { ...newProject, id: projects.length + 1 }];
    setProjects(updatedProjects);
    setNewProject({ title: '', status: '', milestones: [] });
  };

  // Handle data entry for research data
  const handleDataEntry = (data) => {
    setResearchData((prevData) => [...prevData, data]);
  };

  // Generate report from research data
  const generateReport = () => {
    const newReport = researchData.map((data, index) => ({ ...data, reportIndex: index + 1 }));
    setReport(newReport);
    console.log('Research Report Generated:', newReport);
    alert('Report generated! Check console for details.');
  };

  return (
    <div className="research-data-management">
      <h2>Research Data Management</h2>

      {/* Project Management Section */}
      <div className="project-management">
        <h3>Manage Research Projects</h3>
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
        />
        <button onClick={handleProjectSubmit}>Add Project</button>
        
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              {project.title} - {project.status}
              <ul>
                {project.milestones.map((milestone, index) => (
                  <li key={index}>{milestone}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Data Entry Section */}
      <div className="data-entry">
        <h3>Research Data Entry</h3>
        {/* Example form for data entry */}
        <button onClick={() => handleDataEntry({ data: Math.random() * 100 })}>Add Sample Data</button>
      </div>

      {/* Data Visualization Section */}
      <div className="data-visualization">
        <h3>Data Visualization</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={researchData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="data" stroke="#27c7b8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Reporting Section */}
      <div className="reporting">
        <h3>Reporting</h3>
        <button onClick={generateReport}>Generate Research Report</button>
        {report.length > 0 && (
          <ul>
            {report.map((data, index) => (
              <li key={index}>Report Item {data.reportIndex}: {JSON.stringify(data)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResearchDataManagement;
