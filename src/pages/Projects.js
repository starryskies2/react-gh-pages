/** @format */
import React from "react";
import ProjectItem from "../components/Projectitem";
import { ProjectList } from "../helper/Projectlist";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={project.name}
              id={idx}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
// key={project.name} need to add a key for react when doing MAP




//note for self,incase you want to add more projects,you can make a list file,and use it as an array to create all the projects there
// import Projexample from "../assets/example.png";

// export const ProjectList = [
//   {
//     name: "poofshnoof",
//     image: Proj1,
//     skills: "JavaScript,HTML,CSS",
//   },
