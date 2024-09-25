import React from 'react'
import Header from '../components/header/header'
import Contact from '../components/contact/contact'
import About from '../components/header/about'
import Technologies from '../components/technologies/technologies'
import Education from '../components/education/education'
import Project from '../components/projects/project'
import Experience from '../components/experiences/experience'

export default function Home() {
  return (
    <div >
        <Header/>
        <Technologies/>
        <Project/>
        <Experience/>
        <Education/>
        <Contact/>
    </div>
  )
}
