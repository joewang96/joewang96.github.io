import React, { Component } from 'react';
import backArrowSvg from '../../img/arrow-right.svg';

class BackArrow extends Component {
  render() {
    const { className, ...rest } = this.props;
    return (
      <img
        src={backArrowSvg}
        className={className === null ? 'icon' : `icon ${className}`}
        alt=""
        {...rest}
      />
    );
  }
}

export default BackArrow;
