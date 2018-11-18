import React, { Component } from 'react';

class HoverLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <a {...rest} className="highlight-link" target="_blank">
        {children}
      </a>
    );
  }
}

export default HoverLink;
