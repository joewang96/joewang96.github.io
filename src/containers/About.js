import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import JobItem from '../components/JobItem';
import BackArrow from '../components/icons/BackArrow';

import { htmlSerializer } from '../lib/parse';
import { isFirefox } from '../lib/browser';
import { getScrollOffset } from '../lib/scroll';

class About extends Component {
  static pageType = 'about_page';

  constructor(props) {
    super(props);
    this.state = {
      yPos: 0,
    };
    this.scrollListener = this.scrollListener.bind(this);
  }

  scrollListener() {
    this.setState({ yPos: getScrollOffset() });
  }

  componentDidMount() {
    if (!isFirefox) window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    if (!isFirefox) window.removeEventListener('scroll', this.scrollListener);
  }

  renderInfo() {
    const { body } = this.props.doc.data;
    const bodyContent = body.map((slice, index) => {
      // Render the right markup for the given slice type
      // Quick Info Section
      if (slice.slice_type === 'text_info') {
        const { title, text } = slice.primary;
        return (
          <div className="info-block" key={index}>
            <p className="title">{RichText.asText(title)}</p>
            <div className="content">
              {RichText.render(text, null, htmlSerializer)}
            </div>
          </div>
        );
        // Return null by default
      } else if (slice.slice_type === 'job_info') {
        const { title, resume_link, resume_button_text } = slice.primary;
        const job_list = slice.items;
        return (
          <div className="info-block" key={index}>
            <p className="title">{RichText.asText(title)}</p>
            <div className="job-listings">
              {job_list.map(({ job }) => (
                <JobItem key={job.id} id={job.id} api={this.props.api} />
              ))}
            </div>
            <div className="full-resume-container flex-parent flex-jc">
              <a
                className="resume-link flex-parent flex-ac"
                href={resume_link.url}
                target="_blank"
              >
                <span className="text">
                  {RichText.asText(resume_button_text)}
                </span>{' '}
                <BackArrow className="arrow--icon" />
              </a>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
    return bodyContent;
  }
  render() {
    const { hero_title } = this.props.doc.data;

    return (
      <WrappedNavFooter>
        <section className="section hero--section about--section" id="hero">
          <div className="container hero--container">
            <div className="flex-parent">
              <div className="hero--info about--info">
                <h1
                  className="title h1--home about--title"
                  style={{
                    top: !isFirefox ? (this.state.yPos / 10) * -1 : 0,
                    position: 'relative',
                  }}
                >
                  {RichText.asText(hero_title)}
                </h1>
              </div>
            </div>
            <div className="info-section flex-parent flex-col">
              {this.renderInfo()}
            </div>
          </div>
        </section>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(About);
