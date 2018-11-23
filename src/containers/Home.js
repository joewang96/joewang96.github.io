import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';
import JobItem from '../components/JobItem';

import { htmlSerializer } from '../lib/parse';

class Home extends Component {
  static pageType = 'homepage';

  constructor(props) {
    super(props);
  }

  render() {
    const {
      hero_title,
      tagline,
      hero_blurb,
      headshot,
      about_section_title,
      about_section_body,
      email_button_text,
      email_button_link,
      portfolio_section_title,
      portfolio_items,
      job_section_title,
      job_list,
      resume_button_text,
      resume_link,
    } = this.props.doc.data;

    return (
      <WrappedNavFooter>
        <section className="section hero--section" id="hero">
          <div className="container hero--container">
            <div className="flex-parent">
              <div className="hero--info">
                <h1 className="title h1--home">
                  {RichText.asText(hero_title)}
                </h1>
                <p className="tagline">{RichText.asText(tagline)}</p>
              </div>
              <div
                className="headshot-image"
                style={{ backgroundImage: `url(${headshot.url})` }}
              />
            </div>
            <div className="hero--summary stripe-text">
              <p className="text">{RichText.asText(hero_blurb)}</p>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="about--content">
              <h2>{RichText.asText(about_section_title)}</h2>
              <div className="about--bio-button">
                <div className="bio m-b-for-btn">
                  {RichText.render(about_section_body, null, htmlSerializer)}
                </div>
                <Button
                  text={RichText.asText(email_button_text)}
                  link={email_button_link}
                />
              </div>
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

        <section className="section" id="work">
          <div className="container">
            <div className="job--content m-b-for-btn">
              <h2>{RichText.asText(job_section_title)}</h2>
              <div className="job-listings">
                {job_list.map(({ job }) => (
                  <JobItem key={job.id} id={job.id} api={this.props.api} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <Button
                text={RichText.asText(resume_button_text)}
                link={resume_link}
              />
            </div>
          </div>
        </section>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(Home);
