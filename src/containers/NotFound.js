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
              <h1 className="title text-center">404</h1>
              <img className="background--lines" src={backgroundLines} />
            </div>
            <p className="body text-center">
              Sorry, it looks like that URL isn't valid. Try a different one.
            </p>
          </div>
        </div>
      </WrappedNavFooter>
    );
  }
}
