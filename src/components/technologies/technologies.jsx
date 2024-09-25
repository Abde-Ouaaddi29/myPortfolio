import React from "react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
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
import { SiJira } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { SiUml } from "react-icons/si";

export default function Technologies() {
  const Technologies = [
    <FaHtml5 className="fill-orange-900 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down" />,
    <FaCss3Alt className="fill-blue-700 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow " />,
    <FaJs className="fill-yellow-700 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down" />,
    <RiReactjsFill className="fill-blue-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <SiMongodb className="fill-green-400 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down" />,
    <SiPhp className="fill-blue-500 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <FaLaravel className="fill-primary text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down" />,
    <SiMysql className="fill-blue-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <RiTailwindCssFill className="fill-purple-400 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down" />,
    <FaBootstrap className="fill-purple-800 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <SiTypescript className="fill-blue-800 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <SiExpress className="fill-black text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down" />,
    <FaNode className="fill-green-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <SiJira className="fill-blue-400 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <FaGitAlt className="fill-red-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <FaSquareGithub className="text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-move-up-down"/>,
    <SiUml className="fill-gray-500 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <FaPython className="fill-green-600 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <FaDocker className="fill-blue-400 text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
    <SiPostman className="fill-primary text-8xl flex justify-center items-center p-2 m-3 border-[4px] border-primary border-opacity-20 rounded-lg cursor-pointer hover:border-opacity-35 animate-bounce-slow" />,
  ];
  return (
    <>
      <div className="px-10 mt-10">
        <div className="flex justify-between items-center text-black ">
          <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
          <div className="text-5xl font-mono tracking-wide">Technologies</div>
          <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
        </div>

        {Technologies ? (
          <div className="flex flex-wrap justify-center my-10">
            {Technologies.map((tech) => {
              return (
                <>
                  <ul className="">
                    {tech}
                  </ul>
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
