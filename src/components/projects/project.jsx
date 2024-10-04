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
            <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
            <div className={`${DarkMode ? 'text-white' : 'text-black'} lg:text-4xl xl:text-4xl text-2xl mx-4 font-bold tracking-wide`}>
              Projects
            </div>
            <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
          </div>
        </div>

        <div className=" xl:py-14 lg:py-14 py-5 xl:px-10 lg:px-10 px-2  grid lg:grid-cols-2 grid-cols-1 gap-8">
          <CardProject projects={projects} />
        </div>
      </div>
    </>
  );
}
