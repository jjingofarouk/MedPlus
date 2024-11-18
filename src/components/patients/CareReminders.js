import React, { useEffect, useState } from "react";

const CareReminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Fetch care reminders from the backend in the future
    // For now, simulate with dummy data
    const fetchReminders = async () => {
      const dummyData = [
        { id: 1, reminder: "Blood pressure check on 2024-10-01" },
        { id: 2, reminder: "Annual physical exam on 2024-11-15" },
      ];
      setReminders(dummyData);
    };
    fetchReminders();
  }, []);

  return (
    <div className="care-reminders">
      <h3>Care Reminders</h3>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id}>{reminder.reminder}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareReminders;
