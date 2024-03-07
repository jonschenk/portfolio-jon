import "./projects.css";
import Divider from "../Divider/Divider";
import "bootstrap";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <Divider size="micro" />
      <div className="project">
        <h3>Project 1</h3>
        <img src="https://via.placeholder.com/150" alt="Project 1" />
        <p>Project 1 description</p>
      </div>
      <Divider size="micro" />
      <div className="project">
        <h3>Project 2</h3>
        <img src="https://via.placeholder.com/150" alt="Project 2" />
        <p>Project 2 description</p>
      </div>
    </div>
  );
};

export default Projects;
