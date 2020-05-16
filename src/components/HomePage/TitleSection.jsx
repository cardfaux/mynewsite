import React from "react"
import styled from "styled-components"
import { FiGitCommit } from "react-icons/fi"

const TitleSection = () => {
  return (
    <>
      <StyledDiv>
        <StyledH1>
          FullStack Software <br /> Developer
        </StyledH1>
      </StyledDiv>
      <StyledH2Div>
        <StyledH2>
          FrontEnd
          <StyledFiGitCommit />
          BackEnd
          <StyledFiGitCommit />
          Web Solutions Expert <br /> Web
          <StyledFiGitCommit />
          Mobile
        </StyledH2>
      </StyledH2Div>
    </>
  )
}

export default TitleSection

const StyledDiv = styled.div`
  position: absolute;
  top: 8rem;
  left: 14rem;
  height: 145px;
  width: 536px;
`
const StyledH1 = styled.h1`
  color: #ffffff;
  line-height: 99.6%;
  font-weight: bold;
  font-size: 71px;
  font-style: normal;
  font-family: "Roboto Condensed", sans-serif;
  &::after {
    content: "";
    background: #070707;
    display: block;
    width: 12rem;
    height: 0.25rem;
    position: relative;
    top: 0rem;
    left: 13rem;
  }
`
const StyledH2 = styled.h2`
  font-family: "Cutive Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 97.6%;
  letter-spacing: -0.1em;
  color: #e5e5e5;
`
const StyledH2Div = styled.div`
  position: absolute;
  width: 820px;
  height: 36px;
  left: 14rem;
  top: 20rem;
`
const StyledFiGitCommit = styled(FiGitCommit)`
  color: #787777;
`
