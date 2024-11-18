import React, { useEffect, useState } from "react";

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointment history from the backend in the future
    // For now, simulate with dummy data
    const fetchAppointments = async () => {
      const dummyData = [
        { id: 1, date: "2024-09-01", doctor: "Dr. Smith", notes: "Check-up" },
        { id: 2, date: "2024-08-15", doctor: "Dr. Brown", notes: "Follow-up" },
      ];
      setAppointments(dummyData);
    };
    fetchAppointments();
  }, []);

  return (
    <div className="appointment-history">
      <h3>Appointment History</h3>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.doctor}: {appointment.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;
