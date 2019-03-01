import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackArrow from './icons/BackArrow';
import NavItem from './NavItem';

class Nav extends Component {
  renderHomeAbout() {
    return (
      <div className="nav--list flex-parent flex-ac hide-sm">
        <NavItem selector="#about">Home</NavItem>
        <NavItem selector="#portfolio">Portfolio</NavItem>
      </div>
    );
  }
  renderNonHome() {
    return (
      <>
        <div className="nav--list flex-parent flex-ac">
          <div className="hide-sm">
            <Link className="nav-type nav--item flex-parent" to="/">
              Back to Home <BackArrow className="nav--icon" />
            </Link>
          </div>
          <div className="show-sm">
            <Link className="nav-type nav--item flex-parent" to="/">
              Back <BackArrow className="nav--icon" />
            </Link>
          </div>
        </div>
        <div className="nav--lines" />
      </>
    );
  }

  render() {
    const { path, isExact } = this.props.match;
    return (
      <nav className={`navigation ${this.props.className}`}>
        <div className="nav--container flex-parent flex-ac">
          <Link className="nav-logo flex-parent flex-ac flex-jc" to="/">
            <i className="icon-logo" aria-label="Link to homepage" />
          </Link>
          {path === '/' && isExact
            ? this.renderHomeAbout()
            : this.renderNonHome()}
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
