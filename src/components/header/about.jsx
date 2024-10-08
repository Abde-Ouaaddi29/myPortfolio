import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function About({ myInfo }) {
  const DarkMode = useSelector((store) => store.DarkMode);
  const language = useSelector((store) => store.language);

  return (
    <div className=" lg:mt-3 xl:mt-3 mt-0 ">
      <div className="flex justify-between items-center text-black">
        <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 30 }}
          className={`${
            DarkMode ? "text-white" : "text-black"
          } lg:text-4xl xl:text-4xl text-2xl mx-4 font-bold tracking-wide`}
        >
          About Me
        </motion.div>
        <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
      </div>
      <div className="flex flex-wrap justify-between items-center py-20">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -90, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 30 }}
          className=" lg:w-5/12 w-full lg:mb-0 xl:mb-0 mb-10"
        >
          <div className="relative">
            <img
              className=" h-96 lg:w-10/12 xl:11/12 w-full rounded-xl z-[999]  "
              src={myInfo?.myImageDesc}
              alt=""
            />
            <div className="absolute h-28 w-28 bg-primary rounded-tl-xl opacity-30 xl:-top-7 lg:-top-7 -top-4 xl:-left-7 lg:-left-7 -left-4 z-[9] "></div>
            <div className="absolute h-28 w-28 bg-primary rounded-br-xl opacity-30 lg:right-14 xl:right-14 -right-4 xl:-bottom-7 lg:-bottom-7 -bottom-4  z-[9] "></div>
          </div>
        </motion.div>
        <motion.div
          className={`${
            DarkMode ? "text-white" : "text-black"
          }  tracking-wide z-50 text-xl lg:w-7/12 xl:w-7/12 w-full lg:mt-0 xl:mt-0 mt-8 `}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: 90, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 30 }}
        >
          <span>
            {language == "Fr" ? myInfo?.myDesc[0] : myInfo?.myDesc[1]}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
