import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS, FONTS } from '../lib/styleVars';

const Styled_Button = styled.button`
  background: ${COLORS.DARK_PURPLE};
  color: ${COLORS.WHITE};

  -webkit-backface-visibility: hidden;
  z-index: 1;
  position: relative;
  font-size: 14px;
  font-family: ${FONTS.SANS};
  letter-spacing: 0.5px;
  font-weight: 500;

  cursor: pointer;
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  padding: 20px 36px;

  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
  transition-property: background-color, color, box-shadow, transform;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0);
`;

const Styled_Button_Wrapper = styled.a`
  display: inline-block;

  &:hover {
    ${Styled_Button} {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px 4px rgba(0, 0, 0, 0.15);
      background: ${COLORS.DARK_PURPLE_HOVER};
    }
  }
  &:active {
    ${Styled_Button} {
      background: ${COLORS.DARK_PURPLE_ACTIVE};
    }
  }
`;

class Button extends Component {
  constructor(props) {
    super(props);
  }

  createLinkedButton(child, className) {
    const { link } = this.props;
    if (link.link_type === 'Media') {
      return { child };
    }
  }

  render() {
    const { link, text, ...rest } = this.props;
    return (
      <Styled_Button_Wrapper
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        <Styled_Button>{text}</Styled_Button>
      </Styled_Button_Wrapper>
    );
  }
}

export default Button;
