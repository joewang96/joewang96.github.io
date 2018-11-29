import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { scrollTo } from '../lib/scroll.js';

class Nav extends Component {
  renderNonHome() {
    return (
      <>
        <div className="nav--desktop">
          <Link className="nav--item" to="/">
            Back to Home →
          </Link>
        </div>
        <div className="nav--mobile">
          <Link className="nav--item" to="/">
            Back →
          </Link>
        </div>
      </>
    );
  }
  renderLinks() {
    const { path, isExact } = this.props.match;
    if (path === '/') {
      // if on 404
      if (!isExact) {
        return (
          <>
            <div className="nav--list flex-parent flex-ac">
              {this.renderNonHome()}
            </div>
          </>
        );
      }
      return (
        <div className="nav--list flex-parent flex-ac hide-sm">
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
    // otherwise on case study path
    return (
      <>
        <div className="nav--list flex-parent flex-ac">
          {this.renderNonHome()}
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
