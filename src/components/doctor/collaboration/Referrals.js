import React, { useState } from 'react';
import './Referrals.css'; // Import your custom styles

const Referrals = () => {
  const [patientName, setPatientName] = useState('');
  const [referredDoctor, setReferredDoctor] = useState('');
  const [referralReason, setReferralReason] = useState('');
  const [referralsList, setReferralsList] = useState([]);

  const doctors = [
    'Dr. Amon K.', 
    'Dr. Joan M.', 
    'Dr. Joseph S.', 
    'Dr. Sarah N.', 
    'Dr. Patrick O.'
  ]; // Predefined list of doctors for referral

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientName && referredDoctor && referralReason) {
      const newReferral = {
        id: referralsList.length + 1,
        patientName,
        referredDoctor,
        referralReason,
        date: new Date().toLocaleDateString(),
      };
      setReferralsList([...referralsList, newReferral]);
      setPatientName('');
      setReferredDoctor('');
      setReferralReason('');
    }
  };

  return (
    <div className="referrals-container">
      <h2>Doctor Referrals</h2>

      <form className="referral-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder="Enter patient's name"
            required
          />
        </div>

        <div className="form-group">
          <label>Referred Doctor</label>
          <select
            value={referredDoctor}
            onChange={(e) => setReferredDoctor(e.target.value)}
            required
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Reason for Referral</label>
          <textarea
            value={referralReason}
            onChange={(e) => setReferralReason(e.target.value)}
            placeholder="Describe the reason for referral"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Referral
        </button>
      </form>

      <section className="referrals-list-section">
        <h3>Referral History</h3>
        {referralsList.length === 0 ? (
          <p>No referrals made yet.</p>
        ) : (
          <ul className="referrals-list">
            {referralsList.map((referral) => (
              <li key={referral.id} className="referral-item">
                <strong>{referral.patientName}</strong> referred to{' '}
                <strong>{referral.referredDoctor}</strong> on {referral.date} for{' '}
                <em>{referral.referralReason}</em>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Referrals;
