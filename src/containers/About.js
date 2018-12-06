import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import Button from '../components/Button';
import JobItem from '../components/JobItem';

import { htmlSerializer } from '../lib/parse';

class About extends Component {
  static pageType = 'about_page';

  constructor(props) {
    super(props);
  }

  renderQuickInfo() {
    const { body } = this.props.doc.data;
    const bodyContent = body.map((slice, index) => {
      // Render the right markup for the given slice type
      // Quick Info Section
      if (slice.slice_type === 'quick_info') {
        const { title, text } = slice.primary;
        return (
          <div className="info-piece" key={index}>
            <p className="title">{RichText.asText(title)}</p>
            <p className="content">{RichText.asText(text)}</p>
          </div>
        );
        // Return null by default
      } else {
        return null;
      }
    });
    return bodyContent;
  }
  render() {
    const {
      hero_title,
      tagline,
      about_section_title,
      about_section_body,
      email_button_text,
      email_button_link,
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
              <div className="hero--info about--info">
                <h1 className="title h1--home about--title">
                  {RichText.asText(hero_title)}
                </h1>
                <p className="tagline">{RichText.asText(tagline)}</p>
              </div>
            </div>
            <div className="quick-info flex-parent">
              {this.renderQuickInfo()}
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

export default PrismicPageApi(About);
