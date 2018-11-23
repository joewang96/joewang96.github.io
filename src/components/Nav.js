import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { scrollTo } from '../lib/scroll.js';

class Nav extends Component {
  renderLinks() {
    const { path } = this.props.match;
    if (path === '/') {
      return (
        <div className="nav--list flex-parent flex-ac">
          <button className="nav--item" onClick={() => scrollTo('#about')}>
            About
          </button>
          <button className="nav--item" onClick={() => scrollTo('#portfolio')}>
            Portfolio
          </button>
          <button className="nav--item" onClick={() => scrollTo('#work')}>
            Work
          </button>
        </div>
      );
    }
    // otherwise on case study or 404 path
    return (
      <>
        <div className="nav--list flex-parent flex-ac">
          <Link className="nav--item" to="/">
            Back to Home →
          </Link>
        </div>
        <div className="nav--lines" />
      </>
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
          {this.renderLinks()}
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
