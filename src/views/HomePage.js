import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <motion.div
    initial={{ x: "100%" }}
    animate={{ x: "0" }}
    exit={{ x: "-100%" }}
    >
      <div>
        Hello from Homepage <br />
        <Link to="/basics">Go to Basics</Link> <br />
        <Link to="/dashboard">Go to Dashboard</Link>
        <br />
        <Link to="/framer">Go to Framer</Link>
        <Link to="/borderImage">Go to BorderImage</Link>
        <br/>
        <Link to="/hammer">Go to Hammer</Link>
      </div>
    </motion.div>
  );
};

export default HomePage;
