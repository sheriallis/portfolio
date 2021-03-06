import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import breakpoint from "../helpers/breakpoints"
import Project from "./project"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SectionHeader = styled.h2`
  text-align: center;
  font-size: 2rem;
`

const Section = styled.section`
  margin-top: 40px;
`

const ProjectList = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            techUsed
            liveUrl
            description
            codeUrl
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <Section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <Wrapper>
        {projects.map(({ node: project }) => {
          const title = project.title
          const description = project.description
          const techUsed = project.techUsed
          const liveUrl = project.liveUrl
          const codeUrl = project.codeUrl
          const imageData = project.image.childImageSharp.fluid

          return (
            <Project
              key={title}
              title={title}
              description={description}
              techUsed={techUsed}
              liveUrl={liveUrl}
              codeUrl={codeUrl}
              imageData={imageData}
            />
          )
        })}
      </Wrapper>
    </Section>
  )
}

export default ProjectList
