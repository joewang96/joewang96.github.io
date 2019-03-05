import React, { Component } from 'react';
import styled from 'styled-components';
// import { RichText } from 'prismic-reactjs';
import * as texture from '../../img/texture.svg';
import { SIZES, COLORS } from '../../lib/styleVars';

const About_Section = styled.section`
  position: relative;
  margin-bottom: 0;
  padding-bottom: 100px; /* 110 - 50 from slant offset = 60 */

  &::before {
    content: ' ';
    background-image: url(${texture});
    background-size: 30px;
    opacity: 0.8;
    width: 154px;
    height: 440px;
    position: absolute;
    top: -232px;
    left: 0;
  }
  &::after {
    content: ' ';
    background-image: url(${texture});
    background-size: 30px;
    opacity: 0.8;
    width: 154px;
    height: 440px;
    position: absolute;
    bottom: -180px;
    right: 0;
  }

  @media (max-width: ${SIZES.SM_SCREEN}px) {
    &::before {
      content: none;
    }
    padding-bottom: 80px;
  }
`;

const About_Section__Title = styled.h2`
  max-width: 490px;
  position: relative;
  margin-bottom: 67px;

  @media (min-width: ${SIZES.LG_SCREEN}px) {
    margin-left: 125px;
  }

  @media (max-width: ${SIZES.MD_SCREEN}px) {
    margin-bottom: 40px;
  }
`;

const About_Section__Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  max-width: 575px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  @media (max-width: ${SIZES.SM_SCREEN}px) {
    margin-bottom: 40px;
  }
`;

class AboutSection extends Component {
  render() {
    const { title, info } = this.props;
    return (
      <About_Section className="section about--section" id="about">
        <div className="container">
          <About_Section__Title>{title}</About_Section__Title>
          <About_Section__Info>{info}</About_Section__Info>
        </div>
      </About_Section>
    );
  }
}

export default AboutSection;
