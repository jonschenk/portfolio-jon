import "./projects.css";
import "bootstrap";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Experience & Projects</h1>
      <div className="projects">
        <div className="project-item">
          <div className="card text-center" id="cards">
            <div className="card-header" id="header">
              Internship
            </div>
            <div className="card-body">
              <h5 className="card-title">Tanoshi Product Team Intern</h5>
              <p className="card-text">
                Quality assurance testing and general research regarding
                hardware and software design as well <br />
                as creating informative spreadsheets and collecting data from
                processed units and visualizing <br />
                it using Python scripts and Google Cloud API.
              </p>
            </div>
            <div className="card-footer" id="footer">
              Mar 2024 - Present
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="card text-center" id="cards">
            <div className="card-header" id="header">
              Team Project
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Prusa i3 MK3 - Servant Engineering Project
              </h5>
              <p className="card-text">
                Modified the firmware of a Prusa i3 MK3 3D printer to support
                clay extrusion for a retrofit project.
              </p>
              <a
                href="https://www.github.com/jonschenk/prusa-firmware"
                target="_blank"
                className="btn btn-primary"
                id="proj-button"
              >
                Firmware Repository
              </a>
            </div>
            <div className="card-footer" id="footer">
              August 2023 - April 2024
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="card text-center" id="cards">
            <div className="card-header" id="header">
              Tutoring
            </div>
            <div className="card-body">
              <h5 className="card-title">Computer Help Lab Assistant</h5>
              <p className="card-text">
                Assist students in overcoming challenges and building confidence
                in their computer science
                <br /> skills and offer clarification and guidance on course
                materials and assignments.
              </p>
            </div>
            <div className="card-footer" id="footer">
              September 2023 - Present
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="card text-center" id="cards">
            <div className="card-header" id="header">
              Project
            </div>
            <div className="card-body">
              <h5 className="card-title">Web-Based Conway's Game of Life</h5>
              <p className="card-text">
                A browser implementation of Conway's Game of Life using
                Typescript and Node.js
              </p>
              <a
                href="https://jonschenk.github.io/C-GoL/"
                target="_blank"
                className="btn btn-primary"
                id="proj-button"
              >
                Check it out
              </a>
            </div>
            <div className="card-footer" id="footer">
              February 2024
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="card text-center" id="cards">
            <div className="card-header" id="header">
              Team Project
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Password Generator: Software Engineering Team Project
              </h5>
              <p className="card-text">
                Software engineering project to create a password generator for
                a client utilizing scrum <br /> and agile methodologies.
              </p>
            </div>
            <div className="card-footer" id="footer">
              August 2022 - December 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
