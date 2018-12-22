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
      yPos: getScrollOffset(),
      isMobile: window.innerWidth < 800,
    };
    this.scrollListener = this.scrollListener.bind(this);
    this.resizeListener = this.resizeListener.bind(this);
  }

  scrollListener() {
    this.setState({ yPos: getScrollOffset() });
  }

  resizeListener() {
    this.setState({ ...this.state, isMobile: window.innerWidth < 800 });
  }

  componentDidMount() {
    if (!isFirefox) window.addEventListener('scroll', this.scrollListener);
    window.addEventListener('resize', this.resizeListener);
  }

  componentWillUnmount() {
    if (!isFirefox) window.removeEventListener('scroll', this.scrollListener);
    window.removeEventListener('resize', this.resizeListener);
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
            transform: `translateY(${
              !isFirefox ? Math.min(this.state.yPos / 10, 100) * -1 : 0
            }px)`,
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
                  top: !isFirefox ? Math.min(this.state.yPos / 10, 80) : 0,
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
                transform: `translateY(${
                  !isFirefox
                    ? Math.min(
                        Math.max(-80 + (this.state.yPos / 15) * 1, -30),
                        0
                      )
                    : 0
                }px)`,
              }}
            >
              {RichText.asText(portfolio_section_title)}
            </h2>

            <div className="work-grid home--work-grid m-b-for-btn">
              {portfolio_items.map(({ portfolio_piece: p }, index) => {
                let delta =
                  this.state.yPos -
                  ((document.querySelector('#portfolio') &&
                    document.querySelector('#portfolio').offsetTop) ||
                    0) -
                  Math.floor(index / 2) * 500;
                delta =
                  !isFirefox && !this.state.isMobile
                    ? Math.max(Math.min((delta * -1) / 10, 40), 0)
                    : 0;
                const mult = index % 2 === 0 ? -1 : 1;
                return (
                  <PortfolioItem
                    key={p.id}
                    uid={p.uid}
                    api={this.props.api}
                    style={{
                      transform: `translate(${delta * mult}px, ${delta}px)`,
                    }}
                  />
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
