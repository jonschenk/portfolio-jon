import ProjectItem from "./ProjectItem";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <ProjectItem
        cat="Internship"
        title="Tanoshi Product Team Intern"
        text="Quality assurance testing and general research regarding hardware and software design as well as creating informative spreadsheets and collecting data from processed units and visualizing it using Python scripts and Google Cloud API."
        footer="Mar 2024 - Present"
      />
      <ProjectItem
        cat="Team Project"
        title="Prusa i3 MK3 - Servant Engineering Project"
        text="Modified the firmware of a Prusa i3 MK3 3D printer to support clay extrusion for a retrofit project."
        footer="Aug 2023 - Apr 2024"
        link="https://www.github.com/jonschenk/prusa-firmware"
        linkText="Firmware Repository"
      />
      <ProjectItem
        cat="Tutoring"
        title="Computer Help Lab Assistant"
        text="Assist students in overcoming challenges and building confidence in their computer science skills and offer clarification and guidance on course materials and assignments."
        footer="Sep 2023 - Present"
      />
      <ProjectItem
        cat="Project"
        title="Web-Based Conway's Game of Life"
        text="A browser implementation of Conway's Game of Life using Typescript and Node.js"
        footer="Feb 2024"
        link="https://jonschenk.github.io/C-GoL/"
        linkText="Check it out"
      />
      <ProjectItem
        cat="Project"
        title="Password Generator: Software Engineering Team Project"
        text="Software engineering project to create a password generator for a client utilizing scrum and agile methodologies."
        footer="Aug 2022 - Dec 2022"
      />
      <ProjectItem
        cat="Project"
        title="This Website"
        text="Creating this website was a project in itself! I used React.js and Typescript to create this website and learned a lot about web development in the process."
        footer="Feb 2024 - Present"
        link="https://www.github.com/jonschenk/portfolio-jon"
        linkText="Website Repository"
      />
    </div>
  );
};

export default Projects;
