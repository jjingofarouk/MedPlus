import React, { useState } from 'react';
import './RefillReminders.css'; // Import CSS for styling
import { drugOptions } from './drugOptions'; // Import drug options for autosuggestions

function RefillReminders() {
    const [medication, setMedication] = useState('');
    const [reminderDate, setReminderDate] = useState('');
    const [message, setMessage] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleAddReminder = () => {
        if (!medication || !reminderDate) {
            setMessage('Please fill in all fields.');
            return;
        }

               // Suggest drugs based on user input
               if (medication) {
                const filteredSuggestions = drugOptions.filter((drug) =>
                    drug.toLowerCase().startsWith(medication.toLowerCase())
                );
                setSuggestions(filteredSuggestions.slice(0, 5)); // Limit suggestions to 5
            } else {
                setSuggestions([]);
            }

        // Here you could save the reminder to a database or send a notification.
        setMessage(`Reminder set for ${medication} on ${reminderDate}`);
        setMedication('');
        setReminderDate('');
    };

    // Handle selecting a suggestion
    const handleSuggestionClick = (suggestion) => {
        setMedication (suggestion);
        setSuggestions([]); // Clear suggestions after selection
    };
    return (
        <div className="refill-reminders">
            <h2>Refill Reminders</h2>
            <label htmlFor="medication">Medication Name:</label>
            <input
                id="medication"
                type="text"
                value={medication}
                onChange={(e) => setMedication(e.target.value)}
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
            <label htmlFor="reminderDate">Reminder Date:</label>
            <input
                id="reminderDate"
                type="date"
                value={reminderDate}
                onChange={(e) => setReminderDate(e.target.value)}
                required
            />
            <button onClick={handleAddReminder}>Set Reminder</button>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default RefillReminders;
