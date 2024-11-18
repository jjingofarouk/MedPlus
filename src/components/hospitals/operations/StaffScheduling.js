import React, { useState } from 'react';
import './StaffScheduling.css';

const StaffScheduling = () => {
  const [shifts, setShifts] = useState([
    { name: 'Dr. Mayega', role: 'Surgeon', shift: 'Day', available: true, overtime: 0 },
    { name: 'Nurse Juan', role: 'ICU Nurse', shift: 'Night', available: true, overtime: 4 },
    { name: 'Dr. Lusiba', role: 'Physician', shift: 'Day', available: true, overtime: 2 },
    { name: 'Dr. Kakande', role: 'Emergency Doctor', shift: 'Night', available: true, overtime: 3 },
    { name: 'Nurse Fiona', role: 'General Nurse', shift: 'Day', available: true, overtime: 0 },
    { name: 'Technician Obi', role: 'Lab Technician', shift: 'Day', available: true, overtime: 0 },
  ]);

  const changeShift = (index, newShift) => {
    const updatedShifts = [...shifts];
    updatedShifts[index].shift = newShift;
    setShifts(updatedShifts);
  };

  const toggleAvailability = (index) => {
    const updatedShifts = [...shifts];
    updatedShifts[index].available = !updatedShifts[index].available;
    setShifts(updatedShifts);
  };

  const allocateOvertime = (index, hours) => {
    const updatedShifts = [...shifts];
    if (updatedShifts[index].overtime + hours <= 12) { // Limit overtime to 12 hours
      updatedShifts[index].overtime += hours;
      setShifts(updatedShifts);
    } else {
      alert('Overtime limit reached for ' + updatedShifts[index].name);
    }
  };

  const autoSchedule = () => {
    const updatedShifts = shifts.map(staff => {
      if (staff.available && staff.overtime < 12) {
        // Assign shifts based on some logic, e.g., round-robin or preference
        return { ...staff, shift: staff.shift === 'Day' ? 'Night' : 'Day' }; // Example: switch shifts
      } else {
        alert(`${staff.name} is unavailable for scheduling.`);
        return staff; // Keep the original shift if unavailable
      }
    });
    setShifts(updatedShifts);
  };

  const getOvertimeSummary = () => {
    return shifts.map(staff => `${staff.name}: ${staff.overtime} hours`).join(', ');
  };

  return (
    <div className="scheduling-container">
      <h2>Advanced Staff Scheduling</h2>
      <p>Manage staff shifts, availability, overtime, and dynamic role assignment.</p>
      <button onClick={autoSchedule} className="auto-schedule-button">Auto-Schedule Staff</button>
      <p className="overtime-summary">Overtime Summary: {getOvertimeSummary()}</p>
      <ul className="staff-list">
        {shifts.map((staff, idx) => (
          <li key={idx} className={`staff-item ${staff.available ? '' : 'unavailable'}`}>
            <strong>{staff.name} ({staff.role}):</strong> {staff.shift} Shift{' '}
            <button onClick={() => changeShift(idx, staff.shift === 'Day' ? 'Night' : 'Day')} className="shift-button">
              Switch to {staff.shift === 'Day' ? 'Night' : 'Day'}
            </button>{' '}
            | <button onClick={() => toggleAvailability(idx)} className="availability-button">
              {staff.available ? 'Mark Unavailable' : 'Mark Available'}
            </button>{' '}
            | Overtime: {staff.overtime} hours{' '}
            <button onClick={() => allocateOvertime(idx, 1)} className="overtime-button">+1hr Overtime</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffScheduling;
