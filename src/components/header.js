import React, { useState } from "react"
import styled from "styled-components"
import breakpoint from "../helpers/breakpoints"
import siteLogo from "../images/logo_light.svg"
import HamburgerIcon from "../images/hamburger_icon.svg"
import Overlay from "./overlay"

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
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
  padding: 10px;
  margin-left: 10px;
  text-decoration: none;
  color: #fff;
  position: relative;

  &:hover,
  &:active,
  &:focus {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    height: 6px;
    width: 0%;
    bottom: -10px;
    left: 0;
    background-color: #ff8177;
    background-image: linear-gradient(
      to right,
      #ff8177 0%,
      #ff867a 0%,
      #ff8c7f 21%,
      #f99185 52%,
      #cf556c 78%,
      #b12a5b 100%
    );
    border-radius: 8px;
    transition: 0.5s;
  }
`

const Header = () => {
  const [overlayActive, setOverlayActive] = useState(false)

  if (overlayActive) {
    return <Overlay setOverlayActive={setOverlayActive} />
  } else {
    return (
      <StyledHeader>
        <Wrapper>
          <Logo src={siteLogo} alt="site logo" />
          <HamburgerMenu
            src={HamburgerIcon}
            alt="open mobile menu"
            onClick={() => setOverlayActive(true)}
            className="hamburger-icon"
          />
          <Nav>
            <ul>
              <li>
                <NavItem href="#projects">Projects</NavItem>
              </li>
              <li>
                <NavItem href="#about">About</NavItem>
              </li>
              <li>
                <NavItem href="#contact">Contact</NavItem>
              </li>
            </ul>
          </Nav>
        </Wrapper>
      </StyledHeader>
    )
  }
}

export default Header
