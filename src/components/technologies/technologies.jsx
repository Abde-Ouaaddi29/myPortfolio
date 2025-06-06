import React, { useState } from "react";
import { FaCss3Alt, FaHtml5, FaWordpressSimple } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { SiUml } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiSonarqube } from "react-icons/si";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";


export default function Technologies() {
  const [tech, setTech] = useState();
  const DarkMode = useSelector((store) => store.DarkMode);

  const Mouse = (e) => {
    console.log(e);
    setTech(e);
    setTimeout(() => {
      setTech("");
    }, 9000);
  };

  const TechnologiesList = [
    <FaHtml5
      onMouseEnter={() => Mouse("HTML5")}
      className="fill-orange-900 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"
    />,
    <FaCss3Alt
      onMouseEnter={() => Mouse("CSS3")}
      className="fill-blue-700 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow "
    />,
    <FaJs
      onMouseEnter={() => Mouse("Javascript")}
      className="fill-yellow-700 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"
    />,
    <RiReactjsFill
      onMouseEnter={() => Mouse("Reactjs")}
      className="fill-blue-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <SiMongodb
      onMouseEnter={() => Mouse("MongoDB")}
      className="fill-green-400 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"
    />,
    <SiPhp
      onMouseEnter={() => Mouse("PHP")}
      className="fill-blue-500 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <FaLaravel
      onMouseEnter={() => Mouse("Laravel")}
      className="fill-primary text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"
    />,
    <SiMysql
      onMouseEnter={() => Mouse("MySQL")}
      className="fill-blue-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <RiTailwindCssFill
      onMouseEnter={() => Mouse("Tailwind-Css")}
      className="fill-purple-400 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"
    />,
    <FaBootstrap
      onMouseEnter={() => Mouse("Bootstrap-Css")}
      className="fill-purple-800 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <SiTypescript
      onMouseEnter={() => Mouse("Typescript")}
      className="fill-blue-800 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <SiExpress
      onMouseEnter={() => Mouse("Expressjs")}
      className="fill-gray-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"
    />,
    <FaNode
      onMouseEnter={() => Mouse("Nodejs")}
      className="fill-green-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <SiJirasoftware
      onMouseEnter={() => Mouse("Jira | Scrum")}
      className="fill-blue-400 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <FaGitAlt
      onMouseEnter={() => Mouse("Git")}
      className="fill-red-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <FaSquareGithub
      onMouseEnter={() => Mouse("Github")}
      className="text-8xl  fill-gray-700 flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"
    />,
    <SiRedux
      onMouseEnter={() => Mouse("Redux")}
      className="fill-purple-500 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <FaPython
      onMouseEnter={() => Mouse("Python")}
      className="fill-green-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <FaDocker
      onMouseEnter={() => Mouse("Docker")}
      className="fill-blue-400 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,

    <SiUml
      onMouseEnter={() => Mouse("UML")}
      className="fill-gray-500 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down "
    />,
    <FaWordpressSimple
      onMouseEnter={() => Mouse("CMS | Wordpress")}
      className="fill-blue-gray-800 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
    <RiNextjsFill
    onMouseEnter={() => Mouse("Nextjs")}
    className="fill-blue-gray-800 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
  />,
    <SiSonarqube
      onMouseEnter={() => Mouse("sonarqube | testing code quality")}
      className="fill-blue-300 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"
    />,
    <SiPostman
      onMouseEnter={() => Mouse("Postman | APIs")}
      className="fill-primary text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow"
    />,
  ];

  const [technologies, setTechnologies] = useState(TechnologiesList);

  return (
    <>
      <div
        className={`${
          DarkMode ? "bg-black shadow-black" : "bg-white shadow-white"
        } lg:px-10 xl:px-10 xl:my-10 lg:my-10 my-2 shadow-xl `}
      >
        <div className="flex justify-between items-center px-10 text-black">
          <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12  h-[0.2px] bg-orange-500"></div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: -50 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 30 }}
            className={`${
              DarkMode ? "text-white" : "text-black"
            } lg:text-4xl xl:text-4xl text-2xl font-bold mx-4 tracking-wide`}
          >
            Technologies
          </motion.div>
          <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
        </div>

        {tech ? (
          <div className="border mx-10 border-primary tracking-wide font-light text-primary absolute px-6 py-2 m-auto rounded-r-full ">
            {tech}
          </div>
        ) : (
          ""
        )}

        {technologies ? (
          <div className="flex flex-wrap justify-center my-16">
            {technologies.map((item, index) => {
              return (
                <>
                  <ul key={index}>{item}</ul>
                </>
              );
            })}
          </div>
        ) : (
          "In Proccessing..."
        )}
      </div>
    </>
  );
}
