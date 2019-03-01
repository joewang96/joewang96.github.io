import React, { Component } from 'react';
import WrappedNavFooter from '../composers/WrappedNavFooter';

import PrismicPageApi from '../prismic/PrismicPageApi';
import { RichText } from 'prismic-reactjs';

import Button from '../components/Button';
import CaseStudyNextPrevious from '../components/CaseStudyNextPrevious';
import { htmlSerializer } from '../lib/parse';

import * as caseStudyCurve from '../img/case_study_curve.svg';

class CaseStudy extends Component {
  static pageType = 'portfolio-piece';

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { body } = this.props.doc.data;
    body.map(slice => {
      if (slice.slice_type === 'text_section') {
        const { button_link } = slice.primary;
        if (button_link && button_link.id) {
          this.fetchButtonLink(button_link);
        }
      }
    });
  }

  componentWillReceiveProps(props) {
    const { body } = props.doc.data;
    body.map(slice => {
      if (slice.slice_type === 'text_section') {
        const { button_link } = slice.primary;
        if (button_link && button_link.id) {
          this.fetchButtonLink(button_link);
        }
      }
    });
  }

  renderButtonLink(button_link) {
    const statefulButton = this.state[button_link.id];
    return statefulButton ? (
      <div className="project-button-link text-center">
        <Button text={statefulButton.text} link={statefulButton.link} />
      </div>
    ) : null;
  }

  fetchButtonLink(button_link) {
    this.props.api.getByID(button_link.id).then(document => {
      const { text, link } = document.data;
      this.setState({
        ...this.state,
        [button_link.id]: { text: RichText.asText(text), link },
      });
    });
  }

  renderBody() {
    const { body } = this.props.doc.data;
    const bodyContent = body.map((slice, index) => {
      // Render the right markup for the given slice type
      // Text Section
      if (slice.slice_type === 'text_section') {
        const { section_title, paragraph, button_link } = slice.primary;
        return (
          <div className="text-section pad" key={index}>
            {!!RichText.asText(section_title) ? (
              <h2 className="section-title">
                {RichText.asText(section_title)}
              </h2>
            ) : null}
            {RichText.render(paragraph, null, htmlSerializer)}
            {button_link && button_link.id
              ? this.renderButtonLink(button_link)
              : null}
          </div>
        );
      }
      // Image Section
      else if (slice.slice_type === 'image_section') {
        const { case_study_image, caption } = slice.primary;
        const { alt, dimensions, url } = case_study_image;
        let className = 'image-section';
        if (
          body.length > index + 1 &&
          body[index + 1].slice_type === 'image_section'
        ) {
          className += ' no-bottom';
        }
        return (
          <div
            className={`${className} pad flex-parent flex-ac flex-jc flex-col`}
            key={index}
          >
            <img
              className={`case-study--img ${
                dimensions.width > dimensions.height
                  ? 'img-horizontal'
                  : 'img-vertical'
              }`}
              src={url}
              alt={alt}
            />
            <p className="case-study--caption">{RichText.asText(caption)}</p>
          </div>
        );
        // Return null by default
      } else {
        return null;
      }
    });
    return bodyContent;
  }

  render() {
    const {
      preview_title,
      description,
      previous_case_study,
      next_case_study,
      dates,
      position,
      tag_list,
    } = this.props.doc.data;

    return (
      <WrappedNavFooter api={this.props.api}>
        <div
          className="case-study--hero pad"
          style={{ backgroundImage: `url(${caseStudyCurve})` }}
        >
          <h1 className="h1--case-study">
            <strong>{RichText.asText(preview_title)} &mdash; </strong>
            {RichText.asText(description)}
          </h1>
        </div>
        <div className="section case-study--wrapper">
          <div className="container">
            <div className="case-study--info flex-parent flex-jsb flex-row">
              <div className="info-piece">
                <p className="title">Position:</p>
                <p className="content">{RichText.asText(position)}</p>
              </div>
              <div className="info-piece">
                <p className="title">Dates:</p>
                <p className="content">{RichText.asText(dates)}</p>
              </div>
              <div className="info-piece">
                <p className="title">Tags:</p>
                <p className="content">{RichText.asText(tag_list)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="case-study--body flex-parent flex-ac flex-jc flex-col">
          {this.renderBody()}
        </div>
        <div className="next-previous--wrapper">
          <CaseStudyNextPrevious
            uid={previous_case_study.uid}
            api={this.props.api}
            label="Previous case study"
          />
          <CaseStudyNextPrevious
            uid={next_case_study.uid}
            api={this.props.api}
            label="Next case study"
          />
        </div>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(CaseStudy);
