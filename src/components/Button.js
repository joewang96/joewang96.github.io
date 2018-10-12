import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return data ? (
      <Link
        to={data.link_to.url}
        className={
          data.type === 'Primary' ? 'btn btn-primary' : 'btn btn-secondary'
        }
      >
        <button>{RichText.asText(data.display_text)}</button>
      </Link>
    ) : null;
  }
}

export default Button;
