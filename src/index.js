import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from "history"
import { Router, Route, Switch } from 'react-router-dom'

// Pages
import LoginPage from "./views/LoginPage/LoginPage.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LoginPage}></Route>

    </Switch>
  </Router>,
  document.getElementById('root')
)
