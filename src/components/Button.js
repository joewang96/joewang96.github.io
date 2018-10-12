import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return data ? (
      <a
        href={data.link_to.url}
        className={
          data.type === 'Primary' ? 'btn btn-primary' : 'btn btn-secondary'
        }
      >
        <button>{RichText.asText(data.display_text)}</button>
      </a>
    ) : null;
  }
}

export default Button;
