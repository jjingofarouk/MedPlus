import React, { lazy, Suspense, memo } from "react";
import { gql, useQuery, useSubscription } from "@apollo/client";
import { motion } from "framer-motion";
import { FaProcedures } from "react-icons/fa";
import useNotifications from "../hooks/useNotifications";
import useUser from "../hooks/useUser"; // Ensure you have this import

// Lazy load the Chronic Condition content
const ChronicsContent = lazy(() => import("./ChronicsContent"));

// GraphQL query for chronic conditions
const GET_CHRONIC_CONDITIONS = gql`
  query GetChronicConditions($userId: ID!) {
    chronicConditions(userId: $userId) {
      id
      condition
      status
    }
  }
`;

// WebSocket subscription for chronic condition updates
const CHRONIC_CONDITION_SUBSCRIPTION = gql`
  subscription OnChronicConditionUpdate($userId: ID!) {
    chronicConditionUpdated(userId: $userId) {
      id
      condition
      status
    }
  }
`;

const Chronics = memo(() => {
  const { userId } = useUser();
  const { notify } = useNotifications();

  const { data, error } = useQuery(GET_CHRONIC_CONDITIONS, { variables: { userId } });

  const { data: updatedCondition } = useSubscription(CHRONIC_CONDITION_SUBSCRIPTION, {
    variables: { userId },
    onSubscriptionData: ({ subscriptionData }) => {
      const updatedCondition = subscriptionData.data.chronicConditionUpdated;
      notify("Condition Update", `${updatedCondition.condition} status changed.`);
    },
  });


  return (
    <motion.div
      className="nav-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <a href="/chronics" aria-label="Chronic Condition Tracking" className="tooltip">
        <FaProcedures size="2em" />
        <span>Chronic Condition Tracking</span>
        <span className="tooltip-text">Track your chronic conditions</span>
      </a>

      <Suspense fallback={<div>Loading Chronic Conditions...</div>}>
        <ChronicsContent conditions={data?.chronicConditions || []} />
      </Suspense>
    </motion.div>
  );
});

export default Chronics;
