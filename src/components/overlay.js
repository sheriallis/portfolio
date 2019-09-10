import React from "react"
import styled from "styled-components"
import siteLogo from "../images/logo_light.svg"
import { IoMdClose } from "react-icons/io"

const OverlayMenu = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: #222;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;

  .overlay-btn__close {
    z-index: 3;
    position: absolute;
    right: 20px;
    top: 20px;
    height: 40px;
    width: 40px;
    color: white;

    &:hover {
      color: #ff8177;
      cursor: pointer;
    }
  }
`

const MobileNav = styled.ul`
  list-style: none;
  font-size: 2rem;
  text-align: center;

  li {
    padding: 30px;
  }
`

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 100px;
`

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
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
    bottom: -20px;
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

const Overlay = ({ setOverlayActive }) => (
  <OverlayMenu>
    <IoMdClose
      className="overlay-btn__close"
      onClick={() => {
        setOverlayActive(false)
      }}
    />
    <Logo src={siteLogo} />
    <nav>
      <MobileNav>
        <li>
          <NavItem
            href="#projects"
            onClick={() => {
              setOverlayActive(false)
            }}
          >
            Projects
          </NavItem>
        </li>
        <li>
          <NavItem
            href="#about"
            onClick={() => {
              setOverlayActive(false)
            }}
          >
            About
          </NavItem>
        </li>
        <li>
          <NavItem
            href="#contact"
            onClick={() => {
              setOverlayActive(false)
            }}
          >
            Contact
          </NavItem>
        </li>
      </MobileNav>
    </nav>
  </OverlayMenu>
)

export default Overlay
