import "./AudioDescription.css";
import { Reveal } from "../Reveal";

function CalcYears() {
  const currentYear = new Date().getFullYear();
  return String(currentYear - 2018);
}

function Description() {
  return (
    <div className="desc-container">
      <Reveal>
        <h4 className="bio-music">
          I have been producing, mixing, and mastering music &#127911; for{" "}
          <span id="highlight">{CalcYears()}</span> years.{" "}
        </h4>
      </Reveal>

      <Reveal>
        <p id="subheader">Here's some of my finished tracks!</p>
      </Reveal>
    </div>
  );
}

export default Description;
