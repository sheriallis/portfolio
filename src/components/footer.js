import React from "react"
import styled from "styled-components"

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

const footer = () => (
  <StyledFooter>
    Sheri Richardson © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
)

export default footer
