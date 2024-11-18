// usePatientData.js
import { useState, useCallback } from 'react';
import { calculateAgeGroup } from './utils';

const usePatientData = () => {
  const [patientData, setPatientData] = useState({
    age: '',
    gender: '',
    ageGroup: '',
    recentTravel: '',
    severities: {},
    durations: {},
  });

  const handlePatientDataChange = useCallback((event) => {
    const { name, value } = event.target;
    setPatientData(prevData => ({
      ...prevData,
      [name]: value,
      ageGroup: name === 'age' ? calculateAgeGroup(Number(value)) : prevData.ageGroup,
    }));
  }, []);

  return [patientData, handlePatientDataChange];
};

export default usePatientData;
