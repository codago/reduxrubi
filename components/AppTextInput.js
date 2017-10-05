import React, {Component, PropTypes} from 'react'

class AppTextInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.name || '',
      phone: this.props.phone || ''
    }
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  handlePhoneChange(e){
    this.setState({phone: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    let name = this.state.name.trim()
    let phone = this.state.phone.trim()
    if(!name || !phone){
      return;
    }
    this.props.onSave(name, phone)
    this.setState({name: '', phone: ''})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
        <input type="text" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)}/>
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default AppTextInput
