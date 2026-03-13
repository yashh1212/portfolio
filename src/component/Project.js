import React from 'react'
import Project_card from './ProjectCard'
import hospital from "../images/hospital ss.png";
import weather from "../images/weather ss.png";
import architectureAnalyzer from "../images/architectureAnalyzer.png";
import stock from "../images/1_QRu9hDVzyXIL3P0VTPlw3g.jpg";
import "../css/project_card.css";


function Project() {
  const projects = [
    {
  project_name: "AI Code Architecture Analyzer",
  href: "https://your-project-link.vercel.app/",
  img: architectureAnalyzer,
  technologies: ["React", "FastAPI", "Python", "AST", "LLM Integration", "Tailwind CSS"],
  des: "Built a scalable AI-driven code architecture analyzer that examines repositories to extract structural insights, detect circular dependencies, and map module relationships. Using Python AST parsing and repository tree analysis, the system enables architecture-aware AI chat and contextual Q&A over entire codebases. The platform delivers structured JSON outputs to a responsive frontend, helping developers quickly understand and navigate complex systems."
}
,
    {
      project_name: "Hospital website",
      href: "https://shrikrushnahospital.vercel.app/",
      img: hospital,
      technologies: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
      des: "Created a comprehensive hospital website to enhance patient engagement and streamline services. Features include a secure patient portal for accessing medical records, booking appointments, and communicating with healthcare providers. The site offers an intuitive appointment system, a detailed service directory, doctor profiles, emergency contact information, and health resources. Designed to be fully responsive, it ensures accessibility on mobile and desktop devices. Technologies used: HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    },
    // {
    //   project_name: "Weather app",
    //   href: "https://serene-cobbler-2b97c7.netlify.app/",
    //   img: weather,
    //   technologies: ["Html", "Css", "JavaScript"],
    //   des: "Developed a dynamic weather web app using HTML, CSS, and JavaScript. The app provides real-time weather updates, including temperature, humidity, and forecast data, for any location. It features a clean, responsive design for seamless use on both mobile and desktop devices.",
    // },
    {
      project_name: "Stock Marcket Prediction",
      href: "#",
      img: stock,
      technologies: ["Python", "Flask", "Tkinter", "Scikit-Learn"],
      des: "Developed a stock market prediction application using Python, Flask, and Tkinter. The app uses machine learning models to predict stock prices, providing users with insights and trends. It features a user-friendly interface for displaying predictions and historical data.",
    },
    {
      project_name: "Chat Bot",
      href: "#",
      img: hospital,
      technologies: ["Python", "Flask", "Tkinter", "Scikit-Learn"],
      des: "Developed a stock market prediction application using Python, Flask, and Tkinter. The app uses machine learning models to predict stock prices, providing users with insights and trends. It features a user-friendly interface for displaying predictions and historical data.",
    },
  ];
  return (
    <div className="project_body">
      <div className="hidden">
        <h1>PROJECT</h1>
      </div>

      {projects.map((project, index) => (
        <Project_card project={project} key={index} />
      ))}
    </div>
  );
}

export default Project
