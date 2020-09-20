import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PhotoUpload from '../screens/PhotoUpload'
import Gallery from '../screens/Gallery';

const Routes = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Upload Image</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/">
            <PhotoUpload />
          </Route>
        </Switch>
      </div>
    </Router>
);

export default Routes;