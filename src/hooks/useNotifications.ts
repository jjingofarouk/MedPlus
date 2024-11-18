import { useState } from "react";

// Define the shape of a notification
interface Notification {
  id: number;
  title: string;
  message: string;
}

const useNotifications = () => {
  // Set notifications to be an array of Notification objects
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Function to add a new notification
  const notify = (title: string, message: string) => {
    const newNotification: Notification = { id: Date.now(), title, message };
    setNotifications((prev) => [...prev, newNotification]);

    // Simulate push notification (you can replace this with actual push notification logic)
    alert(`${title}: ${message}`);
  };

  return { notifications, notify };
};

export default useNotifications;
