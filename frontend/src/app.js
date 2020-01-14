import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import SecureRoute from './lib/SecureRoute'

import 'bulma'
import './styles/main.scss'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import CitySelection from './components/CitySelection'
import Groups from './components/Groups'
import IndividualGroup from './components/IndividualGroup'
import AddTrip from './components/AddTrip'
import Game from './components/Game'
import WorldMap from './components/Worldmap'
import SearchBar from './components/SearchBar'
import MapPage from './components/MapPage'

// we'll need a path for other people's profiles as well

const App = () => (
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Hero} />
      <SecureRoute exact path="/profile/:id" component={Profile} />
      <SecureRoute exact path="/city_selection" component={CitySelection} />
      <SecureRoute exact path="/groups" component={Groups} />
      <SecureRoute exact path="/groups/:id" component={IndividualGroup} />
      <SecureRoute exact path="/add_trip" component={AddTrip} />
      <SecureRoute exact path="/play" component={Game} />
      <SecureRoute exact path="/world_map" component={WorldMap} />
      <SecureRoute exact path="/SearchBar" component={SearchBar} />
      <SecureRoute exact path="/map" component={MapPage} />
    </Switch>
  </HashRouter>
)









ReactDOM.render(
  <App />,
  document.getElementById('root')
)
