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
            <button className="nav--item" onClick={() => scrollTo('#about')}>
              About
            </button>
            <button
              className="nav--item"
              onClick={() => scrollTo('#portfolio')}
            >
              Portfolio
            </button>
            <button className="nav--item" onClick={() => scrollTo('#work')}>
              Experience
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
