import React, { useState, useEffect } from 'react';
import './BookAppointment.css'; // Import CSS file for styling

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        doctorId: '',
        date: '',
        time: '',
        reason: 'Consultation',
        appointmentType: 'In-Person',
        communicationMethod: 'Phone',
        notes: '',
    });
    const [doctors, setDoctors] = useState([]);
    const [message, setMessage] = useState('');
    const [isAvailable, setIsAvailable] = useState(true);

    // Fetch available doctors when component mounts
    useEffect(() => {
        const fetchAvailableDoctors = async () => {
            try {
                const response = await fetch('/doctors/available', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store the JWT in localStorage
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setDoctors(data);
                    setIsAvailable(data.length > 0); // Set availability based on the fetched data
                } else {
                    setMessage('Failed to fetch available doctors.');
                }
            } catch (error) {
                console.error('Error fetching available doctors:', error);
                setMessage('An error occurred while fetching available doctors.');
            }
        };

        fetchAvailableDoctors();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        if (!isAvailable) {
            setMessage('No available doctors for appointments.');
            return;
        }

        try {
            const response = await fetch('/appointments/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store the JWT in localStorage
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Appointment booked successfully!');
                // Reset form or handle further actions if needed
            } else {
                setMessage(data.message || 'Failed to book appointment.'); // Handle server errors
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            setMessage('An error occurred while booking the appointment.');
        }
    };

    return (
        <div className="book-appointment-container">
            <h2>Book Appointment</h2>
            {message && <p className="alert">{message}</p>}
            {isAvailable ? (
                <form onSubmit={handleSubmit} className="appointment-form">
                    <div className="form-group">
                        <label htmlFor="doctorId">Select Doctor:</label>
                        <select
                            id="doctorId"
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.name} (Available)
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reason">Reason for Visit:</label>
                        <select
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        >
                            <option value="Consultation">Consultation</option>
                            <option value="Follow-up">Follow-up</option>
                            <option value="Routine Check-up">Routine Check-up</option>
                            <option value="Urgent Care">Urgent Care</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="appointmentType">Appointment Type:</label>
                        <select
                            id="appointmentType"
                            name="appointmentType"
                            value={formData.appointmentType}
                            onChange={handleChange}
                            required
                        >
                            <option value="In-Person">In-Person</option>
                            <option value="Telehealth">Telehealth</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="communicationMethod">Preferred Communication Method:</label>
                        <select
                            id="communicationMethod"
                            name="communicationMethod"
                            value={formData.communicationMethod}
                            onChange={handleChange}
                            required
                        >
                            <option value="Phone">Phone</option>
                            <option value="Email">Email</option>
                            <option value="SMS">SMS</option>
                            <option value="App Notification">App Notification</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Additional Notes:</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Any additional information or special instructions..."
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Book Appointment</button>
                </form>
            ) : (
                <p>No available doctors for appointments. Please try again later.</p>
            )}
        </div>
    );
};

export default BookAppointment;
