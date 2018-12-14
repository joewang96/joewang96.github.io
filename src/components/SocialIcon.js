import React, { Component } from 'react';

class SocialIcon extends Component {
  constructor(props) {
    super(props);
  }

  renderIcon() {
    const { iconClass } = this.props;
    return <i className={`icon ${iconClass}`} />;
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
      >
        {this.renderIcon()}
      </a>
    );
  }
}

export default SocialIcon;
