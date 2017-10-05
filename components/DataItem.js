import React, {Component, PropTypes} from 'react'

export default class DataItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.data.name || "",
      phone: this.props.data.phone || ""
    }
  }

  render(){
    const {data} = this.props
    const liStyle = {
      'color': '#ffffff',
      'backgroundColor': '#000000'
    }
    return(
      <li style={liStyle}>{data.name} - {data.phone}<button type="button">Delete</button></li>
    )
  }
}
