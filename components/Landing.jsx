import React from 'react'
import Header from './Header'
import Sidebars from './Sidebars'
import Me from './Me'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contacts from './Contacts'
import Footer from './Footer'
import styled from 'styled-components'




const Landing = () => {
  return (
    <div className="display-flex ">
      <Header/>
      <Me/>
      <Projects />
    </div>
  )
}

export default Landing