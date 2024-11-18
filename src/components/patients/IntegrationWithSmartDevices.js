import React, { useState } from 'react';
import './IntegrationWithSmartDevices.css';

const smartDevices = ['Device A', 'Device B', 'Device C']; // Example devices

function IntegrationWithSmartDevices() {
    const [device, setDevice] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleConnectDevice = async () => {
        if (!device) {
            setMessage('Please select a device.');
            return;
        }

        setLoading(true);
        try {
            // Simulate device connection
            // await api.connectDevice(device);
            setMessage(`Connected to ${device}`); // Mock response
        } catch (error) {
            setMessage('Failed to connect to the device.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="integration-with-smart-devices">
            <h2>Integration with Smart Devices</h2>
            <select value={device} onChange={(e) => setDevice(e.target.value)}>
                <option value="">Select a smart device</option>
                {smartDevices.map((device, index) => (
                    <option key={index} value={device}>{device}</option>
                ))}
            </select>
            <button onClick={handleConnectDevice} disabled={loading}>
                {loading ? 'Connecting...' : 'Connect Device'}
            </button>
            {message && <p className="device-message">{message}</p>}
        </div>
    );
}

export default IntegrationWithSmartDevices;
