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
          ariaLabel="Github profile"
        />
        <SocialIcon
          href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
          targetBlank={true}
          iconClass="icon-linkedin"
          ariaLabel="LinkedIn profile"
        />
        <SocialIcon
          href="mailto:wang.jo@husky.neu.edu"
          targetBlank={false}
          iconClass="icon-google"
          ariaLabel="Send mail to wang.jo@husky.neu.edu"
        />
        <SocialIcon
          href="https://dribbble.com/josephwang"
          targetBlank={true}
          iconClass="icon-dribbble"
          ariaLabel="Dribbble profile"
        />
      </div>
    );
  }
}

export default SocialIconList;
