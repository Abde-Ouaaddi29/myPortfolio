import React from "react";
// import { GiOrange } from "react-icons/gi";
import { PiOrangeLight } from "react-icons/pi";

import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiMoonBats } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { opencard, setDarkMode, setLang } from "../../redux/typeActions";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdFilterList } from "react-icons/md";

import { useState } from "react";

export default function Nav() {
  const lang = useSelector((store) => store.language);
  const DarkMode = useSelector((store) => store.DarkMode);
  const myInformation = useSelector((state) => state.persoInfo);
  const opened = useSelector((state) => state.openCard);
  // const [opened , setOpened] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    const savedDarkMode = localStorage.getItem("darkmode");

    if (savedLang) {
      dispatch(setLang(savedLang));
    }

    if (savedDarkMode !== null) {
      const isDarkMode = JSON.parse(savedDarkMode); // Parse stored value
      dispatch(setDarkMode(isDarkMode)); // Explicitly set the Redux state
    }
  }, [dispatch]);

  const Handlelang = () => {
    const newLang = lang === "Fr" ? "En" : "Fr";
    localStorage.setItem("lang", newLang);
    dispatch(setLang(newLang));
  };

  const HandleDarkMode = () => {
    const newDarkMode = !DarkMode;
    dispatch(setDarkMode());
    localStorage.setItem("darkmode", JSON.stringify(newDarkMode)); // Store new value in localStorage
  };

  const HandleOpen = () => {
    // setOpened(prev => !prev)
    dispatch(opencard())
  }

  console.log(opened)

  return (
    <div className="navbar shadow-lg lg:py-2 py-3 flex justify-between items-center lg:px-8 px-10 fixed top-0 left-0 right-0 z-50">
      <a href="#" className="flex justify-between items-center cursor-pointer">
        <img
          className="lg:w-10 lg:h-10 w-7 h-7 mr-2 hover:text-primary transition-all duration-300"
          src={logo}
          alt="Abde"
        />
      
        <span className="lg:text-2xl text-xl flex justify-center items-center font-light tracking-wider hover:text-primary transition-all duration-300">
          <span className="text-primary hover:text-primary transition-all duration-300">
            <PiOrangeLight />
          </span>
          <span className={`${DarkMode ? "text-white" : "text-black" } hover:text-primary transition-all duration-300`}>uaaddi</span>
        </span>
      </a>
      <div onClick={HandleOpen} className=" lg:hidden">{opened ? <IoMdClose className={` ${DarkMode ? 'text-white' : 'text-black' } w-7 h-7  `}/> : <MdFilterList className={` ${DarkMode ? 'text-white' : 'text-black' } w-7 h-7  `}/> }</div>
      <div className={`${opened ? `${DarkMode ? ' bg-white' : ' bg-black'}` : 'hidden'} FlueBack lg:flex lg:justify-between lg:items-center lg:px-4 p-4 bg-opacity-25  lg:relative absolute lg:top-0 lg:right-0 md:right-[55vh] sm:right-60 right-32 top-20 lg:rounded-none rounded-xl`} >
      <div className={`${DarkMode ? 'lg:border-r lg:border-white' : 'lg:border-r lg:border-black' }  flex flex-col justify-between items-center lg:flex-row lg:justify-between lg:items-center lg:mr-3 py-1 px-3`}>
      <a
            href={myInformation.mySocialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub
              className={`text-2xl ${
                DarkMode ? "text-white" : "text-black"
              } hover:text-primary transition-all duration-300 lg:mb-0 mb-3`}
            />
          </a>
          <div className="px-6">
            <a
              href={myInformation.mySocialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className={`text-2xl ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-primary transition-all duration-300 lg:mb-0 mb-3`}
              />
            </a>
          </div>
          <div>
            <a
              href={`mailto:${myInformation.mySocialMediaLinks.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail
                className={`text-2xl ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-primary transition-all duration-300 lg:mb-0 mb-3`}
              />
            </a>
          </div>
          <div className="px-6 ">
            <a
              href={myInformation.mySocialMediaLinks.upwork}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUpwork
                className={`text-2xl ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-primary transition-all duration-300`}
              />
            </a>
          </div>
        </div>
        <div className="flex lg:justify-between items-center justify-around mt-2 lg:mt-0 py-2 lg:py-0 ">
          <div onClick={HandleDarkMode} className="lg:px-4">
            {!DarkMode ? (
              <GiMoonBats className="text-2xl text-black hover:text-blue-gray-600 transition-all duration-300 cursor-pointer" />
            ) : (
              <IoSunnyOutline className="text-2xl text-yellow-200 hover:text-orange-400 transition-all duration-300 cursor-pointer" />
            )}
          </div>
          <div
            onClick={Handlelang}
            className={`${DarkMode ? "text-white " : " text-black "} font-medium text-xl hover:text-primary transition-all duration-300 cursor-pointer`}
          >
            {lang === "Fr" ? "En" : "Fr"}
          </div>
        </div>
      </div>
    </div>
  );
}
