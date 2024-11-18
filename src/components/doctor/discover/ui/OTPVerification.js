OTPVerification.js
import React from 'react';

function OTPVerification() {
  const verifyOTP = () => {
    // Implement your OTP verification logic here
  };

  return (
    <div id="otp-section" className="section" style={{ display: 'none' }}>
      <label htmlFor="otp">Enter OTP:</label>
      <input type="text" id="otp" name="otp" required />
      <button type="button" className="button" onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
}

export default OTPVerification;
