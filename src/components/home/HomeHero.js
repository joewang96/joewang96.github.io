import React, { Component } from 'react';
import styled from 'styled-components';
// import { RichText } from 'prismic-reactjs';
import H1 from '../type/H1';
import { COLORS, FONTS } from '../../lib/styleVars';

const HomeHero__Description = styled.p`
  max-width: 640px;
  font-family: ${FONTS.SANS};
  font-size: 20px;
  color: ${COLORS.DARK_PURPLE};
  font-weight: 500;
  line-height: 34px;
  text-align: center;
`;

class HomeHero extends Component {
  render() {
    return (
      <section className="section hero--section" id="hero">
        <div className="container hero--container flex-parent flex-ac flex-col">
          <H1 className="title text-center h1--home">
            {/* {RichText.asText(hero_title)} */}
            Hi, I’m Joe: a front-end engineer turned designer
          </H1>
          <HomeHero__Description className="description">
            {/* {RichText.asText(tagline)} */}
            Interaction and UX Designer who knows how to code the designs I
            create. Currently at HubSpot working on design systems, previous
            Technology Director for Scout Studio.
          </HomeHero__Description>
        </div>
      </section>
    );
  }
}

export default HomeHero;
