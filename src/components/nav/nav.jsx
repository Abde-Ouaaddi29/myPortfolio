import React from "react";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiMoonBats } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLang } from "../../redux/typeActions";

export default function Nav() {
  const lang = useSelector((store) => store.language);
  const DarkMode = useSelector((store) => store.DarkMode);
  const myInformation = useSelector((state) => state.persoInfo);
  

  const dispatch = useDispatch();

  const Handlelang = () => {
    const newLang = lang === "Fr" ? "En" : "Fr";
    dispatch(setLang(newLang));
  };

  const HandleDarkMode = () => {
    dispatch(setDarkMode());
  };

  console.log(myInformation)

  return (
    <div className="navbar shadow-lg py-4 flex justify-between items-center px-8 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center cursor-pointer">
        <img
          className="w-10 h-10 hover:text-primary transition-all duration-300"
          src={logo}
          alt="Abde"
        />
        <span className="text-2xl text-black font-light tracking-wider hover:text-primary transition-all duration-300">
          <span className="text-primary hover:text-primary transition-all duration-300">
            O
          </span>
          uaaddi
        </span>
      </div>
      <div className="flex justify-between items-center px-4">
        <div className="flex justify-between items-center border-r border-black mr-3 py-1 px-3">
          <a href={myInformation.mySocialMediaLinks.github} target="_blank" rel="noopener noreferrer">
            <BsGithub className="text-2xl text-black hover:text-primary transition-all duration-300" />
          </a>
          <div className="px-6">
            <a href={myInformation.mySocialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-black hover:text-primary transition-all duration-300" />
            </a>
          </div>
          <div>
            <a href={`mailto:${myInformation.mySocialMediaLinks.email}`} target="_blank" rel="noopener noreferrer">
              <MdEmail className="text-2xl text-black hover:text-primary transition-all duration-300" />
            </a>
          </div>
          <div className="px-6">
            <a href={myInformation.mySocialMediaLinks.upwork} target="_blank" rel="noopener noreferrer">
              <FaUpwork className="text-2xl text-black hover:text-primary transition-all duration-300" />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div onClick={HandleDarkMode} className="px-4">
            {!DarkMode ? (
              <GiMoonBats className="text-2xl text-black hover:text-blue-gray-600 transition-all duration-300 cursor-pointer" />
            ) : (
              <IoSunnyOutline className="text-2xl text-primary hover:text-orange-400 transition-all duration-300 cursor-pointer" />
            )}
          </div>
          <div
            onClick={Handlelang}
            className="font-medium text-black text-xl hover:text-primary transition-all duration-300 cursor-pointer"
          >
            {lang === "Fr" ? "En" : "Fr"}
          </div>
        </div>
      </div>
    </div>
  );
}
