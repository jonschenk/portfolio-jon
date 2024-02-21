import "./project-item.css";

interface Props {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ProjectItem = (props: Props) => {
  return (
    <div className="item">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.imageUrl} className="img-thumbnail"></img>
      </a>

      <div className="details">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
