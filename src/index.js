import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Main/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
