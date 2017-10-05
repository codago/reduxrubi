import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

export default class ListItem extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {data, onDelete} = this.props

    let dataNodes = data.map(function(item, index){
      return(
        <DataItem key={index} data={item} deleteData={onDelete}/>
      )
    });
    return(
      <ul>{dataNodes}</ul>
    )
  }
}
