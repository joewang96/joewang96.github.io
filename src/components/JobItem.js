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
      company_link,
      description,
    } = this.state;
    if (
      date_range === undefined ||
      company_name === undefined ||
      position === undefined
    ) {
      return null;
    }
    return (
      <div className="job-block">
        <div className="job-block--content max-6-col">
          <p className="job-block--company">
            <strong>{RichText.asText(position)}</strong> at{' '}
            <strong>{RichText.asText(company_name)}</strong>
          </p>
          <p className="job-block--description">
            {RichText.asText(description)}
          </p>
        </div>
        <p className="job-block--date">{RichText.asText(date_range)}</p>
      </div>
    );
  }
}

export default JobItem;
