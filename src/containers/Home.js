import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WorkItem from '../components/WorkItem';
import Button from '../components/Button';

import { populateData, fetchById } from '../lib/fetch';

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
      <div>
        <div className="section hero-section pad-1-col">
          <h1 className="title">{RichText.asText(hero_text)}</h1>
          <p className="subtext">{RichText.asText(hero_subtext)}</p>
        </div>
        <div className="section">
          <h2 className="title pad-2-col">
            {RichText.asText(section_1_title)}
          </h2>
          <div className="flex-parent flex-col m-l-auto max-7-col">
            <p className="body">{RichText.asText(section_1_body)}</p>
            <div className="btn-group">
              {this.state.buttonList.map((button, index) => (
                <Button data={button.data} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="title">{RichText.asText(portfolio_preview_title)}</h2>
          <div className="work-grid home--work-grid">
            {this.state.work.map((p, index) => (
              <WorkItem key={p.id} featured={index < 2} data={p.data} />
            ))}
          </div>
        </div>
        <div className="section section--sock">
          <div className="btn-group">
            <Button data={this.state.sock_btn} />
          </div>
        </div>
      </div>
    );
  }
}

export default PrismicPageApi(Home);
