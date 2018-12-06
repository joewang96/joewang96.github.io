import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import PortfolioItem from '../components/PortfolioItem';
import Button from '../components/Button';

class Home extends Component {
  static pageType = 'homepage';

  constructor(props) {
    super(props);
  }

  render() {
    const {
      hero_title,
      tagline,
      hero_blurb,
      headshot,
      portfolio_section_title,
      portfolio_items,
    } = this.props.doc.data;

    return (
      <WrappedNavFooter>
        <section className="section hero--section" id="hero">
          <div className="container hero--container">
            <div className="flex-parent layout--container">
              <div className="hero--info">
                <h1 className="title h1--home">
                  {RichText.asText(hero_title)}
                </h1>
                <p className="tagline">{RichText.asText(tagline)}</p>
              </div>
              <div
                className="headshot-image"
                style={{ backgroundImage: `url(${headshot.url})` }}
              />
            </div>
            <div className="hero--summary stripe-text">
              <p className="text">{RichText.asText(hero_blurb)}</p>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <h2 className="text-center m-l-auto m-r-auto">
              {RichText.asText(portfolio_section_title)}
            </h2>

            <div className="work-grid home--work-grid m-b-for-btn">
              {portfolio_items.map(({ portfolio_piece: p }) => {
                return (
                  <PortfolioItem key={p.id} uid={p.uid} api={this.props.api} />
                );
              })}
            </div>
          </div>
        </section>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(Home);
