import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import TextArea  from './ui/textarea';
import  Checkbox from './ui/Checkbox';

const SocialHistory = ({ socialHistory, handleInputChange, handleCheckboxChange }) => (
  <Card>
    <CardHeader>
      <CardTitle>Social History</CardTitle>
    </CardHeader>
    <CardContent>
      <div>
        <Checkbox
          checked={socialHistory.smoking}
          onCheckedChange={() => handleCheckboxChange('socialHistory', 'smoking')}
        />
        <label>Smoking (e.g., Pack-years?)</label>
      </div>
      <div>
        <Checkbox
          checked={socialHistory.alcohol}
          onCheckedChange={() => handleCheckboxChange('socialHistory', 'alcohol')}
        />
        <label>Alcohol (Amount, Duration, When stopped?)</label>
      </div>
      <TextArea
        placeholder={`Dietary habits (Any restrictions? Frequency of meals?)`}
        value={socialHistory.diet}
        onChange={(e) => handleInputChange('socialHistory', 'diet', e.target.value)}
      />
      <TextArea
        placeholder={`Exercise (Type, Frequency, Limitations?)`}
        value={socialHistory.exercise}
        onChange={(e) => handleInputChange('socialHistory', 'exercise', e.target.value)}
      />
      <TextArea
        placeholder={`Sexual history (Any concerns? Number of partners?)`}
        value={socialHistory.sexualHistory}
        onChange={(e) => handleInputChange('socialHistory', 'sexualHistory', e.target.value)}
      />
      <TextArea
        placeholder={`Additional factors (Who lives at home? Job? Mobility needs?)`}
        value={socialHistory.additionalFactors}
        onChange={(e) => handleInputChange('socialHistory', 'additionalFactors', e.target.value)}
      />
    </CardContent>
  </Card>
);

export default SocialHistory;
