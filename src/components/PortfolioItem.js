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
    const { title, tag_list, preview_image } = this.state;
    const { style } = this.props;
    if (
      title === undefined ||
      tag_list === undefined ||
      preview_image === undefined
    ) {
      return null;
    }
    return (
      <div className="work-block" style={style}>
        <Link
          className="work-block--image--wrapper bordered"
          to={`portfolio/${this.props.uid}`}
        >
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

export default PortfolioItem;
