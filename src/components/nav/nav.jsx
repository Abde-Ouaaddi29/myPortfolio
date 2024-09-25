import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiMoonBats } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
import logo from '../../assets/logo.png'

export default function Nav() {
  return (
    <div className=" navbar shadow-lg py-4 flex justify-between items-center px-8 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center cursor-pointer">
        <img className="w-10 h-10 hover:text-primary transition-all duration-300" src={logo} alt="Abde" />
        <span className="text-2xl text-black font-light tracking-wider hover:text-primary transition-all duration-300"> <span className="text-primary hover:text-primary transition-all duration-300">O</span>uaaddi</span>
      </div>
      <div className="flex justify-between items-center px-4">
        <div className="flex justify-between items-center border-r border-black mr-3 py-1 px-3">
          <div>
            <BsGithub className="text-2xl text-black hover:text-primary transition-all duration-300" />
          </div>
          <div className="px-6">
            <FaLinkedin className="text-2xl text-black hover:text-primary transition-all duration-300" />
          </div>
          <div>
            <FaTwitter className="text-2xl text-black hover:text-primary transition-all duration-300" />
          </div>
          <div className="px-6">
            <FaFacebook className="text-2xl text-black hover:text-primary transition-all duration-300" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="px-4"><GiMoonBats className="text-2xl text-black hover:text-blue-gray-600 transition-all duration-300 cursor-pointer"/></div>
          {/* <div className="px-4"><IoSunnyOutline className="text-2xl text-primary hover:text-orange-300 transition-all duration-300 cursor-pointer"/></div> */}
          <div className="font-medium text-black text-xl hover:text-primary transition-all duration-300 cursor-pointer">En</div>
        </div>
      </div>
    </div>
  );
}
