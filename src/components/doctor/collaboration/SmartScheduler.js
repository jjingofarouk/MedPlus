import React, { useState } from 'react';
import './Common.css';

const appointments = [
  { id: 1, patient: 'John Doe', time: '10:00 AM', date: '2024-10-10' },
  { id: 2, patient: 'Jane Smith', time: '11:30 AM', date: '2024-10-10' },
  { id: 3, patient: 'Sam Kato', time: '2:00 PM', date: '2024-10-10' },
];

const SmartScheduler = () => {
  const [newAppointment, setNewAppointment] = useState({ patient: '', time: '', date: '' });
  const [scheduledAppointments, setScheduledAppointments] = useState(appointments);

  const handleAppointment = (e) => {
    e.preventDefault();
    if (newAppointment.patient && newAppointment.time && newAppointment.date) {
      setScheduledAppointments([...scheduledAppointments, { id: scheduledAppointments.length + 1, ...newAppointment }]);
      setNewAppointment({ patient: '', time: '', date: '' });
    }
  };

  return (
    <div className="scheduler-container">
      <h2>Smart Scheduler</h2>
      <form onSubmit={handleAppointment}>
        <input
          type="text"
          placeholder="Patient Name"
          value={newAppointment.patient}
          onChange={(e) => setNewAppointment({ ...newAppointment, patient: e.target.value })}
          required
        />
        <input
          type="time"
          placeholder="Appointment Time"
          value={newAppointment.time}
          onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Appointment Date"
          value={newAppointment.date}
          onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
          required
        />
        <button type="submit" className="schedule-btn">Schedule</button>
      </form>
      <h3>Upcoming Appointments</h3>
      <ul className="appointments-list">
        {scheduledAppointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patient} - {appointment.time} on {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmartScheduler;
