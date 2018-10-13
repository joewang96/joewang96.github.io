import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import Button from '../components/Button';
import JobItem from '../components/JobItem';
import Sock from '../components/Sock';

import { populateData, fetchById } from '../lib/fetch';

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
      <div>
        <div className="hero-section">
          <h1 className="title">{RichText.asText(hero_title)}</h1>
          <p className="subtext">{RichText.asText(bio)}</p>
        </div>
        <div className="headshot-image">
          <img src={headshot.url} width={350} />
        </div>
        <div className="section-block">
          <h2 className="title">{RichText.asText(current_info_title)}</h2>
          <p className="body">{RichText.asText(current_info)}</p>
          <div className="btn-group">
            {this.state.buttonList.map((button, index) => (
              <Button data={button.data} key={index} />
            ))}
          </div>
        </div>
        <div className="section-block">
          <h2 className="title">{RichText.asText(jobs_title)}</h2>
          <div className="job-listings">
            {this.state.jobs.map(job => (
              <JobItem key={job.id} data={job.data} />
            ))}
          </div>
        </div>
        <Sock>
          <Button data={this.state.sock_btn} />
        </Sock>
      </div>
    );
  }
}

export default PrismicPageApi(About);
