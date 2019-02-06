import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BackArrow from './icons/BackArrow';
import SocialIconList from './SocialIconList';

class Nav extends Component {
  static mobileWidth = 680;

  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
    this.mobileResizeListener = this.mobileResizeListener.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  toggleMobileNav() {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  }

  mobileResizeListener() {
    if (window.innerWidth > Nav.mobileWidth && this.state.mobileOpen) {
      this.setState({ mobileOpen: false });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.mobileResizeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.mobileResizeListener);
  }

  renderMobileMenu() {
    const { mobileOpen } = this.state;
    return (
      <div
        className={`mobile--nav-overlay flex-parent flex-jc flex-ac${
          mobileOpen ? ' active' : ''
        }`}
        onClick={this.toggleMobileNav}
      >
        <div className="mobile--nav-menu flex-parent flex-col flex-jc flex-ac">
          <Link className="mobile--nav-item" to="/">
            Portfolio
          </Link>
          <Link className="mobile--nav-item" to="/about">
            About
          </Link>

          <SocialIconList />
        </div>
      </div>
    );
  }

  renderHomeAbout(activeState) {
    const portfolioActive = activeState === true;
    const aboutActive = activeState === false;
    return (
      <div
        className={`nav--list flex-parent flex-ac${
          this.state.mobileOpen ? ' fixed' : ''
        }`}
      >
        <div className="hide-sm">
          <Link
            className={`nav-type nav--item${portfolioActive ? ' active' : ''}`}
            to="/"
          >
            Portfolio
          </Link>
          <Link
            className={`nav-type nav--item${aboutActive ? ' active' : ''}`}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="show-sm">
          <div
            className={`mobile-nav${this.state.mobileOpen ? ' active' : ''}`}
            onClick={this.toggleMobileNav}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.toggleMobileNav();
              }
            }}
            tabIndex={0}
          >
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
          <Link className="nav-type nav--item flex-parent" to="/">
            Back to Home <BackArrow className="nav--icon" />
          </Link>
        </div>
        <div className="show-sm">
          <Link className="nav-type nav--item flex-parent" to="/">
            Back <BackArrow className="nav--icon" />
          </Link>
        </div>
      </>
    );
  }
  renderLinks() {
    const { path, isExact } = this.props.match;
    if (path === '/' && isExact) {
      return this.renderHomeAbout(true);
    }
    if (path === '/about' && isExact) {
      return (
        <>
          {this.renderHomeAbout(false)}
          <div className="nav--lines about--lines" />
        </>
      );
    }
    // otherwise on case study path
    if (path === '/portfolio/:uid' && isExact) {
      return (
        <>
          {this.renderHomeAbout(null)}
          <div className="nav--lines" />
        </>
      );
    }
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
        {this.renderMobileMenu()}
        <div className={`${className} flex-parent flex-ac`}>
          <Link className="nav-logo flex-parent flex-ac flex-jc" to="/">
            <i className="icon-logo" aria-label="Link to homepage" />
          </Link>
          {this.renderLinks()}
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
