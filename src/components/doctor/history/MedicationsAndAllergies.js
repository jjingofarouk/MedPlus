import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import TextArea from './ui/textarea';

const MedicationsAndAllergies = ({ medications, allergies, handleArrayInputChange }) => (
  <Card>
    <CardHeader>
      <CardTitle>Medications and Allergies</CardTitle>
    </CardHeader>
    <CardContent>
      <TextArea
        placeholder="Current medications (including traditional medicines)"
        value={medications.join(', ')}
        onChange={(e) => handleArrayInputChange('medications', e.target.value.split(', '))}
      />
      <TextArea
        placeholder="Known allergies"
        value={allergies.join(', ')}
        onChange={(e) => handleArrayInputChange('allergies', e.target.value.split(', '))}
      />
    </CardContent>
  </Card>
);

export default MedicationsAndAllergies;
