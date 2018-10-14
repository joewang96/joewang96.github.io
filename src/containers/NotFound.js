import React, { Component } from 'react';
import WrappedNavFooter from '../composers/WrappedNavFooter';

export default class NotFound extends Component {
  render() {
    return (
      <WrappedNavFooter>
        <h1>Oops, seems like there's nothing here!</h1>
        <p>
          Click <a href="/">here</a> to go back to home
        </p>
      </WrappedNavFooter>
    );
  }
}
