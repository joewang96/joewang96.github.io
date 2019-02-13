import React, { Component } from 'react';

class SocialIcon extends Component {
  constructor(props) {
    super(props);
  }

  renderIcon() {
    const { iconClass, ariaLabel } = this.props;
    return <i className={`icon ${iconClass}`} aria-label={ariaLabel} />;
  }

  render() {
    const { href, targetBlank = true } = this.props;
    return !href ? (
      this.renderIcon()
    ) : (
      <a
        className="social-icon flex-parent flex-ac flex-jc"
        href={href}
        target={targetBlank ? '_blank' : ''}
        rel="noopener noreferrer"
      >
        {this.renderIcon()}
      </a>
    );
  }
}

export default SocialIcon;
