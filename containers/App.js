import React, {Component, PropTypes} from 'react'
import AppTextInput from '../components/AppTextInput'
import ListItem from '../components/ListItem'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions'

class App extends Component{
  render(){
    const {data, actions} = this.props
    return(
      <div>
      <h1>Redux Rubi</h1>
      <AppTextInput name="" phone="" onSave={actions.addData}/>
      <ListItem data={data} onDelete={actions.deleteData}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.data
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
