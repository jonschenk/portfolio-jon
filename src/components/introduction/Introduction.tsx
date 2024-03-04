import "./Introduction.css";
import Typewriter from "typewriter-effect";

// cool features to add:
// - "last seen working on" section

const Introduction = () => {
  return (
    <div className="main-container">
      <div className="intro">
        <div className="text_container">
          <h1>Hey! &#128075; I'm Jon Schenk Jr.</h1>

          <div className="typewriter-container">
            <Typewriter
              options={{
                loop: true,
                delay: "natural",
                strings: [
                  "I'm an aspiring <span id='highlight'>Full Stack Developer</span> \u{1F4D1}",
                  "I'm also interested in <span id='highlight'>Software Engineering</span> \u{1F4F2}",
                  "I'm from <span id='highlight'>Dundee, OR</span> \u{1F30E}",
                  "I'm studying <span id='highlight'>Computer Science</span> at <span id='highlight'>George Fox University</span> \u{1F393}",
                  "My favorite languages are <span id='highlight'>Typescript</span> and <span id='highlight'>Python</span> \u{1F4BB}",
                ],
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter.start();
              }}
            />
          </div>
        </div>

        <div className="image_container">
          <img src="src\assets\personal\pfp.png" />
        </div>
      </div>
      <div className="download-resume-container">
        <a href="src\assets\jonschenkjrresume.pdf" download>
          <button>Download Resume &#128195;</button>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
