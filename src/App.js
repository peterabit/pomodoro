import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SideBar from 'components/SideBar'
import Index from 'pages/Index'
import Report from 'pages/Report'
import Ring from 'pages/Ring'

function App() {
  return (
    <Router basename="pomodoro">
      <div className="side-container vh-100">
        <SideBar />
        <div className="scrollbar h-100">
          <div className="container h-100">
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
        </div>
      </div>
    </Router>
  )
}

export default hot(module)(App)
