import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackArrow from './icons/BackArrow';

class Nav extends Component {
  renderHomeAbout() {
    return (
      <div className="nav--list flex-parent flex-ac">
        <div className="hide-sm">
          <Link className="nav--item" to="/">
            Portfolio
          </Link>
          <Link className="nav--item" to="/about">
            About
          </Link>
        </div>
        <div className="show-sm">
          <div className="mobile-nav">
            <div className="mobile-line" />
            <div className="mobile-line" />
            <div className="mobile-line" />
          </div>
        </div>
      </div>
    );
  }
  renderNonHome() {
    return (
      <>
        <div className="hide-sm">
          <Link className="nav--item flex-parent" to="/">
            Back to Home <BackArrow className="nav--icon" />
          </Link>
        </div>
        <div className="show-sm">
          <Link className="nav--item flex-parent" to="/">
            Back <BackArrow className="nav--icon" />
          </Link>
        </div>
      </>
    );
  }
  renderLinks() {
    const { path, isExact } = this.props.match;
    if (path === '/' && isExact) {
      return this.renderHomeAbout();
    }
    if (path === '/about' && isExact) {
      return (
        <>
          {this.renderHomeAbout()}
          <div className="nav--lines about--lines" />
        </>
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
