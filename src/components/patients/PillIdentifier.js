import React, { useState } from 'react';
import './PillIdentifier.css'; // Create a separate CSS file for styles
import LoadingSpinner from './ui/LoadingSpinner'; // Import a loading spinner component
import VoiceInput from './VoiceInput'; // Optional: For voice commands

function PillIdentifier() {
    const [pillImage, setPillImage] = useState(null);
    const [identificationResult, setIdentificationResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPillImage(URL.createObjectURL(file));
            identifyPill(file);
        }
    };

    const identifyPill = async (file) => {
        setLoading(true);
        setError(null); // Reset previous error state
        try {
            // Simulate an API call with a timeout
            const result = await new Promise((resolve, reject) =>
                setTimeout(() => {
                    // Mock response for demonstration
                    const isSuccessful = Math.random() > 0.5; // Random success/failure
                    if (isSuccessful) {
                        resolve("Identified Pill: Aspirin");
                    } else {
                        reject("Failed to identify the pill. Please try again.");
                    }
                }, 2000)
            );
            setIdentificationResult(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pill-identifier">
            <h2>Pill Identifier</h2>
            <VoiceInput onCommand={handleImageUpload} /> {/* Optional voice input */}

            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="pill-upload-input"
            />
            {pillImage && <img src={pillImage} alt="Uploaded Pill" className="pill-image" />}
            
            {loading && <LoadingSpinner />}
            {error && <p className="error-message">{error}</p>}
            {identificationResult && <p className="result-message">{identificationResult}</p>}
        </div>
    );
}

export default PillIdentifier;
