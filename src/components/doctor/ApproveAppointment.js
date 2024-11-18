// ApproveAppointment.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './button';

const ApproveAppointment = ({ onComplete }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchPendingAppointments();
  }, []);

  const fetchPendingAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/appointments/pending', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching pending appointments:', error);
    }
  };

  const handleApprove = async (appointmentId) => {
    try {
      await axios.post(`http://localhost:3000/appointments/${appointmentId}/approve`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // Update the state to remove the approved appointment from the list
      setAppointments((prev) => prev.filter((appointment) => appointment.id !== appointmentId));
      onComplete(); // Notify task completion
    } catch (error) {
      console.error('Error approving appointment:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pending Appointments</h2>
      {appointments.length === 0 ? (
        <p>No pending appointments to approve.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id} className="flex justify-between items-center mb-2">
              <span>{`${appointment.patientName} - ${new Date(appointment.date).toLocaleString()}`}</span>
              <Button onClick={() => handleApprove(appointment.id)}>Approve</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApproveAppointment;
