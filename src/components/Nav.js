import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { scrollTo } from '../lib/scroll.js';

class Nav extends Component {
  renderLinks() {
    const { path } = this.props.match;
    if (path === '/') {
      return (
        <>
          <button className="nav--item" onClick={() => scrollTo('#about')}>
            About
          </button>
          <button className="nav--item" onClick={() => scrollTo('#portfolio')}>
            Portfolio
          </button>
          <button className="nav--item" onClick={() => scrollTo('#work')}>
            Work
          </button>
        </>
      );
    }
    // otherwise on portfolio or 404 path
    return (
      <Link className="nav--item" to="/">
        Back to Home →
      </Link>
    );
  }

  render() {
    const { path } = this.props.match;
    let className = 'nav--container';
    if (path !== '/') {
      className += ' lines-before';
    }
    return (
      <nav className={`navigation ${this.props.className}`}>
        <div className={`${className} flex-parent flex-ac`}>
          <Link className="nav-logo flex-parent flex-ac flex-jc" to="/">
            <i className="icon-logo" />
          </Link>

          <div className="nav--list flex-parent flex-ac">
            {this.renderLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
