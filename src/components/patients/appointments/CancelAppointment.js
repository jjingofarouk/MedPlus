import React, { useState, useEffect } from 'react';
import './BookAppointment.css'; // Import CSS file for styling

const CancelAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [appointmentId, setAppointmentId] = useState('');
    const [cancellationReason, setCancellationReason] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch booked appointments for cancellation
        const fetchAppointments = async () => {
            const response = await fetch('/appointments/my-appointments', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setAppointments(data.appointments);
            } else {
                setError(data.message || 'Error fetching appointments.');
            }
        };

        fetchAppointments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!appointmentId) {
            setError('Please select a valid appointment to cancel.');
            return;
        }

        try {
            const response = await fetch(`/appointments/cancel/${appointmentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ reason: cancellationReason }), // If you want to send the reason
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Appointment canceled successfully!');
                // Optionally reset form fields
                setAppointmentId('');
                setCancellationReason('');
            } else {
                setError(data.message || 'Failed to cancel appointment.');
            }
        } catch (error) {
            console.error('Error canceling appointment:', error);
            setError('An error occurred while canceling the appointment.');
        }
    };

    return (
        <form id="cancel-form" onSubmit={handleSubmit} className="cancel-form">
            <h2 className="form-title">Cancel Appointment</h2>

            {message && <div className="success-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
                <label htmlFor="appointment_id">Select Appointment:</label>
                <select
                    id="appointment_id"
                    name="appointment_id"
                    value={appointmentId}
                    onChange={(e) => setAppointmentId(e.target.value)}
                    required
                    className="form-select"
                >
                    <option value="">Select an appointment</option>
                    {appointments.length > 0 ? (
                        appointments.map((appointment) => (
                            <option key={appointment.id} value={appointment.id}>
                                {`ID: ${appointment.id}, Date: ${appointment.appointment_date}`}
                            </option>
                        ))
                    ) : (
                        <option value="" disabled>No appointments found</option>
                    )}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="cancellation_reason">Reason for Cancellation:</label>
                <select
                    id="cancellation_reason"
                    name="cancellation_reason"
                    value={cancellationReason}
                    onChange={(e) => setCancellationReason(e.target.value)}
                    required
                    className="form-select"
                >
                    <option value="">Select a reason</option>
                    <option value="Schedule Conflict">Schedule Conflict</option>
                    <option value="Personal Reasons">Personal Reasons</option>
                    <option value="Doctor Availability">Doctor Availability</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <button type="submit" className="btn btn-info" id="cancel-btn">
                Cancel Appointment
            </button>
        </form>
    );
};

export default CancelAppointment;
