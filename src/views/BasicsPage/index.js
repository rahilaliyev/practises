import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles.css";
import { motion } from "framer-motion";

const BasicsPage = () => {
  let timeline = gsap.timeline();
  useEffect(() => {
    timeline.to(".green", { x: 100, duration: 4 });
    timeline.to(".orange", { x: 100, background: "red", duration: 4 });
    timeline.to(".grey", {
      x: 100,
      background: "red",
      rotation: 180,
      duration: 4,
    });
  }, [timeline]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <div className="box green"></div>
        <div className="box orange"></div>
        <div className="box grey"></div>
      </div>
      <div>
        <button onClick={() => timeline.play()}>Play</button>
        <button onClick={() => timeline.pause()}>Pause</button>
        <button onClick={() => timeline.restart()}>Restart</button>
        <button onClick={() => timeline.resume()}>Resume</button>
      </div>
    </motion.div>
  );
};

export default BasicsPage;
