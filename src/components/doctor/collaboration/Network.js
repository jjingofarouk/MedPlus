import React, { useState } from 'react';
import './Network.css'; // Import custom styles

// Example specialists with local names and relevant specialties
const specialists = [
  { id: 1, name: 'Dr. Amon Kalema', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Joan Mukasa', specialty: 'Tropical Medicine' },
  { id: 3, name: 'Dr. Joseph Ssekandi', specialty: 'Infectious Diseases' },
  { id: 4, name: 'Dr. Sarah Nabiryo', specialty: 'Pediatrics' },
  { id: 5, name: 'Dr. Patrick Okello', specialty: 'Dermatology' },
];

const Network = () => {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);
  const [isOffline, setIsOffline] = useState(!navigator.onLine); // Track network status

  // Check if the user is online or offline
  window.addEventListener('online', () => setIsOffline(false));
  window.addEventListener('offline', () => setIsOffline(true));

  const startConversation = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newConversation = {
        id: conversations.length + 1,
        specialist: selectedSpecialist.name,
        message,
        timestamp: new Date().toLocaleTimeString(),
      };
      setConversations([...conversations, newConversation]);
      setMessage('');
    }
  };

  return (
    <div className="network-container">
      <h2>Specialist Network</h2>

      {isOffline && (
        <div className="offline-notice">
          <p>You are currently offline. Some features may not be available.</p>
        </div>
      )}

      <div className="network-grid">
        <div className="specialists-list">
          <h3>Specialists</h3>
          <ul>
            {specialists.map((specialist) => (
              <li
                key={specialist.id}
                className={`specialist-item ${
                  selectedSpecialist && selectedSpecialist.id === specialist.id ? 'active' : ''
                }`}
                onClick={() => startConversation(specialist)}
              >
                <strong>{specialist.name}</strong> <em>({specialist.specialty})</em>
                {/* Gender icon or language indicator can be added here based on user preferences */}
              </li>
            ))}
          </ul>
        </div>

        <div className="conversation-area">
          {selectedSpecialist ? (
            <>
              <h3>Conversation with {selectedSpecialist.name}</h3>
              <div className="conversation-history">
                {conversations
                  .filter((conv) => conv.specialist === selectedSpecialist.name)
                  .map((conv) => (
                    <div key={conv.id} className="conversation-item">
                      <p>{conv.message}</p>
                      <small>{conv.timestamp}</small>
                    </div>
                  ))}
              </div>

              <form className="message-form" onSubmit={handleSendMessage}>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  required
                ></textarea>
                <button type="submit" className="send-btn">
                  Send
                </button>
              </form>
            </>
          ) : (
            <p>Select a specialist to start a conversation.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Network;
