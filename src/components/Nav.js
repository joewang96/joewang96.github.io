import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <nav
        className={`navigation${
          path === '/' || path === '/work' ? ' on-dark' : ' md-on-dark'
        }`}
      >
        <div className="nav--container flex-parent flex-ac pad pad-md-max">
          <div className="brand--container">
            <Link className="nav-logo flex-parent flex-ac flex-jc" to="/">
              <i className="icon-logo" />
            </Link>
          </div>
          <div className="nav--list flex-parent flex-ac">
            <Link className="nav--item" to="/">
              Home
            </Link>
            <Link className="nav--item" to="/work">
              Work
            </Link>
            <Link className="nav--item" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
