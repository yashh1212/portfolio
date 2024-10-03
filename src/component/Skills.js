import React from 'react'
import '../css/Skills.css'
import python from '../images/python.png'
import js from '../images/js.png'
import react from '../images/physics.png'
import html from '../images/html.png'
import node from '../images/programing.png'
import database from '../images/database-management.png'
import css from '../images/social.png'
function Skills() {
    return (
      <div className="skills_body">
        <div className="hidden">
          <h1>SKILLS</h1>
        </div>
        <div className="languages">
          <ul>
            <li>
              <img src={html} />
            </li>
            <li>
              <img src={css} />
            </li>
            <li>
              <img src={js} />
            </li>
            <li>
              <img src={node} />
            </li>
            <li>
              <img src={react} />
            </li>
            <li>
              <img src={python} />
            </li>
            <li>
              <img src={database} />
            </li>
            <li></li>
          </ul>
        </div>
        <div className="skills_des"></div>
      </div>
    );
}

export default Skills
