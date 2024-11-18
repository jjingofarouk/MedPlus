import React, { lazy, Suspense, memo } from "react";
import { motion } from "framer-motion";
import { FaUserMd } from "react-icons/fa";
import { gql, useSubscription, useQuery } from "@apollo/client";
import { useWebSocket } from "./hooks/useWebSocket";
import useNotifications from "./hooks/useNotifications";
import { useRole } from './RoleContext'; // Adjust the path as necessary
import useUser from "./hooks/useUser"; // Ensure correct import

// Lazy load the referrals component
const ReferralsContent = lazy(() => import("./ReferralsContent"));

// GraphQL query to fetch previous referrals
const GET_REFERRALS = gql`
  query GetReferrals($userId: ID!) {
    referrals(userId: $userId) {
      id
      specialist
      date
      status
    }
  }
`;

// WebSocket subscription for real-time updates on new referrals
const REFERRAL_SUBSCRIPTION = gql`
  subscription OnNewReferral($userId: ID!) {
    newReferral(userId: $userId) {
      id
      specialist
      date
      status
    }
  }
`;

const SpecialistReferralsLink = memo(() => {
  const { role } = useRole();
  const { userId } = useUser(); // Assuming there's a hook for user info
  const { notify } = useNotifications(); // For push notifications

  const { data, error } = useQuery(GET_REFERRALS, { variables: { userId } });

  const { data: newReferralData } = useSubscription(REFERRAL_SUBSCRIPTION, {
    variables: { userId },
    onSubscriptionData: ({ subscriptionData }) => {
      const newReferral = subscriptionData.data.newReferral;
      notify("New Referral Received", `Referral to ${newReferral.specialist}.`);
    }
  });

  useWebSocket("ws://example.com/socket", (newReferral) => {
    console.log("New referral received via WebSocket:", newReferral);
  });

  if (error) return <p>Error loading referrals.</p>;

  return (
    <motion.div
      className="nav-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1] // Custom easing for smooth animations
      }}
    >
      <a href="/referrals" aria-label="Specialist Referrals" className="tooltip">
        <FaUserMd size="2em" />
        <span>Specialist Referrals</span>
        <span className="tooltip-text">Manage your specialist referrals</span>
      </a>

      {/* Lazy loading with fallback */}
      <Suspense fallback={<div>Loading Referrals...</div>}>
        <ReferralsContent referrals={data?.referrals || []} />
      </Suspense>
    </motion.div>
  );
});

export default SpecialistReferralsLink;
