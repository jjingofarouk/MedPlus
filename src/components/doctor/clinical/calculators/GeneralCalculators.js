import React, { useState } from 'react';

const GeneralCalculators = () => {
  const [activeCalculator, setActiveCalculator] = useState('BMI');

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'BMI':
        return <BMICalculator />;
      case 'Caloric Needs':
        return <CaloricNeedsCalculator />;
      case 'Waist Circumference':
        return <WaistCircumferenceCalculator />;
      case 'Waist-to-Height Ratio':
        return <WaistToHeightRatioCalculator />;
      case 'Ideal Body Weight':
        return <IdealBodyWeightCalculator />;
      case 'BMR':
        return <BMRCalculator />;
      case 'Harris-Benedict':
        return <HarrisBenedictCalculator />;
      case 'Mifflin-St Jeor':
        return <MifflinStJeorCalculator />;
      case 'Energy Expenditure':
        return <EnergyExpenditureCalculator />;
      case 'Body Fat Percentage':
        return <BodyFatPercentageCalculator />;
      default:
        return null;
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="text-2xl font-bold mb-4">Health Calculators</h2>
      <div className="tabs">
        {['BMI', 'Caloric Needs', 'Waist Circumference', 'Waist-to-Height Ratio', 
          'Ideal Body Weight', 'BMR', 'Harris-Benedict', 'Mifflin-St Jeor', 
          'Energy Expenditure', 'Body Fat Percentage'].map(calculator => (
          <button 
            key={calculator} 
            className={`tab ${activeCalculator === calculator ? 'active' : ''}`} 
            onClick={() => setActiveCalculator(calculator)}
          >
            {calculator}
          </button>
        ))}
      </div>
      <div className="calculator-content">
        {renderCalculator()}
      </div>
    </div>
  );
};

// Individual Calculator Components
const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convert cm to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <div>
      <h3>BMI Calculator</h3>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

const CaloricNeedsCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [caloricNeeds, setCaloricNeeds] = useState(null);

  const calculateCaloricNeeds = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    const activityFactor = 1.2; // Sedentary activity level
    setCaloricNeeds((bmr * activityFactor).toFixed(2));
  };

  return (
    <div>
      <h3>Caloric Needs Calculator</h3>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age (years)" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateCaloricNeeds}>Calculate Caloric Needs</button>
      {caloricNeeds && <p>Your caloric needs are: {caloricNeeds} calories/day</p>}
    </div>
  );
};

const WaistCircumferenceCalculator = () => {
  const [waistCircumference, setWaistCircumference] = useState('');
  const [risk, setRisk] = useState('');

  const calculateRisk = () => {
    if (waistCircumference) {
      if (waistCircumference > 94) {
        setRisk('Increased risk of metabolic complications.');
      } else {
        setRisk('Normal risk.');
      }
    }
  };

  return (
    <div>
      <h3>Waist Circumference Calculator</h3>
      <input 
        type="number" 
        placeholder="Waist Circumference (cm)" 
        value={waistCircumference} 
        onChange={(e) => setWaistCircumference(e.target.value)} 
      />
      <button onClick={calculateRisk}>Calculate Risk</button>
      {risk && <p>{risk}</p>}
    </div>
  );
};

