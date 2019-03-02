import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import SocialIconList from './SocialIconList';
import { COLORS, FONTS, SIZES } from '../lib/styleVars';

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const StyledFooter = styled.footer`
  background: ${COLORS.WHITE};
  position: relative;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledFooter__Container = styled.div`
  width: 100%;
  max-width: ${SIZES.NAV_FOOTER_MAX_WIDTH}px;
  display: flex;
  flex-direction: column;
`;

const StyledFooter__SiteMap_Social = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${SIZES.MD_SCREEN}px) {
    margin-bottom: 36px;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledFooter__SiteMap = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${SIZES.MD_SCREEN}px) {
    margin-bottom: 24px;
  }
`;

const StyledFooter__SiteMap_Item = styled.a`
  border: none;
  background: none;
  font-size: 18px;
  font-family: ${FONTS.SOURCE};
  letter-spacing: 0.82px;
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

const builtAndCopyrightStyles = `
  font-size: 14px;
  color: ${COLORS.GREY};
`;

const StyledFooter__BuiltCopy = styled.div`
  display: flex;
  justify-content: space-between;
  ${builtAndCopyrightStyles}
  @media (max-width: ${SIZES.MD_SCREEN}px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const StyledFooter__BuiltCopy_Copyright = styled.div`
  ${builtAndCopyrightStyles};
`;

const StyledFooter__Built_SocialIcon = styled(SocialIcon)`
  display: inline-flex;
  vertical-align: text-bottom;
  font-size: 16px;
`;

const StyledFooter__BuiltWith = styled.div`
  ${builtAndCopyrightStyles};
  @media (max-width: ${SIZES.MD_SCREEN}px) {
    margin-bottom: 16px;
  }
`;

const Footer = props => (
  <StyledFooter className="footer">
    <StyledFooter__Container className="container pad">
      <StyledFooter__SiteMap_Social>
        <StyledFooter__SiteMap>
          <StyledFooter__SiteMap_Item as={Link} className="nav-type" to="/">
            Home
          </StyledFooter__SiteMap_Item>
          <StyledFooter__SiteMap_Item
            className="nav-type"
            href={props.resume || null}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </StyledFooter__SiteMap_Item>
        </StyledFooter__SiteMap>

        <SocialIconList />
      </StyledFooter__SiteMap_Social>
      <StyledFooter__BuiltCopy>
        <StyledFooter__BuiltCopy_Copyright className="copyright">
          Copyright &copy; {getYear()} Joseph Wang
        </StyledFooter__BuiltCopy_Copyright>
        <StyledFooter__BuiltWith>
          Made with{' '}
          <StyledFooter__Built_SocialIcon
            iconClass="icon-react"
            href="https://reactjs.org/"
            ariaLabel="React JS"
          />{' '}
          and hosted with{' '}
          <StyledFooter__Built_SocialIcon
            iconClass="icon-netlify"
            href="https://www.netlify.com/"
            ariaLabel="Netlify"
          />
        </StyledFooter__BuiltWith>
      </StyledFooter__BuiltCopy>
    </StyledFooter__Container>
  </StyledFooter>
);

export default Footer;
