import React, { useState } from 'react';
import './SecurePrescriptionTransmission.css';

function SecurePrescriptionTransmission() {
    const [prescription, setPrescription] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTransmitPrescription = async () => {
        if (!prescription) {
            setMessage('Please enter prescription details.');
            return;
        }
        
        setLoading(true);
        try {
            // Simulate API call
            // await api.transmitPrescription(prescription);
            setMessage('Prescription transmitted securely!'); // Mock response
        } catch (error) {
            setMessage('Error transmitting prescription. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="secure-prescription-transmission">
            <h2>Secure Prescription Transmission</h2>
            <textarea
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
                placeholder="Enter prescription details"
                required
            />
            <button onClick={handleTransmitPrescription} disabled={loading}>
                {loading ? 'Transmitting...' : 'Transmit Prescription'}
            </button>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default SecurePrescriptionTransmission;
