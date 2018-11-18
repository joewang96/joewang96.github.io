import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import Hero from '../components/Hero';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';
import JobItem from '../components/JobItem';

import { populateData, fetchById } from '../lib/fetch';
import { htmlSerializer } from '../lib/parse';

class Home extends Component {
  static pageType = 'homepage';

  constructor(props) {
    super(props);
    this.state = {
      work: [],
      buttonList: [],
      jobs: [],
      sock_btn: null,
    };
  }

  componentDidMount() {
    this.fetchPortfolio();
    this.fetchJobs();
  }

  fetchPortfolio() {
    const { doc, api } = this.props;
    populateData(doc.data.portfolio_items, api)('portfolio_piece', payload => {
      this.setState({
        work: [...this.state.work, payload],
      });
    });
  }

  fetchJobs() {
    const { doc, api } = this.props;
    populateData(doc.data.job_list, api)('job', payload => {
      this.setState({
        jobs: [...this.state.jobs, payload],
      });
    });
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
      load_button_text,
      job_section_title,
      resume_button_text,
      resume_link,
    } = this.props.doc.data;

    console.log(resume_link);
    return (
      <WrappedNavFooter>
        <section className="section hero--section" id="hero">
          <div className="container hero--container">
            <div className="flex-parent flex-jsb">
              <div className="hero--info">
                <h1 className="title">{RichText.asText(hero_title)}</h1>
                <p className="tagline">{RichText.asText(tagline)}</p>
              </div>
              <div
                className="headshot-image"
                style={{ backgroundImage: `url(${headshot.url})` }}
              />
            </div>
            <div className="hero--summary">
              <p className="text">{RichText.asText(hero_blurb)}</p>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div>
              <h2>{RichText.asText(about_section_title)}</h2>
              <div className="about-bio">
                {RichText.render(about_section_body, null, htmlSerializer)}
              </div>
              <Button
                text={RichText.asText(email_button_text)}
                link={email_button_link}
              />
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <h2>{RichText.asText(portfolio_section_title)}</h2>

            <div className="work-grid home--work-grid">
              {this.state.work.map(p => (
                <PortfolioItem key={p.id} data={p.data} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="btn-link--wrapper">
              <button className="btn primary">
                {RichText.asText(load_button_text)}
              </button>
            </a>
          </div>
        </section>

        <section className="section" id="work">
          <div className="container">
            <h2>{RichText.asText(job_section_title)}</h2>

            <div className="job-listings">
              {this.state.jobs.map(job => (
                <JobItem key={job.id} data={job.data} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              text={RichText.asText(resume_button_text)}
              link={resume_link}
            />
          </div>
        </section>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(Home);
