import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';

class WorkItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.featured ? 'work-block featured-work' : 'work-block'
        }
      >
        <div className="work-block--image" />
        <div className="work-block--content">
          <p className="work-block--title">
            {RichText.asText(this.props.data.title)}
          </p>
          <p className="work-block--summary">
            {this.props.data.short_bio
              ? RichText.asText(this.props.data.short_bio)
              : ''}
          </p>
        </div>
      </div>
    );
  }
}

export default WorkItem;
