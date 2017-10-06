import {ADD_DATA, DELETE_DATA, EDIT_DATA, SHOW_EDIT, HIDE_EDIT, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE, ADD_DATA_FAILURE, ADD_DATA_SUCCESS} from '../constants/ActionTypes'

const initialState = []

export default function data(state = initialState, action){
  switch (action.type) {
    case ADD_DATA:
    return [
      {
        id: action.id,
        name: action.name,
        phone: action.phone
      },
      ...state
    ]
    case ADD_DATA_FAILURE:
    return state.filter(data => data.id !== action.id)
    case DELETE_DATA:
    return state.filter(data => data.id !== action.id)
    case EDIT_DATA:
    return state.map(data => data.id === action.id ? Object.assign({}, data, {name: action.name, phone: action.phone}) : data)
    case SHOW_EDIT:
    return state.map(data => data.id === action.id ? Object.assign({}, data, {isEditing: true}) : data)
    case HIDE_EDIT:
    return state.map(data => data.id === action.id ? Object.assign({}, data, {isEditing: false}) : data)
    case LOAD_DATA_SUCCESS:
    return action.phonebooks.map(data => {
      data.isEditing = false
      return data
    })
    case LOAD_DATA_FAILURE:
    case ADD_DATA_SUCCESS:
    return state
    default:
    return state
  }
}
