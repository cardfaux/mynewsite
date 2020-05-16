import React from "react"
import styled from "styled-components"

const Button = props => {
  return <StyledButton>{props.children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  background-color: #070707;
  border: 5px solid #2ec4b6;
  box-sizing: border-box;
  width: 208px;
  height: 84px;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 126.6%;
  letter-spacing: -0.02em;
  position: absolute;
  top: 30rem;
  left: 14rem;
`
