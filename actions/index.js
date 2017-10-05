import * as types from '../constants/ActionTypes'

export function addData(name, phone){
  return {type: types.ADD_DATA, name, phone}
}

export function deleteData(id){
  return {type: types.DELETE_DATA, id}
}
