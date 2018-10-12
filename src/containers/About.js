import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import JobItem from '../components/JobItem';

import { populateData, fetchById } from '../lib/fetch';

class About extends Component {
  static pageType = 'about_page';

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    this.populateJobs();
  }

  populateJobs() {
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
            <a href="mailto:wang.jo@husky.neu.edu">
              <button className="btn primary">Get in touch</button>
            </a>
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
        <div className="sock">
          <div className="btn-group">
            <a href="/misc/Joseph_Wang_Resume.pdf" target="_blank">
              <button className="btn primary">View my resume</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PrismicPageApi(About);
