import React, { createContext, useState, useContext } from 'react';

const MedicationContext = createContext(undefined);

export const MedicationProvider = ({ children }) => {
  const [medications, setMedications] = useState([]);
  const [selectedMedication, setSelectedMedication] = useState(null);

  return (
    <MedicationContext.Provider value={{ medications, setMedications, selectedMedication, setSelectedMedication }}>
      {children}
    </MedicationContext.Provider>
  );
};

export const useMedicationContext = () => {
  const context = useContext(MedicationContext);
  if (!context) {
    throw new Error('useMedicationContext must be used within a MedicationProvider');
  }
  return context;
};

export default MedicationContext;
