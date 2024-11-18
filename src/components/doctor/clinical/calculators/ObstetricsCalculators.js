import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../../../ui/card";
import Input from "../../../ui/input";
import Button from "../../../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import Switch from "../../../ui/switch";
import Label from "../../../ui/label";
import { AlertCircle, Heart, Activity, Scale, Calendar, Baby, Droplets, Brain } from "lucide-react";
import './ObstetricsCalculators.css';

const ObstetricsCalculators = () => {
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState({});
  const [activeCalculator, setActiveCalculator] = useState(null);

  const handleInputChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  const calculateResult = (calculator) => {
    switch (calculator) {
      case "pph":
        postpartumHemorrhageRiskScore();
        break;
      case "preeclampsia":
        preeclampsiaRiskAssessment();
        break;
      case "obstetricHemorrhage":
        obstetricHemorrhageRiskAssessment();
        break;
      case "bmi":
        maternalBmiCalculator();
        break;
      case "dueDate":
        nagelesRuleForDueDate();
        break;
      case "gestationalAge":
        calculateGestationalAge();
        break;
      case "apgar":
        calculateApgarScore();
        break;
    }
    setActiveCalculator(calculator);
  };

  const postpartumHemorrhageRiskScore = () => {
    const { age, parity, previousPPH, anemia, multipleGestation } = inputs;
    let riskScore = 0;
    riskScore += parseInt(age) > 35 ? 2 : 0;
    riskScore += parseInt(parity) > 3 ? 2 : 0;
    riskScore += previousPPH ? 3 : 0;
    riskScore += anemia ? 2 : 0;
    riskScore += multipleGestation ? 3 : 0;
    setResults({ ...results, pph: riskScore });
  };

  const preeclampsiaRiskAssessment = () => {
    const { maternalAge, bmi, previousPreeclampsia, multipleGestation, chronicHypertension, preExistingDiabetes } = inputs;
    let risk = 0;
    risk += parseInt(maternalAge) > 40 ? 2 : 0;
    risk += parseFloat(bmi) > 30 ? 2 : 0;
    risk += previousPreeclampsia ? 4 : 0;
    risk += multipleGestation ? 3 : 0;
    risk += chronicHypertension ? 3 : 0;
    risk += preExistingDiabetes ? 2 : 0;
    setResults({ ...results, preeclampsia: risk });
  };

  const obstetricHemorrhageRiskAssessment = () => {
    const { anemia, previousHemorrhage, macrosomia, placentaPrevia, multipleGestation } = inputs;
    let risk = 0;
    risk += anemia ? 2 : 0;
    risk += previousHemorrhage ? 3 : 0;
    risk += macrosomia ? 2 : 0;
    risk += placentaPrevia ? 4 : 0;
    risk += multipleGestation ? 3 : 0;
    setResults({ ...results, obstetricHemorrhage: risk });
  };

  const maternalBmiCalculator = () => {
    const { weight, height } = inputs;
    const bmi = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))).toFixed(2);
    setResults({ ...results, bmi });
  };

  const nagelesRuleForDueDate = () => {
    const { lastMenstrualPeriod } = inputs;
    const lmpDate = new Date(lastMenstrualPeriod);
    const dueDate = new Date(lmpDate.setDate(lmpDate.getDate() + 280));
    setResults({ ...results, dueDate: dueDate.toDateString() });
  };

  const calculateGestationalAge = () => {
    const { lastMenstrualPeriod } = inputs;
    const lmpDate = new Date(lastMenstrualPeriod);
    const today = new Date();
    const gestationalAgeDays = Math.floor((today - lmpDate) / (1000 * 60 * 60 * 24));
    const gestationalAgeWeeks = Math.floor(gestationalAgeDays / 7);
    const remainingDays = gestationalAgeDays % 7;
    setResults({ ...results, gestationalAge: `${gestationalAgeWeeks} weeks and ${remainingDays} days` });
  };

  const calculateApgarScore = () => {
    const { heartRate, respiration, muscleTone, reflexResponse, color } = inputs;
    let score = 0;
    score += parseInt(heartRate) > 100 ? 2 : parseInt(heartRate) > 0 ? 1 : 0;
    score += respiration === "good crying" ? 2 : respiration === "slow or irregular" ? 1 : 0;
    score += muscleTone === "active" ? 2 : muscleTone === "some flexion" ? 1 : 0;
    score += reflexResponse === "vigorous cry" ? 2 : reflexResponse === "grimace" ? 1 : 0;
    score += color === "completely pink" ? 2 : color === "blue extremities" ? 1 : 0;
    setResults({ ...results, apgar: score });
  };

  const calculators = [
    { id: "pph", title: "Postpartum Hemorrhage Risk", icon: Droplets },
    { id: "preeclampsia", title: "Preeclampsia Risk", icon: Activity },
    { id: "obstetricHemorrhage", title: "Obstetric Hemorrhage Risk", icon: Heart },
    { id: "bmi", title: "Maternal BMI", icon: Scale },
    { id: "dueDate", title: "Due Date (Nagele's Rule)", icon: Calendar },
    { id: "gestationalAge", title: "Gestational Age", icon: Calendar },
    { id: "apgar", title: "APGAR Score", icon: Baby },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Obstetrics Calculators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calculators.map((calc) => (
          <Card key={calc.id} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="text-lg font-semibold">{calc.title}</h2>
              <calc.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {renderInputs(calc.id)}
            </CardContent>
            <CardFooter>
              <Button onClick={() => calculateResult(calc.id)} className="w-full">
                Calculate
              </Button>
            </CardFooter>
            {activeCalculator === calc.id && results[calc.id] !== undefined && (
              <div className="p-4 bg-secondary text-secondary-foreground rounded-b-lg">
                <p className="font-semibold">Result: {renderResult(calc.id)}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );

  function renderInputs(calculatorId) {
    switch (calculatorId) {
      case "pph":
        return (
          <>
            <Input
              type="number"
              placeholder="Age"
              onChange={(e) => handleInputChange("age", e.target.value)}
              className="mb-2"
            />
            <Input
              type="number"
              placeholder="Parity"
              onChange={(e) => handleInputChange("parity", e.target.value)}
              className="mb-2"
            />
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="previousPPH"
                onCheckedChange={(checked) => handleInputChange("previousPPH", checked)}
              />
              <Label htmlFor="previousPPH">Previous PPH</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="anemia"
                onCheckedChange={(checked) => handleInputChange("anemia", checked)}
              />
              <Label htmlFor="anemia">Anemia</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="multipleGestation"
                onCheckedChange={(checked) => handleInputChange("multipleGestation", checked)}
              />
              <Label htmlFor="multipleGestation">Multiple Gestation</Label>
            </div>
          </>
        );
      case "preeclampsia":
        return (
          <>
            <Input
              type="number"
              placeholder="Maternal Age"
              onChange={(e) => handleInputChange("maternalAge", e.target.value)}
              className="mb-2"
            />
            <Input
              type="number"
              placeholder="BMI"
              onChange={(e) => handleInputChange("bmi", e.target.value)}
              className="mb-2"
            />
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="previousPreeclampsia"
                onCheckedChange={(checked) => handleInputChange("previousPreeclampsia", checked)}
              />
              <Label htmlFor="previousPreeclampsia">Previous Preeclampsia</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="multipleGestation"
                onCheckedChange={(checked) => handleInputChange("multipleGestation", checked)}
              />
              <Label htmlFor="multipleGestation">Multiple Gestation</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="chronicHypertension"
                onCheckedChange={(checked) => handleInputChange("chronicHypertension", checked)}
              />
              <Label htmlFor="chronicHypertension">Chronic Hypertension</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="preExistingDiabetes"
                onCheckedChange={(checked) => handleInputChange("preExistingDiabetes", checked)}
              />
              <Label htmlFor="preExistingDiabetes">Pre-existing Diabetes</Label>
            </div>
          </>
        );
      case "obstetricHemorrhage":
        return (
          <>
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="anemia"
                onCheckedChange={(checked) => handleInputChange("anemia", checked)}
              />
              <Label htmlFor="anemia">Anemia</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="previousHemorrhage"
                onCheckedChange={(checked) => handleInputChange("previousHemorrhage", checked)}
              />
              <Label htmlFor="previousHemorrhage">Previous Hemorrhage</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="macrosomia"
                onCheckedChange={(checked) => handleInputChange("macrosomia", checked)}
              />
              <Label htmlFor="macrosomia">Macrosomia</Label>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Switch
                id="placentaPrevia"
                onCheckedChange={(checked) => handleInputChange("placentaPrevia", checked)}
              />
              <Label htmlFor="placentaPrevia">Placenta Previa</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="multipleGestation"
                onCheckedChange={(checked) => handleInputChange("multipleGestation", checked)}
              />
              <Label htmlFor="multipleGestation">Multiple Gestation</Label>
            </div>
          </>
        );
      case "bmi":
        return (
          <>
            <Input
              type="number"
              placeholder="Weight (kg)"
              onChange={(e) => handleInputChange("weight", e.target.value)}
              className="mb-2"
            />
            <Input
              type="number"
              placeholder="Height (m)"
              onChange={(e) => handleInputChange("height", e.target.value)}
              className="mb-2"
            />
          </>
        );
      case "dueDate":
      case "gestationalAge":
        return (
          <Input
            type="date"
            placeholder="Last Menstrual Period"
            onChange={(e) => handleInputChange("lastMenstrualPeriod", e.target.value)}
            className="mb-2"
          />
        );
      case "apgar":
        return (
          <>
            <Input
              type="number"
              placeholder="Heart Rate (bpm)"
              onChange={(e) => handleInputChange("heartRate", e.target.value)}
              className="mb-2"
            />
            <Select onValueChange={(value) => handleInputChange("respiration", value)}>
              <SelectTrigger className="mb-2">
                <SelectValue placeholder="Respiration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="good crying">Good crying</SelectItem>
                <SelectItem value="slow or irregular">Slow or irregular</SelectItem>
                <SelectItem value="absent">Absent</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleInputChange("muscleTone", value)}>
              <SelectTrigger className="mb-2">
                <SelectValue placeholder="Muscle Tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="some flexion">Some flexion</SelectItem>
                <SelectItem value="limp">Limp</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleInputChange("reflexResponse", value)}>
              <SelectTrigger className="mb-2">
                <SelectValue placeholder="Reflex Response" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vigorous cry">Vigorous cry</SelectItem>
                <SelectItem value="grimace">Grimace</SelectItem>
                <SelectItem value="no response">No response</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => handleInputChange("color", value)}>
              <SelectTrigger className="mb-2">
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="completely pink">Completely pink</SelectItem>
                <SelectItem value="blue extremities">Blue extremities</SelectItem>
                <SelectItem value="blue all over">Blue all over</SelectItem>
              </SelectContent>
            </Select>
          </>
        );
      default:
        return null;
    }
  }

  function renderResult(calculatorId) {
    switch (calculatorId) {
      case "pph":
        return `Risk Score: ${results.pph}`;
      case "preeclampsia":
        return `Risk Score: ${results.preeclampsia}`;
      case "obstetricHemorrhage":
        return `Risk Score: ${results.obstetricHemorrhage}`;
      case "bmi":
        return `BMI: ${results.bmi}`;
      case "dueDate":
        return `Due Date: ${results.dueDate}`;
      case "gestationalAge":
        return results.gestationalAge;
      case "apgar":
        return `APGAR Score: ${results.apgar}`;
      default:
        return "N/A";
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Obstetrics Calculators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calculators.map((calc) => (
          <Card key={calc.id} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="text-lg font-semibold">{calc.title}</h2>
              <calc.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {renderInputs(calc.id)}
            </CardContent>
            <CardFooter>
              <Button onClick={() => calculateResult(calc.id)} className="w-full">
                Calculate
              </Button>
            </CardFooter>
            {activeCalculator === calc.id && results[calc.id] !== undefined && (
              <div className="p-4 bg-secondary text-secondary-foreground rounded-b-lg">
                <p className="font-semibold">Result: {renderResult(calc.id)}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ObstetricsCalculators;