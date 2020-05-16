import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Links from "./Constants/Links"
import logo from "../../images/logo.svg"

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <img
          className="svg-image"
          src={logo}
          alt="jameshagood design & development logo"
        />
      </LogoContainer>

      <StyledUL>
        {Links.map((item, index) => {
          return (
            <IconContainer key={index}>
              <StyledLI key={index}>
                <Link href={item.path} to={item.path}>
                  {item.icon}
                </Link>
              </StyledLI>
            </IconContainer>
          )
        })}
      </StyledUL>
    </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.nav`
  background-color: #181818;
  height: 100vh;
  width: 10rem;
  position: absolute;
`
const LogoContainer = styled.div`
  background-color: #070707;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  .svg-image {
    width: 100%;
  }
`
const StyledUL = styled.ul`
  list-style: none;
`

const StyledLI = styled.li`
  padding: 0.5rem;
  > a {
    color: #06a2fa;
    font-size: 4rem;
  }
`

const IconContainer = styled.div`
  margin: 3rem 0;
  box-shadow: 4px 4px 4px #06a2fa, -4px -4px 4px #949393;
  background-color: #070707;
  border-radius: 100px;
  width: 80px;
  height: 80px;
`
