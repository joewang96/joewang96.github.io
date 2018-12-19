import React, { Component } from 'react';
import backArrowSvg from '../../img/arrow-right.svg';

class BackArrow extends Component {
  render() {
    const { className } = this.props;
    return (
      <img
        src={backArrowSvg}
        className={className === null ? 'icon' : `icon ${className}`}
      />
    );
  }
}

export default BackArrow;
