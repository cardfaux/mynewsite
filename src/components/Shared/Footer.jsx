import React from "react"
import styled from "styled-components"

import SocialLinks from "../Shared/Constants/SocialLinks"

const Footer = () => {
  return (
    <StyledContainer>
      <StyledUL>
        {SocialLinks.map((item, index) => {
          return (
            <ItemDiv>
              <StyledListItem key={item.index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </StyledListItem>
            </ItemDiv>
          )
        })}
      </StyledUL>
    </StyledContainer>
  )
}

export default Footer

const StyledContainer = styled.div`
  position: absolute;
  /* width: 183px;
  height: 24px; */
  top: 85%;
  left: 80%;
  &::after {
    content: "";
    background: #070707;
    display: block;
    width: 20rem;
    height: 0.25rem;
    position: relative;
    top: -2rem;
  }
`
const StyledUL = styled.ul`
  display: flex;
  list-style: none;
`
const StyledListItem = styled.li`
  > a {
    outline: none;
    font-size: 2rem;
    color: #06a2fa;
  }
`
const ItemDiv = styled.div`
  padding: 1rem;
`
