import { useState } from "react";
import { Reveal } from "../Reveal";
import "./MyFavoriteTools.css";

function MyFavoriteTools() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  return (
    <>
      <div className="section-container">
        <Reveal>
          <div className="tool-text-container">
            <h1>Here's some of my favorite tools:</h1>
          </div>
        </Reveal>

        <div className="grid text-center">
          <Reveal>
            <div className="img-container">
              <img
                src="src/assets/tools/typescript-icon.svg"
                alt="Typescript"
                width="50"
                height="50"
              />
              <img
                src="src/assets/tools/HTML5_Badge.svg"
                alt="HTML5"
                width="50"
                height="50"
              />
              <img
                src="src/assets/tools/CSS3_logo.svg"
                alt="CSS"
                width="50"
                height="50"
              />
              <img
                src="src/assets/tools/react.svg"
                alt="React"
                width="50"
                height="50"
              />
              <img
                src="src/assets/tools/nodejs-icon-alt.svg"
                alt="Node.js"
                width="50"
                height="50"
              />
              <img
                src="src/assets/tools/vitejs.svg"
                alt="Vite.js"
                width="50"
                height="50"
              />
              <img
                src="src/assets/tools/python.svg"
                alt="Python"
                width="50"
                height="50"
              />
              <img
                src="src/assets/tools/scala.svg"
                alt="Scala"
                width="50"
                height="50"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

export default MyFavoriteTools;
