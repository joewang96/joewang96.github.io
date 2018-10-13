import React, { Component } from 'react';

class SocialIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { href, targetBlank, iconClass } = this.props;
    return (
      <a
        className="social-item flex-parent flex-ac flex-jc"
        href={href}
        target={targetBlank ? '_blank' : ''}
      >
        <i className={`icon ${iconClass}`} />
      </a>
    );
  }
}

export default SocialIcon;
