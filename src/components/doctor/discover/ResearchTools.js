import React, { useState } from "react";
import { MenuItem, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import PatientDataCollectionApp from './PatientDataCollectionApp';
import FieldResearchKit from './FieldResearchKit';
import ClinicalTrialProtocolGenerator from './ClinicalTrialProtocolGenerator';
import QualitativeDataAnalysisSuite from './QualitativeDataAnalysisSuite';
import ClinicalTrials from './ClinicalTrials';
import { Select } from '../ui/select'; // Assuming you will use your custom Select component

const ResearchTools = () => {
  const [selectedTool, setSelectedTool] = useState("");

  const tools = [
    { id: "clinicalTrials", Component: ClinicalTrials, name: "Clinical Trials" },
    { id: "clinicalTrialProtocolGenerator", Component: ClinicalTrialProtocolGenerator, name: "Clinical Trial Protocol Generator" },
    { id: "patientDataCollectionApp", Component: PatientDataCollectionApp, name: "Patient Data Collection App" },
    { id: "fieldResearchKit", Component: FieldResearchKit, name: "Field Research Kit" },
    { id: "qualitativeDataAnalysisSuite", Component: QualitativeDataAnalysisSuite, name: "Qualitative Data Analysis Suite" },
  ];

  const handleToolSelect = (event) => {
    setSelectedTool(event.target.value);
  };

  const renderTool = () => {
    const selectedToolData = tools.find(tool => tool.id === selectedTool);
    return selectedToolData ? <selectedToolData.Component /> : <div>Please select a tool to display.</div>;
  };

  return (
    <div className="research-tools-container">
      <Card>
        <CardHeader>
          <Typography variant="h6">Select Research Tool</Typography>
        </CardHeader>
        <CardContent>
          <Select value={selectedTool} onChange={handleToolSelect} fullWidth>
            <MenuItem value="">-- Select Tool --</MenuItem>
            {tools.map(tool => (
              <MenuItem key={tool.id} value={tool.id}>
                {tool.name}
              </MenuItem>
            ))}
          </Select>
        </CardContent>
      </Card>

      <div className="tool-component">
        {renderTool()}
      </div>
    </div>
  );
};

export default ResearchTools;
