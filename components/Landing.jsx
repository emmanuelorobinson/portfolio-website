import React from 'react'
import Header from './Header'
import Sidebars from './Sidebars'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contacts from './Contacts'
import Footer from './Footer'
import styled from 'styled-components'




const Landing = () => {
  return (
    <div className="display-flex ">
      <Header/>
      <Hero/>
      <Projects />
    </div>
  )
}

export default Landing