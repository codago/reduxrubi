import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import App from './containers/App'

render(
  <Provider store={configureStore()}><App /></Provider>, document.getElementById('root')
)
