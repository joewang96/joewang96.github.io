import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

import { htmlSerializer } from '../lib/parse';

class WorkItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, short_bio, tag_list, preview_image } = this.props.data;
    return (
      <div className="work-block">
        <Link className="work-block--image--wrapper" to={'#'}>
          <div
            className="work-block--image--bg"
            style={{
              backgroundImage: `url(${preview_image ? preview_image.url : ''})`,
            }}
          />
        </Link>
        <div className="work-block--content">
          <p className="work-block--tags">{RichText.asText(tag_list)}</p>
          <p className="work-block--title">{RichText.asText(title)}</p>
        </div>
      </div>
    );
  }
}

export default WorkItem;
