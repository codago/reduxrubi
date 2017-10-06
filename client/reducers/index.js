import {combineReducers} from 'redux'
import data from './data'
import status from './status'

const rootReducer = combineReducers({
  data, status
})

export default rootReducer
