import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer flex-parent flex-ac flex-jc flex-row">
        <div className="container pad flex-parent flex-ac flex-col-md">
          <div className="sitemap flex-parent flex-row">
            <Link className="list-item" to="/">
              Home
            </Link>
            <Link className="list-item" to="/work">
              Work
            </Link>
            <Link className="list-item" to="/about">
              About
            </Link>
          </div>
          <div className="content-right">
            <div className="site-map" />
            <div className="social-icons">
              <a
                className="social-item"
                href="https://github.com/joewang96"
                target="_blank"
              >
                <i className="icon devicon-github-plain" />
              </a>
              <a
                className="social-item"
                href="https://www.linkedin.com/in/joseph-wang-7b0751129/"
                target="_blank"
              >
                <i className="icon devicon-linkedin-plain" />
              </a>
              <a className="social-item" href="mailto:wang.jo@husky.neu.edu">
                <i className="icon devicon-google-plain" />
              </a>
              <a
                className="social-item"
                href="https://dribbble.com/josephwang"
                target="_blank"
              >
                <i className="icon icon-dribbble" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
