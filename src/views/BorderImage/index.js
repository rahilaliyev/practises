import React, { useEffect } from "react";
import "./styles.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { rotate: 90 },
        hidden: { rotate: 0 },
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

const BorderImage = () => {
  return (
    <div className="main-disks">
      <div className="main">
        <div className="slider-item">
          <FadeInWhenVisible>
            <div className="img img1">
              <div className="center"></div>
            </div>
          </FadeInWhenVisible>{" "}
        </div>
        <div className="slider-item">
          <FadeInWhenVisible>
            <div className="img2 img">
              <div className="center"></div>
            </div>{" "}
          </FadeInWhenVisible>{" "}
        </div>
        <div className="slider-item">
          <FadeInWhenVisible>
            <div className="img3 img">
              <div className="center"></div>
            </div>
          </FadeInWhenVisible>{" "}
        </div>
      </div>
    </div>
  );
};

export default BorderImage;
