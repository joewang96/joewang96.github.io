import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import Hero from '../components/Hero';
import Button from '../components/Button';
import JobItem from '../components/JobItem';
import Sock from '../components/Sock';

import { populateData, fetchById } from '../lib/fetch';
import { htmlSerializer } from '../lib/parse';

class About extends Component {
  static pageType = 'about_page';

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      buttonList: [],
      sock_btn: null,
    };
  }

  componentDidMount() {
    this.populateJobs();
    this.populateButtons();
    this.fetchSock();
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
      hero_title,
      bio,
      headshot,
      current_info_title,
      current_info,
      jobs_title,
    } = this.props.doc.data;
    return (
      <WrappedNavFooter className="on-dark-md">
        {/* <Hero
          title={RichText.asText(hero_title)}
          subtitle={RichText.render(bio, null, htmlSerializer)}
          subtitleRender={true}
        /> */}
        <div
          className="section hero-section no-max hero-section--about"
          id="hero--about"
        >
          <div className="contaniner pad-1-col">
            <h1 className="title">{RichText.asText(hero_title)}</h1>
            <div className="about-hero--body-img-container">
              <div className="about-hero--body">
                {RichText.render(bio, null, htmlSerializer)}
              </div>
              <div className="headshot-image">
                <img src={headshot.url} />
              </div>
            </div>
          </div>
        </div>
        <div className="section section-m-bottom-lg">
          <div className="contaniner pad-4-col max-7-col">
            <h2 className="title">{RichText.asText(current_info_title)}</h2>
            <div className="flex-parent flex-col pad-1-col">
              {RichText.render(current_info, null, htmlSerializer)}
              <div className="btn-group square-about-second">
                {this.state.buttonList.map((button, index) => (
                  <Button data={button.data} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="contaniner pad-1-col">
            <h2 className="title max-5-col mb-extra">
              {RichText.asText(jobs_title)}
            </h2>
            <div className="job-listings">
              {this.state.jobs.map(job => (
                <JobItem key={job.id} data={job.data} />
              ))}
            </div>
          </div>
        </div>
        <Sock>
          <Button data={this.state.sock_btn} />
        </Sock>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(About);
