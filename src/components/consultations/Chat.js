import React, { useState } from 'react';
import './Chat.css'; // Import the CSS file

const ChatComponent = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [settingsVisible, setSettingsVisible] = useState(false);
    const [user, setUser] = useState({ name: 'Guest', img: 'https://image.flaticon.com/icons/svg/145/145867.svg' });
    const [isTyping, setIsTyping] = useState(false);
    const [file, setFile] = useState(null);
    const [reactions, setReactions] = useState({});
    const [chatHistory, setChatHistory] = useState([]);

    // Bot and user information
    const BOT_MSGS = [
        "Hi, how are you?",
        "Ohh... I can't understand what you're trying to say. Sorry!",
        "I like to play games... But I don't know how to play!",
        "Sorry if my answers are not relevant. :))",
        "I feel sleepy! :("
    ];

    const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
    const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
    const BOT_NAME = "Bot";
    const PERSON_NAME = "You";

    // Handle message submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const newMessage = { name: user.name, img: user.img, side: 'right-msg', text: message };
        setMessages(prevMessages => [...prevMessages, newMessage]);
        setChatHistory(prevHistory => [...prevHistory, newMessage]);
        setMessage('');
        setFile(null);
        botResponse();
    };

    // Simulate bot response
    const botResponse = () => {
        const randomIndex = Math.floor(Math.random() * BOT_MSGS.length);
        const msgText = BOT_MSGS[randomIndex];
        const delay = msgText.split(" ").length * 100;

        setTimeout(() => {
            const botMessage = { name: BOT_NAME, img: BOT_IMG, side: 'left-msg', text: msgText };
            setMessages(prevMessages => [...prevMessages, { name: user.name, img: user.img, side: 'right-msg', text: message }, botMessage]);
        }, delay);
    };



    // Handle file change
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(URL.createObjectURL(selectedFile));
        }
    };

    // Handle reactions
    const handleReact = (msgIndex, reaction) => {
        setReactions(prevReactions => ({
            ...prevReactions,
            [msgIndex]: reaction
        }));
    };

    // Export chat history
    const exportChat = () => {
        const blob = new Blob([JSON.stringify(chatHistory, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chat-history.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    // Handle typing
    const handleTyping = () => {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1000);
    };

    // Handle user sign-in
    const handleSignIn = (e) => {
        e.preventDefault();
        const name = prompt('Enter your name:');
        const img = prompt('Enter your avatar URL:');
        setUser({ name: name || 'Guest', img: img || 'https://image.flaticon.com/icons/svg/145/145867.svg' });
    };

    return (
        <div className="msger">
            {user.name === 'Guest' && <button onClick={handleSignIn}>Sign In</button>}

            <main className="msger-chat">
                {messages.map((msg, index) => (
                    <div key={index} className={`msg ${msg.side}`}>
                        <div className="msg-img" style={{ backgroundImage: `url(${msg.img})` }}></div>
                        <div className="msg-bubble">
                            <div className="msg-text">{msg.text}</div>
                            <div className="msg-reactions">
                                <button onClick={() => handleReact(index, '👍')}>👍</button>
                                <button onClick={() => handleReact(index, '❤️')}>❤️</button>
                                <button onClick={() => handleReact(index, '😂')}>😂</button>
                            </div>
                            {reactions[index] && <div className="msg-reaction">{reactions[index]}</div>}
                        </div>
                    </div>
                ))}
                {isTyping && <div className="typing-indicator">Typing...</div>}
            </main>

            <form className="msger-inputarea" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="msger-input"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        handleTyping();
                    }}
                />
                <div className="msger-media-btns">
                    <label htmlFor="file-upload"><i className="fas fa-image"></i></label>
                    <input type="file" id="file-upload" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
                    <label htmlFor="audio-upload"><i className="fas fa-microphone"></i></label>
                    <input type="file" id="audio-upload" style={{ display: 'none' }} accept="audio/*" />
                </div>
                {file && <img src={file} alt="File preview" className="file-preview" />}
                <button type="submit" className="msger-send-btn">Send</button>
                <button type="button" className="msger-settings-btn" onClick={() => setSettingsVisible(!settingsVisible)}>
                    <i className="fas fa-cog"></i>
                </button>
                <button type="button" className="msger-export-btn" onClick={exportChat}>Export Chat</button>
            </form>

            {settingsVisible && (
                <div className="settings-modal">
                    <div className="settings-content">
                        <button className="settings-close-btn" onClick={() => setSettingsVisible(false)}>&times;</button>
                        <h2>Settings</h2>
                        <label>
                            <input type="checkbox" id="notifications" />
                            Enable Notifications
                        </label>
                        <label>
                            <input type="checkbox" id="save-chat-history" />
                            Save Chat History
                        </label>
                        <h3>Theme</h3>
                        <div className="theme-selector">
                            <div className="theme-option">
                                <input type="radio" id="theme-light" name="theme" value="light" defaultChecked />
                                <label htmlFor="theme-light" style={{ background: 'var(--light-yellow)' }}></label>
                                Light
                            </div>
                            <div className="theme-option">
                                <input type="radio" id="theme-dark" name="theme" value="dark" />
                                <label htmlFor="theme-dark" style={{ background: 'var(--dark-teal)' }}></label>
                                Dark
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatComponent;
