import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  createLinkedButton(child, className) {
    const { link_to } = this.props.data;
    return link_to.link_type === 'Media' ? (
      <a href={link_to.url} target="_blank" className={className}>
        {child}
      </a>
    ) : (
      <Link to={link_to.uid} className={className}>
        {child}
      </Link>
    );
  }

  render() {
    const { data } = this.props;
    return data
      ? this.createLinkedButton(
          <button>{RichText.asText(data.display_text)}</button>,
          data.type === 'Primary' ? 'btn btn-primary' : 'btn btn-secondary'
        )
      : null;
  }
}

export default Button;
