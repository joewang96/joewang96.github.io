import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  render() {
    const { path, isExact } = this.props.match;
    return (
      <nav className={`navigation ${this.props.className}`}>
        <div className="nav--container flex-parent flex-ac pad pad-md-max">
          <div className="brand--container">
            <Link className="nav-logo flex-parent flex-ac flex-jc" to="/">
              <i className="icon-logo" />
            </Link>
          </div>
          <div className="nav--list flex-parent flex-ac">
            <Link className="nav--item" to="/">
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
