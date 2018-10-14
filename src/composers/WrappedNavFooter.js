import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class WrappedNavFooter extends Component {
  render() {
    return (
      <>
        <Nav />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default WrappedNavFooter;
