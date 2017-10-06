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
      <AppTextInput id="" name="" phone="" onSave={actions.addData} hideEdit={actions.hideEdit}/>
      <ListItem data={data.data} actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
