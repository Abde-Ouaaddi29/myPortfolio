import React, { useEffect, useState } from "react";
import { GiFeather } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { SiSocialblade } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import About from "./about";
import { Button } from "@material-tailwind/react";
import ParticlesComponent from "../ParticlesComponent";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Header() {
  const myInformation = useSelector((state) => state.persoInfo);
  const DarkMode = useSelector((store) => store.DarkMode);
  const language = useSelector((store) => store.language);

  const [myInfo, setMyInfo] = useState(myInformation);

  const texts =
    language === "Fr"
      ? [
          myInfo.speciality[0][0],
          myInfo.speciality[1][0],
          myInfo.speciality[2][0],
        ]
      : [
          myInfo.speciality[0][1],
          myInfo.speciality[1][1],
          myInfo.speciality[2][1],
        ];

  const [currentText, setCurrentText] = useState("");
  const [fullText, setFullText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  // console.log(useSelector((store) => store))

  useEffect(() => {
    const interval = setTimeout(() => {
      if (currentText.length < fullText.length) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          const nextIndex = (index + 1) % texts.length;
          setIndex(nextIndex);
          setFullText(texts[nextIndex]);
          setCurrentText("");
        }, 1000);
      }
    }, 100);

    return () => clearTimeout(interval);
  }, [currentText, fullText, index]);

  return (
    <header
      id="header"
      className="lg:px-10 xl:px-10 md:px-10 sm:px-10 px-6 relative lg:bg-[radial-gradient(circle_1000px_at_130%_120px,#fdba74,transparent)] bg-[radial-gradient(circle_900px_at_200%_10px,#fdba74,transparent)]"
    >
      {myInfo.myImage == '' ? 'Loading' : 'Loading2' }

      <ParticlesComponent />

      <div className="flex flex-col justify-center items-center lg:flex-row md:flex-col lg:justify-between lg:items-center md:h-[150vh] sm:h-[160vh] lg:h-[110vh] xl:h-[110vh] h-[115vh] relative">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 30 }}
          className="relative lg:w-6/12 xl:w-6/12 md:w-6/12 sm:w-full w-full "
        >
          <h1
            className={`${
              DarkMode ? "text-white" : "text-black"
            } lg:text-3xl font-extrabold text-2xl tracking-wider `}
          >
            {myInfo.fullName}
          </h1>
          <div className="text-black mb-4 font-bold tracking-wider lg:mt-5 mt-3 flex items-end ">
            <span className="font-light lg:text-3xl text-xl mr-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-700">
              {language == "Fr" ? "je suis" : "I'm"}
            </span>{" "}
            <span className="animated-text lg:text-3xl text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-700">
              {currentText}
            </span>
          </div>
          <div className="text-black text-xl mb-3 font-bold flex items-center">
            {" "}
            <span className="mr-1 text-primary">
              <IoLocationSharp />
            </span>{" "}
            <span className="text-primary mr-2 font-light">
              {language == "Fr" ? "basé à" : "Based in"}
            </span>{" "}
            <span className={`${DarkMode ? "text-white" : "text-black"}`}>
              {" "}
              {language == "Fr" ? myInfo.basePlace[0] : myInfo.basePlace[1]}
            </span>
          </div>
          <div className="text-black flex items-center">
            {" "}
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2 online-dot"></div>
            <span className={`${DarkMode ? "text-white" : "text-black"}`}>
              {language == "Fr" ? myInfo.status[0] : myInfo.status[1]}{" "}
            </span>
          </div>
          <div className=" flex items-center lg:mt-10 mt-4">
            <a
              href={language == "Fr" ? myInfo.cv[0] : myInfo.cv[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary tracking-wider rounded-none font-normal lg:text-[15px] lg:py-3 lg:px-5 px-3 py-2 lg:mr-5 mr-3 text-white hover:border border-primary hover:bg-inherit transition-all duration-500 flex items-end hover:text-primary">
                {language == "Fr" ? "Téléchager CV" : "Download CV"}
                <span className="ml-2 lg:text-2xl text-xl ">
                  {" "}
                  <MdDownload />{" "}
                </span>
              </Button>
            </a>
            <a
              href={myInformation.getTouchLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary tracking-wider rounded-none font-normal lg:text-[15px] lg:py-3 lg:px-5 px-3 py-2 lg:mr-5 text-white hover:border border-primary hover:bg-inherit transition-all duration-500 flex items-end hover:text-primary">
                {language == "Fr" ? "Contact" : "Get in Touch"}

                <span className="ml-2 lg:text-2xl text-xl ">
                  <SiSocialblade />{" "}
                </span>
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 10 }}
          className="outline outline-green-500 outline-offset-4 animate-move rounded-full lg:w-[24rem] w-[15rem]  relative lg:m-6 my-7"
        >
          <div className="bg-gradient-wave  animate-wave bg-[length:200%_200%] rounded-full w-full h-full absolute top-0 left-0 -z-10"></div>
            <img
              className="rounded-full lg:w-[24rem] w-[15rem] z-40 img-float"
              src={myInfo.myImage}
              alt=""
            />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 30 }}
          className={`${
            DarkMode ? "text-white" : "text-black"
          } " lg:w-3/12 xl:w-3/12 md:w-3/12  sm:w-8/12 w-full lg:ml-2 mt-4 lg:mt-0  "`}
        >
          {myInfo.myFeatures
            ? myInfo.myFeatures.map((item, index) => {
                return (
                  <>
                    <div key={index} className="flex m-auto items-center mb-2">
                      <span>
                        {" "}
                        <GiFeather className="mr-2 fill-primary" />
                      </span>{" "}
                      <span className="font-light">
                        {language == "Fr" ? item[0] : item[1]}{" "}
                      </span>
                    </div>
                  </>
                );
              })
            : ""}
        </motion.div>
      </div>
      <div>
        <About myInfo={myInfo} />
      </div>
    </header>
  );
}
