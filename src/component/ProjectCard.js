import React from "react";
import "../css/project_card.css";

function ProjectCard({project}) {
 
  return (
    <a href={project.href} target="_main" className="project_card">
      <div className="project_image">
        <img src={project.img} alt="" />
      </div>
      <div className="project_info">
        <span target="_main">
          <span>
            {project.project_name}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </span>
        <p>{project.des}</p>
        {project.technologies ? (
          <ul className="tech">
            {project.technologies.map((technology,index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </a>
  );
}

export default ProjectCard;
