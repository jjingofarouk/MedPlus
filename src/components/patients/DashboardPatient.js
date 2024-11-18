import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useRole } from './RoleContext';
import { FaTachometerAlt } from "react-icons/fa";

// Lazy load the component
const DashboardPatient = lazy(() => import("./DashboardContent"));

const DashboardLink = () => {
  const { role } = useRole();  // Handle role-based logic

  if (!["patient", "doctor", "hospital"].includes(role)) return null;  // Role restriction

  return (
    <motion.div
      className="nav-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="/dashboard" aria-label="Dashboard" className="tooltip">
        <FaTachometerAlt size="2em" />
        <span>Dashboard</span>
        <span className="tooltip-text">Access your personalized dashboard</span>
      </a>

      {/* Lazy loading with fallback */}
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <DashboardPatient />
      </Suspense>
    </motion.div>
  );
};

export default DashboardPatient;
