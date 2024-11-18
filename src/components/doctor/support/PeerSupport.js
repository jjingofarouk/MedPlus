// PeerSupport.js
import React, { useState } from 'react';

const PeerSupport = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: "Cardiologists Support Group" },
    { id: 2, name: "Surgeons Peer Support" },
  ]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleJoinGroup = (group) => {
    setSelectedGroup(group);
    setMessages([
      { id: 1, text: "Welcome to the group!" },
      { id: 2, text: "Feel free to share your thoughts." },
    ]);
  };

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <h3>Peer Support</h3>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            {group.name}
            <button onClick={() => handleJoinGroup(group)}>Join Group</button>
          </li>
        ))}
      </ul>
      {selectedGroup && (
        <div>
          <h4>{selectedGroup.name} Chat</h4>
          <ul>
            {messages.map(msg => (
              <li key={msg.id}>{msg.text}</li>
            ))}
          </ul>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default PeerSupport;
