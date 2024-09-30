import React from "react";
import Header from "../components/header/header";
import Contact from "../components/contact/contact";
import About from "../components/header/about";
import Technologies from "../components/technologies/technologies";
import Education from "../components/education/education";
import Project from "../components/projects/project";
import Experience from "../components/experiences/experience";
import { useSelector } from "react-redux";

export default function Home() {
  const store = useSelector((store) => store.DarkMode)
  console.log(store)
  
  return (
    <div className="relative">
      <div class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_0.3px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_0.3px)] bg-[size:6rem_4rem]"></div>
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}
      <Header />
      <Technologies />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <div className="p-3 bg-white text-gray-500 text-center">
        ©2024 Ouaaddi Abderrahim. All rights reserved.
      </div>
    </div>
  );
}
