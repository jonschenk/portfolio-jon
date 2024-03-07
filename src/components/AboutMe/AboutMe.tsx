import React, { useState, useEffect, useRef } from "react";
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
        <h1 id="aboutme-title">Who am I? &#129488;</h1>
        <Reveal>
          <p id="aboutme-description">
            {" "}
            I am a <span id="age-highlight">{Age()}</span> year old student
            attending <span id="normal-highlight">George Fox University</span>{" "}
            and studying
            <span id="normal-highlight"> Computer Science</span>. It is
            currently my <span id="normal-highlight">Junior year.</span> I am
            passionate about{" "}
            <span id="normal-highlight">software development</span> and I am
            always looking for new opportunities to{" "}
            <span id="normal-highlight">learn </span>and{" "}
            <span id="normal-highlight">grow.</span> When I'm not coding, you
            can find me <span id="normal-highlight">working out</span>,{" "}
            <span id="normal-highlight">making music</span>, or diving into a
            new hobby.
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