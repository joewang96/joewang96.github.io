import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';
import styled from 'styled-components';
import WrappedNavFooter from '../composers/WrappedNavFooter';
import JobItem from '../components/JobItem';
import PortfolioItem from '../components/PortfolioItem';
import HomeHero from '../components/home/HomeHero';

import { htmlSerializer } from '../lib/parse';
import AboutSection from '../components/home/AboutSection';
import { COLORS, FONTS } from '../lib/styleVars';

const About_Section__Info_Block = styled.div`
  z-index: 1;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 60px;
  }
`;

const About_Section__Info_Block__Title = styled.p`
  color: ${COLORS.DARK_PURPLE};
  font-style: italic;
  font-size: 26px;
  font-weight: bold;
  font-family: ${FONTS.SOURCE};
  && {
    margin-bottom: 20px;
  }
`;

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
          <About_Section__Info_Block className="info-block" key={index}>
            <About_Section__Info_Block__Title className="title">
              {RichText.asText(block_title)}
            </About_Section__Info_Block__Title>
            <div className="content">
              {RichText.render(info, null, htmlSerializer)}
            </div>
          </About_Section__Info_Block>
        );
        // Return null by default
      } else if (slice.slice_type === 'job_section') {
        const { title } = slice.primary;
        const job_list = slice.items;
        return (
          <About_Section__Info_Block className="info-block" key={index}>
            <About_Section__Info_Block__Title className="title no-smooth">
              {RichText.asText(title)}
            </About_Section__Info_Block__Title>
            <div className="job-listings">
              {job_list.slice(0, 3).map(({ job }) => (
                <JobItem key={job.id} id={job.id} api={this.props.api} />
              ))}
            </div>
          </About_Section__Info_Block>
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
    const { body } = this.props.doc.data;

    return (
      <WrappedNavFooter api={this.props.api}>
        <HomeHero />
        <AboutSection
          info={this.renderInfo()}
          // title={/* {RichText.asText(about_section_title)} */}
          title="So what do you want to know?"
        />

        {/* <div className="portfolio--slant-top" /> */}

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
