import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import Hero from '../components/Hero';
import WorkItem from '../components/WorkItem';
import Button from '../components/Button';
import JobItem from '../components/JobItem';
import Sock from '../components/Sock';

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
        <div className="gradient-bg-top">
          <Hero
            id="hero--home"
            title={RichText.asText(hero_text)}
            subtitle={RichText.asText(hero_subtext)}
          />
          <section className="section no-pad full-width flex-parent flex-row flex-col-md flex-ae">
            <div className="container pad container--white container--hero-about flex-parent flex-ac flex-jc">
              <div className="container--hero-about--inner">
                <h2 className="title max-6-col">
                  {RichText.asText(section_1_title)}
                </h2>
                <div className="flex-parent flex-col m-l-auto max-7-col">
                  {RichText.render(section_1_body, null, htmlSerializer)}
                  <div className="btn-group margin-top">
                    {this.state.buttonList.map((button, index) => (
                      <Button data={button.data} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="headshot-image"
              style={{ backgroundImage: `url(${headshot.url})` }}
            />
          </section>
        </div>

        <section className="section section--dark-insert full-width flex-parent flex-ac flex-jc">
          <div className="container container--about-before max-7-col">
            <h2 className="title max-4-col">
              {RichText.asText(portfolio_preview_title)}
            </h2>
            {RichText.render(work_section_body, null, htmlSerializer)}
          </div>
        </section>

        <section className="section section-m-bottom-md">
          <div className="work-grid home--work-grid">
            {this.state.work.map(p => (
              <WorkItem key={p.id} data={p.data} />
            ))}
          </div>
        </section>

        <div className="gradient-bg-bot">
          <section className="section section--dark-insert section--non-max flex-parent flex-ac flex-jc">
            <div className="container container--about-before max-7-col">
              <h2 className="title max-4-col">{RichText.asText(work_title)}</h2>
              {RichText.render(work_body, null, htmlSerializer)}
            </div>
          </section>

          <section className="job-listings">
            {this.state.jobs.map(job => (
              <JobItem key={job.id} data={job.data} />
            ))}
          </section>
        </div>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(Home);
