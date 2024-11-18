import React, { lazy, Suspense, memo } from "react";
import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";

// Lazy load the Mental Health Support content
const MentalHealthContent = lazy(() => import("./MentalHealthContent"));

// GraphQL query for mental health resources
const GET_MENTAL_HEALTH_RESOURCES = gql`
  query GetMentalHealthResources {
    mentalHealthResources {
      id
      title
      description
    }
  }
`;

const MentalHealth = memo(() => {
  const { data, error } = useQuery(GET_MENTAL_HEALTH_RESOURCES);


  return (
    <motion.div
      className="nav-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <a href="/mental-health" aria-label="Mental Health Support" className="tooltip">
        <FaBrain size="2em" />
        <span>Mental Health Support</span>
        <span className="tooltip-text">Access mental health resources</span>
      </a>

      <Suspense fallback={<div>Loading Mental Health Resources...</div>}>
        <MentalHealthContent resources={data?.mentalHealthResources || []} />
      </Suspense>
    </motion.div>
  );
});

export default MentalHealth;
