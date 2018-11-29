import React, { Component } from 'react';
import WrappedNavFooter from '../composers/WrappedNavFooter';
import { Link } from 'react-router-dom';
import backgroundLines from '../img/curved_lines.svg';

export default class NotFound extends Component {
  render() {
    return (
      <WrappedNavFooter>
        <div className="section not-found--main">
          <div className="container flex-parent flex-ac flex-jc flex-col">
            <div className="title--container">
              <h1 className="title text-center">¯\_(ツ)_/¯</h1>
            </div>
            <p className="body text-center">
              Sorry, it looks like there's nothing here. Try a different link.
            </p>
          </div>
        </div>
      </WrappedNavFooter>
    );
  }
}
