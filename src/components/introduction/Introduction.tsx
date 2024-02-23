import "./Introduction.css";

// cool features to add:
// - socials buttons
// - "last seen working on" section

const Introduction = () => {
  return (
    <div className="intro">
      <div className="text_container">
        <h1>Hey! I'm Jon Schenk &#128075;</h1>
        <p>
          I'm an aspiring <span>Full Stack Web Developer</span> based in
          Newberg, OR &#127758;
        </p>
      </div>

      <div className="socials_container"></div>

      <div className="image_container">
        <img src="src\assets\personal\pfp.png" />
      </div>
    </div>
  );
};

export default Introduction;
