import React from "react";
import { motion } from "framer-motion";

const Framer = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      exit={{ x: "-100%" }}
    >
      <div style={{ backgroundColor: "green", height: "100vh" }}>

      </div>
    </motion.div>
  );
};

export default Framer;
