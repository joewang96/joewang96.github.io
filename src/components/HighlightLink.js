import React, { Component } from 'react';

class HoverLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, small, ...rest } = this.props;
    return (
      <a
        {...rest}
        className={`highlight-link${small ? ' highlight-sm' : ''}`}
        target="_blank"
      >
        {children}
      </a>
    );
  }
}

export default HoverLink;
