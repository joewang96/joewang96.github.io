import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import Hero from '../components/Hero';
import WorkItem from '../components/WorkItem';
import Button from '../components/Button';
import Sock from '../components/Sock';

import { populateData, fetchById } from '../lib/fetch';
import { htmlSerializer } from '../lib/parse';

class Home extends Component {
  static pageType = 'homepage';

  constructor(props) {
    super(props);
    this.state = {
      work: [],
      buttonList: [],
      sock_btn: null,
    };
  }

  componentDidMount() {
    this.populateWork();
    this.populateButtons();
    this.fetchSock();
  }

  populateWork() {
    const { doc, api } = this.props;
    populateData(doc.data.portfolio_items, api)('portfolio_piece', payload => {
      this.setState({
        work: [...this.state.work, payload],
      });
    });
  }

  populateButtons() {
    const { doc, api } = this.props;
    populateData(doc.data.button_list, api)('button', payload => {
      this.setState({
        buttonList: [...this.state.buttonList, payload],
      });
    });
  }

  fetchSock() {
    const { doc, api } = this.props;
    fetchById(api, doc.data.sock_button.id).then(({ data }) => {
      this.setState({
        sock_btn: data,
      });
    });
  }

  render() {
    const {
      hero_text,
      hero_subtext,
      section_1_title,
      section_1_body,
      portfolio_preview_title,
    } = this.props.doc.data;
    return (
      <WrappedNavFooter className="on-dark">
        <Hero
          id="hero--home"
          title={RichText.asText(hero_text)}
          subtitle={RichText.asText(hero_subtext)}
        />
        <div className="section section-m-bottom-lg">
          <div className="container pad-2-col">
            <h2 className="title max-6-col square-home-second">
              {RichText.asText(section_1_title)}
            </h2>
            <div className="flex-parent flex-col m-l-auto max-7-col">
              {RichText.render(section_1_body, null, htmlSerializer)}
              <div className="btn-group">
                {this.state.buttonList.map((button, index) => (
                  <Button data={button.data} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section section-m-bottom-md">
          <h2 className="title m-l-auto m-r-auto text-center text-left-md m-l-0-md max-5-col">
            {RichText.asText(portfolio_preview_title)}
          </h2>
          <div className="work-grid home--work-grid">
            {this.state.work.map((p, index) => (
              <WorkItem key={p.id} featured={index < 2} data={p.data} />
            ))}
          </div>
        </div>
        <Sock>
          <Button data={this.state.sock_btn} />
        </Sock>
      </WrappedNavFooter>
    );
  }
}

export default PrismicPageApi(Home);
