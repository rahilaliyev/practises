import React, { useEffect } from "react";
import "./styles.css";
import anime from "animejs/lib/anime.es.js";
import { motion } from "framer-motion";

const DasboardPage = () => {
  useEffect(() => {
    anime({
      targets: ".students",
      textContent: 120,
      round: 1,
      easing: "easeInOutQuad",
      duration: 4000,
      loop: true,
    });
    anime({
      targets: ".teachers",
      textContent: 20,
      round: 1,
      easing: "easeInOutQuad",
      duration: 4000,
      loop: true,
    });
    anime({
      targets: ".courses",
      textContent: 15,
      round: 1,
      easing: "easeInOutQuad",
      duration: 4000,
      loop: true,
    });
    anime({
      targets: ".line-drawing-demo path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 4000,
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      exit={{ x: "-100%" }}
    >
      <div>
        <div className="card card-1">
          <h1 className="students">0</h1> <p>students</p>
        </div>
        <div className="card card-1">
          <h1 className="teachers">0</h1> <p>teacher</p>
        </div>
        <div className="card card-1">
          <h1 className="courses">0</h1> <p>courses</p>
        </div>
        <div className="demo-content align-center line-drawing-demo">
          <svg viewBox="0 0 280 100">
            <g
              transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)"
              stroke="red"
              strokeWidth="10"
              fill="none"
            >
              <path d="M1778 773 c-14 -4 -18 -15 -18 -56 l0 -53 -41 4 c-32 3 -46 -1 -65 -19 -51 -48 -52 -158 -1 -194 28 -20 76 -19 99 2 17 15 18 15 18 0 0 -10 6 -17 13 -17 9 0 12 41 12 170 0 93 0 169 0 169 0 -1 -8 -3 -17 -6z m-18 -212 c5 -68 3 -74 -17 -84 -54 -25 -101 27 -90 99 8 51 24 66 66 62 l36 -3 5 -74z" />
              <path d="M295 738 c-2 -7 -27 -75 -55 -151 -27 -77 -50 -141 -50 -143 0 -2 9 -4 19 -4 15 0 22 12 31 50 l12 50 63 0 63 0 13 -50 c9 -37 18 -50 31 -50 10 0 18 4 18 9 0 5 -23 75 -51 155 -42 120 -55 146 -70 146 -11 0 -22 -6 -24 -12z m50 -105 l23 -63 -53 0 -52 0 26 75 c14 41 28 69 30 62 2 -6 14 -40 26 -74z" />
              <path d="M440 731 c0 -16 6 -18 46 -13 l46 5 -4 -142 c-3 -130 -2 -141 14 -141 16 0 18 13 18 141 l0 141 40 -4 c33 -3 40 0 40 14 0 16 -11 18 -100 18 -91 0 -100 -2 -100 -19z" />
              <path d="M690 598 l0 -153 77 1 c64 1 79 4 81 18 3 13 -7 16 -62 16 l-66 0 0 135 c0 113 -2 135 -15 135 -13 0 -15 -24 -15 -152z" />
              <path d="M1003 606 c-29 -79 -53 -149 -53 -156 0 -6 7 -10 16 -8 10 2 22 22 31 51 l14 48 62 -3 62 -3 11 -45 c8 -35 16 -46 34 -48 16 -3 21 0 18 10 -3 7 -27 77 -54 155 -66 192 -71 192 -141 -1z m117 -33 c0 -2 -23 -3 -51 -3 -45 0 -50 2 -44 18 4 9 14 37 22 62 8 25 17 52 20 60 3 11 52 -114 53 -137z" />
              <path d="M1272 654 c-49 -34 -64 -100 -37 -159 31 -64 145 -79 145 -19 0 2 -11 2 -25 -2 -44 -11 -75 4 -91 42 -28 66 7 131 65 122 27 -4 41 6 41 28 0 11 -78 2 -98 -12z" />
              <path d="M1417 651 c-4 -17 -1 -19 29 -14 52 8 84 -3 84 -31 0 -20 -6 -24 -40 -30 -55 -9 -82 -37 -78 -84 4 -46 40 -63 90 -44 19 7 34 8 38 2 3 -5 10 -6 15 -2 6 4 8 46 5 105 -6 112 -9 117 -86 117 -43 0 -53 -3 -57 -19z m113 -136 c0 -28 -4 -36 -24 -41 -39 -9 -61 -1 -64 26 -5 29 21 50 60 50 25 0 28 -3 28 -35z" />
              <path d="M1881 646 c-50 -53 -48 -144 6 -186 35 -27 123 -29 123 -2 0 14 -7 17 -38 14 -42 -4 -86 23 -95 58 -5 19 0 20 69 20 73 0 74 0 74 25 0 33 -25 81 -45 89 -34 13 -72 6 -94 -18z m100 -38 l7 -28 -54 0 c-56 0 -62 6 -43 41 8 16 19 19 46 17 30 -2 38 -8 44 -30z" />
              <path d="M2065 555 c0 -103 2 -115 18 -115 15 0 17 11 17 88 0 96 7 112 52 112 39 0 49 -32 41 -125 -6 -72 -5 -75 15 -75 21 0 22 4 21 91 -2 96 4 109 46 109 37 0 45 -20 45 -112 0 -72 3 -88 15 -88 22 0 22 192 -1 214 -20 20 -72 21 -94 1 -15 -14 -18 -14 -30 0 -16 19 -69 19 -98 -1 -20 -14 -22 -14 -22 0 0 9 -6 16 -12 16 -10 0 -13 -30 -13 -115z" />
              <path d="M2390 666 c0 -2 16 -45 35 -95 19 -50 35 -108 35 -131 0 -35 -4 -43 -30 -58 -33 -19 -40 -42 -12 -42 34 0 44 19 97 173 46 136 51 157 36 157 -14 0 -23 -19 -39 -79 -12 -43 -22 -87 -23 -97 -1 -22 -7 -6 -39 104 -17 57 -26 72 -41 72 -10 0 -19 -2 -19 -4z" />
            </g>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default DasboardPage;
