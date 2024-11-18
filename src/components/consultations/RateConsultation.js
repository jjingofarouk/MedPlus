import React, { useState } from 'react';

function RateConsultation() {
  const [showReward, setShowReward] = useState(false);

  const submitRating = () => {
    // Implement your submit rating logic here
    setShowReward(true);
  };

  return (
    <div id="rate-consultation" className="section">
      <h3>Rate Your Consultation</h3>
      <span>Rating: </span>
      <select id="rating">
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <button type="button" className="button button-success" onClick={submitRating}>Submit Rating</button>
      {showReward && <p id="reward-message" className="reward">Thank you for your feedback! You've earned 50 reward points.</p>}
    </div>
  );
}

export default RateConsultation;
