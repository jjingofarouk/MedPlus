import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import TextArea  from './ui/textarea';
import { chronicConditionsOptions } from './ChronicConditions'; // Import your chronic conditions options
import { specificIllnessesOptions }  from './SpecificIllnesses'; // Add the path to your specific illnesses options
import { medicationOptions } from './MedicationOptions'; // Adjust the path as necessary

const PastMedicalHistory = ({ pastMedicalHistory, handleInputChange, handleArrayInputChange }) => {
  const [medications, setMedications] = useState(pastMedicalHistory.medications || []);
  const [allergies, setAllergies] = useState(pastMedicalHistory.allergies || []);
  const [otherDrugUse, setOtherDrugUse] = useState(pastMedicalHistory.otherDrugUse || '');
  const [specificIllnesses, setSpecificIllnesses] = useState(pastMedicalHistory.specificIllnesses || []);
  const [selectedCondition, setSelectedCondition] = useState('');

  const handleMedicationsChange = (e) => {
    const value = e.target.value.split(', ');
    setMedications(value);
    handleArrayInputChange('medications', value);
  };

  const handleAllergiesChange = (e) => {
    const value = e.target.value.split(', ');
    setAllergies(value);
    handleArrayInputChange('allergies', value);
  };

  const handleSpecificIllnessesChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSpecificIllnesses(value);
    handleArrayInputChange('specificIllnesses', value);
  };

  const handleConditionSelect = (e) => {
    const condition = e.target.value;
    setSelectedCondition(condition);
    if (condition && !pastMedicalHistory.conditions.includes(condition)) {
      handleArrayInputChange('conditions', [...(pastMedicalHistory.conditions || []), condition]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Past Medical History</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Dropdown for selecting chronic conditions */}
        <label htmlFor="chronicConditions">Select Chronic Conditions:</label>
        <select id="chronicConditions" value={selectedCondition} onChange={handleConditionSelect}>
          <option value="">-- Select a Condition --</option>
          {(chronicConditionsOptions || []).map((condition, index) => ( // Use a fallback to empty array
            <option key={index} value={condition}>
              {condition}
            </option>
          ))}
        </select>



        <TextArea
          placeholder="Previous hospitalizations (dates and reasons)"
          value={pastMedicalHistory.hospitalizations || ''}
          onChange={(e) => handleInputChange('pastMedicalHistory', 'hospitalizations', e.target.value)}
        />

        <TextArea
          placeholder="List any past surgeries (dates and types)"
          value={pastMedicalHistory.surgeries || ''}
          onChange={(e) => handleInputChange('pastMedicalHistory', 'surgeries', e.target.value)}
        />

        <label htmlFor="specificIllnesses">Select Specific Illnesses:</label>
        <select 
          id="specificIllnesses" 
          multiple 
          value={specificIllnesses} 
          onChange={handleSpecificIllnessesChange} 
          style={{ height: '100px' }} 
        >
          {(specificIllnessesOptions || []).map((illness, index) => ( // Use a fallback to empty array
            <option key={index} value={illness}>
              {illness}
            </option>
          ))}
        </select>

        <TextArea
          placeholder="List any allergies (medications, food, environmental) and reactions"
          value={allergies.join(', ')}
          onChange={handleAllergiesChange}
        />

        <label htmlFor="medications">Select Medications/Herbs/Vitamins/Supplements:</label>
        <select 
          id="medications" 
          multiple 
          value={medications} 
          onChange={handleMedicationsChange} 
          style={{ height: '100px' }} 
        >
          {(medicationOptions || []).map((medication, index) => ( // Use a fallback to empty array
            <option key={index} value={medication}>
              {medication}
            </option>
          ))}
        </select>

        <TextArea
          placeholder="Other drug use (past or present)"
          value={otherDrugUse}
          onChange={(e) => setOtherDrugUse(e.target.value)}
        />
      </CardContent>
    </Card>
  );
};

export default PastMedicalHistory;
