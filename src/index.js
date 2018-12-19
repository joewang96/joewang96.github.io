import React from 'react';
import ReactDOM from 'react-dom';
import { PrismicWrapper } from 'prismic-react-router';

import './styles/app.scss';

import Routes from './routes';

ReactDOM.render(
  <PrismicWrapper routes={Routes} repositoryName="josephwang" />,
  document.getElementById('root')
);
