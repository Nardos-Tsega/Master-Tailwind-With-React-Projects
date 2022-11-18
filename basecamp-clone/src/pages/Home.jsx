import React from "react";
import Header from "../components/Common/Header";
import { FcCdLogo } from "react-icons/fc";
import ProjectList from "../components/Home/ProjectList";

function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mx-auto max-w-7xl">
        <div>
          <FcCdLogo color="#5E9CC6" size="96px" />
        </div>

        <div>
          <button className="bg-primary px-6 py-1 text-sm text-background rounded-full m-2">
            Make a new project
          </button>
          <button className="bg-primary px-6 py-1 text-sm text-background rounded-full m-2">
            Invite people
          </button>
        </div>
        <p className="text-white text-sm mt-2 mb-6">
          <span>Pinned & recent projects below</span> ·{" "}
          <a href="#" className="border-b-[1px] border-white">
            View all in a list
          </a>
          · Press{" "}
          <span className="border border-white border-b-4 px-2 rounded-md">
            Ctrl+J
          </span>{" "}
          anytime to jump
        </p>
        <div>
          <ProjectList />
        </div>
      </div>
    </div>
  );
}

export default Home;
