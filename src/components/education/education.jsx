import React, { useState } from "react";
import { educationList } from "../../constants/constants";
import { useSelector } from "react-redux";

export default function Experience() {
  const [educations, setEducations] = useState(educationList);
  const DarkMode = useSelector((store) => store.DarkMode);

  console.log(educations);

  return (
    <div className="px-10 relative  py-10  ">
      <div className="flex justify-between items-center text-black ">
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
        <div className={`${DarkMode ? 'text-white' : 'text-black'} text-4xl font-bold tracking-wide`} >Education</div>
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
      </div>

      <div className="py-20">
        {educations.length > 0 ? (
          educations.map((education) => {
            return (
              <>
                <div className="flex flex-col items-start  ">
                  <div className="flex relative py-1 w-6/12 m-auto ">
                    <div className="flex flex-col items-center mr-8">
                      <div className="w-4 h-4 bg-primary rounded-full mb-2"></div>
                      <div className="border-l-2 border-gray-300 h-full"></div>
                    </div>

                    <div className="pb-8">
                      <h3 className="text-primary font-semibold mb-1">
                        {education?.year}
                      </h3>
                      <h4 className={`${DarkMode ? 'text-gray-500' : 'text-gray-800'} text-xl  font-semibold mb-2`}>
                        {education?.degree[0]}
                      </h4>
                      <h5 className="text-gray-600  font-semibold my-4">
                        {education?.institution[0]}
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
