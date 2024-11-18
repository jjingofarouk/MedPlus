import React, { useState, useEffect } from 'react';
import './Book.css'; // Import CSS file for styling

const RescheduleAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [appointmentId, setAppointmentId] = useState('');
    const [rescheduleReason, setRescheduleReason] = useState('');
    const [newDateTime, setNewDateTime] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch doctor's appointments for rescheduling
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

        if (!appointmentId || !newDateTime) {
            setError('Please select a valid appointment and new date/time to reschedule.');
            return;
        }

        try {
            const response = await fetch(`/appointments/reschedule/${appointmentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ newDateTime, reason: rescheduleReason }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Appointment rescheduled successfully!');
                // Optionally reset form fields
                setAppointmentId('');
                setNewDateTime('');
                setRescheduleReason('');
            } else {
                setError(data.message || 'Failed to reschedule appointment.');
            }
        } catch (error) {
            console.error('Error rescheduling appointment:', error);
            setError('An error occurred while rescheduling the appointment.');
        }
    };

    return (
        <form id="reschedule-form" onSubmit={handleSubmit} className="reschedule-form">
            <h2 className="form-title">Reschedule Appointment</h2>

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
                <label htmlFor="new_date_time">New Date and Time:</label>
                <input
                    type="datetime-local"
                    id="new_date_time"
                    name="new_date_time"
                    value={newDateTime}
                    onChange={(e) => setNewDateTime(e.target.value)}
                    required
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="reschedule_reason">Reason for Rescheduling:</label>
                <select
                    id="reschedule_reason"
                    name="reschedule_reason"
                    value={rescheduleReason}
                    onChange={(e) => setRescheduleReason(e.target.value)}
                    required
                    className="form-select"
                >
                    <option value="">Select a reason</option>
                    <option value="Patient Request">Patient Request</option>
                    <option value="Doctor Availability">Doctor Availability</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <button type="submit" className="btn btn-info" id="reschedule-btn">
                Reschedule Appointment
            </button>
        </form>
    );
};

export default RescheduleAppointment;
