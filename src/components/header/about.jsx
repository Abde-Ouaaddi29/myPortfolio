import React from "react";
import about1 from "../../assets/ABOUT1.jpg";
import about2 from "../../assets/header2.jpg";

export default function About() {
  return (
    <div className=" mt-3 ">
      <div className="flex justify-between items-center text-black">
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
        <div className="text-5xl font-mono tracking-wide">About Me</div>
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
      </div>
      <div className="flex justify-between items-center py-20 ">
        <div className=" relative w-5/12">
          <img className="  h-96 w-10/12 rounded-xl z-[999] " src={about2} alt="" />
          <div className="absolute h-28 w-28 bg-primary rounded-br-xl opacity-30 -bottom-5 right-16 z-[9] "></div>
          <div className="absolute h-28 w-28 bg-primary rounded-tl-xl opacity-30 -top-5 -left-5 z-[9] "></div>

        </div>
        <div className=" text-black tracking-wide z-50 text-xl p-2 w-7/12 ">
          <span>
            Salut! 👋 Je suis un développeur full-stack passionné, maîtrisant
            les technologies front-end et back-end. Mon expertise inclut des
            compétences avancées en HTML, CSS, JavaScript, React.js, ainsi qu'en
            PHP et Laravel pour le développement back-end. Je suis également
            expérimenté dans la création d'APIs avec Laravel et Node.js, et je
            gère efficacement les bases de données comme MySQL et MongoDB. Grâce
            à ma formation en méthodologie Agile et à mon expérience en gestion
            de projets, je suis capable de travailler en équipe tout en
            optimisant les flux de travail. En parallèle, mes compétences en
            communication et en affaires, acquises lors du Programme
            d'Innovation Entrepreneuriale, me permettent de relier le
            développement aux besoins commerciaux, garantissant ainsi des
            solutions adaptées et efficaces.
          </span>
        </div>
      </div>
    </div>
  );
}
