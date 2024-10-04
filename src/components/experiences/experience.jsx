import React, { useState } from "react";
import { experiencesList } from "../../constants/constants";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Experience() {
  const [experiences, setExperiences] = useState(experiencesList);
  const DarkMode = useSelector((store) => store.DarkMode);
  const language = useSelector((store) => store.language);

  console.log(experiences);

  return (
    <div className=" xl:py-20 lg:py-20 py-10 relative ">
      <div className="flex justify-between items-center px-10 lg:px-20 xl:px-20">
        <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
        <motion.div
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 1, y: -100 }}
           transition={{ duration: 1.5, type: "spring", stiffness: 30 }}
          className={`${
            DarkMode ? "text-white" : "text-black"
          } lg:text-4xl xl:text-4xl text-2xl mx-4 font-bold tracking-wide`}
        >
          Experience
        </motion.div>
        <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
      </div>

      <div className="lg:py-10 xl:py-10 py-12 px-8 lg:px-20 xl:px-20">
        {experiences.length > 0 ? (
          experiences.map((experience) => {
            return (
              <>
                <motion.div
                  key={experience.id}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.9, type: "spring", stiffness: 50 }}
                  className="flex flex-col items-start "
                >
                  <div className="flex relative py-2 lg:w-10/12 xl:w-10/12 w-full m-auto ">
                    <div className="flex flex-col items-center mr-8">
                      <div className="w-4 h-4 bg-primary rounded-full mb-2"></div>
                      <div className="border-l-2 border-gray-300 h-full"></div>
                    </div>

                    <div className="pb-8">
                      <h3 className="text-primary font-semibold mb-1">
                        {language == "Fr"
                          ? experience?.date[0]
                          : experience?.date[1]}
                      </h3>
                      <h4
                        className={`${
                          DarkMode ? "text-white" : "text-black"
                        } lg:text-2xl xl:text-2xl text-xl font-semibold mb-2`}
                      >
                        {language == "Fr"
                          ? experience?.title[0]
                          : experience?.title[1]}
                      </h4>
                      <h5 className="text-gray-600 xl:text-xl lg:text-xl font-semibold my-4">
                        {language == "Fr"
                          ? experience?.company[0]
                          : experience?.company[1]}
                      </h5>
                      <ul className="list-disc ml-6 text-gray-700">
                        {experience.roles[language == "Fr" ? 0 : 1].map(
                          (role) => {
                            return (
                              <>
                                <li className="mb-2 lg:text-xl xl:text-xl text-gray-500">
                                  {role}
                                </li>
                              </>
                            );
                          }
                        )}
                      </ul>

                      <h5 className="text-gray-600 lg:text-xl xl:text-xl font-semibold my-4">
                        {language == "Fr"
                          ? "Technologies Utilisées"
                          : "Used Technologies"}
                      </h5>
                      <ul className="list-disc ml-6  text-gray-700">
                        {experience?.technologies.map((tech, key) => {
                          return (
                            <>
                              <li key={key} className="mb-2">
                                {tech}
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })
        ) : (
          <div className="p-2 bg-gray-100 text-center"> No Experiences </div>
        )}
      </div>
    </div>
  );
}
