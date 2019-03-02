import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import JobItem from '../components/JobItem';
import PortfolioItem from '../components/PortfolioItem';
import HomeHero from '../components/home/HomeHero';

import { htmlSerializer } from '../lib/parse';

class Home extends Component {
  static pageType = 'homepage';

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
            <p className="title no-smooth">{RichText.asText(title)}</p>
            <div className="job-listings">
              {job_list.slice(0, 3).map(({ job }) => (
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
      <WrappedNavFooter api={this.props.api}>
        <HomeHero />

        <section className="section about--section" id="about">
          <div className="container">
            <h2 className="about--section-title">
              {/* {RichText.asText(about_section_title)} */}
              So what do you want to know?
            </h2>
            <div className="info-section flex-parent flex-col">
              {this.renderInfo()}
            </div>
          </div>
        </section>

        <div className="portfolio--slant-top" />

        <section className="section" id="portfolio">
          <div className="container">
            <h2 className="text-center text-left-sm m-l-auto m-r-auto">
              {/* {RichText.asText(portfolio_section_title)} */}
              Here's what I've worked on:
            </h2>

            <div className="work-grid home--work-grid">
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
