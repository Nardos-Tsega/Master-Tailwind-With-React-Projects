import React from "react";
import PROJECTS from "../../utils/PROJECTS.js";
import ProjectCard from "../Common/ProjectCard";

function ProjectList() {
  return (
    <div className="flex flex-wrap md:px-6 justify-center mx-auto gap-2">
      {PROJECTS.map((item) => {
        return <ProjectCard project={item} />;
      })}
    </div>
  );
}

export default ProjectList;
