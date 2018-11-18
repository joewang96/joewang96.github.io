import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import HighlightLink from './HighlightLink';

class JobItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      date_range,
      company_name,
      position,
      summary,
      company_link,
    } = this.props.data;
    return (
      <div className="job-block pad">
        <p className="job-block--date">{RichText.asText(date_range)}</p>
        <div className="job-block--content max-6-col">
          <p className="job-block--company">
            {company_link && company_link.url ? (
              <HighlightLink
                href={company_link && company_link.url ? company_link.url : '#'}
              >
                {RichText.asText(company_name)}
              </HighlightLink>
            ) : (
              RichText.asText(company_name)
            )}
          </p>
          <p className="job-block--position">{RichText.asText(position)}</p>
          <div className="job-block--summary">{RichText.render(summary)}</div>
        </div>
      </div>
    );
  }
}

export default JobItem;
