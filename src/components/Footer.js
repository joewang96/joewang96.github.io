import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import SocialIconList from './SocialIconList';

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const Footer = () => (
  <footer className="footer flex-parent flex-ac flex-jc flex-row">
    <div className="container pad flex-parent flex-col">
      <div className="sitemap-social flex-parent flex-jsb">
        <div className="sitemap">
          <Link className="nav-type list-item" to="/">
            Portfolio
          </Link>
          <a
            className="nav-type list-item"
            href="https://josephwang.cdn.prismic.io/josephwang%2Fe7f9733c-58c3-42a2-8839-9d5dc8093248_joseph_wang_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <SocialIconList />
      </div>
      <div className="built-copyright flex-parent flex-jsb">
        <p className="copyright">Copyright &copy; {getYear()} Joseph Wang</p>
        <p className="built-with">
          Made with{' '}
          <SocialIcon
            iconClass="icon-react"
            href="https://reactjs.org/"
            ariaLabel="React JS"
          />{' '}
          and hosted with{' '}
          <SocialIcon
            iconClass="icon-netlify"
            href="https://www.netlify.com/"
            ariaLabel="Netlify"
          />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
