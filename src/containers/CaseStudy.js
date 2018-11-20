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
        <div className="section">
          <div className="contaniner">
            <h1>{RichText.asText(title)}</h1>
            <p>Position: {RichText.asText(position)}</p>
            <p>Dates: {RichText.asText(dates)}</p>
            <p>Tags: {RichText.asText(tag_list)}</p>
          </div>
        </div>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(CaseStudy);
