import React, { useEffect, useState } from "react";

const AIAssistedDiagnosis = () => {
  const [diagnosisSuggestions, setDiagnosisSuggestions] = useState([]);

  useEffect(() => {
    const fetchDiagnosisSuggestions = async () => {
      // Fetch AI-assisted diagnosis suggestions from the backend in the future
      const dummyData = [
        { id: 1, condition: "Diabetes", confidence: "95%" },
        { id: 2, condition: "Hypertension", confidence: "89%" },
      ];
      setDiagnosisSuggestions(dummyData);
    };
    fetchDiagnosisSuggestions();
  }, []);

  return (
    <div className="ai-assisted-diagnosis">
      <h3>AI-Assisted Diagnosis</h3>
      <ul>
        {diagnosisSuggestions.map((suggestion) => (
          <li key={suggestion.id}>
            {suggestion.condition} - Confidence Level: {suggestion.confidence}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIAssistedDiagnosis;
