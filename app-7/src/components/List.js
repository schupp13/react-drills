import React, { Component } from "react";
import Todo from './Todo'


class List extends Component {
  constructor(){
    super();
  }
  render(){
    let todoList = this.props.todoList.map((v,i)=>{
      return <Todo task={v} key={i}/>
    });
    return (
      <div>
      {todoList}
      </div>
    )
  }
}

export default List;
