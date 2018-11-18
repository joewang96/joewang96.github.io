import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { scrollTo } from '../lib/scroll.js';

class Nav extends Component {
  render() {
    // const { path, isExact } = this.props.match;
    return (
      <nav className={`navigation ${this.props.className}`}>
        <div className="nav--container flex-parent flex-ac">
          <Link className="nav-logo flex-parent flex-ac flex-jc" to="/">
            <i className="icon-logo" />
          </Link>

          <div className="nav--list flex-parent flex-ac">
            <a
              className="nav--item"
              onClick={() => scrollTo('#about')}
              tabIndex={0}
            >
              About
            </a>
            <a
              className="nav--item"
              onClick={() => scrollTo('#portfolio')}
              tabIndex={0}
            >
              Portfolio
            </a>
            <a
              className="nav--item"
              onClick={() => scrollTo('#work')}
              tabIndex={0}
            >
              Experience
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
