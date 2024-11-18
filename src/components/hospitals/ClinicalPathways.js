import React, { useState } from 'react';

const ClinicalPathways = () => {
  const [pathways, setPathways] = useState([
    {
      name: 'Cardiology',
      steps: [
        { name: 'Initial Diagnosis', details: 'Assess symptoms and conduct a physical exam.', recommendedActions: ['ECG', 'Echocardiogram'], timeline: '0-1 days' },
        { name: 'Lab Tests', details: 'Conduct blood tests and other necessary evaluations.', recommendedActions: ['Complete Blood Count', 'Lipid Profile'], timeline: '1-3 days' },
        { name: 'Treatment Plan', details: 'Develop a personalized treatment plan based on test results.', recommendedActions: ['Medication', 'Lifestyle Changes'], timeline: '3-5 days' },
        { name: 'Follow-Up', details: 'Schedule follow-up appointments to monitor progress.', recommendedActions: ['Regular Check-ups'], timeline: '1-3 months' },
      ],
    },
    {
      name: 'Oncology',
      steps: [
        { name: 'Biopsy', details: 'Obtain tissue samples for analysis.', recommendedActions: ['Pathology Report'], timeline: '0-7 days' },
        { name: 'Chemotherapy', details: 'Administer chemotherapy based on treatment plan.', recommendedActions: ['Monitor Side Effects'], timeline: '1-6 months' },
        { name: 'Radiation', details: 'Provide radiation therapy if required.', recommendedActions: ['Daily Sessions'], timeline: '1-2 months' },
        { name: 'Recovery', details: 'Assess recovery and plan further treatments.', recommendedActions: ['Follow-up Scans'], timeline: '3-6 months' },
      ],
    },
    // More pathways can be added here
    {
      name: 'Diabetes Management',
      steps: [
        { name: 'Initial Assessment', details: 'Evaluate blood sugar levels and patient history.', recommendedActions: ['HbA1c Test'], timeline: '0-2 days' },
        { name: 'Dietary Consultation', details: 'Work with a nutritionist to create a meal plan.', recommendedActions: ['Caloric Intake Analysis'], timeline: '2-5 days' },
        { name: 'Medication Review', details: 'Assess current medications and adjust as necessary.', recommendedActions: ['Insulin Therapy'], timeline: '5-10 days' },
        { name: 'Regular Monitoring', details: 'Set up a schedule for regular blood sugar checks.', recommendedActions: ['Weekly Monitoring'], timeline: 'Ongoing' },
      ],
    },
  ]);

  const [newPathway, setNewPathway] = useState({ name: '', steps: [] });
  const [stepDetail, setStepDetail] = useState(null);

  const handleAddStep = () => {
    const newStep = { name: '', details: '', recommendedActions: [], timeline: '' };
    setNewPathway({ ...newPathway, steps: [...newPathway.steps, newStep] });
  };

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...newPathway.steps];
    updatedSteps[index][field] = value;
    setNewPathway({ ...newPathway, steps: updatedSteps });
  };

  const handleAddPathway = () => {
    if (newPathway.name && newPathway.steps.length > 0) {
      setPathways([...pathways, newPathway]);
      setNewPathway({ name: '', steps: [] });
    } else {
      alert('Please provide a pathway name and at least one step.');
    }
  };

  const handleStepDetailClick = (step) => {
    setStepDetail(step);
  };

  return (
    <div>
      <h2>Clinical Pathways</h2>
      <p>Evidence-based care protocols for various medical conditions.</p>
      {pathways.map((pathway, idx) => (
        <div key={idx}>
          <h3>{pathway.name}</h3>
          <ul>
            {pathway.steps.map((step, index) => (
              <li key={index} onClick={() => handleStepDetailClick(step)}>
                {step.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      <h3>Add New Clinical Pathway</h3>
      <input 
        type="text" 
        placeholder="Pathway Name" 
        value={newPathway.name}
        onChange={(e) => setNewPathway({ ...newPathway, name: e.target.value })}
      />
      <h4>Steps</h4>
      {newPathway.steps.map((step, index) => (
        <div key={index}>
          <input 
            type="text" 
            placeholder="Step Name" 
            value={step.name} 
            onChange={(e) => handleStepChange(index, 'name', e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Step Details" 
            value={step.details} 
            onChange={(e) => handleStepChange(index, 'details', e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Recommended Actions (comma-separated)" 
            value={step.recommendedActions.join(', ')} 
            onChange={(e) => handleStepChange(index, 'recommendedActions', e.target.value.split(', '))} 
          />
          <input 
            type="text" 
            placeholder="Timeline" 
            value={step.timeline} 
            onChange={(e) => handleStepChange(index, 'timeline', e.target.value)} 
          />
        </div>
      ))}
      <button onClick={handleAddStep}>Add Step</button>
      <button onClick={handleAddPathway}>Add Pathway</button>

      {stepDetail && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Step Details</h3>
          <p><strong>Name:</strong> {stepDetail.name}</p>
          <p><strong>Details:</strong> {stepDetail.details}</p>
          <p><strong>Recommended Actions:</strong> {stepDetail.recommendedActions.join(', ')}</p>
          <p><strong>Timeline:</strong> {stepDetail.timeline}</p>
          <button onClick={() => setStepDetail(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ClinicalPathways;
