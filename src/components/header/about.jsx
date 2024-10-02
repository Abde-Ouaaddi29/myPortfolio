import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

export default function About({ myInfo }) {
  const DarkMode = useSelector((store) => store.DarkMode);
  const language = useSelector((store) => store.language);

  return (
    <div className=" mt-3 ">
      <div className="flex justify-between items-center text-black">
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ opacity: 2, y: 1 }}
          exit={{ opacity: 1, y: 20 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 30 }}
          className={`${
            DarkMode ? "text-white" : "text-black"
          } text-4xl font-bold tracking-wide`}
        >
          About Me
        </motion.div>
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
      </div>
      <div className="flex justify-between items-center py-20">
        <motion.div
          initial={{ opacity: 1, x: "-100vh" }}
          animate={{ opacity: 2, x: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 30 }}
          className=" w-5/12"
        >
          <div className="relative">
            <img
              className=" h-96 w-10/12 rounded-xl z-[999]  "
              src={myInfo?.myImageDesc}
              alt=""
            />
            <div className="absolute h-28 w-28 bg-primary rounded-tl-xl opacity-30 -top-7 -left-7 z-[9] "></div>
            <div className="absolute h-28 w-28 bg-primary rounded-br-xl opacity-30 right-14 -bottom-7  z-[9] "></div>
          </div>
        </motion.div>
        <motion.div
          className={`${
            DarkMode ? "text-white" : "text-black"
          }  tracking-wide z-50 text-xl p-2 w-7/12 `}
          initial={{ x: "150vh", opacity: 0 }} // Starts off-screen to the left
          animate={{ x: 0, opacity: 2 }} // Animates into its normal position
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
