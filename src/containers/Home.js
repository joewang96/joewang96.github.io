import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';

import { isFirefox } from '../lib/browser';
import { getScrollOffset } from '../lib/scroll';

class Home extends Component {
  static pageType = 'homepage';

  constructor(props) {
    super(props);
    this.state = {
      yPos: 0,
    };
    this.scrollListener = this.scrollListener.bind(this);
  }

  scrollListener() {
    this.setState({ yPos: getScrollOffset() });
  }

  componentDidMount() {
    if (!isFirefox) window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    if (!isFirefox) window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const {
      hero_title,
      tagline,
      hero_blurb,
      headshot,
      portfolio_section_title,
      portfolio_items,
      resume_button_text,
      resume_link,
    } = this.props.doc.data;

    return (
      <WrappedNavFooter>
        <section
          className="section hero--section"
          id="hero"
          style={{
            top: !isFirefox ? (this.state.yPos / 10) * -1 : 0,
            position: 'relative',
          }}
        >
          <div className="container hero--container">
            <div className="flex-parent layout--container">
              <div className="hero--info">
                <h1 className="title h1--home">
                  {RichText.asText(hero_title)}
                </h1>
                <p className="tagline">{RichText.asText(tagline)}</p>
              </div>
              <div
                className="headshot-image bordered"
                style={{
                  backgroundImage: `url(${headshot.url})`,
                  top: !isFirefox ? this.state.yPos / 15 : 0,
                }}
              />
            </div>
            <div className="hero--summary stripe-text">
              <p className="text">{RichText.asText(hero_blurb)}</p>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <h2
              className="text-center m-l-auto m-r-auto"
              style={{
                top: !isFirefox ? -80 + (this.state.yPos / 15) * 1 : 0,
              }}
            >
              {RichText.asText(portfolio_section_title)}
            </h2>

            <div className="work-grid home--work-grid m-b-for-btn">
              {portfolio_items.map(({ portfolio_piece: p }) => {
                return (
                  <PortfolioItem key={p.id} uid={p.uid} api={this.props.api} />
                );
              })}
            </div>

            <div className="text-center">
              <Button
                text={RichText.asText(resume_button_text)}
                link={resume_link}
              />
            </div>
          </div>
        </section>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(Home);
