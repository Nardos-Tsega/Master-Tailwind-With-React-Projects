import React from "react";
import { AiFillPushpin } from "react-icons/ai";
function ProjectCard({ project }) {
  return (
    <div className="bg-card flex flex-col px-4 py-6 rounded-sm shadow-md min-h-[140px] w-[220px] md:w-[260px] justify-between">
      <div className="flex justify-between">
        <h3 className="text-white max-w-[85%] text-sm font-medium">
          {project.title}
        </h3>
        <AiFillPushpin color="#B5BABD" />
      </div>
      <div className="flex">
        {project.members.map((member) => {
          return (
            <div className="h-8 w-8 -ml-1">
              <img
                className="rounded-full  border-2 border-card h-full w-full"
                src={member.image}
                alt="members"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
