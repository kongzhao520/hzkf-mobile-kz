import React from 'react'
import House from './House'
import Index from './Index/index.js'
import My from './My'
import News from './News'
import './index.scss'
import '../../assets/fonts/iconfont.css'
import {
  Route,
  Switch,
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" Component={Index} />
          <Route path="/home/house" Component={House} />
          <Route path="/home/news" Component={News} />
          <Route path="/home/my" Component={My} />
        </Switch>
        <ul className="ulNav">
          <li>
            <NavLink exact to="/home">
              <i className="iconfont icon-ind" />
              <p>首页</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/house">
              <i className="iconfont icon-findHouse" />
              <p>找房</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/news">
              <i className="iconfont icon-infom" />
              <p>资讯</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/my">
              <i className="iconfont icon-my" />
              <p>我的</p>
            </NavLink>
          </li>
        </ul>
      </Router>
    )
  }
}
export default Home
