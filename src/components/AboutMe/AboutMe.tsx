import { useState, useEffect } from "react";
import "./AboutMe.css";
import { Reveal } from "../Reveal";

function Age() {
  const [age, setAge] = useState("0.0000000000000");
  const birthDate = new Date("2002-10-10");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const ageInMilliseconds = now.getTime() - birthDate.getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(13));
    }, 10);

    return () => clearInterval(interval); // cleanup on unmount
  }, [birthDate]);

  return age;
}

function AboutMe() {
  return (
    <>
      <div className="aboutme-container">
        <Reveal>
          <h1 id="aboutme-title">Who am I? &#129488;</h1>
        </Reveal>
        <Reveal>
          <p id="aboutme-description">
            {" "}
            I'm a <span id="age-highlight">{Age()}</span> year old student
            attending <span id="normal-highlight">George Fox University</span>{" "}
            and studying
            <span id="normal-highlight"> Computer Science</span>. It's currently
            my Junior year. I'm passionate about software development and I'm
            always looking for new opportunities to learn and grow. When I'm not
            making cool things with code, you can find me working out, making
            music, or diving into a new hobby.
            <br />
            <br />{" "}
            <span id="internship-status">
              I am currently seeking internships for{" "}
              <span id="normal-highlight">Summer 2024</span>.
            </span>{" "}
          </p>
        </Reveal>
      </div>
    </>
  );
}

export default AboutMe;
