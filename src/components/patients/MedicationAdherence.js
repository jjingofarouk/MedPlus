import React, { useState } from 'react';
import './MedicationAdherence.css'; // Import CSS for styling
import { drugOptions } from './drugOptions'; // Import drug options for autosuggestions

function MedicationAdherence() {
    const [adherenceData, setAdherenceData] = useState([]);
    const [medication, setMedication] = useState('');
    const [taken, setTaken] = useState(false);
    const [message, setMessage] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Handle Medication input change
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

    // Handle selecting a suggestion
    const handleSuggestionClick = (suggestion) => {
        setMedication(suggestion);
        setSuggestions([]); // Clear suggestions after selection
    };

    const handleLogAdherence = () => {
        if (!medication) {
            setMessage('Please enter a medication name.');
            return;
        }

        const newLog = { medication, taken, date: new Date().toISOString().split('T')[0] };
        setAdherenceData([...adherenceData, newLog]);
        setMedication('');
        setTaken(false);
        setMessage('Adherence logged successfully!');
        setSuggestions([]);
    };

    return (
        <div className="medication-adherence">
            <h2>Medication Adherence Log</h2>
            <label htmlFor="medication">Medication Name:</label>
            <input
                id="medication"
                type="text"
                value={medication}
                onChange={handleMedicationChange}
                placeholder="Enter Medication Name"
                required
            />
            {/* Suggestions Dropdown */}
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
            <label>
                <input
                    type="checkbox"
                    checked={taken}
                    onChange={(e) => setTaken(e.target.checked)}
                />
                Taken
            </label>
            <button onClick={handleLogAdherence}>Log Adherence</button>
            {message && <p className="message">{message}</p>}

            <h3>Adherence History</h3>
            <ul>
                {adherenceData.map((log, index) => (
                    <li key={index}>
                        {log.medication} - {log.taken ? 'Taken' : 'Not Taken'} on {log.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MedicationAdherence;
