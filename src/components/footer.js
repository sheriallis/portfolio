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
`

const StyledTextLink = styled.a`
  color: #fff;
  text-decoration: none;
  border-bottom: 4px solid #5266df;
  padding: 6px;
  transition: background-color 0.2s ease-in;

  &:hover,
  &:active,
  &:focus {
    background-color: #5266df;
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

  a {
    color: #fff;

    &:hover,
    &:active,
    &:focus {
      background-color: #5266df;
      border-radius: 50%;
    }
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
        <StyledTextLink href="https://www.gatsbyjs.org">Gatsby</StyledTextLink>
      </div>
      <SocialMedia>
        <a href="https://www.linkedin.com/in/sheri-richardson/">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/SheriallisR">
          <FaTwitterSquare />
        </a>
        <a href="https://github.com/sheriallis">
          <FaGithub />
        </a>
        <a href="https://dribbble.com/sheriallis">
          <FaDribbble />
        </a>
      </SocialMedia>
    </Wrapper>
  </StyledFooter>
)

export default footer
