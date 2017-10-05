import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'

console.log("App:",App);
render(
  <App />, document.getElementById('root')
)
