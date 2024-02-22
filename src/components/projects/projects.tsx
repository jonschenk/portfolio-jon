// import ProjectItem from "./project-item/project-item";
import "./projects.css";

const ProjectList = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card bg-dark text-white">
            <a
              href="https://www.github.com/jonschenk/c-gol"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/project-thumbnails/cgol.png"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Conway's Game of Life</h5>
              <p className="card-text">
                A web based implementation of Conway's Game of Life using
                Typescript and Node.js.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-dark text-white">
            <a
              href="https://github.com/jonschenk/Prusa-Firmware"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/project-thumbnails/prusa.png"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                Prusa i3 MK3 Clay 3D Printing Retrofit
              </h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
