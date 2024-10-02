import React, { useState } from "react";
import CardProject from "./projectCard";
import { projectList } from "../../constants/constants.jsx";
import { useSelector } from "react-redux";

export default function Project() {
  const [projects, setProjects] = useState(projectList);
  const DarkMode = useSelector((store) => store.DarkMode);


  console.log(projects);

  return (
    <>
      <div
        id="header"
        className={`${DarkMode ? ' shadow-black bg-black' : 'shadow-white bg-white' } shadow-2xl  relative mt-4 `}
      >
        <div className="px-10 mb-6">
          <div className="flex justify-between items-center ">
            <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
            <div className={`${DarkMode ? 'text-white' : 'text-black'} text-4xl font-bold tracking-wide`}>
              Projects & work
            </div>
            <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
          </div>
        </div>

        <div className=" py-14 px-10 grid grid-cols-2 gap-8">
          <CardProject projects={projects} />
        </div>
      </div>
    </>
  );
}
