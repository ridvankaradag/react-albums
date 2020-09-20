import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../components/Header'
import PhotoUpload from '../screens/PhotoUpload'
import Gallery from '../screens/Gallery';

const Routes = () => (
    <Router>
      <>
        <Header/>
        <Switch>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/">
            <PhotoUpload />
          </Route>
        </Switch>
      </>
    </Router>
);

export default Routes;