const WaistToHeightRatioCalculator = () => {
  const [waist, setWaist] = useState('');
  const [height, setHeight] = useState('');
  const [ratio, setRatio] = useState(null);

  const calculateRatio = () => {
    const heightInCm = height / 100; // Convert height to cm
    const waistHeightRatio = waist / heightInCm;
    setRatio(waistHeightRatio.toFixed(2));
  };

  return (
    <div>
      <h3>Waist-to-Height Ratio Calculator</h3>
      <input 
        type="number" 
        placeholder="Waist (cm)" 
        value={waist} 
        onChange={(e) => setWaist(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <button onClick={calculateRatio}>Calculate Ratio</button>
      {ratio && <p>Your Waist-to-Height Ratio is: {ratio}</p>}
    </div>
  );
};

const IdealBodyWeightCalculator = () => {
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [idealWeight, setIdealWeight] = useState(null);

  const calculateIdealWeight = () => {
    let idealWeightValue;
    if (gender === 'male') {
      idealWeightValue = 50 + 2.3 * ((height / 2.54) - 60); // Convert height from cm to inches
    } else {
      idealWeightValue = 45.5 + 2.3 * ((height / 2.54) - 60);
    }
    setIdealWeight(idealWeightValue.toFixed(2));
  };

  return (
    <div>
      <h3>Ideal Body Weight Calculator</h3>
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateIdealWeight}>Calculate Ideal Weight</button>
      {idealWeight && <p>Your Ideal Body Weight is: {idealWeight} kg</p>}
    </div>
  );
};

const BMRCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);

  const calculateBMR = () => {
    let bmrValue;
    if (gender === 'male') {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    setBmr(bmrValue.toFixed(2));
  };

  return (
    <div>
      <h3>BMR Calculator</h3>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age (years)" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateBMR}>Calculate BMR</button>
      {bmr && <p>Your BMR is: {bmr} calories/day</p>}
    </div>
  );
};

const HarrisBenedictCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [caloricNeeds, setCaloricNeeds] = useState(null);

  const calculateHarrisBenedict = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    const activityFactor = 1.2; // Sedentary activity level
    setCaloricNeeds((bmr * activityFactor).toFixed(2));
  };

  return (
    <div>
      <h3>Harris-Benedict Calculator</h3>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age (years)" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateHarrisBenedict}>Calculate Caloric Needs</button>
      {caloricNeeds && <p>Your caloric needs are: {caloricNeeds} calories/day</p>}
    </div>
  );
};

const MifflinStJeorCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [caloricNeeds, setCaloricNeeds] = useState(null);

  const calculateMifflinStJeor = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    const activityFactor = 1.2; // Sedentary activity level
    setCaloricNeeds((bmr * activityFactor).toFixed(2));
  };

  return (
    <div>
      <h3>Mifflin-St Jeor Calculator</h3>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age (years)" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateMifflinStJeor}>Calculate Caloric Needs</button>
      {caloricNeeds && <p>Your caloric needs are: {caloricNeeds} calories/day</p>}
    </div>
  );
};

const EnergyExpenditureCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [totalEnergyExpenditure, setTotalEnergyExpenditure] = useState(null);

  const calculateEnergyExpenditure = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    setTotalEnergyExpenditure((bmr * activityLevel).toFixed(2));
  };

  return (
    <div>
      <h3>Energy Expenditure Calculator</h3>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age (years)" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
        <option value={1.2}>Sedentary</option>
        <option value={1.375}>Lightly Active</option>
        <option value={1.55}>Moderately Active</option>
        <option value={1.725}>Very Active</option>
        <option value={1.9}>Extra Active</option>
      </select>
      <button onClick={calculateEnergyExpenditure}>Calculate Energy Expenditure</button>
      {totalEnergyExpenditure && <p>Your Total Energy Expenditure is: {totalEnergyExpenditure} calories/day</p>}
    </div>
  );
};

const BodyFatPercentageCalculator = () => {
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bodyFatPercentage, setBodyFatPercentage] = useState(null);

  const calculateBodyFatPercentage = () => {
    let bodyFat;
    if (gender === 'male') {
      bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
      bodyFat = 163.205 * Math.log10(waist + neck) - 97.684 * Math.log10(height) - 78.387;
    }
    setBodyFatPercentage(bodyFat.toFixed(2));
  };

  return (
    <div>
      <h3>Body Fat Percentage Calculator</h3>
      <input 
        type="number" 
        placeholder="Waist (cm)" 
        value={waist} 
        onChange={(e) => setWaist(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Neck (cm)" 
        value={neck} 
        onChange={(e) => setNeck(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
      />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={calculateBodyFatPercentage}>Calculate Body Fat Percentage</button>
      {bodyFatPercentage && <p>Your Body Fat Percentage is: {bodyFatPercentage}%</p>}
    </div>
  );
};

export default GeneralCalculators;
