import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import TextArea  from './ui/textarea';
import  Checkbox from './ui/Checkbox';

const FamilyHistory = ({ familyHistory, handleInputChange, handleCheckboxChange }) => (
  <Card>
    <CardHeader>
      <CardTitle>family History</CardTitle>
    </CardHeader>
    <CardContent>
      <div>
        <Checkbox
          checked={familyHistory.disease}
          onCheckedChange={() => handleCheckboxChange('familyHistory', 'disease')}
        />
        <label>Disease (Any disease common among family members?)</label>
      </div>
      <div>
        <Checkbox
          checked={familyHistory.alcohol}
          onCheckedChange={() => handleCheckboxChange('familyHistory', 'alcohol')}
        />
        <label>Alcohol (Amount, Duration, When stopped?)</label>
      </div>
      <TextArea
        placeholder={`Smoking (Do any of patient's relatives smoke? Pack years?)`}
        value={familyHistory.smoking}
        onChange={(e) => handleInputChange('familyHistory', 'smoking', e.target.value)}
      />
      <TextArea
        placeholder={`Hypertension (Tendency to hypertension before 60 years?)`}
        value={familyHistory.exercise}
        onChange={(e) => handleInputChange('familyHistory', 'hypertension', e.target.value)}
      />
      <TextArea
        placeholder={`Tuberculosis (Any relatives with history of TB?)`}
        value={familyHistory.tuberculosis}
        onChange={(e) => handleInputChange('familyHistory', 'tuberculosis', e.target.value)}
      />
      <TextArea
        placeholder={`Additional factors (Who lives at home? Job? Mobility needs?)`}
        value={familyHistory.additionalFactors}
        onChange={(e) => handleInputChange('familyHistory', 'additionalFactors', e.target.value)}
      />
    </CardContent>
  </Card>
);

export default FamilyHistory;
