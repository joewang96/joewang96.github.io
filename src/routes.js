import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrismicRoute } from 'prismic-react-router';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './containers/Home';
import Work from './containers/Work';
import About from './containers/About';
import NotFound from './containers/NotFound';

const Routes = props => {
  return (
    <div>
      <Nav />
      <Router>
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
            path="/work"
            exact
            routerProps={props}
            componentProps={{ uid: 'work' }} // pass in page UID if not in path
            component={Work} // components should be of type PrismicPage
          />
          <PrismicRoute
            path="/about"
            exact
            routerProps={props}
            componentProps={{ uid: 'about' }} // pass in page UID if not in path
            component={About} // components should be of type PrismicPage
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default Routes;
