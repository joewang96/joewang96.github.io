import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  createLinkedButton(child, className) {
    const { link } = this.props;
    if (link.link_type === 'Media') {
      return (
        <a href={link.url} target="_blank" className={className}>
          {child}
        </a>
      );
    }

    return (
      <a
        href={link.url}
        target={link.url && link.url.includes('mailto:') ? '' : '_blank'}
        className={className}
      >
        {child}
      </a>
    );
  }

  render() {
    const { text } = this.props;
    return this.createLinkedButton(
      <button className="btn primary">{text}</button>,
      'btn-link--wrapper'
    );
  }
}

export default Button;
