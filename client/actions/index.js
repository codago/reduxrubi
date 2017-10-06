import * as types from '../constants/ActionTypes'

export function addData(name, phone){
  return {type: types.ADD_DATA, name, phone}
}

export function deleteData(id){
  return {type: types.DELETE_DATA, id}
}

export function editData(name, phone, id){
  return {type: types.EDIT_DATA, name, phone, id}
}

export function showEdit(id){
  return {type: types.SHOW_EDIT, id}
}

export function hideEdit(id){
  return {type: types.HIDE_EDIT, id}
}
