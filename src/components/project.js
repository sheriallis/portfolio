import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import breakpoint from "../helpers/breakpoints"

const Preview = styled.div`
  img {
    width: 400px;
    border-radius: 0.625rem;
  }
`

const ProjectWrapper = styled.div`
  background-color: #b12a5b;
  background-image: linear-gradient(
    to right,
    #ff8177 0%,
    #ff867a 0%,
    #ff8c7f 21%,
    #f99185 52%,
    #cf556c 78%,
    #b12a5b 100%
  );
  color: #fcfcfc;
  width: 90%;
  max-width: 600px;
  text-align: center;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  border-radius: 0.625rem;
  align-items: center;
  margin: 20px;
  justify-content: space-between;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  &:nth-child(even) {
    background-color: #764ba2;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  @media ${breakpoint.large} {
    text-align: justify;
    max-width: 1200px;
    padding: 40px;
    grid-gap: 70px;
    grid-template-columns: 1fr 1fr;

    &:nth-child(2n) {
      ${Preview} {
        order: 2;
      }
    }
  }
`

const Info = styled.div``

const Title = styled.h3``

const Tech = styled.p`
  font-size: 0.9rem;
`

const Description = styled.p`
  margin-top: 40px;
  margin-bottom: 60px;
  min-height: 100px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakpoint.small} {
    flex-direction: row;
    justify-content: center;
  }
  @media ${breakpoint.large} {
    justify-content: flex-start;
  }
`

const Btn = styled.a`
  margin-right: 20px;
  padding: 1.0625rem 1.6875rem;
  border-radius: 0.5rem;
  text-decoration: none;
  background-color: ${props =>
    props.primary ? "#fff" : "rgba(255,255,255,0.3)"};
  color: ${props => (props.primary ? "#23272f" : "white")};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: ${props =>
      props.primary ? "#ffffff" : "rgba(255,255,255,0.4)"};
    color: ${props => (props.primary ? "#23272f" : "#ffffff")};
    box-shadow: 0 1.9rem 3.8rem rgba(0, 0, 0, 0.3),
      0 1.5rem 1.2rem rgba(0, 0, 0, 0.22);
    transform: translate(0, -0.1rem);
  }

  svg {
    margin-left: 10px;
  }

  @media ${breakpoint.small} {
    width: auto;
    margin-right: 20px;
  }
`

const Project = ({
  title,
  description,
  techUsed,
  liveUrl,
  codeUrl,
  imageData,
}) => {
  return (
    <ProjectWrapper>
      <Preview>
        <Img fluid={imageData} alt={title} />
      </Preview>
      <Info>
        <Title>{title}</Title>
        <Tech>
          <em>{techUsed}</em>
        </Tech>
        <Description>{description}</Description>
        <Footer>
          <Btn primary href={liveUrl}>
            View Project <FaExternalLinkAlt />
          </Btn>
          <Btn href={codeUrl}>
            View Code <FaGithub />
          </Btn>
        </Footer>
      </Info>
    </ProjectWrapper>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  techUsed: PropTypes.string,
  liveUrl: PropTypes.string,
  codeUrl: PropTypes.string,
  imageData: PropTypes.object,
}

export default Project
