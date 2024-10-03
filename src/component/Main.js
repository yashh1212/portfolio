import React, { useRef } from "react";
import Details from "./Details";
import Navigation from "./Navigation";
import "../css/main.css";

function Main({ scrollToSection, setRefs, activestate, setactivated }) {
   const detailsref=useRef(null)


  const handlescroll = (event) => {
    if (detailsref.current) {
      detailsref.current.scrollTop += event.deltaY;
    }
  };
  return (
    <div className="body_main">
      <Navigation
        scrollToSection={scrollToSection}
        activestate={activestate}
        handlescroll={handlescroll}
      />
      <Details ref={detailsref} setRefs={setRefs} setactivated={setactivated} />
    </div>
  );
}

export default Main;

