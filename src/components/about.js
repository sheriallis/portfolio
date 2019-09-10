import React from "react"
import styled from "styled-components"

import HtmlLogo from "../images/logos/html5.svg"
import CssLogo from "../images/logos/css.svg"
import JavascriptLogo from "../images/logos/javascript.svg"
import ReactLogo from "../images/logos/react.svg"
import GulpLogo from "../images/logos/gulp.svg"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  color: #fff;
`

const Wrapper = styled.div`
  width: 80%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-bottom: 60px;
`

const Title = styled.h2`
  margin: 40px 0;
`

const AboutText = styled.p``

const Skills = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 80px;
`

const Logo = styled.img`
  margin: 20px;
  height: 100px;
  width: 100px;
`

const About = () => (
  <Section id="about">
    <Wrapper>
      <Title>About</Title>
      <AboutText>
        As a Front-end developer with an eye for design I'm always looking for
        new opportunities to learn, grow and enhance my skill set. I build
        quality websites that are accessible and responsive using the latest web
        technologies.
      </AboutText>
      <Skills>
        <Logo src={HtmlLogo} />
        <Logo src={CssLogo} />
        <Logo src={GulpLogo} />
        <Logo src={JavascriptLogo} />
        <Logo src={ReactLogo} />
      </Skills>
    </Wrapper>
  </Section>
)

export default About
