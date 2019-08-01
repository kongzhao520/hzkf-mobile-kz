import React from 'react'
import Home from './pages/Home'
import City from './pages/City'
import Map1 from './pages/Map'
import NoMatch from './pages/NoMatch'

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/map">地图</NavLink>
        <NavLink to="/city">城市</NavLink>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/city" component={City} />
          <Route path="/map" component={Map1} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App
