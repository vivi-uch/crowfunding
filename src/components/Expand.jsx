import { useState } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  collapsed: {
    opacity: 0.1,
    height: 100,
  },
  expanded: {
    opacity: 1,
    height: 300,
  },
};

export default function ExpandableCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={cardVariants} // Use the variants object
      initial="collapsed" // Starting variant
      animate={isExpanded ? "expanded" : "collapsed"} // Toggle between variants
      transition={{ duration: 0.5 }} // Add smooth animation
      onClick={() => setIsExpanded(!isExpanded)} // Click to expand/collapse
      style={{ background: "#ddd", width: "200px", cursor: "pointer" }}
    >
      <h3>Click to {isExpanded ? "Collapse" : "Expand"}</h3>
    </motion.div>
  );
}
