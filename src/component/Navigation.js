import React, { forwardRef } from "react";
import "../css/Navigation.css";

const Navigation = ({ scrollToSection, activestate, handlescroll }) => {
  return (
    <div className="navigation_body" onWheel={handlescroll}>
      <div className="details">
        <h1>Yash Dhokane</h1>
        <h2>Full Stack Developer</h2>
        <ul className="navigator">
          <li
            className={
              activestate === "about" ? "list-item active" : "list-item"
            }
          >
            <span></span>
            <a
              href="About"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              <span className="line"></span>
              <span className="nav-item"> ABOUT</span>
            </a>
          </li>
          <li
            className={
              activestate === "Experience" ? "list-item active" : "list-item"
            }
          >
            <a
              href="Experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("Experience");
              }}
            >
              <span className="line"></span>
              <span className="nav-item"> EXPERIENCE</span>
            </a>
          </li>
          <li
            className={
              activestate === "project" ? "list-item active" : "list-item"
            }
          >
            <a
              href="Project"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project");
              }}
            >
              <span className="line"></span>
              <span className="nav-item"> PROJECTS</span>
            </a>
          </li>
          <li
            className={
              activestate === "skills" ? "list-item active" : "list-item"
            }
          >
            <a
              href="skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
            >
              <span className="line"></span>
              <span className="nav-item"> SKILLS</span>
            </a>
          </li>
        </ul>

        <ul className="links">
          <li className="link-li">
            <a href="https://github.com/yashh1212" target="_main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>

          <li className="link-li">
            <a
              href="https://www.linkedin.com/in/yash-dhokane-85b876287/"
              target="_main"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>

          <li className="link-li">
            <a
              href="https://leetcode.com/u/yash121212/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 41 41"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path d="M39.51,22.34a1.5,1.5,0,0,0-2.12,0L24.44,35.29a2.49,2.49,0,0,1-3.54,0L14.58,29a2.5,2.5,0,1,0-3.54,3.54l6.32,6.32a6.5,6.5,0,0,0,9.19,0L39.51,24.46A1.5,1.5,0,0,0,39.51,22.34ZM24.36,7.15a6.48,6.48,0,0,0-9.16,0L8.88,13.47a2.5,2.5,0,0,0,3.53,3.54l6.32-6.32a2.48,2.48,0,0,1,3.52,0L35.92,25.5a1.5,1.5,0,0,0,2.12-2.12Z" />
              </svg>
            </a>
          </li>
          <li className="link-li">
  <a
    href="https://codolio.com/profile/Yashdhokane"  // Replace with your actual Codolio URL
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Codolio"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15ZM9 8a1 1 0 0 0 0 2h3.586L10.293 12.293a1 1 0 1 0 1.414 1.414L14 11.414V15a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1H9Z" />
    </svg>
  </a>
</li>

        </ul>
      </div>
    </div>
  );
};

export default Navigation;
