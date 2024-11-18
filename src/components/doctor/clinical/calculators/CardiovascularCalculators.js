import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../ui/card';
import  Input  from '../../../ui/input';
import  Checkbox  from '../../../ui/Checkbox';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../ui/select';
import  Button  from '../../../ui/button';

const CardiovascularCalculators = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [cholesterol, setCholesterol] = useState('');
  const [hdl, setHdl] = useState('');
  const [systolicBP, setSystolicBP] = useState('');
  const [diastolicBP, setDiastolicBP] = useState('');
  const [smoking, setSmoking] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [afib, setAfib] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [qtInterval, setQtInterval] = useState('');
  const [aorticGradient, setAorticGradient] = useState('');
  const [aorticArea, setAorticArea] = useState('');
  const [hypertension, setHypertension] = useState(false);
  const [heartFailure, setHeartFailure] = useState(false);
  const [stroke, setStroke] = useState(false);
  const [bleedingHistory, setBleedingHistory] = useState(false);
  const [drugs, setDrugs] = useState(false);
  const [chestPain, setChestPain] = useState(false);
  const [creatinine, setCreatinine] = useState('');
  const [result, setResult] = useState({});

  const calculateASCVD = () => {
    // Validate and convert inputs to numbers
    const ageNum = Number(age);
    const cholesterolNum = Number(cholesterol);
    const hdlNum = Number(hdl);
    const systolicBPNum = Number(systolicBP);
  
    // Check for valid numeric inputs
    if (
      [ageNum, cholesterolNum, hdlNum, systolicBPNum].some(
        (val) => isNaN(val) || val <= 0
      )
    ) {
      alert("Please enter positive numbers for all fields.");
      return;
    }
  
    // Calculate ASCVD risk score with more meaningful logic
    const smokingFactor = smoking ? 20 : 0;
    const bpAdjustment = Math.max(systolicBPNum - 120, 0); // Avoid negative BP adjustment
  
    const riskScore =
      (ageNum + cholesterolNum - hdlNum + smokingFactor + bpAdjustment) / 2;
  
    // Update the result state with the calculated risk, rounded to 2 decimals
    setResult((prev) => ({
      ...prev,
      ASCVD: riskScore.toFixed(2),
    }));
  };
  

  const calculateFramingham = () => {
    const ageNum = parseInt(age);
    const cholesterolNum = parseInt(cholesterol);
    const hdlNum = parseInt(hdl);
    const systolicBPNum = parseInt(systolicBP);
    
    if (isNaN(ageNum) || isNaN(cholesterolNum) || isNaN(hdlNum) || isNaN(systolicBPNum)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    let score = 0;
    if (ageNum >= 20 && ageNum <= 34) score += 0;
    else if (ageNum >= 35 && ageNum <= 39) score += 2;
    else if (ageNum >= 40 && ageNum <= 44) score += 3;
    else if (ageNum >= 45 && ageNum <= 49) score += 4;
    else if (ageNum >= 50 && ageNum <= 54) score += 5;
    else if (ageNum >= 55 && ageNum <= 59) score += 6;
    else if (ageNum >= 60 && ageNum <= 64) score += 7;
    else if (ageNum >= 65) score += 8;

    score += (cholesterolNum > 240) ? 3 : (cholesterolNum >= 200 && cholesterolNum <= 240) ? 1 : 0;
    score += (hdlNum < 40) ? 1 : 0;
    score += (systolicBPNum > 140) ? 3 : (systolicBPNum >= 130 && systolicBPNum <= 140) ? 1 : 0;
    score += smoking ? 2 : 0;

    setResult(prev => ({ ...prev, Framingham: score }));
  };

  const calculateCHA2DS2VASc = () => {
    let score = 0;
    score += (parseInt(age) >= 75) ? 2 : (parseInt(age) >= 65) ? 1 : 0;
    score += (gender === 'female') ? 1 : 0;
    score += (diabetes) ? 1 : 0;
    score += (hypertension) ? 1 : 0;
    score += (heartFailure) ? 1 : 0;
    score += (stroke) ? 2 : 0;
    setResult(prev => ({ ...prev, CHA2DS2VASc: score }));
  };

  const calculateHASBLED = () => {
    let score = 0;
    score += (hypertension) ? 1 : 0;
    score += (parseFloat(creatinine) > 2) ? 1 : 0;
    score += (stroke) ? 1 : 0;
    score += (bleedingHistory) ? 1 : 0;
    score += (parseInt(age) >= 65) ? 1 : 0;
    score += (drugs) ? 1 : 0;
    setResult(prev => ({ ...prev, HASBLED: score }));
  };

  const calculateGRACE = () => {
    const ageNum = parseInt(age);
    const systolicBPNum = parseInt(systolicBP);
    const heartRateNum = parseInt(heartRate);
    const creatinineNum = parseFloat(creatinine);

    let score = 0;
    if (ageNum >= 65) score += 1;
    if (systolicBPNum < 120) score += 0;
    else if (systolicBPNum <= 139) score += 1;
    else if (systolicBPNum >= 140) score += 2;

    if (heartRateNum > 100) score += 1;
    if (creatinineNum > 2) score += 1;
    setResult(prev => ({ ...prev, GRACE: score }));
  };

  const calculateTIMI = () => {
    let score = 0;
    score += (parseInt(age) >= 65) ? 1 : 0;
    score += (diabetes) ? 1 : 0;
    score += (chestPain) ? 1 : 0;
    score += (hypertension) ? 1 : 0;
    score += (heartFailure) ? 1 : 0;
    setResult(prev => ({ ...prev, TIMI: score }));
  };

  const calculateSCORE = () => {
    const ageNum = parseInt(age);
    const cholesterolNum = parseInt(cholesterol);
    const systolicBPNum = parseInt(systolicBP);

    let score = 0;
    if (ageNum >= 50) score += 1;
    score += (cholesterolNum > 240) ? 1 : 0;
    score += (systolicBPNum > 140) ? 1 : 0;
    score += smoking ? 1 : 0;
    setResult(prev => ({ ...prev, SCORE: score }));
  };

  const calculateQTc = () => {
    const heartRateNum = parseInt(heartRate);
    const qtIntervalNum = parseFloat(qtInterval);

    if (isNaN(heartRateNum) || isNaN(qtIntervalNum)) {
      alert("Please enter valid numbers for heart rate and QT interval.");
      return;
    }

    const qtc = qtIntervalNum / Math.sqrt(heartRateNum / 60);
    setResult(prev => ({ ...prev, QTc: qtc.toFixed(2) }));
  };

  const calculateAorticStenosis = () => {
    const aorticGradientNum = parseInt(aorticGradient);
    const aorticAreaNum = parseFloat(aorticArea);

    if (isNaN(aorticGradientNum) || isNaN(aorticAreaNum)) {
      alert("Please enter valid numbers for aortic gradient and area.");
      return;
    }

    const stenosisRisk = (aorticGradientNum / aorticAreaNum) * 100;
    setResult(prev => ({ ...prev, AorticStenosis: stenosisRisk.toFixed(2) }));
  };

  const renderInputField = (label, value, onChange, placeholder = '', type = 'number') => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1"
      />
    </div>
  );

  const renderCheckbox = (label, checked, onChange) => (
    <div className="flex items-center mb-4">
      <Checkbox
        id={label.toLowerCase().replace(/\s+/g, '-')}
        checked={checked}
        onCheckedChange={onChange}
      />
      <label
        htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
        className="ml-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    </div>
  );

  const renderCalculator = (title, inputs, calculateFunction) => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {inputs}
        <Button onClick={calculateFunction} className="mt-4">Calculate {title}</Button>
        {result[title] && (
          <div className="mt-4">
            <strong>Result:</strong> {result[title]}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cardiovascular Risk Calculators</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderCalculator("ASCVD", (
          <>
            {renderInputField("Age", age, setAge, "Age (years)")}
            {renderInputField("Total Cholesterol", cholesterol, setCholesterol, "Total Cholesterol (mg/dL)")}
            {renderInputField("HDL", hdl, setHdl, "HDL (mg/dL)")}
            {renderInputField("Systolic BP", systolicBP, setSystolicBP, "Systolic BP (mmHg)")}
            {renderCheckbox("Smoking", smoking, setSmoking)}
          </>
        ), calculateASCVD)}

        {renderCalculator("Framingham", (
          <>
            {renderInputField("Age", age, setAge, "Age (years)")}
            {renderInputField("Total Cholesterol", cholesterol, setCholesterol, "Total Cholesterol (mg/dL)")}
            {renderInputField("HDL", hdl, setHdl, "HDL (mg/dL)")}
            {renderInputField("Systolic BP", systolicBP, setSystolicBP, "Systolic BP (mmHg)")}
            {renderCheckbox("Smoking", smoking, setSmoking)}
          </>
        ), calculateFramingham)}

        {renderCalculator("CHA₂DS₂-VASc", (
          <>
            {renderInputField("Age", age, setAge, "Age (years)")}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {renderCheckbox("Diabetes", diabetes, setDiabetes)}
            {renderCheckbox("Hypertension", hypertension, setHypertension)}
            {renderCheckbox("Heart Failure", heartFailure, setHeartFailure)}
            {renderCheckbox("Stroke", stroke, setStroke)}
          </>
        ), calculateCHA2DS2VASc)}

        {renderCalculator("HAS-BLED", (
          <>
            {renderInputField("Age", age, setAge, "Age (years)")}
            {renderCheckbox("Hypertension", hypertension, setHypertension)}
            {renderInputField("Creatinine", creatinine, setCreatinine, "Creatinine (mg/dL)")}
            {renderCheckbox("Stroke", stroke, setStroke)}
            {renderCheckbox("Bleeding History", bleedingHistory, setBleedingHistory)}
            {renderCheckbox("Labile INRs", drugs, setDrugs)}
          </>
        ), calculateHASBLED)}

        {renderCalculator("GRACE", (
          <>
            {renderInputField("Age", age, setAge, "Age (years)")}
            {renderInputField("Systolic BP", systolicBP, setSystolicBP, "Systolic BP (mmHg)")}
            {renderInputField("Heart Rate", heartRate, setHeartRate, "Heart Rate (bpm)")}
            {renderInputField("Creatinine", creatinine, setCreatinine, "Creatinine (mg/dL)")}
          </>
        ), calculateGRACE)}

        {renderCalculator("TIMI", (
          <>
            {renderInputField("Age", age, setAge, "Age (years)")}
            {renderCheckbox("Diabetes", diabetes, setDiabetes)}
            {renderCheckbox("Chest Pain", chestPain, setChestPain)}
            {renderCheckbox("Hypertension", hypertension, setHypertension)}
            {renderCheckbox("Heart Failure", heartFailure, setHeartFailure)}
          </>
        ), calculateTIMI)}

        {renderCalculator("SCORE", (
          <>
            {renderInputField("Age", age, setAge, "Age (years)")}
            {renderInputField("Total Cholesterol", cholesterol, setCholesterol, "Total Cholesterol (mg/dL)")}
            {renderInputField("Systolic BP", systolicBP, setSystolicBP, "Systolic BP (mmHg)")}
            {renderCheckbox("Smoking", smoking, setSmoking)}
          </>
        ), calculateSCORE)}

{renderCalculator("QTc", (
          <>
            {renderInputField("Heart Rate", heartRate, setHeartRate, "Heart Rate (bpm)")}
            {renderInputField("QT Interval", qtInterval, setQtInterval, "QT Interval (ms)")}
          </>
        ), calculateQTc)}

        {renderCalculator("Aortic Stenosis", (
          <>
            {renderInputField("Aortic Gradient", aorticGradient, setAorticGradient, "Aortic Gradient (mmHg)")}
            {renderInputField("Aortic Area", aorticArea, setAorticArea, "Aortic Area (cm²)")}
          </>
        ), calculateAorticStenosis)}
      </div>
    </div>
  );
};

export default CardiovascularCalculators;