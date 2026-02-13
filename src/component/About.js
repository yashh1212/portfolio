import React from 'react'

function About() {
  return (
    <div>
      <div className="hidden top_most">
        <h1>ABOUT</h1>
      </div>

      <div className="personal_details">
        {/* <p>
          Hello, I'm Yash, a passionate full-stack developer with a diploma in
          Computer Engineering and an <span>8.8 CGPA </span>score. Skilled in
          front-end and back-end development, I create efficient web
          applications using{" "}
          <span>
            HTML, CSS, JavaScript, React, Node.js, Python, Express, and MongoDB
          </span>
          . Experienced in <span>Git, databases, and cloud deployment</span>, I
          excel in solving complex problems and adapting to new technologies. I
          collaborate effectively to deliver high-quality projects that exceed
          client expectations.
        </p> */}
       <p>
  Hello, I'm Yash, a passionate full-stack developer currently pursuing
  a B.Tech in Cybersecurity Engineering (3rd year) with an{" "}
  <span>8.03 CGPA</span>. Skilled in front-end and back-end development,
  I build scalable and efficient web applications using{" "}
  <span>
    HTML, CSS, JavaScript, React, Node.js, Python, Express, and MongoDB.
  </span>{" "}
  With hands-on experience in{" "}
  <span>Git, databases, and cloud deployment</span>, I focus on writing
  clean, maintainable code and solving complex real-world problems.
  I continuously adapt to new technologies and collaborate effectively
  to deliver impactful, production-ready solutions.
</p>
      </div>
    </div>
  );
}

export default About
