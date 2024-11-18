// HistoryOfPresentIllness.js

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import  TextArea  from './ui/textarea';
import { socratesFields } from './socratesFields'; // Importing socratesFields
import Input  from './ui/input'; // Importing Input for additional fields

const HistoryOfPresentIllness = ({ historyOfPresentIllness, handleInputChange }) => (
  <Card>
    <CardHeader>
      <CardTitle>History of Presenting Complaints</CardTitle>
    </CardHeader>
    <CardContent>
      <TextArea
        placeholder="Detailed description of the current illness"
        value={historyOfPresentIllness}
        onChange={(e) => handleInputChange('historyOfPresentIllness', '', e.target.value)}
      />
      {/* Mapping through socratesFields to render additional fields */}
      {socratesFields.map(({ key, label, placeholder, options }) => (
        <div key={key} className="additional-field">
          <label htmlFor={key}>{label}:</label>
          {options ? (
            <select
              id={key}
              onChange={(e) => handleInputChange(key, '', e.target.value)} // Handle selection change
              placeholder={placeholder}
            >
              <option value="">Select an option</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <Input
              id={key}
              placeholder={placeholder}
              onChange={(e) => handleInputChange(key, '', e.target.value)} // Handle input change
            />
          )}
        </div>
      ))}
    </CardContent>
    <style jsx>{`
      .additional-field {
        margin-top: 16px;
      }
    `}</style>
  </Card>
);

export default HistoryOfPresentIllness;
