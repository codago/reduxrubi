import React, {Component, PropTypes} from 'react'

class AppTextInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id || '',
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
    if(this.props.id.toString() == ""){
      this.props.onSave(name, phone)
      this.setState({id: '', name: '', phone:''})
    }else{
      this.props.onSave(name, phone, this.props.id)
      this.props.onHide(this.props.id)
    }
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
