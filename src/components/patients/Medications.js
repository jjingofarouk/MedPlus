import React, { lazy, Suspense, memo } from "react";
import { gql, useQuery, useSubscription } from "@apollo/client";
import { motion } from "framer-motion";
import { FaPills } from "react-icons/fa";
import { useWebSocket } from "./hooks/useWebSocket";
import useNotifications from "./hooks/useNotifications";
import useUser from "./hooks/useUser"; // Ensure you have this import

// Lazy load the Medication Management content
const MedicationsContent = lazy(() => import("./MedicationsContent"));

// GraphQL queries
const GET_MEDICATIONS = gql`
  query GetMedications($userId: ID!) {
    medications(userId: $userId) {
      id
      name
      dosage
      schedule
    }
  }
`;

const MEDICATION_SUBSCRIPTION = gql`
  subscription OnMedicationUpdate($userId: ID!) {
    medicationUpdated(userId: $userId) {
      id
      name
      dosage
    }
  }
`;

const Medications = memo(() => {
  const { userId } = useUser(); // Ensure useUser is defined and imported
  const { notify } = useNotifications();

  // Fetch medications
  const { data, error } = useQuery(GET_MEDICATIONS, { variables: { userId } });

  // Subscribe to medication updates
  useSubscription(MEDICATION_SUBSCRIPTION, {
    variables: { userId },
    onSubscriptionData: ({ subscriptionData }) => {
      const { name } = subscriptionData.data.medicationUpdated;
      notify("Medication Updated", `${name} dosage has changed.`);
    },
  });

  // WebSocket for real-time updates
  useWebSocket("ws://example.com/socket", (message) => {
    console.log("Real-time update:", message);
  });

  // Error handling
  if (error) return <p>Error loading medications.</p>;

  return (
    <motion.div
      className="nav-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <a href="/medications" aria-label="Medication Management" className="tooltip">
        <FaPills size="2em" />
        <span>Medication Management</span>
        <span className="tooltip-text">Manage your medications and schedules</span>
      </a>

      <Suspense fallback={<div>Loading Medications...</div>}>
        <MedicationsContent medications={data?.medications || []} />
      </Suspense>
    </motion.div>
  );
});

export default Medications;
