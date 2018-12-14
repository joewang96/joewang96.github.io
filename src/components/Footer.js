import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import SocialIconList from './SocialIconList';

class Footer extends Component {
  getYear() {
    const date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <footer className="footer flex-parent flex-ac flex-jc flex-row">
        <div className="container pad flex-parent flex-col">
          <div className="sitemap-social flex-parent flex-jsb">
            <div className="sitemap">
              <Link className="nav-type list-item" to="/">
                Portfolio
              </Link>
              <Link className="nav-type list-item" to="/about">
                About
              </Link>
            </div>

            <SocialIconList />
          </div>
          <div className="built-copyright flex-parent flex-jsb">
            <p className="copyright">&copy; {this.getYear()} Joseph Wang</p>
            <p className="built-with">
              Made with{' '}
              <SocialIcon iconClass="icon-react" href="https://reactjs.org/" />{' '}
              and hosted with{' '}
              <SocialIcon
                iconClass="icon-netlify"
                href="https://www.netlify.com/"
              />
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
