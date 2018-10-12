import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

class About extends Component {
  static pageType = 'about_page';

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="hero-section">
          <h1 className="title">
            {RichText.asText(this.props.doc.data.hero_title)}
          </h1>
          <p className="subtext">{RichText.asText(this.props.doc.data.bio)}</p>
        </div>
        <div className="section-block">
          <h2 className="title">
            {RichText.asText(this.props.doc.data.current_info_title)}
          </h2>
          <p className="body">
            {RichText.asText(this.props.doc.data.current_info)}
          </p>
          <div className="btn-group">
            <a href="mailto:wang.jo@husky.neu.edu">
              <button className="btn primary">Get in touch</button>
            </a>
          </div>
        </div>
        <div className="section-block">
          <h2 className="title">
            {RichText.asText(this.props.doc.data.jobs_title)}
          </h2>
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
