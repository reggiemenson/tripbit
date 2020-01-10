import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/main.scss'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import AddCity from './components/AddCity'
import AddGroup from './components/AddGroup'
import Group from './components/Group'
import AddTrip from './components/AddTrip'
import Game from './components/Game'

const App = () => (
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Hero} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/add_city" component={AddCity} />
      <Route exact path="/add_group" component={AddGroup} />
      <Route exact path="/group" component={Group} />
      <Route exact path="/add_trip" component={AddTrip} />
      <Route exact path="/play" component={Game} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
