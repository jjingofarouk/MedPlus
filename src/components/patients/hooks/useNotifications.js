import { useState } from "react";

// Define the shape of a notification
const useNotifications = () => {
  // Set notifications to be an array of notification objects
  const [notifications, setNotifications] = useState([]);

  // Function to add a new notification
  const notify = (title, message) => {
    const newNotification = { id: Date.now(), title, message };
    setNotifications((prev) => [...prev, newNotification]);

    // Simulate push notification (you can replace this with actual push notification logic)
    alert(`${title}: ${message}`);
  };

  return { notifications, notify };
};

export default useNotifications;
