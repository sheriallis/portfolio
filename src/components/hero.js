import React from "react"
import styled, { keyframes } from "styled-components"
import breakpoint from "../helpers/breakpoints"

import profileImg1 from "../images/profile_img_1.jpg"

const wave = keyframes`
    0% { transform: rotate(  0.0deg) }
   10% { transform: rotate(-10.0deg) } 
   20% { transform: rotate( 12.0deg) }
   30% { transform: rotate(-10.0deg) }
   40% { transform: rotate(  9.0deg) }
   50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
`

const Emoji = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`

const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 700px;
`

const Wrapper = styled.div`
  /* padding: 60px 20px; */
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.large} {
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
  }
`

const HeroText = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 30px;
    font-size: 4rem;
    line-height: 1.2;
  }

  p {
    margin-bottom: 40px;
    @media ${breakpoint.large} {
      font-size: 1.4rem;
      line-height: 1.4;
    }
  }
  @media ${breakpoint.large} {
    /* width: 400px; */
    margin-right: 160px;
    text-align: justify;
  }
`

const ProfileImg = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
  @media ${breakpoint.large} {
    width: 300px;
    height: 300px;
    border-radius: 100px 40px;
  }
`

const hero = () => (
  <Section>
    <Wrapper>
      <HeroText>
        <h2>Frontend Developer</h2>
        <p>
          <Emoji role="img" aria-label="Waving hand">
            👋
          </Emoji>{" "}
          Hi, my name is Sheri Richardson. I am a front end developer with a
          love for design based in The Netherlands. These are my projects.
        </p>
      </HeroText>
      <ProfileImg src={profileImg1} alt="profile picture with Sheri smiling" />
    </Wrapper>
  </Section>
)

export default hero
