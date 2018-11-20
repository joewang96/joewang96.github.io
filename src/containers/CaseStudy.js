import React, { Component } from 'react';
import WrappedNavFooter from '../composers/WrappedNavFooter';

import PrismicPageApi from '../prismic/PrismicPageApi';
import { RichText } from 'prismic-reactjs';

import Button from '../components/Button';
import { htmlSerializer } from '../lib/parse';

class CaseStudy extends Component {
  static pageType = 'portfolio-piece';

  render() {
    console.log(this.props.doc.data);
    const { body, dates, position, tag_list, title } = this.props.doc.data;
    return (
      <WrappedNavFooter>
        <div className="section case-study--wrapper">
          <div className="contaniner">
            <h1 className="h1--case-study">{RichText.asText(title)}</h1>

            <div className="case-study--info flex-parent flex-jsb">
              <div className="summary stripe-text">
                <p className="text">
                  My first Scout Studio project where I worked with a team of
                  designers building a brand and website
                </p>
              </div>

              <div className="info-section">
                <div className="info-piece">
                  <p className="title">Position:</p>
                  <p className="content">{RichText.asText(position)}</p>
                </div>
                <div className="info-piece">
                  <p className="title">Dates:</p>
                  <p className="content">{RichText.asText(dates)}</p>
                </div>
                <div className="info-piece">
                  <p className="title">Tags:</p>
                  <p className="content">{RichText.asText(tag_list)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(CaseStudy);
