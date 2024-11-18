import React, { useEffect, useState } from 'react';
import './VoiceInput.css';

const VoiceInput = ({ onCommand }) => {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Your browser does not support voice recognition. Please try Chrome or a supported browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event) => setError(event.error);
    
    recognition.onresult = (event) => {
      const lastResultIndex = event.results.length - 1;
      const command = event.results[lastResultIndex][0].transcript.trim();
      onCommand(command); // Pass the command to the parent component
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop(); // Cleanup when component unmounts
    };
  }, [isListening, onCommand]);

  return (
    <div className="voice-input">
      {error ? (
        <div className="voice-error">{error}</div>
      ) : (
        <>
          <button
            onClick={() => setIsListening(!isListening)}
            className={`voice-button ${isListening ? 'listening' : ''}`}
          >
            {isListening ? 'Stop Listening' : 'Start Voice Input'}
          </button>
          {isListening && <p>Listening for commands...</p>}
        </>
      )}
    </div>
  );
};

export default VoiceInput;
