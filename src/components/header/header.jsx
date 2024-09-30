import React, { useEffect, useState } from "react";
import header3 from "../../assets/heade3.jpg";
import { GiFeather } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { SiSocialblade } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import About from "./about";
import { Button } from "@material-tailwind/react";
import ParticlesComponent from "../ParticlesComponent";
import { useSelector } from "react-redux";

export default function Header() {
  const myInformation = useSelector((state) => state.persoInfo);

  const [myInfo, setMyInfo] = useState(myInformation);
  const texts = [
    myInfo.speciality[0][0],
    myInfo.speciality[1][0],
    myInfo.speciality[2][0],
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
      className="px-10 relative bg-[radial-gradient(circle_1000px_at_130%_120px,#fdba74,transparent)]  "
    >
      <ParticlesComponent />

      <div className="flex justify-between items-center h-[110vh] relative">
        <div className="relative w-5/12 ">
          <h1 className="text-4xl tracking-wider  text-black ">
            {myInfo.fullName}
          </h1>
          <div className="text-black mb-4 font-bold tracking-wider mt-8 flex items-end ">
            <span className="font-light text-3xl mr-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-700">
              je suis
            </span>{" "}
            <span className="animated-text text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-700">
              {currentText}
            </span>
          </div>
          <div className="text-black text-xl mb-4 font-bold flex items-center">
            {" "}
            <span className="mr-1 text-primary">
              <IoLocationSharp />
            </span>{" "}
            <span className="text-primary mr-2 font-light">Based in</span>{" "}
            {myInfo.basePlace[0]}
          </div>
          <div className="text-black flex items-center">
            {" "}
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2 online-dot"></div>
            {myInfo.status[0]}
          </div>
          <div className=" flex items-center mt-10">
            <Button className="bg-primary tracking-wider rounded-none font-normal text-[15px] py-3 px-4 mr-5 text-white hover:border border-primary hover:bg-inherit transition-all duration-500 flex items-end hover:text-primary">
              Download CV{" "}
              <span className="ml-2 text-2xl ">
                {" "}
                <MdDownload />{" "}
              </span>
            </Button>
            <Button className="bg-primary tracking-wider rounded-none font-normal text-[15px] py-3 px-4 mr-5 text-white hover:border border-primary hover:bg-inherit transition-all duration-500 flex items-end hover:text-primary">
              Get in Touch{" "}
              <span className="ml-2 text-2xl ">
                <SiSocialblade />{" "}
              </span>
            </Button>
          </div>
        </div>

        <div className="outline outline-green-500 outline-offset-4 animate-move rounded-full w-[24rem] relative m-6">
          <div className="bg-gradient-wave animate-wave bg-[length:200%_200%] rounded-full w-full h-full absolute top-0 left-0 -z-10"></div>
          <img
            className="rounded-full w-[40rem] z-40 "
            src={myInfo.myImage}
            alt=""
          />
        </div>

        <div className="text-black w-3/12 ml-2 ">
          {myInfo.myFeatures
            ? myInfo.myFeatures.map((item, index) => {
                return (
                  <>
                    <div key={index} className="flex items-center  mb-2">
                      <span>
                        {" "}
                        <GiFeather className="mr-2 fill-primary" />
                      </span>{" "}
                      <span className="font-light">{item[0]} </span>
                    </div>
                  </>
                );
              })
            : ""}
        </div>
      </div>
      <div>
        <About myInfo={myInfo} />
      </div>
    </header>
  );
}
