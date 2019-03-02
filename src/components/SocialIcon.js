import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS } from '../lib/styleVars';

const Styled_SocialIcon_Icon = styled.i`
  display: inline-block;
  color: ${COLORS.DARK_PURPLE};
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  transition-property: color;
`;

const Styled_SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${Styled_SocialIcon_Icon} {
    color ${COLORS.DARK_PURPLE_HOVER};
  }
`;

class SocialIcon extends Component {
  constructor(props) {
    super(props);
  }

  renderIcon() {
    const { iconClass, ariaLabel } = this.props;
    return (
      <Styled_SocialIcon_Icon className={iconClass} aria-label={ariaLabel} />
    );
  }

  render() {
    const { className, href, targetBlank = true } = this.props;
    return !href ? (
      this.renderIcon()
    ) : (
      <Styled_SocialIcon
        className={`social-icon ${className}`}
        href={href}
        target={targetBlank ? '_blank' : ''}
        rel="noopener noreferrer"
      >
        {this.renderIcon()}
      </Styled_SocialIcon>
    );
  }
}

export default SocialIcon;
