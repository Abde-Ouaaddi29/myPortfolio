import React from 'react'
import { CardProject } from './projectCard'

export default function Project() {

  return <>
  
  <div id='header' className='relative h-72 '>
        <div className="px-10 mt-10">
          <div className="flex justify-between items-center text-black ">
              <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
              <div className="text-5xl font-mono tracking-wide">Technologies</div>
              <div className="w-4/12 h-[0.2px] bg-orange-500"></div>
          </div>
        </div>

  <CardProject/>

  </div>
    </>
}
