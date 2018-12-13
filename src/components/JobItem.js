import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import HighlightLink from './HighlightLink';

class JobItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { api, id } = this.props;
    api.getByID(id).then(document => {
      this.setState(document.data);
    });
  }

  render() {
    const {
      date_range,
      company_name,
      position,
      summary,
      company_link,
    } = this.state;
    if (
      date_range === undefined ||
      company_name === undefined ||
      position === undefined ||
      summary === undefined
    ) {
      return null;
    }
    return (
      <div className="job-block">
        <div className="job-block--content max-6-col">
          <p className="job-block--company">
            {company_link && company_link.url ? (
              <HighlightLink
                small
                href={company_link && company_link.url ? company_link.url : '#'}
              >
                {RichText.asText(company_name)}
              </HighlightLink>
            ) : (
              RichText.asText(company_name)
            )}
          </p>
          <p className="job-block--position">{RichText.asText(position)}</p>
        </div>
        <p className="job-block--date">{RichText.asText(date_range)}</p>
      </div>
    );
  }
}

export default JobItem;
