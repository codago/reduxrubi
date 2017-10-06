import * as types from '../constants/ActionTypes'
import axios from 'axios'
import {SERVER_URL} from '../constants/general'

function loadDataFailure(){
  return {type: types.LOAD_DATA_FAILURE}
}

function loadDataSuccess(phonebooks){
  return {type: types.LOAD_DATA_SUCCESS, phonebooks}
}

export function loadData(){
  return dispatch => {
    return axios.get(SERVER_URL)
    .then(response => {
      console.log(response);
      dispatch(loadDataSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(loadDataFailure())
    });
  }
}

function addDataFailure(id){
  return {type: types.ADD_DATA_FAILURE, id}
}

function addDataSuccess(phonebook){
  return {type: types.ADD_DATA_SUCCESS, phonebook}
}

function addDataToRedux(id, name, phone){
  return {type: types.ADD_DATA, id, name, phone}
}

export function addData(name, phone){
  return dispatch => {
    let id = Date.now().toString()
    dispatch(addDataToRedux(id, name, phone))
    return axios.post(SERVER_URL, {
      id: id,
      name: name,
      phone: phone
    })
    .then(function (response) {
      console.log(response);
      dispatch(addDataSuccess(response.data));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(addDataFailure(id));
    });
  }
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
