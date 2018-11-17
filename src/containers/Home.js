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
    this.populateWork();
    this.populateButtons();
    this.populateJobs();
    this.fetchSock();
  }

  populateWork() {
    const { doc, api } = this.props;
    populateData(doc.data.portfolio_items, api)('portfolio_piece', payload => {
      this.setState({
        work: [...this.state.work, payload],
      });
    });
  }

  populateJobs() {
    const { doc, api } = this.props;
    populateData(doc.data.job_list, api)('job', payload => {
      this.setState({
        jobs: [...this.state.jobs, payload],
      });
    });
  }

  populateButtons() {
    const { doc, api } = this.props;
    populateData(doc.data.button_list, api)('button', payload => {
      this.setState({
        buttonList: [...this.state.buttonList, payload],
      });
    });
  }

  fetchSock() {
    const { doc, api } = this.props;
    fetchById(api, doc.data.sock_button.id).then(({ data }) => {
      this.setState({
        sock_btn: data,
      });
    });
  }

  render() {
    const {
      hero_text,
      hero_subtext,
      headshot,
      section_1_title,
      section_1_body,
      portfolio_preview_title,
      work_section_body,
      work_title,
      work_body,
    } = this.props.doc.data;
    return (
      <WrappedNavFooter>
        <section className="section hero--section" id="hero">
          <div className="container hero--container">
            <div className="flex-parent flex-jsb">
              <div className="hero--info">
                <h1 className="title">Hi, I'm Joe Wang</h1>
                <p className="tagline">[ Designer / Developer / Maker ]</p>
              </div>
              <div
                className="headshot-image"
                style={{ backgroundImage: `url(${headshot.url})` }}
              />
            </div>
            <div className="hero--summary">
              <p className="text">
                Creative coder passionate about UX and accessibility. Currently
                serving as Technology Director for Scout.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div>
              <h2>First, a bit about myself</h2>
              <p>
                I grew up in Northern Virginia, and currently go to school at
                Northeastern University, where I’m pursuing a B.S. in Computer
                Science and Interactive Media. At Northeastern I’ve become a
                part of Scout Studio, a community of passionate creatives aimed
                at fostering the design community on campus.
              </p>
              <a
                href="mailto:wang.jo@husky.neu.edu"
                className="btn-link--wrapper"
              >
                <button className="btn primary">Get in touch</button>
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <h2>I've made some cool things</h2>

            <div className="section section-m-bottom-md">
              <div className="work-grid home--work-grid">
                {this.state.work.map(p => (
                  <PortfolioItem key={p.id} data={p.data} />
                ))}
              </div>
            </div>
          </div>
          <a href="#" className="btn-link--wrapper">
            <button className="btn primary">Load more</button>
          </a>
        </section>

        <section className="section" id="work">
          <div className="container">
            <h2>And have worked places</h2>

            <div className="job-listings">
              {this.state.jobs.map(job => (
                <JobItem key={job.id} data={job.data} />
              ))}
            </div>
          </div>

          <a href="#" className="btn-link--wrapper">
            <button className="btn primary">View resume</button>
          </a>
        </section>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(Home);
