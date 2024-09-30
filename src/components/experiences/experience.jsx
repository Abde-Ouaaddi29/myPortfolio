import React, { useState } from "react";
import { experiencesList } from "../../constants";

export default function Experience() {

  const [experiences, setExperiences] = useState(experiencesList);
  console.log(experiences);

  return (
    <div className="px-10 py-20 relative ">
      <div className="flex justify-between items-center text-black ">
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
        <div className="text-4xl font-bold tracking-wide">Experience</div>
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
      </div>

      <div className="py-10">
        {experiences.length > 0 ? (
          experiences.map((experience) => {
            return (
              <>
                <div
                  key={experience.id}
                  className="flex flex-col items-start  "
                >
                  <div className="flex relative py-2 w-10/12 m-auto ">
                    <div className="flex flex-col items-center mr-8">
                      <div className="w-4 h-4 bg-primary rounded-full mb-2"></div>
                      <div className="border-l-2 border-gray-300 h-full"></div>
                    </div>

                    <div className="pb-8">
                      <h3 className="text-primary font-semibold mb-1">
                        {experience?.date[0]}
                      </h3>
                      <h4 className="text-2xl font-semibold mb-2">
                        {experience?.title[0]}
                      </h4>
                      <h5 className="text-gray-600 text-xl font-semibold my-4">
                        {experience?.company[0]}
                      </h5>
                      <ul className="list-disc ml-6 text-gray-700">
                        {experience.roles[0].map((role) => {
                          return (
                            <>
                              <li className="mb-2 text-xl text-gray-500">
                                {role}
                              </li>
                            </>
                          );
                        })}
                      </ul>

                      <h5 className="text-gray-600 text-xl font-semibold my-4">
                        Used Technologies
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
                </div>
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
