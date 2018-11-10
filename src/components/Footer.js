import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import { scrollTo } from '../lib/scroll.js';

class Footer extends Component {
  render() {
    return (
      <footer className="footer flex-parent flex-ac flex-jc flex-row">
        <div className="container pad flex-parent flex-ac">
          <div className="sitemap flex-parent flex-row flex-ac">
            <a className="list-item" onClick={() => scrollTo('#about')}>
              About
            </a>
            <a className="list-item" onClick={() => scrollTo('#portfolio')}>
              Portfolio
            </a>
            <a className="list-item" onClick={() => scrollTo('#work')}>
              Experience
            </a>
          </div>
          <div className="content-right">
            <div className="social-icons flex-parent flex-row flex-ac">
              <SocialIcon
                href="https://github.com/joewang96"
                targetBlank={true}
                iconClass="devicon-github-plain"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
                targetBlank={true}
                iconClass="devicon-linkedin-plain"
              />
              <SocialIcon
                href="mailto:wang.jo@husky.neu.edu"
                targetBlank={false}
                iconClass="devicon-google-plain"
              />
              <SocialIcon
                href="https://dribbble.com/josephwang"
                targetBlank={true}
                iconClass="icon-dribbble"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
