import React, { useState } from 'react';

const ChatSettings = () => {
  const [isSettingsVisible, setSettingsVisible] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.style.backgroundColor = e.target.value === 'light' ? '#b2d8d8' : '#2e5668';
  };

  return (
    <>
      <button className="settings-btn" onClick={() => setSettingsVisible(true)}>
        <i className="fas fa-cog"></i>
      </button>
      {isSettingsVisible && (
        <div className="settings-modal" style={{ display: 'flex' }}>
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
                <input
                  type="radio"
                  id="theme-light"
                  name="theme"
                  value="light"
                  checked={theme === 'light'}
                  onChange={handleThemeChange}
                />
                <label htmlFor="theme-light" style={{ background: '#ffeaac' }}></label>
                Light
              </div>
              <div className="theme-option">
                <input
                  type="radio"
                  id="theme-dark"
                  name="theme"
                  value="dark"
                  checked={theme === 'dark'}
                  onChange={handleThemeChange}
                />
                <label htmlFor="theme-dark" style={{ background: '#2e5668' }}></label>
                Dark
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSettings;
