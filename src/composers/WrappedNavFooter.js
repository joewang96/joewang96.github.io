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
      <main
        id="container"
        className={this.state.loaded ? 'preload' : 'preload preset'}
      >
        <Nav className={this.props.className || ''} />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default WrappedNavFooter;
