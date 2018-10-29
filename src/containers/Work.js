import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import PrismicPageApi from '../prismic/PrismicPageApi';

import WrappedNavFooter from '../composers/WrappedNavFooter';
import Hero from '../components/Hero';
import WorkItem from '../components/WorkItem';
import Button from '../components/Button';
import Sock from '../components/Sock';

import { populateData, fetchById } from '../lib/fetch';

class Work extends Component {
  static pageType = 'work_page';

  constructor(props) {
    super(props);
    this.state = {
      work: {
        featured: [],
        additional: [],
      },
      sock_btn: null,
    };
  }

  componentDidMount() {
    this.populateFeatured();
    this.populateAdditional();
    this.fetchSock();
  }

  populateFeatured() {
    populateData(this.props.doc.data.featured_projects, this.props.api)(
      'featured_project_item',
      payload => {
        this.setState({
          work: {
            featured: [...this.state.work.featured, payload],
            additional: this.state.work.additional,
          },
        });
      }
    );
  }

  populateAdditional() {
    populateData(this.props.doc.data.additional_projects, this.props.api)(
      'additional_project_item',
      payload => {
        this.setState({
          work: {
            featured: this.state.work.featured,
            additional: [...this.state.work.additional, payload],
          },
        });
      }
    );
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
      hero_title,
      subhero_text,
      featured_title,
      additional_title,
    } = this.props.doc.data;
    return (
      <WrappedNavFooter>
        <Hero
          title={RichText.asText(hero_title)}
          subtitle={RichText.asText(subhero_text)}
        />
        <div className="section work-projects">
          <h2 className="title work-section-title">
            {/* {RichText.asText(featured_title)} */}
            All Projects
          </h2>
          <div className="work-grid featured-project-grid">
            {this.state.work.featured.map(project => (
              <WorkItem key={project.id} featured={true} data={project.data} />
            ))}
          </div>
        </div>
        <div className="section">
          {/* <h2 className="title work-section-title">
            {RichText.asText(additional_title)}
          </h2> */}
          <div className="work-grid additional-project-grid">
            {this.state.work.additional.map(project => (
              <WorkItem key={project.id} featured={false} data={project.data} />
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

export default PrismicPageApi(Work);
