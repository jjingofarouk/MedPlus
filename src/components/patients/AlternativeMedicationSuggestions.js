import React, { useState } from 'react';
import './AlternativeMedicationSuggestions.css';
import medicationAlternatives from './MedicationAlternatives'; // Importing the dataset
import { drugOptions } from './drugOptions'; // Importing the drug options for autosuggestions

function AlternativeMedicationSuggestions() {
    const [medication, setMedication] = useState('');
    const [alternatives, setAlternatives] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleGetAlternatives = () => {
        if (!medication) {
            setError('Please enter a medication.');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const result = [];
            // Look for alternatives for the entered medication
            for (const [key, value] of Object.entries(medicationAlternatives)) {
                if (key.toLowerCase() === medication.toLowerCase()) {
                    result.push(...value); // Get alternatives for the exact match
                } else if (value.includes(medication)) {
                    result.push(key); // Include the key (medication) if the entered medication is an alternative
                }
            }

            // Shuffle and slice the results to get top 5 random alternatives
            const shuffledResults = result.sort(() => 0.5 - Math.random());
            setAlternatives(shuffledResults.slice(0, 5));
        } catch (err) {
            setError('Failed to fetch alternatives.');
        } finally {
            setLoading(false);
        }
    };

    const handleMedicationChange = (e) => {
        const input = e.target.value;
        setMedication(input);

        // Suggest drugs based on user input
        if (input) {
            const filteredSuggestions = drugOptions.filter((drug) =>
                drug.toLowerCase().startsWith(input.toLowerCase())
            );
            setSuggestions(filteredSuggestions.slice(0, 5)); // Limit suggestions to 5
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setMedication(suggestion);
        setSuggestions([]); // Clear suggestions after selection
    };

    return (
        <div className="alternative-medication-suggestions">
            <h2>Alternative Medication Suggestions</h2>
            <input
                type="text"
                value={medication}
                onChange={handleMedicationChange}
                placeholder="Enter medication"
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleGetAlternatives} disabled={loading}>
                {loading ? 'Fetching...' : 'Get Alternatives'}
            </button>
            {error && <p className="error">{error}</p>}
            {alternatives.length > 0 && (
                <ul>
                    {alternatives.map((alt, index) => (
                        <li key={index}>{alt}</li>
                    ))}
                </ul>
            )}
            {alternatives.length === 0 && !loading && (
                <p>No alternatives found.</p>
            )}
        </div>
    );
}

export default AlternativeMedicationSuggestions;
