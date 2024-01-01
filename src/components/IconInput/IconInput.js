import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"
import Icon from "../Icon/Icon"

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const STYLES = {
    small: {
      fontSize: 14,
      iconSize: 16,
      borderThickness: 1,
      height: 24,
      paddingLeft: 24,
    },
    large: {
      fontSize: 18,
      iconSize: 24,
      borderThickness: 2,
      height: 36,
      paddingLeft: 36,
    },
  }
  return (
    <Wrapper>
      <IconWrapper size={STYLES[size].iconSize} id={icon}></IconWrapper>
      <Input
        type="text"
        label={label}
        size={size}
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--height": STYLES[size].height + "px",
          "--borderThickness": STYLES[size].borderThickness + "px",
          "--fontSize": STYLES[size].fontSize + "px",
          "--paddingLeft": STYLES[size].paddingLeft + "px",
        }}
      ></Input>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  position: relative;
  isolation: isolate;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--paddingLeft);
  border: none;
  border-bottom: var(--borderThickness) solid black;
  font-size: var(--fontSize);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

export default IconInput
