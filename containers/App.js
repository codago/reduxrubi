import React, {Component, PropTypes} from 'react'
import AppTextInput from '../components/AppTextInput'
import ListItem from '../components/ListItem'

class App extends Component{
  render(){
    return(
      <div>
      <h1>Redux Rubi</h1>
      <AppTextInput name="" phone="" onSave={()=>{return true}}/>
      <ListItem/>
      </div>
    )
  }
}

export default App
