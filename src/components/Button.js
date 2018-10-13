import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  createLinkedButton(child, className) {
    const { link_to } = this.props.data;
    if (link_to.link_type === 'Media') {
      return (
        <a href={link_to.url} target="_blank" className={className}>
          {child}
        </a>
      );
    } else if (link_to.url && link_to.url.includes('mailto:')) {
      return (
        <a href={link_to.url} className={className}>
          {child}
        </a>
      );
    } else {
      return (
        <Link to={link_to.uid} className={className}>
          {child}
        </Link>
      );
    }
  }

  render() {
    const { data } = this.props;
    return data
      ? this.createLinkedButton(
          <button
            className={
              data.type === 'Primary' ? 'btn primary' : 'btn secondary'
            }
          >
            {RichText.asText(data.display_text)}
          </button>,
          'btn-link--wrapper'
        )
      : null;
  }
}

export default Button;
