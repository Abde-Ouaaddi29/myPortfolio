import React from "react";
import Header from "../components/header/header";
import Contact from "../components/contact/contact";
import About from "../components/header/about";
import Technologies from "../components/technologies/technologies";
import Education from "../components/education/education";
import Project from "../components/projects/project";
import Experience from "../components/experiences/experience";
import { useDispatch, useSelector } from "react-redux";
import { opencard } from "../redux/typeActions";

export default function Home() {
  const DarkMode = useSelector((store) => store.DarkMode);
  const openCard = useSelector((store) => store.openCard);
  const dispatch = useDispatch();

  console.log(openCard)

  return (
    <div className={`${DarkMode ? "bg-black" : "bg-white"} relative z-10 `}>

      {openCard ? (
        <div onClick={() => dispatch(opencard())} className="FlueBack fixed z-50 top-0 bottom-0 right-0 w-full h-screen"></div>
      ) : (
        ""
      )}

      {!DarkMode ? (
        <div class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_0.5px,transparent_0.4px),linear-gradient(to_bottom,#f0f0f0_0.5px,transparent_0.4px)] bg-[size:6rem_4rem]"></div>
      ) : (
        ""
      )}
      <Header />
      <Technologies />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <div
        className={`${
          DarkMode ? "bg-black" : "bg-white"
        } p-3 text-gray-500 text-center`}
      >
        ©2024 Ouaaddi Abderrahim. All rights reserved.
      </div>
    </div>
  );
}
