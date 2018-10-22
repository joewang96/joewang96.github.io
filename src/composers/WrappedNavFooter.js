import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class WrappedNavFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
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
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default WrappedNavFooter;
