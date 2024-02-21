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

      <ProjectItem
        name="Prusa i3 MK3 Clay Retrofit"
        link="https://github.com/jonschenk/Prusa-Firmware"
        imageUrl="src/assets/project-thumbnails/prusa.png"
        description="Modifying firmware on Prusa to work with special hardware for clay extrusion."
      />
    </div>
  );
};

export default ProjectList;
