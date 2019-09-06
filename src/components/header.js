import React from "react"
import styled from "styled-components"
import { FaCode, FaUserAlt, FaEnvelope } from "react-icons/fa"
import { Link } from "gatsby"
import breakpoint from "../helpers/breakpoints"
import siteLogo from "../images/logo_dark.svg"
import HamburgerIcon from "../images/hamburger_icon.svg"

const StyledHeader = styled.header`
  background-color: #fdd156;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: ${breakpoint.maxWidth};
`

const Logo = styled.img`
  width: 40px;
  height: 40px;
`

const SiteName = styled.h1``

const HamburgerMenu = styled.img`
  @media ${breakpoint.medium} {
    display: none;
  }
`
const Nav = styled.nav`
  display: none;
  @media ${breakpoint.medium} {
    display: block;
  }
  ul {
    list-style: none;
    display: inline-flex;
    margin: 0;
  }
`

const NavItem = styled.a`
  padding: 20px;
  text-decoration: none;
  color: #222222;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 150px;

  svg {
    margin-right: 16px;
  }
`

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <Logo src={siteLogo} alt="site logo" />
      {/* <SiteName>{siteTitle}</SiteName> */}
      <HamburgerMenu src={HamburgerIcon} alt="open mobile menu" />
      <Nav>
        <ul>
          <li>
            <NavItem href="#projects">
              <FaCode />
              Projects
            </NavItem>
          </li>
          <li>
            <NavItem href="#about">
              <FaUserAlt /> About
            </NavItem>
          </li>
          <li>
            <NavItem href="#contact">
              <FaEnvelope />
              Contact
            </NavItem>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  </StyledHeader>
)

export default Header
