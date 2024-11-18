import React, { useState } from "react";
import { Select, MenuItem, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import DiabetesManagement from './DiabetesManagement';
import HypertensionManagement from './HypertensionManagement';
import HIVManagement from './HIVManagement';
import TuberculosisManagement from './TuberculosisManagement';
import AsthmaManagement from './AsthmaManagement';
import SickleCellManagement from './SickleCellManagement';
import CKDManagement from './CKDManagement'; // Chronic Kidney Disease
import EpilepsyManagement from './EpilepsyManagement';
import StrokeManagement from './StrokeManagement';

const ChronicsContent = () => {
  const [selectedCondition, setSelectedCondition] = useState("");

  const renderManagementComponent = () => {
    switch (selectedCondition) {
      case "diabetes":
        return <DiabetesManagement />;
      case "hypertension":
        return <HypertensionManagement />;
      case "hiv":
        return <HIVManagement />;
      case "tuberculosis":
        return <TuberculosisManagement />;
      case "asthma":
        return <AsthmaManagement />;
      case "sickleCell":
        return <SickleCellManagement />;
      case "ckd":
        return <CKDManagement />;
      case "epilepsy":
        return <EpilepsyManagement />;
      case "stroke":
        return <StrokeManagement />;
      default:
        return <div>Please select a chronic disease to manage.</div>;
    }
  };

  const handleConditionSelect = (event) => {
    setSelectedCondition(event.target.value);
  };

  return (
    <div className="chronics-container">
      <Card>
        <CardHeader>
          <Typography variant="h6">Select Your Chronic Condition</Typography>
        </CardHeader>
        <CardContent>
          <Select value={selectedCondition} onChange={handleConditionSelect} fullWidth>
            <MenuItem value="">-- Select Condition --</MenuItem>
            <MenuItem value="diabetes">Diabetes</MenuItem>
            <MenuItem value="hypertension">Hypertension</MenuItem>
            <MenuItem value="hiv">HIV/AIDS</MenuItem>
            <MenuItem value="tuberculosis">Tuberculosis</MenuItem>
            <MenuItem value="asthma">Asthma</MenuItem>
            <MenuItem value="sickleCell">Sickle Cell Anemia</MenuItem>
            <MenuItem value="ckd">Chronic Kidney Disease</MenuItem>
            <MenuItem value="epilepsy">Epilepsy</MenuItem>
            <MenuItem value="stroke">Stroke</MenuItem>
          </Select>
        </CardContent>
      </Card>

      {/* Render the management component based on selected condition */}
      <div className="management-component">
        {renderManagementComponent()}
      </div>
    </div>
  );
};

export default ChronicsContent;
