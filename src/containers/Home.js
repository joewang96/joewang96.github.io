import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import JobItem from '../components/JobItem';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';

import { htmlSerializer } from '../lib/parse';
import { isFirefox } from '../lib/browser';
import { getScrollOffset } from '../lib/scroll';

class Home extends Component {
  static pageType = 'homepage';

  constructor(props) {
    super(props);
    this.state = {
      yPos: getScrollOffset(),
      isMobile: window.innerWidth < 800,
    };
    this.scrollListener = this.scrollListener.bind(this);
    this.resizeListener = this.resizeListener.bind(this);
  }

  scrollListener() {
    this.setState({ yPos: getScrollOffset() });
  }

  resizeListener() {
    this.setState({ ...this.state, isMobile: window.innerWidth < 800 });
  }

  componentDidMount() {
    if (!isFirefox) window.addEventListener('scroll', this.scrollListener);
    window.addEventListener('resize', this.resizeListener);
  }

  componentWillUnmount() {
    if (!isFirefox) window.removeEventListener('scroll', this.scrollListener);
    window.removeEventListener('resize', this.resizeListener);
  }

  renderInfo() {
    const { body } = this.props.doc.data;
    const bodyContent = body.map((slice, index) => {
      // Render the right markup for the given slice type
      // Quick Info Section
      if (slice.slice_type === 'info_text') {
        const { block_title, info } = slice.primary;
        return (
          <div className="info-block" key={index}>
            <p className="title">{RichText.asText(block_title)}</p>
            <div className="content">
              {RichText.render(info, null, htmlSerializer)}
            </div>
          </div>
        );
        // Return null by default
      } else if (slice.slice_type === 'job_section') {
        const { title } = slice.primary;
        const job_list = slice.items;
        return (
          <div className="info-block" key={index}>
            <p className="title">{RichText.asText(title)}</p>
            <div className="job-listings">
              {job_list.map(({ job }) => (
                <JobItem key={job.id} id={job.id} api={this.props.api} />
              ))}
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
    const {
      about_section_title,
      hero_title,
      tagline,
      hero_blurb,
      headshot,
      portfolio_section_title,
      portfolio_items,
      resume_button_text,
      resume_link,
    } = this.props.doc.data;

    return (
      <WrappedNavFooter>
        <section
          className="section hero--section"
          id="hero"
          style={{
            transform: `translateY(${
              !isFirefox ? Math.min(this.state.yPos / 10, 100) * -1 : 0
            }px)`,
          }}
        >
          <div className="container hero--container">
            <div className="flex-parent layout--container">
              <div className="hero--info">
                <h1 className="title h1--home">
                  {RichText.asText(hero_title)}
                </h1>
                <p className="tagline">{RichText.asText(tagline)}</p>
              </div>
              <div
                className="headshot-image bordered"
                style={{
                  backgroundImage: `url(${headshot.url})`,
                  top: !isFirefox ? Math.min(this.state.yPos / 10, 80) : 0,
                }}
              />
            </div>
            <div className="hero--summary stripe-text">
              <p className="text">{RichText.asText(hero_blurb)}</p>
            </div>
          </div>
        </section>

        <section className="section about--section" id="about">
          <div className="container">
            <h2 className="about--section-title">
              {RichText.asText(about_section_title)}
            </h2>
            <div className="info-section flex-parent flex-col">
              {this.renderInfo()}
            </div>

            <div className="text-center resume--wrapper">
              <Button
                text={RichText.asText(resume_button_text)}
                link={resume_link}
              />
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <h2 className="text-center m-l-auto m-r-auto">
              {RichText.asText(portfolio_section_title)}
            </h2>

            <div className="work-grid home--work-grid m-b-for-btn">
              {portfolio_items.map(({ portfolio_piece: p }) => {
                return (
                  <PortfolioItem key={p.id} uid={p.uid} api={this.props.api} />
                );
              })}
            </div>
          </div>
        </section>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(Home);
