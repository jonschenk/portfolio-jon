import "bootstrap";
import "./project-item.css";

type ProjectProps = {
  cat: string;
  title: string;
  text: string;
  footer: string;
  link?: string;
  linkText?: string;
  onDragStart?: (e: React.DragEvent) => void;
};

const Project: React.FC<ProjectProps> = ({
  cat,
  title,
  text,
  footer,
  link,
  linkText,
}) => (
  <div className="project-item">
    <div className="card text-center" id="cards">
      <div className="card-header" id="header">
        {cat}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text" id="text">
          {text}
        </p>
        {link && linkText && (
          <a
            href={link}
            target="_blank"
            className="btn btn-primary"
            id="proj-button"
          >
            {linkText}
          </a>
        )}
      </div>
      <div className="card-footer" id="footer">
        {footer}
      </div>
    </div>
  </div>
);

export default Project;
