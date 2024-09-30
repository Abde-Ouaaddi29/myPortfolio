import React from "react";
import { MdEmail } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

import ParticlesComponent from "../ParticlesComponent";
import { useSelector } from "react-redux";

export default function Contact() {
  const myInformation = useSelector((state) => state.persoInfo);

  return (
    <div id="contact" className="py-10 ">
      <ParticlesComponent />

      <div className="p-2 text-center text-4xl font-bold">Get in Touch</div>
      <div className="text-center py-16">
        <div className=" font-light tracking-wider mb-5">
          {myInformation.basePlace[0]}
        </div>
        <div className=" font-light tracking-wider mb-5">
          {myInformation.phone}
        </div>
        <a
          href={`mailto:${myInformation.mySocialMediaLinks.email}`}
          className=" font-light tracking-wider hover:underline hover:text-gray-700 transition-all duration-300"
        >
          {myInformation.mySocialMediaLinks.email}
        </a>
        <div className=" font-light tracking-wider mt-5 flex justify-center  ">
          <div className=" flex ">
            <a href="">
              <FaXTwitter className="w-7 h-7 mr-4 hover:scale-105 hover:text-gray-600 transition-all duration-300" />
            </a>
            <a href={myInformation.mySocialMediaLinks.github}>
              <BsGithub className="w-7 h-7 mr-4 hover:scale-105 hover:text-gray-600 transition-all duration-300" />
            </a>
            <a href={myInformation.mySocialMediaLinks.upwork}>
              <FaUpwork className="w-7 h-7 mr-4 hover:scale-105 hover:text-gray-600 transition-all duration-300" />
            </a>
            <a href={myInformation.mySocialMediaLinks.linkedin}>
              <FaLinkedin className="w-7 h-7 hover:scale-105 hover:text-gray-600 transition-all duration-300 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
