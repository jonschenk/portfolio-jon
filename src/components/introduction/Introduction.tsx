import { Reveal } from "../Reveal";
import "./Introduction.css";

// cool features to add:
// - "last seen working on" section

const Introduction = () => {
  return (
    <div className="intro">
      <div className="text_container">
        <h1>Hey! I'm Jon Schenk Jr. &#128075;</h1>

        <p>
          An aspiring <span>Full Stack Developer</span> based in Newberg, OR
          &#127758;
        </p>
      </div>

      <div className="socials_container"></div>

      <div className="image_container">
        <img src="src\assets\personal\me.png" />
      </div>
    </div>
  );
};

export default Introduction;
