import React, { useState } from "react";
import { educationList } from "../../constants/constants";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Experience() {
  const [educations, setEducations] = useState(educationList);
  const DarkMode = useSelector((store) => store.DarkMode);
  const language = useSelector((store) => store.language);

  console.log(educations);

  return (
    <div className="px-6 relative  py-10  ">
      <div className="flex justify-between items-center text-black ">
        <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -50 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 30 }}
          className={`${
            DarkMode ? "text-white" : "text-black"
          } lg:text-4xl xl:text-4xl text-2xl font-bold tracking-wide`}
        >
          Education
        </motion.div>
        <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
      </div>

      <div className="xl:py-14 lg:py-14 py-14">
        {educations.length > 0 ? (
          educations.map((education) => {
            return (
              <>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.9, type: "spring", stiffness: 50 }}
                  className="flex flex-col items-start"
                >
                  <div className="flex relative py-1 xl:w-6/12 lg:w-6/12 w-full m-auto">
                    <div className="flex flex-col items-center mr-8">
                      <div className="w-4 h-4 bg-primary rounded-full mb-2"></div>
                      <div className="border-l-2 border-gray-300 h-full"></div>
                    </div>

                    <div className="pb-4">
                      <h3 className="text-primary font-semibold mb-1">
                        {education?.year}
                      </h3>

                      <ul
                        className={`${
                          DarkMode ? "text-gray-500" : "text-gray-800"
                        } list-none font-semibold mb-2`}
                      >
                        {/* Degree List Item with Circle */}
                        <li className="flex items-center mb-1">
                          <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>{" "}
                          {/* Circle */}
                          {language === "Fr"
                            ? education?.degree[0]
                            : education?.degree[1]}
                        </li>

                        {/* Certification List Item with Circle (if exists) */}
                        {education.certification && (
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>{" "}
                            {/* Circle */}
                            {language === "Fr"
                              ? education.certification[0]
                              : education.certification[1]}
                          </li>
                        )}
                      </ul>

                      <h5 className="text-gray-500  my-2">
                        {language === "Fr"
                          ? education?.institution[0]
                          : education?.institution[1]}
                      </h5>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })
        ) : (
          <div className="p-2 bg-gray-100 text-center"> No educations </div>
        )}
      </div>
    </div>
  );
}
