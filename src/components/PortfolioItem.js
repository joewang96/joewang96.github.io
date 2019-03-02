import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import { COLORS, SIZES } from '../lib/styleVars';
import { CASE_STUDY_PREVIEW_TITLE } from '../lib/styleMixins';

const PortfolioBlock = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
  will-change: transform;

  @media (min-width: ${SIZES.MD_SCREEN + 1}px) {
    width: 48%;
    &:nth-child(odd) {
      margin-right: 4%;
    }
  }
  @media (max-width: ${SIZES.MD_SCREEN}px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    display: flex;
    flex-direction: column;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const PortfolioBlock__Image_Wrapper = styled(Link)`
  border: 2px solid ${COLORS.OFF_BLACK};
  padding-bottom: 75%;
  width: 100%;
  flex-shrink: 1;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: ${SIZES.MD_SCREEN}px) {
    width: 100%;
    max-width: 100%;
    height: 280px;
  }
`;

const PortfolioBlock__Image_Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
  transition-property: transform;
  &:hover {
    transform: scale(1.075);
  }
`;

const PortfolioBlock__Title = styled.div`
  ${CASE_STUDY_PREVIEW_TITLE};
`;

class PortfolioItem extends Component {
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

  render() {
    const { preview_title, description, preview_image } = this.state;
    if (preview_title === undefined || preview_image === undefined) {
      return null;
    }
    return (
      <PortfolioBlock>
        <PortfolioBlock__Image_Wrapper
          to={`portfolio/${this.props.uid}`}
          aria-label={
            RichText.asText(preview_title) - RichText.asText(description)
          }
        >
          <PortfolioBlock__Image_Background
            style={{
              backgroundImage: `url(${preview_image ? preview_image.url : ''})`,
            }}
          />
        </PortfolioBlock__Image_Wrapper>
        <PortfolioBlock__Title>
          <strong>{RichText.asText(preview_title)} &mdash; </strong>
          {RichText.asText(description)}
        </PortfolioBlock__Title>
      </PortfolioBlock>
    );
  }
}

export default PortfolioItem;
