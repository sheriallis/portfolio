import React from "react"
import styled from "styled-components"
import {
  FaGithub,
  FaDribbble,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  font-size: 0.8rem;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 16px;
    height: 24px;
    width: 24px;
  }
`

const footer = () => (
  <StyledFooter>
    <Wrapper>
      <div>
        Sheri Richardson © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      <SocialMedia>
        <FaLinkedin />
        <FaTwitterSquare />
        <FaGithub />
        <FaDribbble />
      </SocialMedia>
    </Wrapper>
  </StyledFooter>
)

export default footer
