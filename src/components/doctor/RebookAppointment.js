import React, { useState, useEffect } from 'react';
import './RebookAppointment.css'; // Import the CSS file

function RebookAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState('');
  const [formData, setFormData] = useState({
    new_date: '',
    new_time: '',
    new_reason: '',
    new_appointment_type: '',
    new_communication_method: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch booked appointments on component mount
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
        setMessage(data.message || 'Error fetching appointments.');
      }
    };

    fetchAppointments();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAppointment) {
      setMessage('Please select an appointment to rebook.');
      return;
    }
    setShowModal(true);
  };

  const confirmRebook = async () => {
    try {
      const response = await fetch(`/appointments/rebook/${selectedAppointment}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          newDate: `${formData.new_date}T${formData.new_time}`,
          reason: formData.new_reason,
          appointmentType: formData.new_appointment_type,
          communicationMethod: formData.new_communication_method,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Appointment rebooked successfully!');
        setShowModal(false);
        // Optionally reset form data or reload appointments
      } else {
        setMessage(data.message || 'Failed to rebook appointment.');
      }
    } catch (error) {
      console.error('Rebooking error:', error);
      setMessage('An error occurred while rebooking the appointment.');
    }
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <div className="rebook-container">
      <form onSubmit={handleSubmit} className="rebook-form">
        <h2 className="form-title">ReBook Appointment</h2>
        {message && <p className="alert">{message}</p>}
        <div className="form-group">
          <label htmlFor="appointment">Select Appointment:</label>
          <select
            id="appointment"
            name="appointment"
            value={selectedAppointment}
            onChange={(e) => setSelectedAppointment(e.target.value)}
            className="form-select"
            required
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
          <label htmlFor="new_date">New Date:</label>
          <input
            type="date"
            id="new_date"
            name="new_date"
            value={formData.new_date}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new_time">New Time:</label>
          <input
            type="time"
            id="new_time"
            name="new_time"
            value={formData.new_time}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new_reason">Reason for Rebooking:</label>
          <select
            id="new_reason"
            name="new_reason"
            value={formData.new_reason}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select a reason</option>
            <option value="Schedule Conflict">Schedule Conflict</option>
            <option value="Personal Reasons">Personal Reasons</option>
            <option value="Doctor Availability">Doctor Availability</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="new_appointment_type">New Appointment Type:</label>
          <select
            id="new_appointment_type"
            name="new_appointment_type"
            value={formData.new_appointment_type}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="In-Person">In-Person</option>
            <option value="Telehealth">Telehealth</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="new_communication_method">New Preferred Communication Method:</label>
          <select
            id="new_communication_method"
            name="new_communication_method"
            value={formData.new_communication_method}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
            <option value="App Notification">App Notification</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Rebook Appointment</button>
        </div>
      </form>

      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">Confirm ReBooking</h5>
              <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to rebook this appointment with the new details?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={confirmRebook}>ReBook Appointment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RebookAppointment;
