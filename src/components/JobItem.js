import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';

class JobItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="job-block">
        <div className="job-block--date">
          <p>{RichText.asText(this.props.data.date_range)}</p>
        </div>
        <div className="job-block--content">
          <p className="job-block--position">
            {RichText.asText(this.props.data.position)} @{' '}
            {RichText.asText(this.props.data.company_name)}
          </p>
          {this.props.data.summary ? (
            <>
              <p className="job-block--tag">Summary</p>
              <p className="job-block--summary">
                {RichText.asText(this.props.data.summary)}
              </p>
            </>
          ) : null}
          {this.props.data.takeaways ? (
            <>
              <p className="job-block--tag">Key Takeaways</p>
              <p className="job-block--takeaway">
                {RichText.asText(this.props.data.takeaways)}
              </p>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default JobItem;
