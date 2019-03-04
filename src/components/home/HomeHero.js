import React, { Component } from 'react';
import styled from 'styled-components';
// import { RichText } from 'prismic-reactjs';
import H1 from '../type/H1';

import * as texture from '../../img/texture.svg';
import * as largeCircle from '../../img/large_circle.svg';

import { COLORS, FONTS, SIZES } from '../../lib/styleVars';

const Home_Hero = styled.section`
  position: relative;
  margin-bottom: 0;
  padding-top: 154px;
  padding-bottom: 84px;
  background: ${COLORS.LIGHT_PURPLE};

  &::before {
    content: ' ';
    z-index: 0;
    background-image: url(${texture});
    background-size: 30px;
    opacity: 0.8;
    width: 287px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
  }
  &::after {
    content: ' ';
    background-image: url(${texture});
    background-size: 30px;
    opacity: 0.8;
    width: 250px;
    height: 350px;
    position: absolute;
    bottom: -20px;
    right: 0;
  }

  @media (max-width: ${SIZES.SM_SCREEN}px) {
    padding-top: 100px;
  }
`;

const Home_Hero__Container = styled.div`
  display: flex;
  flex-align: center;
  flex-direction: column;

  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const Home_Hero__Title = styled(H1)`
  text-align: center;
  max-width: 800px;
  margin-bottom: 32px;
  @media (max-width: ${SIZES.SM_SCREEN}px) {
    text-align: left;
    margin-bottom: 32px;
  }
`;

const Home_Hero__Description = styled.p`
  max-width: 640px;
  font-family: ${FONTS.SANS};
  font-size: 20px;
  color: ${COLORS.DARK_PURPLE};
  font-weight: 500;
  line-height: 34px;
  text-align: center;
  @media (max-width: ${SIZES.SM_SCREEN}px) {
    text-align: left;
  }
`;

const Home_Hero__Semicircle = styled.div`
  width: 100%;
  margin-bottom: 160px;
  background-size: 100vw;
  padding-bottom: 10vw;
  position: relative;
  z-index: 2;

  background-image: url(${largeCircle});
  background-repeat: no-repeat;
  background-position: bottom center;

  @media (max-width: ${SIZES.SM_SCREEN}px) {
    margin-bottom: 100px;
  }
`;

class HomeHero extends Component {
  render() {
    return (
      <>
        <Home_Hero className="section">
          <Home_Hero__Container className="container">
            <Home_Hero__Title className="title">
              {/* {RichText.asText(hero_title)} */}
              Hi, I’m Joe: a front-end engineer turned designer
            </Home_Hero__Title>
            <Home_Hero__Description>
              {/* {RichText.asText(tagline)} */}
              Interaction and UX Designer who knows how to code the designs I
              create. Currently at HubSpot working on design systems, previous
              Technology Director for Scout Studio.
            </Home_Hero__Description>
          </Home_Hero__Container>
        </Home_Hero>
        <Home_Hero__Semicircle role="presentation" />
      </>
    );
  }
}

export default HomeHero;
