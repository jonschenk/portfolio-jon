import "./projects.css";
import "bootstrap";

const Projects = () => {
  return (
    <div className="carousel-container d-flex justify-content-center">
      <div id="project-carousel" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src/assets/project-thumbnails/tempslide1.svg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <a href="https://jonschenk.github.io/C-GoL/" target="_blank">
              <img
                id="cgol"
                src="src/assets/project-thumbnails/cgol.png"
                className="d-block w-100"
                alt="..."
              />
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#project-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#project-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
