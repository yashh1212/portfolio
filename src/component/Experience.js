import React from "react";
import Experience_card from "./Experience_card.js";
import "../css/Experience.css";

function Experience() {
  const experiences = [
    {
  company_name: "Software Developer Intern · HHT Technologies (Remote)",
  des: "Currently contributing to full-stack development initiatives, building and maintaining frontend components and backend APIs. I develop scalable features using JavaScript, ReactJS, and Node.js, while assisting in debugging, performance optimization, and code quality improvements. Collaborating with cross-functional teams, I help deliver reliable and user-focused web solutions.",
  start: "MAY 2025",
  end: "PRESENT",
  technologies: ["JavaScript", ,"ReactJS", "Node.js", "REST API", "Git"]
}
,
    {
      company_name: "Intern · RB Tech",
      des: "As a Frontend Developer Intern, I gained hands-on experience building responsive and intuitive web interfaces. Collaborating with senior developers, I contributed to enhancing user experiences by implementing features using React, JavaScript, HTML, and CSS, ensuring seamless functionality across various devices.",

      start: "JAN",
      end: "APRIL 2024",
      technologies: ["Html", "JavaScript", "Css", "React", "NodeJs"],
    },
    // {
    //   company_name: "Intern · Axians Tech",
    //   des: "As a frontend developer intern, I gained valuable hands-on experience in creating responsive and user-friendly web interfaces. Working closely with senior developers, I contributed to the development and enhancement of front-end features using HTML, CSS, and JavaScript.",
    //   start: "FEB",
    //   end: "MARCH 2023",
    //   technologies: ["Html", "JavaScript", "Css"],
    // },
  ];
  return (
    <div className="experience_body">
      <div className="hidden">
        <h1>EXPERIENCE</h1>
      </div>

      {experiences.map((experience, index) => (
        <Experience_card experience={experience} key={index} />
      ))}

      <div className="resume">
        <a
          href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:a43405a8-3b88-4e5c-9ad0-e24d7729c983"
          target="_main"
          className="project_link"
        >
          View Full Resume{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Experience;
