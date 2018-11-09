import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

import { htmlSerializer } from '../lib/parse';

class WorkItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, short_bio, preview_image } = this.props.data;
    return (
      <div
        className={
          this.props.featured ? 'work-block featured-work' : 'work-block'
        }
      >
        <Link className="work-block--image--wrapper" to={'#'}>
          <div
            className="work-block--image--bg"
            style={{
              backgroundImage: `url(${preview_image ? preview_image.url : ''})`,
            }}
          />
        </Link>
        <div className="work-block--content">
          <p className="work-block--title">{RichText.asText(title)}</p>
          {/* <div className="work-block--summary">
            {short_bio ? RichText.render(short_bio, null, htmlSerializer) : ''}
          </div> */}
        </div>
      </div>
    );
  }
}

export default WorkItem;
