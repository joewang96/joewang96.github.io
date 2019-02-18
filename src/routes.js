import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { PrismicRoute } from 'prismic-react-router';
import NotFound from './containers/NotFound';
import ScrollToTop from './composers/ScrollToTop';

const Home = Loadable({
  loader: () => import('./containers/Home'),
  loading: () => <div />,
});
const CaseStudy = Loadable({
  loader: () => import('./containers/CaseStudy'),
  loading: () => <div />,
});

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
          <PrismicRoute
            path="/portfolio/:uid"
            exact
            routerProps={props}
            component={CaseStudy} // components should be of type PrismicPage
          />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;
