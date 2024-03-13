import "./Introduction.css";
import Typewriter from "typewriter-effect";
import SocialButton from "../social-button/social-button";

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
                  "I'm an aspiring <span id='highlight'>Full Stack Developer</span> \u{1F4BB}",
                  "I'm from <span id='highlight'>Dundee, Oregon</span> \u{1F30E}",
                  "I'm studying <span id='highlight'>Computer Science</span> at <span id='highlight'>George Fox University</span> \u{1F393}",
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

      <div className="socials-container">
        <SocialButton
          url="https://www.github.com/jonschenk/"
          icon="src/assets/social-icons/github.png"
        />
        <SocialButton
          url="https://www.linkedin.com/in/jonschenkjr/"
          icon="src/assets/social-icons/linkedin.png"
        />
        <SocialButton
          url="https://app.joinhandshake.com/stu/users/32027948/"
          icon="src/assets/social-icons/handshake.svg"
        />
      </div>
    </div>
  );
};

export default Introduction;
