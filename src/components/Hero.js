import React, { Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, subtitle, subtitleRender, id } = this.props;
    return (
      <div className="section hero-section" id={id}>
        <div className="hero--container pad-1-col">
          <h1 className="title">{title}</h1>
          {subtitleRender ? subtitle : <p>{subtitle}</p>}
        </div>
      </div>
    );
  }
}

export default Hero;
