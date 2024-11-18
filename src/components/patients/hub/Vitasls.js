import React, { lazy } from "react";
import { motion } from "framer-motion";
import useRole from "./hooks/useRole";
import { FaHeartbeat } from "react-icons/fa";

// Lazy load the vital signs component

const VitalSignsLink = () => {
  const { role } = useRole();

  if (!["patient", "doctor"].includes(role)) return null;

  return (
    <motion.div
      className="nav-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="/vitals" aria-label="Vital Signs" className="tooltip">
        <FaHeartbeat size="2em" />
        <span>Vital Signs</span>
        <span className="tooltip-text">Track and monitor your vital signs</span>
      </a>
    </motion.div>
  );
};

export default VitalSignsLink;
