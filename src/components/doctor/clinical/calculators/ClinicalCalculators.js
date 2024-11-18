import React, { useState } from 'react';
import CardiovascularCalculators from './CardiovascularCalculators';
import NeurologyCalculators from './NeurologyCalculators';
import PulmonaryCalculators from './PulmonaryCalculators';
import GastroenterologyCalculators from './GastroenterologyCalculators';
import ObstetricsCalculators from './ObstetricsCalculators';
import ICUCalculators from './ICUCalculators';
import HematologyCalculators from './HematologyCalculators';
import OrthopedicsCalculators from './OrthopedicsCalculators';
import NephrologyCalculators from './NephrologyCalculators';
import { Select, SelectItem } from '../../../ui/select';

const ClinicalCalculators = () => {
  const [selectedCalculator, setSelectedCalculator] = useState("");

  const renderCalculator = () => {
    switch (selectedCalculator) {
      case 'cardiovascular':
        return <CardiovascularCalculators />;
      case 'neurology':
        return <NeurologyCalculators />;
      case 'pulmonary':
        return <PulmonaryCalculators />;
      case 'gastrointestinal':
        return <GastroenterologyCalculators />;
      case 'obstetrics':
        return <ObstetricsCalculators />;
      case 'icu':
        return <ICUCalculators />;
      case 'hematology':
        return <HematologyCalculators />;
      case 'orthopedics':
        return <OrthopedicsCalculators />;
      case 'nephrology':
        return <NephrologyCalculators />;
      default:
        return <div>Please select a calculator to use.</div>;
    }
  };

  return (
    <div className="clinical-calculators-container">
      <Select value={selectedCalculator} onChange={(e) => setSelectedCalculator(e.target.value)}>
        <SelectItem value="">-- Select Calculator --</SelectItem>
        <SelectItem value="cardiovascular">Cardiovascular Calculators</SelectItem>
        <SelectItem value="neurology">Neurology Calculators</SelectItem>
        <SelectItem value="pulmonary">Pulmonary Calculators</SelectItem>
        <SelectItem value="gastrointestinal">Gastrointestinal Calculators</SelectItem>
        <SelectItem value="obstetrics">Obstetrics Calculators</SelectItem>
        <SelectItem value="icu">Intensive Care Calculators</SelectItem>
        <SelectItem value="hematology">Hematology Calculators</SelectItem>
        <SelectItem value="orthopedics">Orthopedics Calculators</SelectItem>
        <SelectItem value="nephrology">Nephrology Calculators</SelectItem>
      </Select>

      <div className="calculator-component">{renderCalculator()}</div>
    </div>
  );
};

export default ClinicalCalculators;
