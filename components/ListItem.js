import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

export default class ListItem extends Component{
  constructor(props){
    super(props)
  }

  render(){
    //const {data} = this.props
    const data = [{id: 1, name: 'test', phone: '081122'}, {id: 2, name: 'testing', phone: '08112233'}]
    let dataNodes = data.map(function(item){
      return(
        <DataItem key={data.id} data={item}/>
      )
    });
    return(
      <ul>{dataNodes}</ul>
    )
  }
}
