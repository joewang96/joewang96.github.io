import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Headroom from 'react-headroom';
import BackArrow from './icons/BackArrow';
import NavItem from './NavItem';

import { COLORS, EASING, FONTS, SIZES } from '../lib/styleVars';

const MOBILE_NAV_BREAK = SIZES.SM_SCREEN - 80;

const Styled_Navigation = styled.nav`
  width: 100%;
  max-width: ${SIZES.NAV_FOOTER_MAX_WIDTH}px;
  margin: auto;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.025);
  position: relative;
  padding: 24px 0;
  background: ${COLORS.WHITE};
`;

const Nav_Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin-left: 110px;

  @media (max-width: ${SIZES.LG_SCREEN}px) {
    margin-left: ${SIZES.MARGIN_TABLET}px;
  }
  @media (max-width: ${SIZES.SM_SCREEN}px) {
    margin-left: ${SIZES.MARGIN_MOBILE}px;
  }
`;

const Nav_Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  background: ${COLORS.DARK_PURPLE};
  border-radius: 4px;
  .icon-logo {
  }
`;
const Nav_Logo__Icon = styled.i`
  font-size: 18px;
  color: ${COLORS.WHITE};
`;

const Nav_List = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  background: ${COLORS.WHITE};
  padding: 0 85px;
  position: relative;
  z-index: 100;
  max-height: 101px;

  @media (max-width: ${MOBILE_NAV_BREAK}px) {
    padding: 0 38px;
    ${({ hideSmall }) => (hideSmall ? `display: none` : null)};
  }
`;

const Styled_Back_Arrow = styled(BackArrow)`
  width: 20px;
  margin-left: 2px;
  opacity: 0.7;
  transition-timing-function: ${EASING.BOUNCE_SM};
  transition-duration: 250ms;
  transition-property: transform;
`;

const Styled_Nav_Item = styled(NavItem)`
  display: flex;
  border: none;
  background: none;
  position: relative;
  font-size: 18px;
  font-family: ${FONTS.SOURCE};
  letter-spacing: 0.82px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 32px;
  }
  &:hover {
    ${Styled_Back_Arrow} {
      opacity: 1;
      transform: translateX(4px);
    }
  }
`;

class Nav extends Component {
  renderHomeAbout() {
    return (
      <Nav_List className="nav--list" hideSmall={true}>
        <Styled_Nav_Item
          href={this.props.resume || null}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume <Styled_Back_Arrow />
        </Styled_Nav_Item>
      </Nav_List>
    );
  }
  renderNonHome() {
    return (
      <Nav_List className="nav--list">
        <Styled_Nav_Item as={Link} className="nav-type" to="/">
          Back to Home <Styled_Back_Arrow />
        </Styled_Nav_Item>
      </Nav_List>
    );
  }

  render() {
    const { path, isExact } = this.props.match;
    return (
      <Headroom style={{ zIndex: 100 }}>
        <Styled_Navigation className="navigation">
          <Nav_Container className="nav--container">
            <Nav_Logo to="/">
              <Nav_Logo__Icon
                className="icon-logo"
                aria-label="Link to homepage"
              />
            </Nav_Logo>
            {path === '/' && isExact
              ? this.renderHomeAbout()
              : this.renderNonHome()}
          </Nav_Container>
        </Styled_Navigation>
      </Headroom>
    );
  }
}

export default withRouter(Nav);
