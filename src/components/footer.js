import React from "react"
import styled from "styled-components"
import {
  FaGithub,
  FaDribbble,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"
import breakpoint from "../helpers/breakpoints"

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
  font-size: 0.8rem;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoint.medium} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1440px;
  }
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media ${breakpoint.medium} {
    margin-top: 0;
  }

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
