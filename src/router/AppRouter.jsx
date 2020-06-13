import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import App from '../pages/app'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Life from '../pages/Life'
import Mine from '../pages/Mine'
import City from '../pages/Ctiy'
import Search from '../pages/Search'
import NotFound from '../pages/NotFound'

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/life" component={Life}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/search/:content" component={Search}></Route>
            <Route path="/notFound" component={NotFound}></Route>
          </Switch>
        </App>
      </Router>
    )
  }
}