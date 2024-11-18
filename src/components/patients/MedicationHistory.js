// MedicationHistory.jsx
import React, { useState } from 'react';
import './MedicationHistory.css';

function MedicationHistory() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchMedicationHistory = async () => {
        setLoading(true);
        setError('');
        try {
            // Simulating API call
            // const result = await api.getMedicationHistory();
            const result = [{ medication: 'Omeprazole', date: '2024-09-20' }]; // Mock result
            setHistory(result);
        } catch (err) {
            setError('Failed to fetch medication history.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="medication-history">
            <h2>Medication History</h2>
            <button onClick={fetchMedicationHistory} disabled={loading}>
                {loading ? 'Fetching...' : 'Fetch History'}
            </button>
            {error && <p className="error">{error}</p>}
            {history.length > 0 ? (
                <ul>
                    {history.map((entry, index) => (
                        <li key={index}>
                            <strong>{entry.medication}</strong> - {entry.date}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No medication history found.</p>
            )}
        </div>
    );
}

export default MedicationHistory;
