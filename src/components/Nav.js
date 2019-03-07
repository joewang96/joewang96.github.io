import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Headroom from 'react-headroom';
import BackArrow from './icons/BackArrow';
import NavItem from './NavItem';
import { getScrollOffset } from '../lib/scroll';

import { COLORS, EASING, FONTS, SIZES } from '../lib/styleVars';

const MOBILE_NAV_BREAK = SIZES.SM_SCREEN - 80;

const Styled_Navigation = styled.nav`
  width: 100%;
  margin: auto;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.025);
  position: relative;
  padding: 24px 0;
  background: ${COLORS.WHITE};
`;

const Nav_Container = styled.div`
  max-width: ${SIZES.NAV_FOOTER_MAX_WIDTH}px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding-left: ${SIZES.MARGIN_DESKTOP}px;
  padding-right: ${SIZES.MARGIN_DESKTOP}px;
  margin: 0 auto;

  @media (max-width: ${SIZES.LG_SCREEN}px) {
    padding-left: ${SIZES.MARGIN_TABLET}px;
    padding-right: ${SIZES.MARGIN_TABLET}px;
  }
  @media (max-width: ${SIZES.SM_SCREEN}px) {
    padding-left: ${SIZES.MARGIN_MOBILE}px;
    padding-right: ${SIZES.MARGIN_MOBILE}px;
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
  position: relative;
  z-index: 100;
  max-height: 101px;

  @media (max-width: ${MOBILE_NAV_BREAK}px) {
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

const Styled_Nav_Item = styled(props => {
  const { active, hideSmall, ...rest } = props;
  return <NavItem {...rest} />;
})`
  display: flex;
  border: none;
  background: none;
  position: relative;
  font-size: 18px;
  font-family: ${FONTS.SOURCE};
  letter-spacing: 0.82px;
  cursor: pointer;
  padding-left: 8px;

  &:not(:last-child) {
    margin-right: 16px;
    padding-right: 8px;
  }

  &:hover {
    ${Styled_Back_Arrow} {
      opacity: 1;
      transform: translateX(4px);
    }
  }
  outline: none;
  &:focus {
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.5);
  }

  ${({ active }) =>
    active
      ? css`
          &::before {
            content: ' ';
            left: 0;
            right: 0;
            bottom: -28px;
            width: 100%;
            height: 4px;
            position: absolute;
            background: ${COLORS.GOLD};
          }
        `
      : null};

  @media (max-width: ${SIZES.SM_SCREEN}px) {
    ${({ hideSmall }) => (hideSmall ? `display: none` : null)};
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yPos: getScrollOffset(),
    };
    this.scrollListener = this.scrollListener.bind(this);
  }

  scrollListener(e) {
    this.setState({ yPos: getScrollOffset() });
  }

  componentDidMount() {
    this.props.match.path === '/'
      ? window.addEventListener('scroll', this.scrollListener)
      : null;
  }

  componentWillUnmount() {
    this.props.match.path === '/'
      ? window.removeEventListener('scroll', this.scrollListener)
      : null;
  }

  renderHomeAbout() {
    const { yPos } = this.state;
    const getPortfolioY = () =>
      document.querySelector('#portfolio').offsetTop - window.innerHeight / 2;
    return (
      <Nav_List className="nav--list" hideSmall={false}>
        <Styled_Nav_Item
          hideSmall={true}
          selector="#hero"
          active={
            document.querySelector('#portfolio')
              ? yPos < getPortfolioY()
              : false
          }
        >
          About
        </Styled_Nav_Item>
        <Styled_Nav_Item
          hideSmall={true}
          selector="#portfolio"
          active={
            document.querySelector('#portfolio')
              ? yPos >= getPortfolioY()
              : false
          }
        >
          Portfolio
        </Styled_Nav_Item>

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
