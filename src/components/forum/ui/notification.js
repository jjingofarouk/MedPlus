// Notification.js
import React from 'react';

const Notification = ({ type, message }) => {
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
