import React, { useRef, useEffect } from "react";
import hammerjs from "hammerjs";
import "./style.css";

const Hammer = () => {
  const myEl = useRef(null);
  useEffect(() => {
    const sliderManager = new hammerjs.Manager(myEl.current);
    let slideCount = 3;
    let activeSlide = 0;
    sliderManager.add(new hammerjs.Pan({ threshold: 0, pointers: 0 }));

    sliderManager.on("pan", function (e) {
      var percentage = ((100 / slideCount) * e.deltaX) / window.innerWidth;
      var transformPercentage = percentage - (100 / slideCount) * activeSlide; // NEW
      myEl.current.style.transform =
        "translateX( " + transformPercentage + "% )";
      if (e.isFinal) {
        // NEW: this only runs on event end
        if (percentage < 0) goToSlide(activeSlide + 1);
        else if (percentage > 0) goToSlide(activeSlide - 1);
        else goToSlide(activeSlide);
      }
    });
    var goToSlide = function (number) {
      if (number < 0) activeSlide = 0;
      else if (number > slideCount - 1) activeSlide = slideCount - 1;
      else activeSlide = number;

      var percentage = -(100 / slideCount) * activeSlide;
      myEl.current.style.transform = "translateX( " + percentage + "% )";
    };
  }, []);

  return (
    <div className="hammer ">
      <div className="has-slider">
        <div className="slider animate__animated animate__jello" id="slider" ref={myEl}>
          <div
            className="slider-panel"
            style={{
              backgroundImage:
                "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/40288/65d721_4dfa47a05152487fb3bc45ca2ec8fd1e.png')",
                backgroundColor: "#faaf34",
            }}
          ></div>
          <div
            className="slider-panel"
            style={{
              backgroundImage:
                "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/40288/65d721_761db9a0c113407f924a824ed173ed26.png')",
                backgroundColor: "#aca680"
            }}
          ></div>
          <div
            className="slider-panel"
            style={{
              backgroundImage:
                "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/40288/tumblr_njkn6kp0kE1qgsw73o1_500.png')",
                backgroundColor: "#d8daa6"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hammer;
