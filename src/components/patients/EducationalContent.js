import React, { useState } from 'react';
import './EducationalContent.css';
import { drugOptions } from './drugOptions'; // Import drug options for autosuggestions
import drugEducation from './DrugEducation'; // Import the drug education data

function EducationalContent() {
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Handle input change and suggest topics
    const handleTopicChange = (e) => {
        const input = e.target.value;
        setTopic(input);

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
        setTopic(suggestion);
        setSuggestions([]); // Clear suggestions after selection
    };

    const handleFetchContent = () => {
        if (!topic) {
            setError('Please enter a medication topic.');
            return;
        }

        setLoading(true);
        setError('');
        setContent(null); // Clear previous content

        // Fetch drug information from the drugEducation object
        const drugData = drugEducation[topic];
        if (!drugData) {
            setError('Medication not found. Please check the name.');
            setLoading(false);
            return;
        }

        // Format the content for display
        const formattedContent = `
            <strong>Uses:</strong> ${drugData.use}
            <br />
            <strong>Contraindications:</strong> ${drugData.contraindications}
            <br />
            <strong>Side Effects:</strong> ${drugData.sideEffects}
        `;
        
        setContent(formattedContent);
        setLoading(false);
    };

    const handleReset = () => {
        setTopic('');
        setContent(null);
        setError('');
        setSuggestions([]); // Clear suggestions
    };

    return (
        <div className="educational-content">
            <h2>Know Your Medications Better</h2>
            <input
                type="text"
                value={topic}
                onChange={handleTopicChange}
                placeholder="Enter medication"
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
            <button onClick={handleFetchContent} disabled={loading}>
                {loading ? 'Fetching...' : 'Get Content'}
            </button>
            <button onClick={handleReset} disabled={loading}>Reset</button>
            {error && <p className="error">{error}</p>}
            {content && <div className="content" dangerouslySetInnerHTML={{ __html: content }} />}
        </div>
    );
}

export default EducationalContent;
