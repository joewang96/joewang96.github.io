import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="nav--container pad pad-md-max">
          <div className="brand--container">
            <a className="nav-logo flex-parent flex-ac flex-jc" href="/">
              <i className="icon-logo" />
            </a>
          </div>
          <div className="nav--list flex-parent flex-ac">
            <a className="nav--item" href="/">
              Home
            </a>
            <a className="nav--item" href="/work">
              Work
            </a>
            <a className="nav--item" href="/about">
              About
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
