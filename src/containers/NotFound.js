import React, { Component } from 'react';
import WrappedNavFooter from '../composers/WrappedNavFooter';

export default class NotFound extends Component {
  render() {
    return (
      <WrappedNavFooter className="on-light">
        <div className="section not-found--main">
          <div className="contaniner">
            <h1 className="title">Oops, looks like this page doesn't exist!</h1>
            <p className="body">Click here to go back home</p>
          </div>
        </div>
      </WrappedNavFooter>
    );
  }
}
