import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { api, uid } = this.props;
    api.getByUID('portfolio-piece', uid).then(document => {
      this.setState(document.data);
    });
  }

  render() {
    const { preview_title, description, preview_image } = this.state;
    const { style } = this.props;
    if (preview_title === undefined || preview_image === undefined) {
      return null;
    }
    return (
      <div className="work-block" style={style}>
        <Link
          className="work-block--image--wrapper"
          to={`portfolio/${this.props.uid}`}
          aria-label={
            RichText.asText(preview_title) - RichText.asText(description)
          }
        >
          <div
            className="work-block--image--bg"
            style={{
              backgroundImage: `url(${preview_image ? preview_image.url : ''})`,
            }}
          />
        </Link>
        <div className="work-block--title">
          <strong>{RichText.asText(preview_title)} &mdash; </strong>
          {RichText.asText(description)}
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
