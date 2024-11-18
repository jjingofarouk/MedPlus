import React, { useState } from 'react';
import './DrugInteractionChecker.css'; // Import CSS for styling
import { drugInteractionData } from './DrugInteractionData'; // Import the data

function DrugInteractionChecker() {
    const [firstDrug, setFirstDrug] = useState('');
    const [secondDrug, setSecondDrug] = useState('');
    const [interactions, setInteractions] = useState(null);
    const [pairSuggestions, setPairSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [firstDrugSuggestions, setFirstDrugSuggestions] = useState([]);
    const [secondDrugSuggestions, setSecondDrugSuggestions] = useState([]);

    const handleFirstDrugChange = (e) => {
        const value = e.target.value;
        setFirstDrug(value);
        setFirstDrugSuggestions(getDrugSuggestions(value));
    };

    const handleSecondDrugChange = (e) => {
        const value = e.target.value;
        setSecondDrug(value);
        setSecondDrugSuggestions(getDrugSuggestions(value));
    };

    const getDrugSuggestions = (input) => {
        return drugInteractionData
            .filter(interaction => 
                interaction.drug.toLowerCase().includes(input.toLowerCase()))
            .map(interaction => interaction.drug)
            .slice(0, 5); // Limit suggestions to 5
    };

    const getPairSuggestions = (drug) => {
        const pairList = drugInteractionData
            .filter(interaction => interaction.drug.toLowerCase() === drug.toLowerCase())
            .map(interaction => `${interaction.drug} - ${interaction.interacting_drug}`);

        const uniquePairs = [...new Set(pairList)];
        const randomPairs = uniquePairs.sort(() => 0.5 - Math.random()).slice(0, 3);

        setPairSuggestions(randomPairs);
    };

    const checkInteractions = async () => {
        setLoading(true);
        try {
            const foundInteraction = drugInteractionData.find(interaction =>
                (interaction.drug.toLowerCase() === firstDrug.toLowerCase() &&
                interaction.interacting_drug.toLowerCase() === secondDrug.toLowerCase()) ||
                (interaction.drug.toLowerCase() === secondDrug.toLowerCase() &&
                interaction.interacting_drug.toLowerCase() === firstDrug.toLowerCase())
            );

            if (foundInteraction) {
                setInteractions([foundInteraction]);
                setPairSuggestions([]);
            } else {
                setInteractions("No interactions found for the entered drugs.");
                getPairSuggestions(firstDrug);
            }
        } catch (error) {
            console.error('Error checking interactions:', error);
            setInteractions('Error occurred while checking interactions.');
        } finally {
            setLoading(false);
        }
    };

    const handlePairClick = (pair) => {
        const [drugA, drugB] = pair.split(' - ');
        setFirstDrug(drugA);
        setSecondDrug(drugB);
        setInteractions(null);
        setPairSuggestions([]);
    };

    return (
        <div className="drug-interaction-checker">
            <h2>Drug Interaction Checker</h2>
            <p>Enter the names of the medications you are taking to check for interactions:</p>
            <input
                type="text"
                value={firstDrug}
                onChange={handleFirstDrugChange}
                placeholder="Enter first drug"
                aria-label="First Drug"
            />
            {firstDrugSuggestions.length > 0 && (
                <ul>
                    {firstDrugSuggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => setFirstDrug(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            <input
                type="text"
                value={secondDrug}
                onChange={handleSecondDrugChange}
                placeholder="Enter second drug"
                aria-label="Second Drug"
            />
            {secondDrugSuggestions.length > 0 && (
                <ul>
                    {secondDrugSuggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => setSecondDrug(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={checkInteractions} disabled={loading}>
                {loading ? 'Checking...' : 'Check Interactions'}
            </button>
            {interactions && Array.isArray(interactions) ? (
                <div>
                    {interactions.map((interaction, index) => (
                        <div key={index}>
                            <h3>{interaction.drug} + {interaction.interacting_drug}</h3>
                            <p><strong>Severity:</strong> {interaction.severity}</p>
                            <p>{interaction.description}</p>
                            <p><strong>Extended Description:</strong> {interaction.extended_description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                interactions && <p>{interactions}</p>
            )}
            {pairSuggestions.length > 0 && (
                <div>
                    <h3>Check Out These Other Interactions:</h3>
                    <ul>
                        {pairSuggestions.map((pair, index) => (
                            <li key={index}>
                                <button onClick={() => handlePairClick(pair)}>
                                    {pair}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DrugInteractionChecker;
