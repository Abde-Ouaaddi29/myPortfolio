import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function CardProject({ projects }) {
  const DarkMode = useSelector((store) => store.DarkMode);

  return (
    <>
      {projects.length > 0 ? (
        projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className={`${DarkMode ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gray-100 hover:bg-gray-50' } m-2 px-4 rounded relative hover:shadow-lg hover:border transition-all duration-500`}
          >
            <div className="py-6 flex justify-between items-center ">
              <span className={`${DarkMode ? 'text-gray-400' : 'text-gray-600' } text-xl font-bold w-11/12`}>
                {project?.title[0]}
              </span>
              <div
                className={`w-2 h-2 rounded-full  ${
                  project?.hosted
                    ? "online-dot bg-green-500"
                    : "offline-dot bg-primary"
                }`}
              ></div>
            </div>

            <div className="relative">
              <ProjectImage project={project} />
            </div>

            <div className="flex flex-wrap items-center my-6">
              {project?.builtTechnologies.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="pr-3 text-primary text-2xl cursor-default rounded hover:text-orange-300 duration-300"
                    >
                      {item}
                    </div>
                  </>
                );
              })}
            </div>

            <div className={`${DarkMode ? 'text-gray-400' : 'text-gray-500' }  py-2 `} >{project?.description[0]}</div>

            <div className="py-6 flex justify-between items-center ">
              <a
                href={project?.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  disabled={!project.privacy}
                  className="tracking-widest bg-primary hover:bg-orange-900 flex justify-center items-center"
                >
                  <div>Code | Github</div>
                  <FiGithub className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href={project?.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  disabled={!project.hosted}
                  className="tracking-widest bg-primary hover:bg-orange-900 flex justify-between items-center transition-all duration-500"
                >
                  <span className="mr-2">
                    {!project.hosted ? "Processing..." : "Demo"}
                  </span>
                </Button>
              </a>
            </div>
          </div>
        ))
      ) : (
        <span className="p-4 text-center bg-gray-100">No Project</span>
      )}
    </>
  );
}

// New component to manage each project image separately
function ProjectImage({ project }) {
  const [currentImg, setCurrentImg] = useState(project?.image[0]);

  return (
    <>
      <img
        className={`rounded-md border ${
          project?.hosted ? "border-green-500" : "border-red-200 blur-[2.5px]"
        } h-72 hover:scale-105 transition-all duration-700`}
        src={currentImg}
        alt="image"
      />
      <div className="absolute flex justify-center items-center bottom-2 right-2">
        {Array.isArray(project?.image) &&
          project?.image.length > 1 &&
          project?.image.map((item, index) => (
            <img
              key={index}
              onMouseEnter={() => setCurrentImg(item)}
              alt={`small preview ${index}`}
              className={`w-16 h-11 border ml-2 shadow-md ${
                item === currentImg ? "border-green-500 scale-105" : ""
              }`}
              src={item}
            />
          ))}
      </div>
    </>
  );
}
