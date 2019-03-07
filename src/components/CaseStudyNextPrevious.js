import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

import { COLORS, FONTS, SIZES } from '../lib/styleVars';

const Case_Study_Navigator__Label = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: ${COLORS.DARK_PURPLE};
  font-weight: 600;
  font-family: ${FONTS.SOURCE};
`;

const Case_Study_Navigator__Title = styled.p`
  display: inline;
  color: ${COLORS.DARK_PURPLE};
  font-size: 24px;
  background-image: linear-gradient(
    to right,
    ${COLORS.HIGHLIGHT} 0,
    ${COLORS.HIGHLIGHT} 100%
  );
  background-repeat: no-repeat;
  background-position: 0 18px;
  background-size: 0 100%;
  transition: background 350ms ease-in-out;

  strong {
    font-weight: 600;
  }

  @media (max-width: ${SIZES.MD_SCREEN}px) {
    font-size: 20px;
  }
`;

const Case_Study_Navigator = styled(Link)`
  background: ${COLORS.LIGHT_PURPLE};
  padding: 80px 96px;
  flex: 1;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;

  &:last-child {
    margin-left: 8px;
  }

  &:hover ${Case_Study_Navigator__Title} {
    background-size: 100% 100%;
    transition-duration: 450ms;
  }

  @media (max-width: ${SIZES.MD_SCREEN}px) {
    padding: 56px 64px;
  }
  @media (max-width: ${SIZES.SM_SCREEN}px) {
    padding: 52px 52px;
    &:last-child {
      margin-left: 0px;
      margin-top: 8px;
    }
  }
`;

class CaseStudyNextPrevious extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { api, uid } = this.props;
    api.getByUID('portfolio-piece', uid).then(document => {
      this.setState(document.data);
    });
  }

  componentWillReceiveProps(nextProps) {
    const { api, uid } = nextProps;
    api.getByUID('portfolio-piece', uid).then(document => {
      this.setState(document.data);
    });
  }

  render() {
    const { preview_title, description } = this.state;
    const { label } = this.props;
    if (preview_title === undefined || description === undefined) {
      return null;
    }
    return (
      <Case_Study_Navigator
        to={`/portfolio/${this.props.uid}`}
        aria-label={
          RichText.asText(preview_title) - RichText.asText(description)
        }
      >
        <Case_Study_Navigator__Label>{label}</Case_Study_Navigator__Label>
        <Case_Study_Navigator__Title>
          <strong>{RichText.asText(preview_title)} &mdash; </strong>
          {RichText.asText(description)}
        </Case_Study_Navigator__Title>
      </Case_Study_Navigator>
    );
  }
}

export default CaseStudyNextPrevious;
