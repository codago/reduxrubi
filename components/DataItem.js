import React, {Component, PropTypes} from 'react'
import AppTextInput from './AppTextInput'

export default class DataItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.data.name || "",
      phone: this.props.data.phone || ""
    }
  }

  render(){
    const {data, deleteData, editData, showEdit, hideEdit} = this.props
    const liStyle = {
      'color': '#ffffff',
      'backgroundColor': '#000000'
    }
    if(data.isEditing){
      return(
        <li><AppTextInput id={data.id} name={data.name} phone={data.phone} onSave={editData} onHide={hideEdit}/></li>
      )
    }else{
      return(
        <li style={liStyle}>{data.name} - {data.phone}<button type="button" onClick={()=>showEdit(data.id)}>Edit</button><button type="button" onClick={()=>deleteData(data.id)}>Delete</button></li>
      )
    }
  }
}
