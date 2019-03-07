import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class WrappedNavFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      resume: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 100);
    this.props.api &&
      this.props.api
        .getSingle('navigation')
        .then(obj => this.setState({ resume: obj.data.resume.url }));
  }

  componentWillReceiveProps() {
    this.setState({
      loaded: false,
    });
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 100);
  }

  render() {
    return (
      <div
        id="container"
        className={this.state.loaded ? 'preload' : 'preload preset'}
      >
        <Nav
          className={this.props.className || ''}
          resume={this.state.resume}
        />
        <main>{this.props.children}</main>
        <Footer resume={this.state.resume} />
      </div>
    );
  }
}

export default WrappedNavFooter;
