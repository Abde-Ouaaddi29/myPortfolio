import React from "react";
import { useSelector } from "react-redux";


export default function About({ myInfo }) {
  const DarkMode = useSelector((store) => store.DarkMode);

  return (
    <div className=" mt-3 ">
      
      <div className="flex justify-between items-center text-black">
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
        <div className={`${DarkMode ? 'text-white' : 'text-black' } text-4xl font-bold tracking-wide `}>About Me</div>
        <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
      </div>
      <div className="flex justify-between  py-20 ">
        <div className=" relative w-5/12">
          <img
            className="  h-96 w-10/12 rounded-xl z-[999] "
            src={myInfo?.myImageDesc}
            alt=""
          />
          <div className="absolute h-28 w-28 bg-primary rounded-br-xl opacity-30 -bottom-5 right-16 z-[9] "></div>
          <div className="absolute h-28 w-28 bg-primary rounded-tl-xl opacity-30 -top-5 -left-5 z-[9] "></div>
        </div>
        <div className={`${DarkMode ? 'text-white' : 'text-black' }  tracking-wide z-50 text-xl p-2 w-7/12 `}>
          <span>
            {myInfo?.myDesc[0]}
          </span>
        </div>
      </div>
    </div>
  );
}
