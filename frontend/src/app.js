import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/main.scss'

import Hero from './components/Hero'
import Profile from './components/Profile'

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Hero} />
      <Route exact path="/profile" component={Profile} />
      {/* <Route exact path="/add_cities" component={} />
      <Route exact path="/add_group" component={} />
      <Route exact path="/group" component={} />
      <Route exact path="/add_trip" component={} />
      <Route exact path="/play" component={} /> */}
    </Switch>
  </HashRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
