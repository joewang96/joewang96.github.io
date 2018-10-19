import React, { Component } from 'react';

class Sock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pad section--sock square-sock">
        <div className="sock-btn--wrapper flex-parent flex-jc">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Sock;
