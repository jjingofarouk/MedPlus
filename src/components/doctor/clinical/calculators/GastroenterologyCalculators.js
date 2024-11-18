import React, { useState } from "react";

const GastroenterologyCalculators = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gastrointestinal Calculators</h2>
      <div className="grid grid-cols-1 gap-6">
        <Calculator title="MELD Score" component={MELDScore} />
        <Calculator title="Child-Pugh Score" component={ChildPughScore} />
        <Calculator title="Ranson's Criteria" component={RansonsCriteria} />
        <Calculator title="Rockall Score" component={RockallScore} />
        <Calculator title="Bowel Cancer Screening Tool" component={BowelCancerScreening} />
        <Calculator title="Glasgow Blatchford Score" component={GlasgowBlatchfordScore} />
        <Calculator title="Pancreatitis Severity Score" component={PancreatitisSeverityScore} />
        <Calculator title="Hepatic Encephalopathy Grading Scale" component={HepaticEncephalopathy} />
        <Calculator title="Bristol Stool Chart" component={BristolStoolChart} />
        <Calculator title="Alvarado Score for Appendicitis" component={AlvaradoScore} />
        <Calculator title="GERD Severity Score" component={GERDSeverityScore} />
        <Calculator title="Dysphagia Severity Score" component={DysphagiaSeverityScore} />
        <Calculator title="Ulcerative Colitis Activity Index" component={UlcerativeColitisActivity} />
        <Calculator title="Crohn's Disease Activity Index" component={CrohnsDiseaseActivity} />
        <Calculator title="GERD Health-Related Quality of Life Scale" component={GERDQualityOfLife} />
        <Calculator title="Liver Fibrosis Score" component={LiverFibrosisScore} />
        <Calculator title="Gastrointestinal Bleeding Risk Score" component={GIBleedingRisk} />
        <Calculator title="Barrett's Esophagus Risk Calculator" component={BarrettsEsophagusRisk} />
        <Calculator title="Hepatic Encephalopathy Severity Score" component={HepaticEncephalopathySeverity} />
        <Calculator title="Constipation Severity Score" component={ConstipationSeverity} />
      </div>
    </div>
  );
};

const Calculator = ({ title, component: Component }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <Component />
  </div>
);

// Example implementations for a few calculators, implement others similarly.

