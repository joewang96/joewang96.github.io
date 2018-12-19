import React, { Component } from 'react';
import SocialIcon from './SocialIcon';

class SocialIconList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="social-icon-list flex-parent flex-row flex-ac">
        <SocialIcon
          href="https://github.com/joewang96"
          targetBlank={true}
          iconClass="icon-github"
        />
        <SocialIcon
          href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
          targetBlank={true}
          iconClass="icon-linkedin"
        />
        <SocialIcon
          href="mailto:wang.jo@husky.neu.edu"
          targetBlank={false}
          iconClass="icon-google"
        />
        <SocialIcon
          href="https://dribbble.com/josephwang"
          targetBlank={true}
          iconClass="icon-dribbble"
        />
      </div>
    );
  }
}

export default SocialIconList;
