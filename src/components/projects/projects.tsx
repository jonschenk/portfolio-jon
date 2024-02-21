import ProjectItem from "./project-item/project-item";
import "./projects.css";

const ProjectList = () => {
  return (
    <div className="Proj-Container">
      <h1>Projects</h1>
      <ProjectItem
        name="Conway's Game of Life"
        link="https://jonschenk.github.io/C-GoL/"
        imageUrl="src/assets/project-thumbnails/cgol.png"
        description="A web-based implementation of Conway's Game of Life using Typescript and Node.js."
      />
    </div>
  );
};

export default ProjectList;
