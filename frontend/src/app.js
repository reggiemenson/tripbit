import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import SecureRoute from './lib/SecureRoute'

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
import WorldMap from './components/Worldmap'

const App = () => (
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Hero} />
      <SecureRoute exact path="/profile" component={Profile} />
      <SecureRoute exact path="/add_city" component={AddCity} />
      <SecureRoute exact path="/add_group" component={AddGroup} />
      <SecureRoute exact path="/group" component={Group} />
      <SecureRoute exact path="/add_trip" component={AddTrip} />
      <SecureRoute exact path="/play" component={Game} />
      <SecureRoute exact path="/world_map" component={WorldMap} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
