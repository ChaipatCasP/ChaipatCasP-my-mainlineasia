import React from "react";
import logoimg from "../assets/logo.jpg";
import "./ProjectReferences.css";

const ProjectReferences = () => (
  <section id="reference" className="job-reference">
    <h2>Job Reference</h2>
    <div className="cards">
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
    </div>
  </section>
  // <div className="page projects">
  //   <h2>Project References</h2>
  //   <p>We have completed projects like...</p>
  //   <img src={logoimg} alt="Project References" className="projects-image" />
  // </div>
);

export default ProjectReferences;
