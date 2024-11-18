import React, { useReducer, useEffect, useState, useContext, createContext } from "react";

// Mock context for role-based permissions (e.g., admin or nurse)
const UserContext = createContext({ role: "nurse" });

// Transfer Status Constants
const TRANSFER_STATUS = {
  PENDING: "Pending",
  APPROVED: "Approved",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
  FAILED: "Failed",
};

// Reducer to handle complex state transitions
const transferReducer = (state, action) => {
  switch (action.type) {
    case "APPROVE":
      return state.map((req, idx) =>
        idx === action.index ? { ...req, status: TRANSFER_STATUS.APPROVED } : req
      );
    case "UPDATE_STATUS":
      return state.map((req) =>
        req.id === action.payload.id ? { ...req, status: action.payload.status } : req
      );
    case "ADD_REQUEST":
      return [...state, action.payload];
    default:
      return state;
  }
};

const TransferCenter = () => {
  const user = useContext(UserContext); // Access user role
  const [transferRequests, dispatch] = useReducer(transferReducer, [
    { id: 1, patient: "John Doe", from: "ICU", to: "Step-down Unit", status: TRANSFER_STATUS.PENDING },
    { id: 2, patient: "Jane Smith", from: "ER", to: "Ward 3", status: TRANSFER_STATUS.IN_PROGRESS },
  ]);

  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate WebSocket or polling for real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const updates = transferRequests.filter((req) => req.status === TRANSFER_STATUS.APPROVED);
      if (updates.length) {
        setNotifications((prev) => [
          ...prev,
          `Transfer for ${updates[0].patient} is now approved.`,
        ]);
      }
    }, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [transferRequests]);

  const approveTransfer = async (index) => {
    try {
      setIsLoading(true); // Optimistic loading indicator
      // Simulate an API call to approve transfer
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({ type: "APPROVE", index });
      setNotifications((prev) => [
        ...prev,
        `Transfer approved for ${transferRequests[index].patient}.`,
      ]);
    } catch (error) {
      setNotifications((prev) => [...prev, "Error approving transfer."]);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const canApprove = user.role === "admin"; // Only admins can approve transfers

  return (
    <div style={styles.container}>
      <h2>Transfer Center</h2>
      <p>Manage and approve patient transfers between departments or facilities.</p>

      {/* Display Transfer Requests */}
      <ul>
        {transferRequests.map((request, idx) => (
          <li key={request.id} style={styles.listItem}>
            {request.patient} from {request.from} to {request.to} - 
            <strong> Status:</strong> {request.status}
            {request.status === TRANSFER_STATUS.PENDING && canApprove && (
              <button
                onClick={() => approveTransfer(idx)}
                disabled={isLoading}
                style={styles.button}
              >
                {isLoading ? "Approving..." : "Approve Transfer"}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Notifications Section */}
      <div style={styles.notifications}>
        <h3>Notifications</h3>
        {notifications.length ? (
          notifications.map((note, idx) => <p key={idx} style={styles.notification}>{note}</p>)
        ) : (
          <p>No notifications.</p>
        )}
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#dfe4e5",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  listItem: {
    marginBottom: "10px",
  },
  button: {
    marginLeft: "10px",
    padding: "5px 10px",
    backgroundColor: "#27c7b8",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  notifications: {
    marginTop: "20px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  notification: {
    marginBottom: "5px",
    color: "#f78837",
  },
};

export default TransferCenter;
