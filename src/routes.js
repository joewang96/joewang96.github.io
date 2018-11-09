import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrismicRoute } from 'prismic-react-router';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import ScrollToTop from './composers/ScrollToTop';

const Routes = props => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <PrismicRoute
            path="/"
            exact
            routerProps={props}
            componentProps={{
              uid: 'home',
            }} // pass in page UID if not in path
            component={Home} // components should be of type PrismicPage
          />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;
