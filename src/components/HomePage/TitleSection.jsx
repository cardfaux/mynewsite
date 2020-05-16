import React from "react"
import styled from "styled-components"

const TitleSection = () => {
  return (
    <StyledDiv>
      <StyledH1>
        FullStack Software <br /> Developer
      </StyledH1>
    </StyledDiv>
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
`
