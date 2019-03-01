import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

class CaseStudyNextPrevious extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    const { api, uid } = nextProps;
    api.getByUID('portfolio-piece', uid).then(document => {
      this.setState(document.data);
    });
  }

  render() {
    const { preview_title, description } = this.state;
    const { label } = this.props;
    if (preview_title === undefined || description === undefined) {
      return null;
    }
    return (
      <Link
        className="case-study--navigator"
        to={`/portfolio/${this.props.uid}`}
        aria-label={
          RichText.asText(preview_title) - RichText.asText(description)
        }
      >
        <p className="case-study--navigator--label">{label}</p>
        <p className="case-study--navigator--title">
          <strong>{RichText.asText(preview_title)} &mdash; </strong>
          {RichText.asText(description)}
        </p>
      </Link>
    );
  }
}

export default CaseStudyNextPrevious;
