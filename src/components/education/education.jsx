import React, { useState } from "react";
import { educationList } from "../../constants/constants";
import { useSelector } from "react-redux";

export default function Experience() {
  const [educations, setEducations] = useState(educationList);
  const DarkMode = useSelector((store) => store.DarkMode);
  const language = useSelector((store) => store.language);

  console.log(educations);

  return (
    <div className="px-10 relative  py-10  ">
      <div className="flex justify-between items-center text-black ">
        <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
        <div
          className={`${
            DarkMode ? "text-white" : "text-black"
          } lg:text-4xl xl:text-4xl text-2xl font-bold tracking-wide`}
        >
          Education
        </div>
        <div className="lg:w-4/12 xl:lg:w-4/12 w-3/12 h-[0.2px] bg-orange-500"></div>
      </div>

      <div className="py-20">
        {educations.length > 0 ? (
          educations.map((education) => {
            return (
              <>
                <div className="flex flex-col items-start  ">
                  <div className="flex relative py-1 xl:w-6/12 lg:w-6/12 w-full m-auto ">
                    <div className="flex flex-col items-center mr-8">
                      <div className="w-4 h-4 bg-primary rounded-full mb-2"></div>
                      <div className="border-l-2 border-gray-300 h-full"></div>
                    </div>

                    <div className="pb-8">
                      <h3 className="text-primary font-semibold mb-1">
                        {education?.year}
                      </h3>
                      <div
                        className={`${
                          DarkMode ? "text-gray-500" : "text-gray-800"
                        } text-xl flex flex-col  font-semibold mb-2`}
                      >
                        <span>
                          {" "}
                          -{" "}
                          {language == "Fr"
                            ? education?.degree[0]
                            : education?.degree[1]}
                        </span>
                        <span>
                          {" "}
                          {language == "Fr"
                            ? education.certification
                              ? "-" + " " + education.certification[0]
                              : ""
                            : education.certification
                            ? "-" + " " + education.certification[1]
                            : ""}
                        </span>
                      </div>
                      <h5 className="text-gray-600 font-semibold my-4">
                        {language == "Fr"
                          ? education?.institution[0]
                          : education?.institution[1]}
                      </h5>
                    </div>
                  </div>
                </div>
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
