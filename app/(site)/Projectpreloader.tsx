import React from "react";
import "./ProjectPreloader.css";

// Define a prop interface
interface ProjectPreloaderProps {
  // Define your props here
}

function ProjectPreloader(props: ProjectPreloaderProps) {
  return (
    <div className="projectPreloader">
      <div className="box">
        <div className="title">
          <span className="block"></span>
          <h1>
            bixby-messenger
            {/* <h1 className="logo">Stud</h1>ify */}
            <span></span>
          </h1>
        </div>
        <div className="role">
          <div className="block"></div>
          <p> - by speedcuberAyush</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreloader;