const MELDScore = () => {
  const [creatinine, setCreatinine] = useState(0);
  const [bilirubin, setBilirubin] = useState(0);
  const [INR, setINR] = useState(0);

  const meldScore = Math.floor(
    3.78 * Math.log(bilirubin) + 11.2 * Math.log(creatinine) + 9.57 * Math.log(INR) + 6.43
  );

  return (
    <div>
      <h4 className="font-medium">MELD Score</h4>
      <div>
        <label>Bilirubin (mg/dL):</label>
        <input type="number" onChange={(e) => setBilirubin(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>Creatinine (mg/dL):</label>
        <input type="number" onChange={(e) => setCreatinine(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>INR:</label>
        <input type="number" onChange={(e) => setINR(parseFloat(e.target.value) || 0)} />
      </div>
      <div>MELD Score: {meldScore}</div>
    </div>
  );
};

const ChildPughScore = () => {
  const [bilirubin, setBilirubin] = useState("");
  const [albumin, setAlbumin] = useState("");
  const [INR, setINR] = useState("");
  const [encephalopathy, setEncephalopathy] = useState("");
  const [ascites, setAscites] = useState("");

  const calculateScore = () => {
    let score = 0;

    // Bilirubin
    if (bilirubin <= 2) score += 1;
    else if (bilirubin <= 3) score += 2;
    else score += 3;

    // Albumin
    if (albumin >= 3.5) score += 1;
    else if (albumin >= 2.8) score += 2;
    else score += 3;

    // INR
    if (INR < 1.7) score += 1;
    else if (INR < 2.3) score += 2;
    else score += 3;

    // Encephalopathy
    score += parseInt(encephalopathy);

    // Ascites
    score += parseInt(ascites);

    return score;
  };

  return (
    <div>
      <h4 className="font-medium">Child-Pugh Score</h4>
      <div>
        <label>Bilirubin (mg/dL):</label>
        <input type="number" onChange={(e) => setBilirubin(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>Albumin (g/dL):</label>
        <input type="number" onChange={(e) => setAlbumin(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>INR:</label>
        <input type="number" onChange={(e) => setINR(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>Encephalopathy (0-3):</label>
        <input type="number" min="0" max="3" onChange={(e) => setEncephalopathy(e.target.value)} />
      </div>
      <div>
        <label>Ascites (0-3):</label>
        <input type="number" min="0" max="3" onChange={(e) => setAscites(e.target.value)} />
      </div>
      <div>Child-Pugh Score: {calculateScore()}</div>
    </div>
  );
};

const RansonsCriteria = () => {
  const [age, setAge] = useState(0);
  const [WBC, setWBC] = useState(0);
  const [glucose, setGlucose] = useState(0);
  const [LDH, setLDH] = useState(0);
  const [AST, setAST] = useState(0);
  const [BUN, setBUN] = useState(0);
  const [hematocrit, setHematocrit] = useState(0);
  const [fluidSequestration, setFluidSequestration] = useState(0);
  
  const ransonsScore = () => {
    let score = 0;
    
    // Age > 55
    if (age > 55) score++;
    // WBC > 16,000
    if (WBC > 16000) score++;
    // Glucose > 200
    if (glucose > 200) score++;
    // LDH > 350
    if (LDH > 350) score++;
    // AST > 250
    if (AST > 250) score++;
    // BUN > 20
    if (BUN > 20) score++;
    // Hematocrit drop > 10%
    if (hematocrit < 10) score++;
    // Fluid sequestration > 6L
    if (fluidSequestration > 6) score++;

    return score;
  };

  return (
    <div>
      <h4 className="font-medium">Ranson's Criteria</h4>
      <div>
        <label>Age:</label>
        <input type="number" onChange={(e) => setAge(parseInt(e.target.value) || 0)} />
      </div>
      <div>
        <label>WBC:</label>
        <input type="number" onChange={(e) => setWBC(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>Glucose:</label>
        <input type="number" onChange={(e) => setGlucose(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>LDH:</label>
        <input type="number" onChange={(e) => setLDH(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>AST:</label>
        <input type="number" onChange={(e) => setAST(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>BUN:</label>
        <input type="number" onChange={(e) => setBUN(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>Hematocrit Drop (%):</label>
        <input type="number" onChange={(e) => setHematocrit(parseFloat(e.target.value) || 0)} />
      </div>
      <div>
        <label>Fluid Sequestration (L):</label>
        <input type="number" onChange={(e) => setFluidSequestration(parseFloat(e.target.value) || 0)} />
      </div>
      <div>Ranson's Score: {ransonsScore()}</div>
    </div>
  );
};

// Implement other calculators in a similar manner.

const RockallScore = () => {
  return (
    <div>
      <h4 className="font-medium">Rockall Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const BowelCancerScreening = () => {
  return (
    <div>
      <h4 className="font-medium">Bowel Cancer Screening Tool</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const GlasgowBlatchfordScore = () => {
  return (
    <div>
      <h4 className="font-medium">Glasgow Blatchford Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const PancreatitisSeverityScore = () => {
  return (
    <div>
      <h4 className="font-medium">Pancreatitis Severity Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const HepaticEncephalopathy = () => {
  return (
    <div>
      <h4 className="font-medium">Hepatic Encephalopathy Grading Scale</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const BristolStoolChart = () => {
  return (
    <div>
      <h4 className="font-medium">Bristol Stool Chart</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const AlvaradoScore = () => {
  return (
    <div>
      <h4 className="font-medium">Alvarado Score for Appendicitis</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const GERDSeverityScore = () => {
  return (
    <div>
      <h4 className="font-medium">GERD Severity Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const DysphagiaSeverityScore = () => {
  return (
    <div>
      <h4 className="font-medium">Dysphagia Severity Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const UlcerativeColitisActivity = () => {
  return (
    <div>
      <h4 className="font-medium">Ulcerative Colitis Activity Index</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const CrohnsDiseaseActivity = () => {
  return (
    <div>
      <h4 className="font-medium">Crohn's Disease Activity Index</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const GERDQualityOfLife = () => {
  return (
    <div>
      <h4 className="font-medium">GERD Health-Related Quality of Life Scale</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const LiverFibrosisScore = () => {
  return (
    <div>
      <h4 className="font-medium">Liver Fibrosis Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const GIBleedingRisk = () => {
  return (
    <div>
      <h4 className="font-medium">Gastrointestinal Bleeding Risk Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const BarrettsEsophagusRisk = () => {
  return (
    <div>
      <h4 className="font-medium">Barrett's Esophagus Risk Calculator</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const HepaticEncephalopathySeverity = () => {
  return (
    <div>
      <h4 className="font-medium">Hepatic Encephalopathy Severity Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

const ConstipationSeverity = () => {
  return (
    <div>
      <h4 className="font-medium">Constipation Severity Score</h4>
      {/* Add input fields and calculation logic */}
    </div>
  );
};

export default GastroenterologyCalculators;
