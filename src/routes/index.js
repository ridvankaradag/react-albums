import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PhotoUpload from '../components/PhotoUpload'

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
            <h1>Hello World</h1>
          </Route>
          <Route path="/">
            <PhotoUpload />
          </Route>
        </Switch>
      </div>
    </Router>
);

export default Routes;