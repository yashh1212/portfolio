import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./component/Main";
const serverless=require

function App() {
  const [refs, setRefs] = useState({});
  const [activestate, setactivestate] = useState();

  const scrollToSection = (section) => {
    if (refs[section]) {
      refs[section].current.scrollIntoView({
        behavior: "smooth",
      });
      setactivestate(section);
    }
  };

  const setactivated = (section) => {
    setactivestate(section);
  };

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorBackground, setCursorBackground] = useState(
    "radial-gradient(circle, #121e3f, rgba(255, 255, 255, 0) 70%)"
  );

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <div
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          background: cursorBackground,
        }}
      />
      <Main
        scrollToSection={scrollToSection}
        setRefs={setRefs}
        activestate={activestate}
        setactivated={setactivated}
      />
    </div>
  );
}

export default App;
