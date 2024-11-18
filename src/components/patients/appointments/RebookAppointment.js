import React, { useState, useEffect } from 'react';
import './RebookAppointment.css';

function ReBookAppointment() {
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
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
    } catch (error) {
      console.error('Fetch appointments error:', error);
      setMessage('An error occurred while fetching appointments.');
    } finally {
      setLoading(false);
    }
  };

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
    setLoading(true);
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
        resetForm();
        fetchAppointments();
      } else {
        setMessage(data.message || 'Failed to rebook appointment.');
      }
    } catch (error) {
      console.error('Rebooking error:', error);
      setMessage('An error occurred while rebooking the appointment.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedAppointment('');
    setFormData({
      new_date: '',
      new_time: '',
      new_reason: '',
      new_appointment_type: '',
      new_communication_method: '',
    });
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <div className="rebook-appointment-container">
      <form onSubmit={handleSubmit} className="rebook-form">
        <h2 className="form-title">Rebook Appointment</h2>
        {message && <p className={`alert ${message.includes('success') ? 'alert-success' : 'alert-error'}`}>{message}</p>}
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
            {appointments.map((appointment) => (
              <option key={appointment.id} value={appointment.id}>
                {`ID: ${appointment.id}, Date: ${new Date(appointment.appointment_date).toLocaleString()}`}
              </option>
            ))}
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
            <option value="">Select appointment type</option>
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
            <option value="">Select communication method</option>
            <option value="Chat">Chat</option>
            <option value="Video">Video</option>
            <option value="Phone Call">Phone Call</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Processing...' : 'Rebook Appointment'}
          </button>
        </div>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Rebooking</h5>
              <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to rebook this appointment with the new details?</p>
              <ul>
                <li>New Date: {formData.new_date}</li>
                <li>New Time: {formData.new_time}</li>
                <li>Reason: {formData.new_reason}</li>
                <li>Appointment Type: {formData.new_appointment_type}</li>
                <li>Communication Method: {formData.new_communication_method}</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={confirmRebook} disabled={loading}>
                {loading ? 'Processing...' : 'Confirm Rebooking'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReBookAppointment;