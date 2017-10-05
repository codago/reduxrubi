import {ADD_DATA, DELETE_DATA} from '../constants/ActionTypes'

const initialState = [{
  id: 0,
  name: 'Rubi',
  phone: '08112237786'
}]

export default function data(state = initialState, action){
  switch (action.type) {
    case ADD_DATA:
    return [
      {
        id: Date.now(),
        name: action.name,
        phone: action.phone
      },
      ...state
    ]
    case DELETE_DATA:
    return state.filter(data => data.id !== action.id)
    default:
    return state
  }
}
