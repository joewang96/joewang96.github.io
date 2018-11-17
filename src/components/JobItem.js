import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';

class JobItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hasTakeaway = this.props.data.takeaways.length > 0;

    return (
      <div className="job-block pad">
        <p className="job-block--date">
          {RichText.asText(this.props.data.date_range)}
        </p>
        <div className="job-block--content max-6-col">
          <p className="job-block--company">
            {RichText.asText(this.props.data.company_name)}
          </p>
          <p className="job-block--position">
            {RichText.asText(this.props.data.position)}
          </p>
          {this.props.data.summary ? (
            <>
              <p className="job-block--tag">Summary</p>
              <p
                className={
                  hasTakeaway
                    ? 'body job-block--summary m-bottom'
                    : 'body job-block--summary'
                }
              >
                {RichText.asText(this.props.data.summary)}
              </p>
            </>
          ) : null}
          {hasTakeaway ? (
            <>
              <p className="job-block--tag">Key Takeaways</p>
              <p className="body job-block--takeaway">
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
