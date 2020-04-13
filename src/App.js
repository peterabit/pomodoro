import React from 'react';
import { hot } from 'react-hot-loader'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SideBar from 'components/SideBar'
import Index from 'pages/Index'
import Report from 'pages/Report'
import Ring from 'pages/Ring'

function App() {
  return (
    <>
      <Router>
        <SideBar />
        <div className="overflow-hidden min-vh-100 px-3" style={{ marginRight: '60px' }}>
          <Switch>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/ring">
              <Ring />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default hot(module)(App);
