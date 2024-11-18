import React, { useState, useEffect } from 'react';

const IntelligentScheduling = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch appointments from an API
    const fetchAppointments = async () => {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      setAppointments(data);
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  const handleSchedule = async (newAppointment) => {
    const response = await fetch('/api/appointments', {
      method: 'POST',
      body: JSON.stringify(newAppointment),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const updatedAppointments = await response.json();
    setAppointments(updatedAppointments);
  };

  return (
    <div>
      <h2>Intelligent Scheduling</h2>
      {loading ? (
        <p>Loading appointments...</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>{appointment.title} at {appointment.time}</li>
          ))}
        </ul>
      )}
      <button onClick={() => handleSchedule({ title: 'New Appointment', time: '10:00 AM' })}>
        Schedule Appointment
      </button>
    </div>
  );
};

export default IntelligentScheduling;
