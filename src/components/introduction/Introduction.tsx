import "./Introduction.css";
import Typewriter from "typewriter-effect";

// cool features to add:
// - "last seen working on" section

const Introduction = () => {
  return (
    <>
      <div className="intro">
        <div className="text_container">
          <h1>Hey! I'm Jon Schenk Jr. &#128075;</h1>

          <div className="typewriter-container">
            <Typewriter
              options={{
                loop: true,
                delay: 30,
                strings: [
                  "I'm an aspiring <span id='highlight'>Full Stack Developer</span>\u{1F30E}",
                  "I'm also interested in <span id='highlight'>Software Engineering</span> \u{1F642}",
                  "I'm from <span id='highlight'>Newberg, OR</span> \u{1F30E}",
                  "I'm studying Computer Science at <span id='highlight'>George Fox University</span> \u{1F393}",
                  "My favorite languages are <span id='highlight'>Typescript</span> and <span id='highlight'>Python</span> \u{1F4BB}",
                ],
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter.changeDeleteSpeed(40).start();
              }}
            />
          </div>
        </div>

        <div className="image_container">
          <img src="src\assets\personal\me.png" />
        </div>
      </div>
      <div className="download-resume-container">
        <a href="src\assets\personal\jonschenkjrresume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
    </>
  );
};

export default Introduction;
