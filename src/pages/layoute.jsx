import React from 'react'
import Nav from '../components/nav/nav'
import { Outlet } from 'react-router-dom'
import Contact from '../components/contact/contact'

export default function Layoute() {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}
