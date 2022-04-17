import { data } from 'autoprefixer'
import React from 'react'
import styled from 'styled-components'
import mydata from '../mydata'

const AboutMe = () => {
  return (
    <div>
      <div>
        <h1>About Me</h1>
      </div>
      <div>
        <p>{mydata.aboutPara}</p>
      </div>
    </div>
  )
}

export default AboutMe